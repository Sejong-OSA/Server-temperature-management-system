import routes from "../routes";
import User from "../models/User";

export const getMe = async (req, res) => {
  const {
    user: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: user.name, user });
  } catch (error) {
    // req.flash("error", "Can't find your profile");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const logout = (req, res) => {
  // req.flash("info", "Log out!!");
  req.logout();
  res.redirect(routes.home);
};
