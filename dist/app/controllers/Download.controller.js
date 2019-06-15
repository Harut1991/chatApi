"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const camesine_1 = require("camesine");
const path = require("path");
class DownloadController extends camesine_1.Controller {
    constructor(req, res) {
        super(req, res);
    }
    download() {
        return __awaiter(this, void 0, void 0, function* () {
            this.res.download(path.join(__dirname, "../../public", this.req.params.id));
        });
    }
}
exports.DownloadController = DownloadController;
//# sourceMappingURL=Download.controller.js.map