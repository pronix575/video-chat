"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
function start(server, runners) {
    runners.forEach(function (runner) { return runner(server); });
}
exports.start = start;
