(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./home");

require("./sensor");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZjZhNjYxN2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9ob21lXCI7XG5pbXBvcnQgXCIuL3NlbnNvclwiO1xuIl19
},{"./home":2,"./sensor":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var aSocket = io("/");
(0, _sockets.initSocket)(aSocket);
var timer = null; // $(document).ready(function () {
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

var timer1 = function timer1() {
  (0, _sockets.getSocket)().emit(window.events.reqTempHum);
  console.log("---------");
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYVNvY2tldCIsImlvIiwidGltZXIiLCJ0aW1lcjEiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwicmVxVGVtcEh1bSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWxCO0FBQ0EseUJBQVdELE9BQVg7QUFFQSxJQUFJRSxLQUFLLEdBQUcsSUFBWixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxVQUEvQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJUCxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQkEsRUFBQUEsS0FBSyxHQUFHUSxXQUFXLENBQUNQLE1BQUQsRUFBUyxJQUFULENBQW5CO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQsIGluaXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGFTb2NrZXQgPSBpbyhcIi9cIik7XG5pbml0U29ja2V0KGFTb2NrZXQpO1xuXG5sZXQgdGltZXIgPSBudWxsO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4vLyAgIC8vIE5vZGUuanPrs7Trgrgg642w7J207YSw66W8IOyImOyLoO2VmOuKlCDrtoDrtoRcbi8vICAgc29ja2V0Lm9uKFwic29ja2V0X2V2dF9tcXR0XCIsIChkYXRhKSA9PiB7XG4vLyAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4vLyAgICAgJChcIi5tcXR0bGlzdFwiKS5odG1sKFwiPGxpPlwiICsgZGF0YS50bXAgKyBcIihcIiArIGRhdGEuaHVtICsgXCIlKVwiICsgXCI8L2xpPlwiKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gY29uc3QgbGVkT25PZmYgPSAodmFsdWUpID0+IHtcbi8vICAgLy8ge1wibGVkXCI6MX0sIHtcImxlZFwiOjJ9XG4vLyAgIHNvY2tldC5lbWl0KFwic29ja2V0X2V2dF9sZWRcIiwgSlNPTi5zdHJpbmdpZnkoeyBsZWQ6IE51bWJlcih2YWx1ZSkgfSkpO1xuLy8gfTtcblxuLy8gY29uc3QgYWpheGxlZE9uT2ZmID0gKHZhbHVlKSA9PiB7XG4vLyAgIGlmICh2YWx1ZSA9PSBcIjFcIikgdmFyIHZhbHVlID0gXCJvblwiO1xuLy8gICBlbHNlIGlmICh2YWx1ZSA9PSBcIjJcIikgdmFyIHZhbHVlID0gXCJvZmZcIjtcbi8vICAgJC5hamF4KHtcbi8vICAgICB1cmw6IFwiaHR0cDovLzE3Mi4zMC4xLjQ0OjMwMDAvZGV2aWNlcy9sZWRcIixcbi8vICAgICB0eXBlOiBcInBvc3RcIixcbi8vICAgICBkYXRhOiB7IGZsYWc6IHZhbHVlIH0sXG4vLyAgICAgc3VjY2VzczogbGVkU3RhdHVzLFxuLy8gICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBhbGVydChcImVycm9yXCIpO1xuLy8gICAgIH0sXG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gY29uc3QgbGVkU3RhdHVzID0gKG9iaikgPT4ge1xuLy8gICAkKFwiI2xlZFwiKS5odG1sKFwiPGZvbnQgY29sb3I9J3JlZCc+XCIgKyBvYmoubGVkICsgXCI8L2ZvbnQ+IOuQmOyXiOyKteuLiOuLpC5cIik7XG4vLyB9O1xuXG5jb25zdCB0aW1lcjEgPSAoKSA9PiB7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5yZXFUZW1wSHVtKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS1cIik7XG59O1xuXG5pZiAodGltZXIgPT0gbnVsbCkge1xuICB0aW1lciA9IHNldEludGVydmFsKHRpbWVyMSwgMTAwMCk7XG59XG4iXX0=
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTempHum = void 0;
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");

var handleTempHum = function handleTempHum(data) {
  data = JSON.parse(data);
  console.log(data);
  temp.innerHTML = "Temparature: ".concat(data.tmp);
  hum.innerHTML = "Huminity: ".concat(data.hum);
};

exports.handleTempHum = handleTempHum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvci5qcyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtIiwiaGFuZGxlVGVtcEh1bSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwidG1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjs7QUFFTyxJQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUNyQ0EsRUFBQUEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsSUFBWCxDQUFQO0FBQ0FHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FMLEVBQUFBLElBQUksQ0FBQ1UsU0FBTCwwQkFBaUNMLElBQUksQ0FBQ00sR0FBdEM7QUFDQVIsRUFBQUEsR0FBRyxDQUFDTyxTQUFKLHVCQUE2QkwsSUFBSSxDQUFDRixHQUFsQztBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpO1xuY29uc3QgaHVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1cIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVUZW1wSHVtID0gKGRhdGEpID0+IHtcbiAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICB0ZW1wLmlubmVySFRNTCA9IGBUZW1wYXJhdHVyZTogJHtkYXRhLnRtcH1gO1xuICBodW0uaW5uZXJIVE1MID0gYEh1bWluaXR5OiAke2RhdGEuaHVtfWA7XG59O1xuIl19
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _sensor = require("./sensor");

/* eslint-disable no-undef */
var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  console.log("initsocket");
  var _window = window,
      events = _window.events;
  console.log(events);
  socket = aSocket;
  socket.on(events.resTempHum, _sensor.handleTempHum); // socket.on(events.playerUpdate, handlePlayerUpdate);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJyZXNUZW1wSHVtIiwiaGFuZGxlVGVtcEh1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZBO0FBSUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDckNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFEcUMsZ0JBRWxCQyxNQUZrQjtBQUFBLE1BRTdCQyxNQUY2QixXQUU3QkEsTUFGNkI7QUFHckNILEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaO0FBQ0FQLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNRLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxVQUFqQixFQUE2QkMscUJBQTdCLEVBTHFDLENBTXJDO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbmltcG9ydCB7IGhhbmRsZVRlbXBIdW0gfSBmcm9tIFwiLi9zZW5zb3JcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc29sZS5sb2coXCJpbml0c29ja2V0XCIpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICBjb25zb2xlLmxvZyhldmVudHMpO1xuICBzb2NrZXQgPSBhU29ja2V0O1xuICBzb2NrZXQub24oZXZlbnRzLnJlc1RlbXBIdW0sIGhhbmRsZVRlbXBIdW0pO1xuICAvLyBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKTtcbn07XG4iXX0=
},{"./sensor":3}]},{},[1])