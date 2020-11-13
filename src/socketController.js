import events from "./events";
import Temp from "./models/Temp";
import Hum from "./models/Hum";
import mqtt from "mqtt";

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

const client = mqtt.connect(connectOptions);

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
  socket.on(events.commandLed, (data) => {
    const obj = JSON.parse(data);
    client.publish("led", obj.led);
  });
};
