"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const serve_1 = require("../serve");
const errors_1 = require("../errors");
const WATCH_PATTERNS = [
    'www/**/*',
    '!www/lib/**/*',
    '!www/**/*.map'
];
const IOS_PLATFORM_PATH = path.join('platforms', 'ios', 'www');
const ANDROID_PLATFORM_PATH = path.join('platforms', 'android', 'assets', 'www');
function serve({ env, options }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { ERROR_NETWORK_ADDRESS_NOT_AVAIL, findClosestOpenPort, getAvailableIPAddresses } = yield Promise.resolve().then(function () { return require('../utils/network'); });
        let externalIP = options.address;
        if (options.address === serve_1.BIND_ALL_ADDRESS) {
            // Find appropriate IP to use for cordova to reference
            const availableIPs = getAvailableIPAddresses();
            if (availableIPs.length === 0) {
                throw new Error(`It appears that you do not have any external network interfaces. ` +
                    `In order to use livereload with emulate you will need one.`);
            }
            externalIP = availableIPs[0].address;
            if (options.externalAddressRequired && availableIPs.length > 1) {
                env.log.warn('Multiple network interfaces detected!\n' +
                    'You will be prompted to select an external-facing IP for the livereload server that your device or emulator has access to.\n' +
                    `You may also use the ${chalk.green('--address')} option to skip this prompt.\n`);
                const promptedIp = yield env.prompt({
                    type: 'list',
                    name: 'promptedIp',
                    message: 'Please select which IP to use:',
                    choices: availableIPs.map(ip => ip.address)
                });
                externalIP = promptedIp;
            }
        }
        const project = yield env.project.load();
        const wwwDir = path.join(env.project.directory, project.documentRoot || 'www');
        try {
            const [port, livereloadPort] = yield Promise.all([
                findClosestOpenPort(options.port, '0.0.0.0'),
                findClosestOpenPort(options.livereloadPort, '0.0.0.0'),
            ]);
            if (options.port !== port) {
                env.log.debug(`Port ${chalk.bold(String(options.port))} taken, using ${chalk.bold(String(port))}.`);
                options.port = port;
            }
            if (options.livereloadPort !== livereloadPort) {
                env.log.debug(`Port ${chalk.bold(String(options.livereloadPort))} taken, using ${chalk.bold(String(livereloadPort))}.`);
                options.livereloadPort = livereloadPort;
            }
        }
        catch (e) {
            if (e !== ERROR_NETWORK_ADDRESS_NOT_AVAIL) {
                throw e;
            }
            throw new errors_1.FatalException(`${chalk.green(options.address)} is not available--cannot bind.`);
        }
        env.log.info(`Starting server (address: ${chalk.bold(options.address)}, port: ${chalk.bold(String(options.port))}, livereload port: ${chalk.bold(String(options.livereloadPort))}) - Ctrl+C to cancel`);
        // Start up server
        const settings = yield setupServer(env, Object.assign({ externalIP, wwwDir }, options));
        return {
            protocol: 'http',
            localAddress: 'localhost',
            externalAddress: externalIP,
            port: settings.port,
            externallyAccessible: ![serve_1.BIND_ALL_ADDRESS, ...serve_1.LOCAL_ADDRESSES].includes(externalIP),
        };
    });
}
exports.serve = serve;
function setupServer(env, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const liveReloadBrowser = yield createLiveReloadServer(env, options);
        yield createHttpServer(env, options);
        const chokidar = yield Promise.resolve().then(function () { return require('chokidar'); });
        const project = yield env.project.load();
        if (!project.watchPatterns) {
            project.watchPatterns = [];
        }
        const watchPatterns = [...new Set([...project.watchPatterns, ...WATCH_PATTERNS])];
        env.log.debug(() => `Watch patterns: ${watchPatterns.map(v => chalk.bold(v)).join(', ')}`);
        const watcher = chokidar.watch(watchPatterns, { cwd: env.project.directory });
        env.events.emit('watch:init');
        watcher.on('change', (filePath) => {
            env.log.info(`[${new Date().toTimeString().slice(0, 8)}] ${chalk.bold(filePath)} changed`);
            liveReloadBrowser([filePath]);
            env.events.emit('watch:change', filePath);
        });
        watcher.on('error', (err) => {
            env.log.error(err.toString());
        });
        return options;
    });
}
function createLiveReloadServer(env, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tinylr = yield Promise.resolve().then(function () { return require('tiny-lr'); });
        const liveReloadServer = tinylr();
        liveReloadServer.listen(options.livereloadPort);
        return (changedFiles) => {
            liveReloadServer.changed({
                body: {
                    files: changedFiles.map(changedFile => ('/' + path.relative(options.wwwDir, changedFile)))
                }
            });
        };
    });
}
function injectLiveReloadScript(content, host, port) {
    let contentStr = content.toString();
    const liveReloadScript = getLiveReloadScript(host, port);
    if (contentStr.indexOf('/livereload.js') > -1) {
        // already added script
        return content;
    }
    let match = contentStr.match(/<\/body>(?![\s\S]*<\/body>)/i);
    if (!match) {
        match = contentStr.match(/<\/html>(?![\s\S]*<\/html>)/i);
    }
    if (match) {
        contentStr = contentStr.replace(match[0], `${liveReloadScript}\n${match[0]}`);
    }
    else {
        contentStr += liveReloadScript;
    }
    return contentStr;
}
exports.injectLiveReloadScript = injectLiveReloadScript;
function getLiveReloadScript(host, port) {
    if (host === serve_1.BIND_ALL_ADDRESS) {
        host = 'localhost';
    }
    const src = `//${host}:${port}/livereload.js?snipver=1`;
    return `  <!-- Ionic Dev Server: Injected LiveReload Script -->\n` +
        `  <script src="${src}" async="" defer=""></script>`;
}
/**
 * Create HTTP server
 */
function createHttpServer(env, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const express = yield Promise.resolve().then(function () { return require('express'); });
        const app = express();
        app.listen(options.port, options.address);
        /**
         * http responder for /index.html base entrypoint
         */
        const serveIndex = (req, res) => {
            // respond with the index.html file
            const indexFileName = path.join(options.wwwDir, 'index.html');
            fs.readFile(indexFileName, (err, indexHtml) => {
                if (!options.nolivereload) {
                    indexHtml = injectLiveReloadScript(indexHtml, options.externalIP, options.livereloadPort);
                }
                res.set('Content-Type', 'text/html');
                res.send(indexHtml);
            });
        };
        /**
         * Middleware to serve platform resources
         */
        const servePlatformResource = (req, res, next) => {
            const userAgent = req.header('user-agent') || '';
            let resourcePath = options.wwwDir;
            if (!options.iscordovaserve) {
                return next();
            }
            if (isUserAgentIOS(userAgent)) {
                resourcePath = path.join(env.project.directory, IOS_PLATFORM_PATH);
            }
            else if (isUserAgentAndroid(userAgent)) {
                resourcePath = path.join(env.project.directory, ANDROID_PLATFORM_PATH);
            }
            fs.stat(path.join(resourcePath, req.url), (err, stats) => {
                if (err) {
                    return next();
                }
                res.sendFile(req.url, { root: resourcePath });
            });
        };
        app.get('/', serveIndex);
        app.use('/', express.static(options.wwwDir));
        // Lab routes
        app.use(serve_1.IONIC_LAB_URL + '/static', express.static(path.join(__dirname, '..', '..', 'assets', 'ionic1', 'lab', 'static')));
        app.get(serve_1.IONIC_LAB_URL, (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '..', '..', 'assets', 'ionic1', 'lab') }));
        app.get(serve_1.IONIC_LAB_URL + '/api/v1/cordova', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [info] = yield env.hooks.fire('cordova:project:info', { env });
            if (info) {
                res.json(info);
            }
            else {
                res.status(400).json({ status: 'error', message: 'Unable to load config.xml' });
            }
        }));
        app.get('/cordova.js', servePlatformResource, serveMockCordovaJS);
        app.get('/cordova_plugins.js', servePlatformResource);
        app.get('/plugins/*', servePlatformResource);
        if (!options.noproxy) {
            yield setupProxies(env, app);
        }
        return app;
    });
}
function setupProxies(env, app) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const url = yield Promise.resolve().then(function () { return require('url'); });
        const project = yield env.project.load();
        for (const proxy of project.proxies || []) {
            let opts = url.parse(proxy.proxyUrl);
            if (proxy.proxyNoAgent) {
                opts.agent = false;
            }
            opts.rejectUnauthorized = !(proxy.rejectUnauthorized === false);
            const proxyMiddleware = yield Promise.resolve().then(function () { return require('proxy-middleware'); });
            app.use(proxy.path, proxyMiddleware(opts));
            console.log('Proxy added:' + proxy.path + ' => ' + url.format(opts));
        }
    });
}
/**
 * http responder for cordova.js file
 */
function serveMockCordovaJS(req, res) {
    res.set('Content-Type', 'application/javascript');
    res.send('// mock cordova file during development');
}
function isUserAgentIOS(ua) {
    ua = ua.toLowerCase();
    return (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1);
}
function isUserAgentAndroid(ua) {
    ua = ua.toLowerCase();
    return ua.indexOf('android') > -1;
}
