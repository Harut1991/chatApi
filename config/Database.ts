import { env } from "process";
import { createConnection } from "typeorm";
import {Message, Room, User} from "../app/models";
import {DIALECT} from "../config";
const path = require("path");
const dbPath = path.resolve( env.NODE_ENV === "development" ? "chat.db" : "../chat.db");

console.log(dbPath);
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
