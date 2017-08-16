"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function build(env, inputs, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield env.hooks.fire('build:before', { env });
        const project = yield env.project.load();
        if (project.type === 'ionic-angular') {
            const { build } = yield Promise.resolve().then(function () { return require('../lib/ionic-angular/build'); });
            yield build({ env, options });
        }
        yield env.hooks.fire('build:after', { env });
    });
}
exports.build = build;
