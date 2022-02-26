"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
exports.app = (0, express_1.default)();
exports.server = http_1.default.createServer(exports.app);
