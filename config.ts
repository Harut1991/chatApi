import { env } from "process";

export const DIALECT = "sqlite";

export function isProduction(): boolean {
    return env.NODE_ENV === "PRODUCTION";
}

export const config = {
    PORT_APP: process.env.PORT || 9000,
};
