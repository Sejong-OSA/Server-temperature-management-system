import { getSocket, initSocket } from "./sockets";

const aSocket = io("/");
initSocket(aSocket);

let timer = null;

// $(document).ready(function () {
//   // Node.js보낸 데이터를 수신하는 부분
//   socket.on("socket_evt_mqtt", (data) => {
//     data = JSON.parse(data);
//     $(".mqttlist").html("<li>" + data.tmp + "(" + data.hum + "%)" + "</li>");
//   });
// });

// const ledOnOff = (value) => {
//   // {"led":1}, {"led":2}
//   socket.emit("socket_evt_led", JSON.stringify({ led: Number(value) }));
// };

// const ajaxledOnOff = (value) => {
//   if (value == "1") var value = "on";
//   else if (value == "2") var value = "off";
//   $.ajax({
//     url: "http://172.30.1.44:3000/devices/led",
//     type: "post",
//     data: { flag: value },
//     success: ledStatus,
//     error: function () {
//       alert("error");
//     },
//   });
// };

// const ledStatus = (obj) => {
//   $("#led").html("<font color='red'>" + obj.led + "</font> 되었습니다.");
// };

const timer1 = () => {
  getSocket().emit(window.events.reqTempHum);
  console.log("---------");
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
