import '@babel/polyfill'; // To fix "ReferenceError: regeneratorRuntime is not defined"
import express from 'express';
import path from 'path';

import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import globalRouter from './router/globalRouter';
import routes from './routes';
import { localMiddleware } from './middlewares';

const app = express();

app.use(helmet());

app.set('view engine', 'pug');

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));

app.use(localMiddleware)

app.use(routes.home, globalRouter);

export default app;