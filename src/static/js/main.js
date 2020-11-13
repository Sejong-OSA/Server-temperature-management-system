(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var ledOn = document.getElementById("jsLedOn");
var ledOff = document.getElementById("jsLedOff");
var ledStatus = document.getElementById("jsLedStatus");

var handleLedOnOff = function handleLedOnOff(event) {
  var name = event.target.name; // const data = JSON.stringify({ led: name });

  var data = name; // {"led":1}, {"led":2}

  (0, _sockets.getSocket)().emit(window.events.commandLed, {
    data: data,
    actuator: "led"
  });
  ledStatus.innerHTML = "LED STATUS : LED ".concat(name === "1" ? "ON" : "OFF");
}; // export const BELedOnOff = (event) => {
//   const {
//     target: { name },
//   } = event;
//   // const data = JSON.stringify({ led: name });
//   const data = name;
//   // {"led":1}, {"led":2}
//   getSocket().emit(window.events.commandLed, { data, actuator: "led" });
//   ledStatus.innerHTML = `LED STATUS : LED ${name === "1" ? "ON" : "OFF"}`;
// };


ledOn.addEventListener("click", handleLedOnOff);
ledOff.addEventListener("click", handleLedOnOff);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhdG9yLmpzIl0sIm5hbWVzIjpbImxlZE9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxlZE9mZiIsImxlZFN0YXR1cyIsImhhbmRsZUxlZE9uT2ZmIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJjb21tYW5kTGVkIiwiYWN0dWF0b3IiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7O0FBRUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUVwQkMsSUFGb0IsR0FHNUJELEtBSDRCLENBRTlCRSxNQUY4QixDQUVwQkQsSUFGb0IsRUFJaEM7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHRixJQUFiLENBTGdDLENBT2hDOztBQUNBLDRCQUFZRyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsVUFBL0IsRUFBMkM7QUFBRUosSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFLLElBQUFBLFFBQVEsRUFBRTtBQUFsQixHQUEzQztBQUNBVixFQUFBQSxTQUFTLENBQUNXLFNBQVYsOEJBQTBDUixJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0IsS0FBaEU7QUFDRCxDQVZELEMsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFQLEtBQUssQ0FBQ2dCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDWCxjQUFoQztBQUNBRixNQUFNLENBQUNhLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDWCxjQUFqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgbGVkT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTGVkT25cIik7XG5jb25zdCBsZWRPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTGVkT2ZmXCIpO1xuY29uc3QgbGVkU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xlZFN0YXR1c1wiKTtcblxuY29uc3QgaGFuZGxlTGVkT25PZmYgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIHRhcmdldDogeyBuYW1lIH0sXG4gIH0gPSBldmVudDtcbiAgLy8gY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbGVkOiBuYW1lIH0pO1xuICBjb25zdCBkYXRhID0gbmFtZTtcblxuICAvLyB7XCJsZWRcIjoxfSwge1wibGVkXCI6Mn1cbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmNvbW1hbmRMZWQsIHsgZGF0YSwgYWN0dWF0b3I6IFwibGVkXCIgfSk7XG4gIGxlZFN0YXR1cy5pbm5lckhUTUwgPSBgTEVEIFNUQVRVUyA6IExFRCAke25hbWUgPT09IFwiMVwiID8gXCJPTlwiIDogXCJPRkZcIn1gO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IEJFTGVkT25PZmYgPSAoZXZlbnQpID0+IHtcbi8vICAgY29uc3Qge1xuLy8gICAgIHRhcmdldDogeyBuYW1lIH0sXG4vLyAgIH0gPSBldmVudDtcbi8vICAgLy8gY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbGVkOiBuYW1lIH0pO1xuLy8gICBjb25zdCBkYXRhID0gbmFtZTtcblxuLy8gICAvLyB7XCJsZWRcIjoxfSwge1wibGVkXCI6Mn1cbi8vICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmNvbW1hbmRMZWQsIHsgZGF0YSwgYWN0dWF0b3I6IFwibGVkXCIgfSk7XG4vLyAgIGxlZFN0YXR1cy5pbm5lckhUTUwgPSBgTEVEIFNUQVRVUyA6IExFRCAke25hbWUgPT09IFwiMVwiID8gXCJPTlwiIDogXCJPRkZcIn1gO1xuLy8gfTtcblxubGVkT24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxlZE9uT2ZmKTtcbmxlZE9mZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVkT25PZmYpO1xuIl19
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./home");

require("./sensor");

require("./actuator");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYmU4YjdiZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9ob21lXCI7XG5pbXBvcnQgXCIuL3NlbnNvclwiO1xuaW1wb3J0IFwiLi9hY3R1YXRvclwiO1xuIl19
},{"./actuator":1,"./home":3,"./sensor":4,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var aSocket = io("/");
(0, _sockets.initSocket)(aSocket);
var timer = null;

var timer1 = function timer1() {
  (0, _sockets.getSocket)().emit(window.events.reqTemp);
  (0, _sockets.getSocket)().emit(window.events.reqHum);
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYVNvY2tldCIsImlvIiwidGltZXIiLCJ0aW1lcjEiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwicmVxVGVtcCIsInJlcUh1bSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBbEI7QUFDQSx5QkFBV0QsT0FBWDtBQUVBLElBQUlFLEtBQUssR0FBRyxJQUFaOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxPQUEvQjtBQUNBLDRCQUFZSCxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0UsTUFBL0I7QUFDRCxDQUhEOztBQUtBLElBQUlOLEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ2pCQSxFQUFBQSxLQUFLLEdBQUdPLFdBQVcsQ0FBQ04sTUFBRCxFQUFTLElBQVQsQ0FBbkI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCwgaW5pdFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYVNvY2tldCA9IGlvKFwiL1wiKTtcbmluaXRTb2NrZXQoYVNvY2tldCk7XG5cbmxldCB0aW1lciA9IG51bGw7XG5cbmNvbnN0IHRpbWVyMSA9ICgpID0+IHtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnJlcVRlbXApO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVxSHVtKTtcbn07XG5cbmlmICh0aW1lciA9PSBudWxsKSB7XG4gIHRpbWVyID0gc2V0SW50ZXJ2YWwodGltZXIxLCAxMDAwKTtcbn1cbiJdfQ==
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleHum = exports.handleTemp = void 0;
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");
var ledStatus = document.getElementById("jsLedStatus");

var handleTemp = function handleTemp(obj) {
  var jsonObj = JSON.parse(obj);
  var tempValue = jsonObj.data;
  temp.innerHTML = "Temparature: ".concat(tempValue, "\xB0C");

  if (tempValue >= 26 || tempValue <= 18) {
    ledStatus.innerHTML = "LED STATUS : LED ON";
  } else {
    ledStatus.innerHTML = "LED STATUS : LED OFF";
  }
};

exports.handleTemp = handleTemp;

var handleHum = function handleHum(obj) {
  var jsonObj = JSON.parse(obj);
  var humValue = jsonObj.data;
  hum.innerHTML = "Temparature: ".concat(humValue, "\xB0C");

  if (humValue >= 60 || humValue <= 40) {
    ledStatus.innerHTML = "LED STATUS : LED ON";
  } else {
    ledStatus.innerHTML = "LED STATUS : LED OFF";
  }
};

exports.handleHum = handleHum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvci5qcyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtIiwibGVkU3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVUZW1wIiwib2JqIiwianNvbk9iaiIsIkpTT04iLCJwYXJzZSIsInRlbXBWYWx1ZSIsImRhdGEiLCJpbm5lckhUTUwiLCJoYW5kbGVIdW0iLCJodW1WYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFFTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDakMsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQUFoQjtBQUNBLE1BQU1JLFNBQVMsR0FBR0gsT0FBTyxDQUFDSSxJQUExQjtBQUVBWixFQUFBQSxJQUFJLENBQUNhLFNBQUwsMEJBQWlDRixTQUFqQzs7QUFFQSxNQUFJQSxTQUFTLElBQUksRUFBYixJQUFtQkEsU0FBUyxJQUFJLEVBQXBDLEVBQXdDO0FBQ3RDUCxJQUFBQSxTQUFTLENBQUNTLFNBQVY7QUFDRCxHQUZELE1BRU87QUFDTFQsSUFBQUEsU0FBUyxDQUFDUyxTQUFWO0FBQ0Q7QUFDRixDQVhNOzs7O0FBYUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1AsR0FBRCxFQUFTO0FBQ2hDLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQVgsQ0FBaEI7QUFDQSxNQUFNUSxRQUFRLEdBQUdQLE9BQU8sQ0FBQ0ksSUFBekI7QUFFQVQsRUFBQUEsR0FBRyxDQUFDVSxTQUFKLDBCQUFnQ0UsUUFBaEM7O0FBRUEsTUFBSUEsUUFBUSxJQUFJLEVBQVosSUFBa0JBLFFBQVEsSUFBSSxFQUFsQyxFQUFzQztBQUNwQ1gsSUFBQUEsU0FBUyxDQUFDUyxTQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0xULElBQUFBLFNBQVMsQ0FBQ1MsU0FBVjtBQUNEO0FBQ0YsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG5jb25zdCBodW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bVwiKTtcbmNvbnN0IGxlZFN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMZWRTdGF0dXNcIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVUZW1wID0gKG9iaikgPT4ge1xuICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShvYmopO1xuICBjb25zdCB0ZW1wVmFsdWUgPSBqc29uT2JqLmRhdGE7XG5cbiAgdGVtcC5pbm5lckhUTUwgPSBgVGVtcGFyYXR1cmU6ICR7dGVtcFZhbHVlfcKwQ2A7XG5cbiAgaWYgKHRlbXBWYWx1ZSA+PSAyNiB8fCB0ZW1wVmFsdWUgPD0gMTgpIHtcbiAgICBsZWRTdGF0dXMuaW5uZXJIVE1MID0gYExFRCBTVEFUVVMgOiBMRUQgT05gO1xuICB9IGVsc2Uge1xuICAgIGxlZFN0YXR1cy5pbm5lckhUTUwgPSBgTEVEIFNUQVRVUyA6IExFRCBPRkZgO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSHVtID0gKG9iaikgPT4ge1xuICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShvYmopO1xuICBjb25zdCBodW1WYWx1ZSA9IGpzb25PYmouZGF0YTtcblxuICBodW0uaW5uZXJIVE1MID0gYFRlbXBhcmF0dXJlOiAke2h1bVZhbHVlfcKwQ2A7XG5cbiAgaWYgKGh1bVZhbHVlID49IDYwIHx8IGh1bVZhbHVlIDw9IDQwKSB7XG4gICAgbGVkU3RhdHVzLmlubmVySFRNTCA9IGBMRUQgU1RBVFVTIDogTEVEIE9OYDtcbiAgfSBlbHNlIHtcbiAgICBsZWRTdGF0dXMuaW5uZXJIVE1MID0gYExFRCBTVEFUVVMgOiBMRUQgT0ZGYDtcbiAgfVxufTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _sensor = require("./sensor");

var _actuator = require("./actuator");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.resTemp, _sensor.handleTemp);
  socket.on(events.resHum, _sensor.handleHum);
  socket.on(events.setLed, _actuator.BELedOnOff);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsInJlc1RlbXAiLCJoYW5kbGVUZW1wIiwicmVzSHVtIiwiaGFuZGxlSHVtIiwic2V0TGVkIiwiQkVMZWRPbk9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsZ0JBQ2xCQyxNQURrQjtBQUFBLE1BQzdCQyxNQUQ2QixXQUM3QkEsTUFENkI7QUFFckNMLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxPQUFqQixFQUEwQkMsa0JBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLE1BQWpCLEVBQXlCQyxpQkFBekI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLG9CQUF6QjtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVUZW1wLCBoYW5kbGVIdW0gfSBmcm9tIFwiLi9zZW5zb3JcIjtcbmltcG9ydCB7IEJFTGVkT25PZmYgfSBmcm9tIFwiLi9hY3R1YXRvclwiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXQgPSAoYVNvY2tldCkgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICBzb2NrZXQgPSBhU29ja2V0O1xuICBzb2NrZXQub24oZXZlbnRzLnJlc1RlbXAsIGhhbmRsZVRlbXApO1xuICBzb2NrZXQub24oZXZlbnRzLnJlc0h1bSwgaGFuZGxlSHVtKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5zZXRMZWQsIEJFTGVkT25PZmYpO1xufTtcbiJdfQ==
},{"./actuator":1,"./sensor":4}]},{},[2])