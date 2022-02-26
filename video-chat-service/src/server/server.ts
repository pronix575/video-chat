import { PORT } from "../config/config";
import { IHTTPServer } from "../connection/types";

export function runServer(server: IHTTPServer) {
  server.listen(PORT, () => {
    console.log(`🚀 server has been started on port ${PORT}`);
  });
}