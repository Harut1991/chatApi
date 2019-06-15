import { EntityRepository, Repository } from "typeorm";
import {Room, User} from "../models";

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
    public findByUsers(user1Id: number, user2Id: number): Promise<Room> {
        return this.manager.findOne(Room, {where: { "user_1": user1Id, "user_2": user2Id}, relations: ["messages"]});
    }
}
