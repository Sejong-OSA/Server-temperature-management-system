import express from "express";
import routes from "../routes";
import {
  getJoin,
  getLogin,
  home,
  postJoin,
  postLogin,
} from "../controller/globalController";
import { onlyPrivate, onlyPublic, uploadAvatar } from "../middlewares";
import { getMe } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.me, onlyPrivate, getMe);

// Join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, uploadAvatar, postJoin, postLogin);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

export default globalRouter;
