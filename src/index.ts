import express, { Express, Request, Response } from "express";
import Logger from "./common/logging/logger";
import morganMiddleware from "./common/config/morganMiddleware";
import cors from "cors";
import helmet from "helmet";
import { AppDataSource } from "./database/data-source";
import { postRouter as postRouterV1 } from "./Post/v1.0/post.routes";
import { postRouter as postRouterV2 } from "./Post/v2.0/post.routes";

const app: Express = express();
const port = process.env.PORT || 3000;

AppDataSource.initialize().then(async(value) => {
  Logger.info('[----------TypeORM is On----------]');
}).catch(e => {
  Logger.error(`TypeORM ERROR: ${e}`);
});

app.use(express.json()); //Parses body to json
app.use(morganMiddleware); // HTTP methods logging
app.use(cors()); // Cross origin requests
app.use(helmet())

app.use('/v1.0/post', postRouterV1);
app.use('/v2.0/post', postRouterV2);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server is working");
});

app.listen(port, () => {
  Logger.debug(`[server]: Server is running at http://localhost:${port}`);  
});