import { getSocket } from "./sockets";

const ledOn = document.getElementById("jsLedOn");
const ledOff = document.getElementById("jsLedOff");
const ledStatus = document.getElementById("jsFanStatus");

const handleLedOnOff = (event) => {
  const {
    target: { name },
  } = event;
  const data = name;

  // {"led":1}, {"led":2}
  getSocket().emit(window.events.commandLed, { data, actuator: "fan1" });
  getSocket().emit(window.events.commandLed, { data, actuator: "fan2" });
  ledStatus.innerHTML = `Fan Status : Fan ${name === "1" ? "On" : "Off"}`;
};

ledOn.addEventListener("click", handleLedOnOff);
ledOff.addEventListener("click", handleLedOnOff);
