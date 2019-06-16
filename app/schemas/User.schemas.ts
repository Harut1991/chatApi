import { object, string } from "joi";

export const createUser = object().keys({
    interest: string().required(),
    ip: string(),
    nickName: string().required(),
});
