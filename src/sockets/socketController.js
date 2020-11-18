import request from "request";

import events from "./events";
import Temp from "../models/Temp";
import Hum from "../models/Hum";

const cse = {};
const ae = {};

// build cse
// cse.host = "203.250.148.89"; //'59.10.2.16';
cse.host = "192.168.1.87";
cse.port = "7579";
cse.name = "Mobius";

// build ae
ae.name = "SERVER_ROOM";

export const createContentInstance = ({ data, actuator }) => {
  const cseURL = `http://${cse.host}:${cse.port}`;
  const con = data;
  const cseRelease = "1";

  let requestNr = 0;

  console.log("\n[REQUEST]");

  const options = {
    uri: `${cseURL}/${cse.name}/${ae.name}/${actuator}`,
    method: "POST",
    headers: {
      "X-M2M-Origin": "S" + actuator,
      "X-M2M-RI": "req" + requestNr,
      "Content-Type": "application/json;ty=4",
    },
    json: {
      "m2m:cin": {
        con: con,
      },
    },
  };

  console.log("");
  console.log(options.method + " " + options.uri);
  console.log(options.json);

  if (cseRelease != "1") {
    options.headers = Object.assign(options.headers, {
      "X-M2M-RVI": cseRelease,
    });
  }
  console.log(options);
  requestNr += 1;
  request(options, (error, response, body) => {
    console.log("[RESPONSE]");
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      console.log(body);
    }
  });
  // }
};

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);

  //웹에서 소켓을 이용한 DHT11 센서데이터 모니터링
  socket.on(events.reqTemp, () => {
    Temp.find({})
      .sort({ _id: -1 })
      .limit(1)
      .then((data) => {
        socket.emit(events.resTemp, JSON.stringify(data[0]));
      });
  });

  socket.on(events.reqHum, () => {
    Hum.find({})
      .sort({ _id: -1 })
      .limit(1)
      .then((data) => {
        socket.emit(events.resHum, JSON.stringify(data[0]));
      });
  });

  //웹에서 소켓을 이용한 LED ON/OFF 제어하기
  socket.on(events.commandLed, createContentInstance);
};
