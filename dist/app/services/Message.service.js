"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Message_repository_1 = require("../repository/Message.repository");
class MessageService {
    save(message) {
        return typeorm_1.getCustomRepository(Message_repository_1.MessageRepository).save(message);
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=Message.service.js.map