"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const config_1 = require("../config/config");
function runServer(server) {
    server.listen(config_1.PORT, () => {
        console.log(`🚀 server has been started on port ${config_1.PORT}`);
    });
}
exports.runServer = runServer;
