import express from "express";
import routes from "../routes";
import {
  getJoin,
  getLogin,
  home,
  postJoin,
  postLogin,
} from "../controller/globalController";
import { uploadAvatar } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, uploadAvatar, postJoin, postLogin);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

export default globalRouter;
