import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'ServerMonitoring';
  res.locals.routes = routes;
  next();
};