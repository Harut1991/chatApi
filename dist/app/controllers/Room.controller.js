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
const models_1 = require("../models");
const services_1 = require("../services");
const fs = require("fs");
class RoomController extends camesine_1.Controller {
    constructor(req, res) {
        super(req, res);
        this.room = new models_1.Room();
        this.roomService = new services_1.RoomService();
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const { user1Id, user2Id } = this.req.query;
            if (user1Id && user2Id) {
                const room1 = yield this.roomService.findByUsers(user1Id, user2Id);
                const room2 = yield this.roomService.findByUsers(user2Id, user1Id);
                if (room1 || room2) {
                    const room = yield this.roomService.findByOne(room1 ? room1.id : room2.id);
                    return this.res.status(200).send(room);
                }
                return this.res.status(404).send("error");
            }
            const roomList = yield this.roomService.find();
            return this.res.status(200).send(roomList);
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const { user1Id, user2Id } = this.req.body;
            this.room.user_1 = user1Id;
            this.room.user_2 = user2Id;
            try {
                const result = yield this.roomService.save(this.room);
                const room = yield this.roomService.findByOne(result.id);
                return this.res.status(200).send(room);
            }
            catch (ex) {
                return this.res.status(404).send({ message: "ERROR" });
            }
        });
    }
    createMessages() {
        return __awaiter(this, void 0, void 0, function* () {
            const room = yield this.roomService.findByOne(this.req.params.id);
            if (!room) {
                return this.res.status(404).send({ message: "ERROR" });
            }
            const { mess, userId } = this.req.body;
            const messages = new models_1.Message();
            const messageService = new services_1.MessageService();
            messages.userId = userId;
            messages.message = mess;
            messages.room = room;
            messages.created = new Date();
            if (this.req.body.file) {
                if (!fs.existsSync(path.join(__dirname, "../../public"))) {
                    fs.mkdirSync(path.join(__dirname, "../../public"));
                }
                const fileName = `${new Date().getTime()}*-*${this.req.body.fileName}`;
                fs.writeFile(path.join(__dirname, "../../public", fileName), this.req.body.file.split(";base64,").pop(), { encoding: "base64" }, () => { });
                messages.fileName = fileName;
            }
            try {
                const savedMessage = yield messageService.save(messages);
                return this.res.status(200).send(savedMessage);
            }
            catch (ex) {
                return this.res.status(404).send({ message: "ERROR" });
            }
        });
    }
}
exports.RoomController = RoomController;
//# sourceMappingURL=Room.controller.js.map