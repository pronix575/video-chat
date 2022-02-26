"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSocketServer = void 0;
const io_1 = require("./io");
function runSocketServer(server) {
    const io = (0, io_1.createIo)(server);
}
exports.runSocketServer = runSocketServer;
