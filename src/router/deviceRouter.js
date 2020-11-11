import express from "express";
import routes from "../routes";
import { home } from "../controller/globalController";

const deviceRouter = express.Router();

deviceRouter.get(routes.device, home);


export default deviceRouter;
