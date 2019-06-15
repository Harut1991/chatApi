import { env } from "process";

export const DIALECT = "sqlite";

export function isProduction(): boolean {
    return env.NODE_ENV === ("PRODUCTION" || "production");
}

export const config = {
    PORT_APP: 3000,
};
