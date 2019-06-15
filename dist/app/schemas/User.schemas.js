"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("joi");
exports.createUser = joi_1.object().keys({
    interest: joi_1.string().required(),
    nickName: joi_1.string().required(),
});
//# sourceMappingURL=User.schemas.js.map