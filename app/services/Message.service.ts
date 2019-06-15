import { getCustomRepository } from "typeorm";
import {Message} from "../models";
import {MessageRepository} from "../repository/Message.repository";

export class MessageService {

    public save(message: Message): Promise<Message> {
        return getCustomRepository(MessageRepository).save(message);
    }
}
