"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app/app");
const runners_1 = require("./runners");
const start_1 = require("./start");
(0, start_1.start)(app_1.server, runners_1.serverRunners);
