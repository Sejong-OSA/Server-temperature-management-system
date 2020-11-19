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
    req.flash("error", "Can't find your profile");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const logout = (req, res) => {
  req.flash("info", "Log out!!");
  req.logout();
  res.redirect(routes.home);
};

export const getEditProfile = async (req, res) => {
  const {
    user: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("editProfile", { pageTitle: "editProfile", user });
  } catch (error) {
    req.flash("error", "Can't find your profile");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name, status },
    user: { id },
    file,
  } = req;

  try {
    await User.findByIdAndUpdate(id, {
      name,
      status,
      avatarUrl: file ? file.path : req.user.avatarUrl,
    });
    req.flash("success", "Edit success");
    res.redirect(routes.me);
  } catch (error) {
    req.flash("error", "Edit fail");
    console.log(error);
    res.redirect(routes.editProfile);
  }
};

export const getChangePassword = async (req, res) => {
  try {
    res.render("changePassword", { pageTitle: "changePassword" });
  } catch (error) {
    req.flash("error", "Can't access the change-password page");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, verifyPassword },
  } = req;
  if (newPassword !== verifyPassword) {
    console.log("password doesn't match");
    res.status(400);
    res.redirect(`/users${routes.changePassword}`);
    return;
  }
  try {
    await req.user.changePassword(oldPassword, newPassword);
    req.flash("success", "Change password success");
    res.redirect(routes.me);
  } catch (error) {
    req.flash("error", "Change password fail");
    console.log("old password is incorrect");
    console.log(error);
    res.redirect(`/users${routes.changePassword}`);
  }
};
