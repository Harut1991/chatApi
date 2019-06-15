"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camesine_1 = require("camesine");
const controllers_1 = require("../controllers");
const schemas_1 = require("../schemas");
class UserRouter extends camesine_1.Router {
    constructor() {
        super(controllers_1.UserController);
        this.router
            .get("/", this.handler(controllers_1.UserController.prototype.all))
            .post("/", [camesine_1.validator(schemas_1.createUser)], this.handler(controllers_1.UserController.prototype.create));
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=User.route.js.map