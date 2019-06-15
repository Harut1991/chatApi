import { Controller } from "camesine";
import { Request, Response } from "express";
import { User } from "../models";
import { UserService} from "../services";

export class UserController extends Controller {

    private userService: UserService;
    private user: User;

    constructor(req: Request, res: Response) {
        super(req, res);
        this.user = new User();
        this.userService = new UserService();
    }

    public async all(): Promise<Response> {
        const userList = await this.userService.find();
        return this.res.send(userList);
    }

    public async create(): Promise<Response> {
        const { nickName, interest } = this.req.body as { nickName: string, interest: string };
        this.user.nickName = nickName;
        this.user.interest = interest;
        try {

            const unique = await this.userService.findByNickName(this.user.nickName);
            if (unique.length) {
                return this.res.status(409).send({ message: "User already exists" });
            }
            const result = await this.userService.save(this.user);
            return this.res.status(200).send(result);
        } catch (ex) {
            return this.res.status(404).send({ message: "ERROR" });
        }
    }

}