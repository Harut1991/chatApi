import { createConnection } from "typeorm";
import {Message, Room, User} from "../app/models";
import {DIALECT, isProduction} from "../config";
export const Connection = createConnection({
    type: DIALECT,
    database: isProduction() ? `../../chat.db` : "../chat.db",
    entities: [
            User,
            Message,
            Room,
    ],
    synchronize: true,
});
