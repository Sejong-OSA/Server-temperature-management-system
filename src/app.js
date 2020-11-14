import "@babel/polyfill"; // To fix "ReferenceError: regeneratorRuntime is not defined"
import express from "express";
import path from "path";

import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mqtt from "mqtt";
import socketIO from "socket.io";

import "./global";
import "./db";
import "./models/User";
import "./oneM2M/mqtt_app";

import globalRouter from "./router/globalRouter";
import deviceRouter from "./router/deviceRouter";
import routes from "./routes";
import csp from "./csp";

import { localMiddleware } from "./middlewares";
import { socketController } from "./sockets/socketController";

const app = express();
const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Listening : http://localhost:${PORT}`);
};

app.use(helmet());

app.set("view engine", "pug");

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));

app.use(csp);
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.device, deviceRouter);

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", (socket) => socketController(socket, io));

export default io;
