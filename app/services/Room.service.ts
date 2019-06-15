import { getCustomRepository } from "typeorm";
import {Room} from "../models";
import {RoomRepository} from "../repository";

export class RoomService {
    public find(): Promise<Room[]> {
        return getCustomRepository(RoomRepository).find({relations: ["messages"]});
    }

    public findByUsers(user1Id: number, user2Id: number): Promise<Room> {
        return getCustomRepository(RoomRepository).findByUsers(user1Id, user2Id);
    }

    public findByOne(id: number): Promise<Room> {
        return getCustomRepository(RoomRepository).findOne({where: {id}, relations: ["messages"]});
    }

    public save(room: Room): Promise<Room> {
        return getCustomRepository(RoomRepository).save(room);
    }
}
