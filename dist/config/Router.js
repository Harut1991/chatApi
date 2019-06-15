"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("../app/routes");
const User = new routes_1.UserRouter();
const Room = new routes_1.RoomRouter();
const Download = new routes_1.DownloadRoute();
exports.ROUTER = [
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
//# sourceMappingURL=Router.js.map