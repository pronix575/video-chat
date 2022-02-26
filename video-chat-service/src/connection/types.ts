import { Server } from "http"
import { Server as ISocketIoServer } from "socket.io"

export type IHTTPServer = Server;
export type SocketIoServer = ISocketIoServer;