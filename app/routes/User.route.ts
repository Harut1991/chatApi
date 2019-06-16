import {Router, validator} from "camesine";
import {UserController} from "../controllers";
import {createUser} from "../schemas";

export class UserRouter extends Router {
    constructor() {
        super(UserController);
        this.router
            .get("/", this.handler(UserController.prototype.all))
            .get("/:id", this.handler(UserController.prototype.get))
            .post("/", [validator(createUser)], this.handler(UserController.prototype.create));
    }
}
