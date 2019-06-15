"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster = require("cluster");
const os_1 = require("os");
const process_1 = require("process");
const config_1 = require("./config");
const Server_1 = require("./config/Server");
if (!cluster.isMaster) {
    const port = process.env.PORT || 3000;
    new Server_1.Server().Start().then((server) => {
        server.listen(port);
        server.on("error", (error) => {
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
}
else {
    console.log(`\n -------------------> RUN ${process_1.env.NODE_ENV} ENVIRONMENT \n`);
    for (const _ of os_1.cpus()) {
        cluster.fork();
        if (!config_1.isProduction()) {
            break;
        }
    }
}
//# sourceMappingURL=Index.js.map