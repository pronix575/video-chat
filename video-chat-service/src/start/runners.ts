import { runBroadastServer } from "../broadcast";
import { runSocketServer } from "../connection";
import { runServer } from "../server/server";
import { ServerRunner } from "./types";

export const serverRunners: ServerRunner[] = [
  { run: runServer, name: "http" },
  { run: runSocketServer, name: "ws" },
  { run: runBroadastServer, name: "broadcast" },
];
