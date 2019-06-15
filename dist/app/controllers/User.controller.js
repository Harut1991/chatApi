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
const models_1 = require("../models");
const services_1 = require("../services");
class UserController extends camesine_1.Controller {
    constructor(req, res) {
        super(req, res);
        this.user = new models_1.User();
        this.userService = new services_1.UserService();
    }
    all() {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield this.userService.find();
            return this.res.send(userList);
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const { nickName, interest } = this.req.body;
            this.user.nickName = nickName;
            this.user.interest = interest;
            try {
                const unique = yield this.userService.findByNickName(this.user.nickName);
                if (unique.length) {
                    return this.res.status(409).send({ message: "User already exists" });
                }
                const result = yield this.userService.save(this.user);
                return this.res.status(200).send(result);
            }
            catch (ex) {
                return this.res.status(404).send({ message: "ERROR" });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=User.controller.js.map