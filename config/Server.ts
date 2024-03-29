import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as http from "http";
import * as methodOverride from "method-override";
import * as morgan from "morgan";
import * as path from "path";
import { Connection } from "./Database";
import { ROUTER } from "./Router";
export class Server {
    private static ConnectDB(): Promise<any> {
        return Connection;
    }

    private readonly app: express.Application;
    private readonly server: http.Server;
    private readonly io: any;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = require("socket.io").listen(this.server);
    }

    public Start(): Promise<http.Server> {
        return Server.ConnectDB().then(() => {
            this.ExpressConfiguration();
            this.IoConfiguration();
            this.ConfigurationRouter();
            return this.server;
        });
    }

    public App(): express.Application {
        return this.app;
    }

    private IoConfiguration(): void {
        const diceEntries = new Set();
        this.io.on("connection", (socket: any) => {
            socket.on("connection", (data: any) => {
                socket.broadcast.emit("connection", data);
            });

            socket.on("username", (username: any) => {
                socket.username = username;
                diceEntries.add(username);
                this.io.emit("username", [ ...diceEntries]);
            });

            socket.on("newuser", (user: any) => {
                this.io.emit("newuser", user);
            });

            socket.on("typing", (data: any) => {
                socket.broadcast.emit("typing", data);
            });

            socket.on("newMessage", (data: any) => {
                socket.broadcast.emit("newMessage", data);
            });

            socket.on("newMessageByUsersId", (data: any) => {
                socket.broadcast.emit("newMessageByUsersId", data);
            });

            socket.on("disconnect", (username: any) => {
                diceEntries.delete(socket.username);
                socket.broadcast.emit("is_online", [ ...diceEntries]);
            });
        });
    }

    private ExpressConfiguration(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(methodOverride());
        this.app.use((req, res, next): void => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
            next();
        });
        this.app.use(morgan("combined"));
        this.app.use("/public", express.static(path.join(__dirname, "../public")));
        this.app.use(cors());
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
            err.status = 404;
            next(err);
        });
    }

    private ConfigurationRouter(): void {
        for (const route of ROUTER) {
            this.app.use(route.path, route.middleware, route.handler);
        }
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
            res.status(404);
            res.json({
                error: "Not found",
            });
            next();
        });
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
            if (err.name === "UnauthorizedError") {
                res.status(401).json({
                    error: "Please send a valid Token...",
                });
            }
            next();
        });
        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
            res.status(err.status || 500);
            res.json({
                error: err.message,
            });
            next();
        });
    }

}
