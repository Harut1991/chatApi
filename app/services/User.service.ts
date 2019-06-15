import { getCustomRepository } from "typeorm";
import {User} from "../models";
import {UserRepository} from "../repository";

export class UserService {

    public findByNickName(text: string): Promise<User[]> {
        return getCustomRepository(UserRepository).findByNickName(text);
    }

    public find(): Promise<User[]> {
        return getCustomRepository(UserRepository).find();
    }

    public save(user: User): Promise<User> {
        return getCustomRepository(UserRepository).save(user);
    }
}
