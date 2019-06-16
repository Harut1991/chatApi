import {Router, validator} from "camesine";
import {RoomController} from "../controllers";
import {createMessage, createRoom} from "../schemas";

export class RoomRouter extends Router {
    constructor() {
        super(RoomController);
        this.router
            .get("/", this.handler(RoomController.prototype.get))
            .post("/:id/messages", [validator(createMessage)], this.handler(RoomController.prototype.createMessages))
            .post("/", [validator(createRoom)], this.handler(RoomController.prototype.create));
    }
}
