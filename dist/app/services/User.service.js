"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const repository_1 = require("../repository");
class UserService {
    findByNickName(text) {
        return typeorm_1.getCustomRepository(repository_1.UserRepository).findByNickName(text);
    }
    find() {
        return typeorm_1.getCustomRepository(repository_1.UserRepository).find();
    }
    save(user) {
        return typeorm_1.getCustomRepository(repository_1.UserRepository).save(user);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=User.service.js.map