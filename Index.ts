import * as cluster from "cluster";
import { cpus } from "os";
import { env } from "process";
import { config, isProduction } from "./config";
import { Server } from "./config/Server";

if (!cluster.isMaster) {
    const port: number | string = process.env.PORT || 3000;
    new Server().Start().then((server) => {
        server.listen(port);
    });
} else {
    console.log(`\n -------------------> RUN ${env.NODE_ENV} ENVIRONMENT \n`);
    for (const _ of cpus()) {
        cluster.fork();
        if (!isProduction()) {
            break;
        }
    }
}
