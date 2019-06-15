import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Message, User} from "./index";

@Entity("room")
export class Room extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne((type) => User)
    public user_1: number;

    @ManyToOne((type) => User)
    public user_2: number;

    @OneToMany((type) => Message, (message) => message.room)
    public messages: Message[];

}
