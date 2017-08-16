"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk = require("chalk");
const serve_1 = require("../lib/serve");
function serve(env, inputs, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { str2num } = yield Promise.resolve().then(function () { return require('../lib/utils/string'); });
        yield env.hooks.fire('watch:before', { env });
        const address = options['address'] ? String(options['address']) : serve_1.BIND_ALL_ADDRESS;
        const port = str2num(options['port'], serve_1.DEFAULT_SERVER_PORT);
        const livereloadPort = str2num(options['livereload-port'], serve_1.DEFAULT_LIVERELOAD_PORT);
        const serveOptions = {
            address,
            port,
            livereloadPort,
            consolelogs: options['consolelogs'] ? true : false,
            serverlogs: options['serverlogs'] ? true : false,
            nobrowser: options['nobrowser'] ? true : false,
            nolivereload: options['nolivereload'] ? true : false,
            noproxy: options['noproxy'] ? true : false,
            lab: options['lab'] ? true : false,
            browser: options['browser'] ? String(options['browser']) : undefined,
            browseroption: options['browseroption'] ? String(options['browseroption']) : undefined,
            platform: options['platform'] ? String(options['platform']) : undefined,
            externalAddressRequired: options['externalAddressRequired'] ? true : false,
            iscordovaserve: typeof options['iscordovaserve'] === 'boolean' ? Boolean(options['iscordovaserve']) : false,
        };
        let serverDetails;
        const project = yield env.project.load();
        if (project.type === 'ionic1') {
            const { serve } = yield Promise.resolve().then(function () { return require('../lib/ionic1/serve'); });
            serverDetails = yield serve({ env, options: serveOptions });
        }
        else if (project.type === 'ionic-angular') {
            const { serve } = yield Promise.resolve().then(function () { return require('../lib/ionic-angular/serve'); });
            serverDetails = yield serve({ env, options: serveOptions });
        }
        else {
            throw new Error('Unknown project.'); // TODO
        }
        const localAddress = 'http://localhost:' + serverDetails.port;
        const externalAddress = 'http://' + serverDetails.externalAddress + ':' + serverDetails.port;
        env.log.info(`Development server running\n` +
            `Local: ${chalk.bold(localAddress)}\n` +
            (serverDetails.externallyAccessible ? `External: ${chalk.bold(externalAddress)}\n` : ''));
        if (project.type !== 'ionic-angular') {
            if (!serveOptions.nobrowser) {
                const openOptions = [localAddress]
                    .concat(serveOptions.lab ? [serve_1.IONIC_LAB_URL] : [])
                    .concat(serveOptions.browseroption ? [serveOptions.browseroption] : [])
                    .concat(serveOptions.platform ? ['?ionicplatform=', serveOptions.platform] : []);
                const opn = yield Promise.resolve().then(function () { return require('opn'); });
                opn(openOptions.join(''));
            }
        }
        return serverDetails;
    });
}
exports.serve = serve;
