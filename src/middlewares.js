import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Server Monitoring System";
  res.locals.routes = routes;
  next();
};
