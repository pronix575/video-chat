import { Server } from "socket.io";
import { IHTTPServer } from "./types";

export function createIo(server: IHTTPServer) {
  return new Server(server);
}