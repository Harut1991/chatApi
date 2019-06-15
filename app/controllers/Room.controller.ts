import { Controller } from "camesine";
import { Request, Response } from "express";
import * as path from "path";
import {Message, Room} from "../models";
import {MessageService, RoomService} from "../services";
const fs = require("fs");

export class RoomController extends Controller {
    private roomService: RoomService;
    private room: Room;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.room = new Room();
        this.roomService = new RoomService();
    }

    public async get(): Promise<Response> {
        const { user1Id, user2Id } = this.req.query as { user1Id: number, user2Id: number };
        if (user1Id && user2Id) {
            const room1 = await this.roomService.findByUsers(user1Id, user2Id);
            const room2 = await this.roomService.findByUsers(user2Id, user1Id);
            if (room1 || room2) {
                const room = await this.roomService.findByOne(room1 ? room1.id : room2.id);
                return this.res.status(200).send( room );
            }
            return this.res.status(404).send( "error" );
        }
        const roomList = await this.roomService.find();
        return this.res.status(200).send( roomList );
    }

    public async create(): Promise<Response> {
        const { user1Id, user2Id } = this.req.body as { user1Id: number, user2Id: number };
        this.room.user_1 = user1Id;
        this.room.user_2 = user2Id;
        try {
            const result = await this.roomService.save(this.room);
            const room = await this.roomService.findByOne(result.id);
            return this.res.status(200).send(room);
        } catch (ex) {
            return this.res.status(404).send({ message: "ERROR" });
        }
    }

    public async createMessages(): Promise<Response> {
        const room = await this.roomService.findByOne(this.req.params.id);
        if (!room) { return this.res.status(404).send({ message: "ERROR" }); }
        const { mess, userId } = this.req.body as { mess: string, userId: number };
        const messages = new Message();
        const messageService = new MessageService();
        messages.userId = userId;
        messages.message = mess;
        messages.room = room;
        messages.created = new Date();
        if (this.req.body.file) {
            if (!fs.existsSync(path.join(__dirname, "../../public"))) {
                fs.mkdirSync(path.join(__dirname, "../../public"));
            }
            const fileName = `${new Date().getTime()}*-*${this.req.body.fileName}`;
            fs.writeFile(
                path.join(__dirname, "../../public", fileName),
                this.req.body.file.split(";base64,").pop(),
                {encoding: "base64"}, () => {});

            messages.fileName = fileName;
        }

        try {
            const savedMessage = await messageService.save(messages);
            return this.res.status(200).send(savedMessage);
        } catch (ex) {
            return this.res.status(404).send({ message: "ERROR" });
        }
    }
}
