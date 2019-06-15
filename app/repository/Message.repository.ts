import { EntityRepository, Repository } from "typeorm";
import {Message} from "../models";

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
}
