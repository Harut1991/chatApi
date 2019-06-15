"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../app/models");
const config_1 = require("../config");
exports.Connection = typeorm_1.createConnection({
    type: config_1.DIALECT,
    database: `../chat.db`,
    entities: [
        models_1.User,
        models_1.Message,
        models_1.Room,
    ],
    synchronize: true,
});
//# sourceMappingURL=Database.js.map