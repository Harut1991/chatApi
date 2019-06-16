import { EntityRepository, Repository } from "typeorm";
import {User} from "../models";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    public findByNickName(text: string): Promise<User> {
        return this.manager.findOne(User, {where: {nickName: text}});
    }
}
