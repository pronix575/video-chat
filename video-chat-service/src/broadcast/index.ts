import { IHTTPServer } from "../connection/types";
import { ExpressPeerServer } from "peer";

export function runBroadastServer(server: IHTTPServer) {
  const peerServer = ExpressPeerServer(server, {
    path: "/broadcast",
  });
}
