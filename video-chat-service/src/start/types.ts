import { IHTTPServer } from "../connection/types";

export interface ServerRunner { run: ((server: IHTTPServer) => void), name: string };