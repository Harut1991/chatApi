"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camesine_1 = require("camesine");
const controllers_1 = require("../controllers");
class DownloadRoute extends camesine_1.Router {
    constructor() {
        super(controllers_1.DownloadController);
        this.router
            .get("/:id", this.handler(controllers_1.DownloadController.prototype.download));
    }
}
exports.DownloadRoute = DownloadRoute;
//# sourceMappingURL=Download.route.js.map