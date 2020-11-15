import express from "express";
import routes from "../routes";
import { getEditProfile, postEditProfile } from "../controller/userController";
import { uploadAvatar, onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// Ediit Profile
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

export default userRouter;
