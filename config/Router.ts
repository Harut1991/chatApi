import * as express from "express";
import {DownloadRoute, RoomRouter, UserRouter} from "../app/routes";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const User = new UserRouter();
const Room = new RoomRouter();
const Download = new DownloadRoute();

export const ROUTER: IROUTER[] = [
    {
        handler: User.router,
        middleware: [],
        path: "/users/",
    },
    {
        handler: Room.router,
        middleware: [],
        path: "/room/",
    },
    {
        handler: Download.router,
        middleware: [],
        path: "/download/",
    },
];
