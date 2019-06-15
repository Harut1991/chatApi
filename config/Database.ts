import { createConnection } from "typeorm";
import {Message, Room, User} from "../app/models";
import { config, DIALECT } from "../config";

export const Connection = createConnection({
    database: config.DATABASE.DB,
    charset: 'utf8mb4',
    entities: [
        User,
        Message,
        Room,
    ],
    host: config.DATABASE.SERVER,
    logging: false,
    password: config.DATABASE.PASSWORD,
    port: config.DATABASE.PORT_DB,
    synchronize: true,
    type: DIALECT,
    username: config.DATABASE.USER_DB,
});
