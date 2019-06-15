"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const repository_1 = require("../repository");
class RoomService {
    find() {
        return typeorm_1.getCustomRepository(repository_1.RoomRepository).find({ relations: ["messages"] });
    }
    findByUsers(user1Id, user2Id) {
        return typeorm_1.getCustomRepository(repository_1.RoomRepository).findByUsers(user1Id, user2Id);
    }
    findByOne(id) {
        return typeorm_1.getCustomRepository(repository_1.RoomRepository).findOne({ where: { id }, relations: ["messages"] });
    }
    save(room) {
        return typeorm_1.getCustomRepository(repository_1.RoomRepository).save(room);
    }
}
exports.RoomService = RoomService;
//# sourceMappingURL=Room.service.js.map