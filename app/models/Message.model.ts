import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Room} from "./index";

@Entity("message")
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public message: string;

    @Column({type: "text", nullable: true})
    public fileName: string;

    @Column({type: "int"})
    public userId: number;

    @Column({type: "datetime", nullable: true})
    public created: Date;

    @ManyToOne((type) => Room)
    public room: Room;
}
