// import { getSocket } from "./sockets";

// const fanOn = document.getElementById("jsFanOn");
// const fanOff = document.getElementById("jsFanOff");
// const fanStatus = document.getElementById("jsFanStatus");
// const deviceDetail = document.querySelector(".deviceDetail");
// const deviceTitle = document.getElementById("jsDeviceTitle");

// const handleFanOnOff = (event) => {
//   const {
//     target: { name },
//   } = event;
//   const data = name;

//   // {"fan":0}, {"fan":1}
//   getSocket().emit(window.events.commandFan, {
//     data,
//     actuator: "fan1",
//     title: deviceTitle.innerHTML,
//   });
//   getSocket().emit(window.events.commandFan, {
//     data,
//     actuator: "fan2",
//     title: deviceTitle.innerHTML,
//   });
//   fanStatus.innerHTML = `Fan Status : Fan ${name === "1" ? "On" : "Off"}`;
// };

// if (deviceDetail) {
//   fanOn.addEventListener("click", handleFanOnOff);
//   fanOff.addEventListener("click", handleFanOnOff);
// }
