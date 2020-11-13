import { getSocket, initSocket } from "./sockets";

const aSocket = io("/");
initSocket(aSocket);

let timer = null;

const timer1 = () => {
  getSocket().emit(window.events.reqTemp);
  getSocket().emit(window.events.reqHum);
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
