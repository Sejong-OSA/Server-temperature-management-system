import routes from "../routes";
import Device from "../models/Device";

export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

// Upload
export const getRegister = (req, res) => {
  console.log("hi");
  try {
    res.render("register", { pageTitle: "register" });
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't access the register page");
    res.redirect(routes.home);
  }
};

export const postRegister = async (req, res) => {
  const {
    body: { title, description },
  } = req;
  try {
    const newDevice = await Device.create({
      title,
      description,
      createdAt: getDate(),
    });
    req.flash("success", "Registering the device success");
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't register the device");
    res.redirect(routes.register);
  }
};