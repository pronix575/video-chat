"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const chalk_1 = __importDefault(require("chalk"));
function start(server, runners) {
    console.log("");
    runners.forEach((runner) => {
        console.log("🟩", chalk_1.default.blue(runner.name), "server has been started");
        runner.run(server);
    });
    console.log("");
}
exports.start = start;
