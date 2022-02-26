import { IHTTPServer } from "../connection/types";
import { ServerRunner } from "./types";
import chalk from "chalk";

export function start(server: IHTTPServer, runners: ServerRunner[]) {
  console.log("");

  runners.forEach((runner) => {
    console.log("🟩", chalk.blue(runner.name), "server has been started");
    runner.run(server);
  });

  console.log("");
}
