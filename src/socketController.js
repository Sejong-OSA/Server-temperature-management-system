import events from "./events";
import Dht11 from "./models/Dht11";

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);

  //웹에서 소켓을 이용한 DHT11 센서데이터 모니터링
  socket.on(events.reqTempHum, () => {
    Dht11.find({})
      .sort({ _id: -1 })
      .limit(1)
      .then((data) => {
        socket.emit(events.resTempHum, JSON.stringify(data[0]));
      });
  });

  //웹에서 소켓을 이용한 LED ON/OFF 제어하기
  socket.on(events.socket_evt_led, (data) => {
    const obj = JSON.parse(data);
    client.publish("led", obj.led + "");
  });
};
