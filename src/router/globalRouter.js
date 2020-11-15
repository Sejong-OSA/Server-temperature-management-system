import express from "express";
import routes from "../routes";
import { getJoin, home, postJoin } from "../controller/globalController";
import { uploadAvatar } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, uploadAvatar, postJoin);

export default globalRouter;
