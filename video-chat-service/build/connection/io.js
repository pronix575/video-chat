"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIo = void 0;
const socket_io_1 = require("socket.io");
function createIo(server) {
    return new socket_io_1.Server(server);
}
exports.createIo = createIo;
