import { server } from "../app/app";
import { serverRunners } from "./runners";
import { start } from "./start";

start(server, serverRunners)