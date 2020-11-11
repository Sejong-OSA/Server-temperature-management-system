import { getSocket, initSocket } from "./sockets";

const aSocket = io("/");
initSocket(aSocket);

let timer = null;

const timer1 = () => {
  getSocket().emit(window.events.reqTempHum);
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
