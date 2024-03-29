import * as cluster from "cluster";
import {cpus} from "os";
import {env} from "process";
import {isProduction} from "./config";
import {Server} from "./config/Server";

if (!cluster.isMaster) {
    const port: number | string = process.env.PORT || 3000;
    new Server().Start().then((server) => {
        server.listen(port);
        server.on("error", (error: any) => {
            if (error.syscall !== "listen") {
                throw error;
            }
            switch (error.code) {
                case "EACCES":
                    console.error("Port requires elevated privileges");
                    process.exit(1);
                    break;
                case "EADDRINUSE":
                    console.error("Port is already in use");
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        });
        server.on("listening", () => {
            console.log("Server is running in process " + process.pid + " listening on PORT " + port + "\n");
        });
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
