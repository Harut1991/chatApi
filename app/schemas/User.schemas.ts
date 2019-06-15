import { object, string } from "joi";

export const createUser = object().keys({
    interest: string().required(),
    nickName: string().required(),
});
