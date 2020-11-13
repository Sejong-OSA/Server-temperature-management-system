import { getSocket } from "./sockets";

const ledOn = document.getElementById("jsLedOn");
const ledOff = document.getElementById("jsLedOff");
const ledStatus = document.getElementById("jsLedStatus");

const handleLedOnOff = (event) => {
  const {
    target: { name },
  } = event;
  // const data = JSON.stringify({ led: name });
  const data = name;

  // {"led":1}, {"led":2}
  getSocket().emit(window.events.commandLed, { data, actuator: "led" });
  ledStatus.innerHTML = `LED STATUS : LED ${name === "1" ? "ON" : "OFF"}`;
};

ledOn.addEventListener("click", handleLedOnOff);
ledOff.addEventListener("click", handleLedOnOff);
