import { getSocket, initSocket } from "./sockets";

const deviceDetail = document.querySelector(".deviceDetail");
const deviceTitle = document.getElementById("jsDeviceTitle");
const fanOn = document.getElementById("jsFanOn");
const fanOff = document.getElementById("jsFanOff");
const fanStatus = document.getElementById("jsFanStatus");

const aSocket = io("/");
initSocket(aSocket);

let timer = null;

const timer1 = () => {
  console.log("timer1");
  getSocket().emit(window.events.reqTemp, { title: deviceTitle.innerHTML });
  getSocket().emit(window.events.reqHum, { title: deviceTitle.innerHTML });
};

if (timer == null && deviceDetail) {
  timer = setInterval(timer1, 1000);
}

const handleFanOnOff = (event) => {
  const {
    target: { name },
  } = event;
  const data = name;

  // {"fan":0}, {"fan":1}
  getSocket().emit(window.events.commandFan, {
    data,
    actuator: "fan1",
    title: deviceTitle.innerHTML,
  });
  getSocket().emit(window.events.commandFan, {
    data,
    actuator: "fan2",
    title: deviceTitle.innerHTML,
  });
  fanStatus.innerHTML = `Fan Status : Fan ${name === "1" ? "On" : "Off"}`;
};

if (deviceDetail) {
  let timerFlag = false;

  fanOn.addEventListener("click", handleFanOnOff);
  fanOn.addEventListener("click", () => {
    clearTimeout(timer);
    timerFlag = true;
  });
  fanOff.addEventListener("click", handleFanOnOff);
  fanOff.addEventListener("click", () => {
    if (timerFlag) {
      timerFlag = false;
      getSocket().emit(window.events.fanAuto, {});
      timer = setInterval(timer1, 1000);
    }
  });
}
