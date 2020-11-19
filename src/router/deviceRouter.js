import express from "express";
import routes from "../routes";
import { onlyPrivate } from "../middlewares";
import { getRegister, postRegister } from "../controller/deviceController";

const deviceRouter = express.Router();

deviceRouter.get(routes.register, onlyPrivate, getRegister);
deviceRouter.post(routes.register, onlyPrivate, postRegister);

export default deviceRouter;
