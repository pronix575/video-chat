"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverRunners = void 0;
const broadcast_1 = require("../broadcast");
const connection_1 = require("../connection");
const server_1 = require("../server/server");
exports.serverRunners = [
    { run: server_1.runServer, name: "http" },
    { run: connection_1.runSocketServer, name: "ws" },
    { run: broadcast_1.runBroadastServer, name: "broadcast" },
];
