import '@babel/polyfill'; // To fix "ReferenceError: regeneratorRuntime is not defined"
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(helmet());

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));

const home = app.get("/",(req,res)=>{
  res.send("hiasd");
})