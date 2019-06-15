import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity("user")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public nickName: string;

    @Column("text")
    public interest: string;

}
