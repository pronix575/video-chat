"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBroadastServer = void 0;
const peer_1 = require("peer");
function runBroadastServer(server) {
    const peerServer = (0, peer_1.ExpressPeerServer)(server, {
        path: "/broadcast",
    });
}
exports.runBroadastServer = runBroadastServer;
