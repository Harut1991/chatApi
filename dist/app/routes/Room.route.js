"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camesine_1 = require("camesine");
const controllers_1 = require("../controllers");
const schemas_1 = require("../schemas");
class RoomRouter extends camesine_1.Router {
    constructor() {
        super(controllers_1.RoomController);
        this.router
            .get("/", this.handler(controllers_1.RoomController.prototype.get))
            .post("/:id/messages", [camesine_1.validator(schemas_1.createMessage)], this.handler(controllers_1.RoomController.prototype.createMessages))
            .post("/", [camesine_1.validator(schemas_1.createRoom)], this.handler(controllers_1.RoomController.prototype.create));
    }
}
exports.RoomRouter = RoomRouter;
//# sourceMappingURL=Room.route.js.map