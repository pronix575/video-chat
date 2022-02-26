"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
var config_1 = require("./config/config");
function runServer(server) {
    server.listen(config_1.PORT, function () {
        console.log("\uD83D\uDE80 server has been started on port ".concat(config_1.PORT));
    });
}
exports.runServer = runServer;
