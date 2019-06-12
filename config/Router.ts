import * as express from "express";
import { SampleRouter } from "../app/routes";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

const Sample = new SampleRouter();

export const ROUTER: IROUTER[] = [ {
    handler: Sample.router,
    middleware: [],
    path: "/",
}];
