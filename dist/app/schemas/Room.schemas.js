"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("joi");
exports.createRoom = joi_1.object().keys({
    user1Id: joi_1.number().required(),
    user2Id: joi_1.number().required(),
});
//# sourceMappingURL=Room.schemas.js.map