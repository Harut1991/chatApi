import { createConnection } from "typeorm";
import {Message, Room, User} from "../app/models";
import {DIALECT} from "../config";
import { env } from "process";
const path = require("path");
const dbPath = path.resolve(env.NODE_ENV === "development" ? "chat.db" : "../chat.db");

export const Connection = createConnection({
    type: DIALECT,
    database: dbPath,
    entities: [
            User,
            Message,
            Room,
    ],
    synchronize: true,
});
