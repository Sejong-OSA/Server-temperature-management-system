import request from "request";

import events from "./events";
import Device from "../models/Device";

const cse = {};

// build cse
cse.host = "127.0.0.1";
cse.port = "7579";
cse.name = "Mobius";

// build ae

export const createContentInstance = ({ data, actuator, title }) => {
  const cseURL = `http://${cse.host}:${cse.port}`;
  const con = data;
  const cseRelease = "1";

  let requestNr = 0;

  console.log("\n[REQUEST]");

  const options = {
    uri: `${cseURL}/${cse.name}/${title}/${actuator}`,
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
  //웹에서 소켓을 이용한 DHT11 센서데이터 모니터링
  socket.on(events.reqTemp, ({ title }) => {
    Device.findOne({ title })
      .populate("temp")
      .then((device) => {
        const data = device.temp[device.temp.length - 1].data;
        socket.emit(events.resTemp, { data });
      });
  });

  socket.on(events.reqHum, ({ title }) => {
    Device.findOne({ title })
      .populate("hum")
      .then((device) => {
        const data = device.hum[device.hum.length - 1].data;
        socket.emit(events.resHum, { data });
      });
  });

  //웹에서 소켓을 이용한 LED ON/OFF 제어하기
  socket.on(events.commandLed, createContentInstance);
};
