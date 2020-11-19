import passport from "passport";

import events from "../sockets/events";
import routes from "../routes";
import User from "../models/User";
import Device from "../models/Device";

export const home = async (req, res) => {
  try {
    const devices = await Device.find({}).sort({ _id: -1 });
    res.render("home", {
      pageTitle: "home",
      events: JSON.stringify(events),
      devices,
    });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home" });
  }
};

export const getJoin = (req, res) => {
  try {
    res.render("join", { pageTitle: "Join" });
  } catch (error) {
    req.flash("error", "Can't access the join");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
    file,
  } = req;

  if (password !== password2) {
    req.flash("error", "Passwords don't match");
    res.status(400);
    res.redirect(routes.join);
  } else {
    try {
      const user = await User({
        name,
        email,
        avatarUrl: file ? file.path : null,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
      req.flash("error", "Join fail");
    }
  }
};

export const getLogin = (req, res) => {
  try {
    res.render("login", { pageTitle: "Login" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
  failureFlash: "Login fail",
  successFlash: "Welcome!",
});
