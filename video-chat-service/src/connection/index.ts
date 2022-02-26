import { createIo } from "./io";
import { IHTTPServer, SocketIoServer } from "./types";

export function runSocketServer(server: IHTTPServer) {
  const io: SocketIoServer = createIo(server);
}