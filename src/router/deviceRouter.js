import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import {
  deviceDetail,
  getRegister,
  postRegister,
} from "../controller/deviceController";

const deviceRouter = express.Router();

deviceRouter.get(routes.register, onlyPrivate, getRegister);
deviceRouter.post(routes.register, onlyPrivate, postRegister);

deviceRouter.get(routes.deviceDetail(), deviceDetail);

export default deviceRouter;
