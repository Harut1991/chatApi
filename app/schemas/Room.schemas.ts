import {number, object} from "joi";

export const createRoom = object().keys({
    user1Id: number().required(),
    user2Id: number().required(),
});
