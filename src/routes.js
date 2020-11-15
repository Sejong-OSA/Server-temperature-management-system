// home
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const ME = "/me";

// device
const DEVICE = "/device";

// users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// KakaoTalk
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

const routes = {
  // global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  me: ME,

  // device
  device: DEVICE,

  // Github Login
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,

  // Google Login
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,

  // user
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
};

export default routes;
