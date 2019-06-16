import {Controller} from "camesine";
import {Request, Response} from "express";
import * as path from "path";

export class DownloadController extends Controller {
    constructor(req: Request, res: Response) {
        super(req, res);
    }

    public async download(): Promise<void> {
        this.res.download(path.join(__dirname, "../../public", this.req.params.id));
    }

}
