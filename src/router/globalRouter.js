import express from "express";
import routes from "../routes";
import { getJoin, home, postJoin } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
