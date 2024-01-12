import { Request, Response } from "express";
import { PostService } from "./post.service";
import Logger from "../../common/logging/logger";

export class PostController {
    static async create(req: Request, resp: Response){
        try{
            const result = await PostService.create(req.body);
            resp.status(200).send(result);
        }
        catch(e){
            Logger.error(e);
            resp.sendStatus(500); 
        }
    }

    static async listAll(_:Request, resp: Response){
        try{
            const result = await PostService.list();
            resp.status(200).send(result);
        }
        catch(e){
            Logger.error(e);
            resp.sendStatus(500); 
        }
    }

    static async listById(req:Request, resp: Response){
        try{
            Logger.debug(req.params);
            const result = await PostService.listById(parseInt(req.params.id));
            resp.status(200).send(result);
        }
        catch(e){
            Logger.error(e);
            resp.sendStatus(500); 
        }
    }

    static async update(req:Request, resp: Response){
        try{
            const result = await PostService.update(req.body);
            resp.status(200).send(result);
        }
        catch(e){
            Logger.error(e);
            resp.sendStatus(500);
        }
    }
}