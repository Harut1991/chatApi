import {Router} from "camesine";
import {DownloadController} from "../controllers";

export class DownloadRoute extends Router {
    constructor() {
        super(DownloadController);
        this.router
            .get("/:id", this.handler(DownloadController.prototype.download));
    }
}
