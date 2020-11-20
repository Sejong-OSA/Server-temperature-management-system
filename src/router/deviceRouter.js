import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import {
  deviceDetail,
  getEditDevice,
  getRegister,
  postEditDevice,
  postRegister,
} from "../controller/deviceController";

const deviceRouter = express.Router();

// register
deviceRouter.get(routes.register, onlyPrivate, getRegister);
deviceRouter.post(routes.register, onlyPrivate, postRegister);

deviceRouter.get(routes.deviceDetail(), deviceDetail);

// edit
deviceRouter.get(routes.editDevice(), onlyPrivate, getEditDevice);
deviceRouter.post(routes.editDevice(), onlyPrivate, postEditDevice);

export default deviceRouter;
