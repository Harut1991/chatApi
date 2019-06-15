"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("joi");
exports.createMessage = joi_1.object().keys({
    file: joi_1.any(),
    fileName: joi_1.string(),
    mess: joi_1.string().required(),
    userId: joi_1.number().required(),
});
//# sourceMappingURL=Message.schemas.js.map