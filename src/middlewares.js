import routes from "./routes";
import multer from "multer";

import User from "./models/User";

const multerAvatar = multer({ dest: "uploads/avatar" });

export const uploadAvatar = multerAvatar.single("avatarFile");

export const localMiddleware = async (req, res, next) => {
  let userExisted = false;
  try {
    const user = await User.find({});

    if (user.length > 0) {
      userExisted = true;
    }

    res.locals.siteName = "Server Monitoring System";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user;
    res.locals.userExisted = userExisted;
    next();
  } catch (error) {
    console.log(error);
  }
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
