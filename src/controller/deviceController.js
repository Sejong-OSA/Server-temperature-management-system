import routes from "../routes";
import Device from "../models/Device";
import events from "../sockets/events";

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
    res.redirect(routes.deviceDetail(newDevice.id));
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't register the device");
    res.redirect(routes.register);
  }
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { location },
    user: { id },
  } = req;
  try {
    const newDevice = await Device.create({
      title,
      description,
      DeviceUrl: location,
      createdAt: getDate(),
      creator: id,
    });
    req.user.Devices.push(newDevice.id);
    req.user.save();
    req.flash("success", "Uploading the Device success");
    res.redirect(routes.DeviceDetail(newDevice.id));
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't upload the Device");
    res.redirect(routes.upload);
  }
};

export const deviceDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const device = await Device.findById(id).populate("temp").populate("hum");

    res.render("deviceDetail", {
      pageTitle: device.title,
      events: JSON.stringify(events),
      device,
    });
  } catch (error) {
    req.flash("error", "Can't access the device page");
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditDevice = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const device = await Device.findById(id);
    res.render("editDevice", { pageTitle: "editDevice", device });
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't access the editing device page");
    res.redirect(routes.home);
  }
};

export const postEditDevice = async (req, res) => {
  const {
    body: { description },
    params: { id },
  } = req;
  try {
    await Device.findByIdAndUpdate(id, { description });
    req.flash("success", "Editing the device success");
    res.redirect(routes.deviceDetail(id));
  } catch (error) {
    console.log(error);
    req.flash("error", "Can't edit the device");
    res.render("editDevice", { pageTitle: "editDevice" });
  }
};

export const deleteDevice = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Device.findByIdAndRemove(id);
    req.flash("success", "Deleting the device success");
  } catch (error) {
    req.flash("error", "Can't delete the device");
    console.log(error);
  }
  res.redirect(routes.home);
};
