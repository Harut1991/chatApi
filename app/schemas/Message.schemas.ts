import {any, number, object, string} from "joi";

export const createMessage = object().keys({
    file: any(),
    fileName: string(),
    mess: string().required(),
    userId: number().required(),
});
