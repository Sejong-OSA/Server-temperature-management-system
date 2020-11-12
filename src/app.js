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

import globalRouter from "./router/globalRouter";
import deviceRouter from "./router/deviceRouter";
import Dht11 from "./models/Dht11";
import routes from "./routes";
import csp from "./csp";

import { localMiddleware } from "./middlewares";
import { socketController } from "./socketController";

const app = express();
const PORT = process.env.PORT || 4000;
const tempTopic = "dht11";

const getMessage = async (topic, message) => {
  const obj = JSON.parse(message);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  obj.created_at = new Date(
    Date.UTC(year, month, today, hours, minutes, seconds)
  );
  console.log(obj);

  const dht11 = new Dht11({
    tmp: obj.tmp,
    hum: obj.hum,
    created_at: obj.created_at,
  });

  try {
    const saveDHT11 = await dht11.save();
    console.log("insert OK");
  } catch (err) {
    console.log({ message: err });
  }
};

const connectOptions = {
  host: conf.cse.host,
  port: conf.cse.mqttport,
  //              username: 'keti',
  //              password: 'keti123',
  protocol: "mqtt",
  keepalive: 10,
  //              clientId: serverUID,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 2000,
  connectTimeout: 2000,
  rejectUnauthorized: false,
};

// const client = mqtt.connect(process.env.MQTT_URL);
const client = mqtt.connect(connectOptions);

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

client.on("connect", () => {
  console.log("✅ mqtt connect");
  client.subscribe(tempTopic);
  console.log(`subscribe ${tempTopic}`);
});

client.on("message", getMessage);

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", (socket) => socketController(socket, io));

export default io;
