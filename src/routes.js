// home
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const ME = "/me";

// device
const DEVICES = "/device";
const UPLOAD = "/upload";
const DEVICE_DETAIL = "/:id";
const EDIT_DEVICE = "/:id/edit-device";
const DELETE_DEVICE = "/:id/delete-device";

// users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

const routes = {
  // global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  me: ME,

  // device
  devices: DEVICES,
  upload: UPLOAD,
  deviceEDetail: (id) => {
    if (id) return `/devices/${id}`;
    return DEVICE_DETAIL;
  },
  editDevice: (id) => {
    if (id) return `/devices/${id}/edit-device`;
    return EDIT_DEVICE;
  },
  deleteDevice: (id) => {
    if (id) return `/devices/${id}/delete-device`;
    return DELETE_DEVICE;
  },

  // user
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
};

export default routes;
