import routes from "./routes";
import multer from "multer";

const multerAvatar = multer({ dest: "uploads/avatar" });

export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Server Monitoring System";
  res.locals.routes = routes;
  next();
};
