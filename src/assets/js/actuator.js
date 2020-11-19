import { getSocket } from "./sockets";

const ledOn = document.getElementById("jsLedOn");
const ledOff = document.getElementById("jsLedOff");
const ledStatus = document.getElementById("jsFanStatus");
const deviceDetail = document.querySelector(".deviceDetail");
const deviceTitle = document.getElementById("jsDeviceTitle");

const handleLedOnOff = (event) => {
  const {
    target: { name },
  } = event;
  const data = name;

  // {"led":1}, {"led":2}
  getSocket().emit(window.events.commandLed, {
    data,
    actuator: "fan1",
    title: deviceTitle.innerHTML,
  });
  getSocket().emit(window.events.commandLed, {
    data,
    actuator: "fan2",
    title: deviceTitle.innerHTML,
  });
  ledStatus.innerHTML = `Fan Status : Fan ${name === "1" ? "On" : "Off"}`;
};

if (deviceDetail) {
  ledOn.addEventListener("click", handleLedOnOff);
  ledOff.addEventListener("click", handleLedOnOff);
}
