import { Router } from "express";
import { PostController } from "./post.controller";

export const postRouter = Router();

postRouter.post('/', PostController.create);
postRouter.get('/', PostController.listAll);
postRouter.get('/:id', PostController.listById);
postRouter.patch('/:id',PostController.update);
postRouter.delete('/:id',PostController.delete)