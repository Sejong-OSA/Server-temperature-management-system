import routes from "./routes";
import multer from "multer";

const multerAvatar = multer({ dest: "uploads/avatar" });

export const uploadAvatar = multerAvatar.single("avatarFile");

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Server Monitoring System";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user;
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
