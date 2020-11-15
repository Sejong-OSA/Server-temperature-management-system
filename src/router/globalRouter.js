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
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, uploadAvatar, postJoin, postLogin);

// Login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

export default globalRouter;
