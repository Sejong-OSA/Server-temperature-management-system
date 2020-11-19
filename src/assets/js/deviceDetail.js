import { getSocket, initSocket } from "./sockets";

const deviceDetail = document.querySelector(".deviceDetail");
const deviceTitle = document.getElementById("jsDeviceTitle");

const aSocket = io("/");
initSocket(aSocket);

let timer = null;

const timer1 = () => {
  getSocket().emit(window.events.reqTemp, { title: deviceTitle.innerHTML });
  getSocket().emit(window.events.reqHum, { title: deviceTitle.innerHTML });
};

if (timer == null && deviceDetail) {
  timer = setInterval(timer1, 1000);
}
