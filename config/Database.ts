import { createConnection } from "typeorm";
import {Message, Room, User} from "../app/models";
import {DIALECT } from "../config";

export const Connection = createConnection({
    type: DIALECT,
    database: `../chat.db`,
    entities: [
            User,
            Message,
            Room,
    ],
    logging: true,
    synchronize: true,
});
