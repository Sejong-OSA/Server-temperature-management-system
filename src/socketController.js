import events from "./events";

export const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);

  //웹에서 소켓을 이용한 DHT11 센서데이터 모니터링
  socket.on(events.socket_evt_mqtt, (data) => {
    DHT11.find({})
      .sort({ _id: -1 })
      .limit(1)
      .then((data) => {
        console.log(`JSON.stringify(data[0]) : ${JSON.stringify(data[0])}`);
        socket.emit(events.socket_evt_mqtt, JSON.stringify(data[0]));
      });
  });

  //웹에서 소켓을 이용한 LED ON/OFF 제어하기
  socket.on(events.socket_evt_led, (data) => {
    const obj = JSON.parse(data);
    client.publish("led", obj.led + "");
  });
};
