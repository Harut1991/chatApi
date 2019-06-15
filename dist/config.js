"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
exports.DIALECT = "sqlite";
function isProduction() {
    return process_1.env.NODE_ENV === "PRODUCTION";
}
exports.isProduction = isProduction;
exports.config = {
    PORT_APP: 3000,
};
//# sourceMappingURL=config.js.map