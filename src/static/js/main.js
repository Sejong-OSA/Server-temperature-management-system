(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var ledOn = document.getElementById("jsLedOn");
var ledOff = document.getElementById("jsLedOff");
var ledStatus = document.getElementById("jsFanStatus");

var handleLedOnOff = function handleLedOnOff(event) {
  var name = event.target.name;
  var data = name; // {"led":1}, {"led":2}

  (0, _sockets.getSocket)().emit(window.events.commandLed, {
    data: data,
    actuator: "fan1"
  });
  (0, _sockets.getSocket)().emit(window.events.commandLed, {
    data: data,
    actuator: "fan2"
  });
  ledStatus.innerHTML = "Fan Status : Fan ".concat(name === "1" ? "On" : "Off");
};

ledOn.addEventListener("click", handleLedOnOff);
ledOff.addEventListener("click", handleLedOnOff);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhdG9yLmpzIl0sIm5hbWVzIjpbImxlZE9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxlZE9mZiIsImxlZFN0YXR1cyIsImhhbmRsZUxlZE9uT2ZmIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJjb21tYW5kTGVkIiwiYWN0dWF0b3IiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7O0FBRUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUVwQkMsSUFGb0IsR0FHNUJELEtBSDRCLENBRTlCRSxNQUY4QixDQUVwQkQsSUFGb0I7QUFJaEMsTUFBTUUsSUFBSSxHQUFHRixJQUFiLENBSmdDLENBTWhDOztBQUNBLDRCQUFZRyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsVUFBL0IsRUFBMkM7QUFBRUosSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFLLElBQUFBLFFBQVEsRUFBRTtBQUFsQixHQUEzQztBQUNBLDRCQUFZSixJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsVUFBL0IsRUFBMkM7QUFBRUosSUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFLLElBQUFBLFFBQVEsRUFBRTtBQUFsQixHQUEzQztBQUNBVixFQUFBQSxTQUFTLENBQUNXLFNBQVYsOEJBQTBDUixJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0IsS0FBaEU7QUFDRCxDQVZEOztBQVlBUCxLQUFLLENBQUNnQixnQkFBTixDQUF1QixPQUF2QixFQUFnQ1gsY0FBaEM7QUFDQUYsTUFBTSxDQUFDYSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ1gsY0FBakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGxlZE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xlZE9uXCIpO1xuY29uc3QgbGVkT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xlZE9mZlwiKTtcbmNvbnN0IGxlZFN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNGYW5TdGF0dXNcIik7XG5cbmNvbnN0IGhhbmRsZUxlZE9uT2ZmID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHsgbmFtZSB9LFxuICB9ID0gZXZlbnQ7XG4gIGNvbnN0IGRhdGEgPSBuYW1lO1xuXG4gIC8vIHtcImxlZFwiOjF9LCB7XCJsZWRcIjoyfVxuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuY29tbWFuZExlZCwgeyBkYXRhLCBhY3R1YXRvcjogXCJmYW4xXCIgfSk7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5jb21tYW5kTGVkLCB7IGRhdGEsIGFjdHVhdG9yOiBcImZhbjJcIiB9KTtcbiAgbGVkU3RhdHVzLmlubmVySFRNTCA9IGBGYW4gU3RhdHVzIDogRmFuICR7bmFtZSA9PT0gXCIxXCIgPyBcIk9uXCIgOiBcIk9mZlwifWA7XG59O1xuXG5sZWRPbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVkT25PZmYpO1xubGVkT2ZmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWRPbk9mZik7XG4iXX0=
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

var clock = document.getElementById("jsClock");

var handleTime = function handleTime() {
  var created_at = new Date();
  var timeArray = created_at.toString().split(" ");
  var week = timeArray[0];
  var month = timeArray[1];
  var today = timeArray[2];
  var year = timeArray[3];
  var time = timeArray[4];
  clock.innerHTML = "".concat(year, " ").concat(month, " ").concat(today, "(").concat(week, ") ").concat(time);
};

function init() {
  setInterval(handleTime, 1000);
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NrLmpzIl0sIm5hbWVzIjpbImNsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZVRpbWUiLCJjcmVhdGVkX2F0IiwiRGF0ZSIsInRpbWVBcnJheSIsInRvU3RyaW5nIiwic3BsaXQiLCJ3ZWVrIiwibW9udGgiLCJ0b2RheSIsInllYXIiLCJ0aW1lIiwiaW5uZXJIVE1MIiwiaW5pdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxVQUFVLEdBQUcsSUFBSUMsSUFBSixFQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxRQUFYLEdBQXNCQyxLQUF0QixDQUE0QixHQUE1QixDQUFsQjtBQUNBLE1BQU1DLElBQUksR0FBR0gsU0FBUyxDQUFDLENBQUQsQ0FBdEI7QUFDQSxNQUFNSSxLQUFLLEdBQUdKLFNBQVMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsTUFBTUssS0FBSyxHQUFHTCxTQUFTLENBQUMsQ0FBRCxDQUF2QjtBQUNBLE1BQU1NLElBQUksR0FBR04sU0FBUyxDQUFDLENBQUQsQ0FBdEI7QUFDQSxNQUFNTyxJQUFJLEdBQUdQLFNBQVMsQ0FBQyxDQUFELENBQXRCO0FBRUFOLEVBQUFBLEtBQUssQ0FBQ2MsU0FBTixhQUFxQkYsSUFBckIsY0FBNkJGLEtBQTdCLGNBQXNDQyxLQUF0QyxjQUErQ0YsSUFBL0MsZUFBd0RJLElBQXhEO0FBQ0QsQ0FWRDs7QUFZQSxTQUFTRSxJQUFULEdBQWdCO0FBQ2RDLEVBQUFBLFdBQVcsQ0FBQ2IsVUFBRCxFQUFhLElBQWIsQ0FBWDtBQUNEOztBQUVEWSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2xvY2tcIik7XG5cbmNvbnN0IGhhbmRsZVRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRfYXQgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lQXJyYXkgPSBjcmVhdGVkX2F0LnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xuICBjb25zdCB3ZWVrID0gdGltZUFycmF5WzBdO1xuICBjb25zdCBtb250aCA9IHRpbWVBcnJheVsxXTtcbiAgY29uc3QgdG9kYXkgPSB0aW1lQXJyYXlbMl07XG4gIGNvbnN0IHllYXIgPSB0aW1lQXJyYXlbM107XG4gIGNvbnN0IHRpbWUgPSB0aW1lQXJyYXlbNF07XG5cbiAgY2xvY2suaW5uZXJIVE1MID0gYCR7eWVhcn0gJHttb250aH0gJHt0b2RheX0oJHt3ZWVrfSkgJHt0aW1lfWA7XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBzZXRJbnRlcnZhbChoYW5kbGVUaW1lLCAxMDAwKTtcbn1cblxuaW5pdCgpO1xuIl19
},{}],3:[function(require,module,exports){
"use strict";

require("./sockets");

require("./home");

require("./sensor");

require("./actuator");

require("./clock");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDZhNjVlMzQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9ob21lXCI7XG5pbXBvcnQgXCIuL3NlbnNvclwiO1xuaW1wb3J0IFwiLi9hY3R1YXRvclwiO1xuaW1wb3J0IFwiLi9jbG9ja1wiO1xuIl19
},{"./actuator":1,"./clock":2,"./home":4,"./sensor":5,"./sockets":6}],4:[function(require,module,exports){
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
},{"./sockets":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleHum = exports.handleTemp = void 0;
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");
var ledStatus = document.getElementById("jsFanStatus");
var tempValue = 0;
var humValue = 0;

var handleLedStatus = function handleLedStatus() {
  if (tempValue >= 26 || tempValue <= 18) {
    ledStatus.innerHTML = "Fan Status : Fan On";
  } else if (humValue >= 60 || humValue <= 40) {
    ledStatus.innerHTML = "Fan Status : Fan On";
  } else {
    ledStatus.innerHTML = "Fan Status : Fan Off";
  }
};

var handleTemp = function handleTemp(obj) {
  var jsonObj = JSON.parse(obj);
  tempValue = jsonObj.data;
  temp.innerHTML = "Temperature: ".concat(tempValue, "\xB0C");

  if (tempValue >= 26 || tempValue <= 18) {
    temp.classList.add("warn");
  } else {
    temp.classList.remove("warn");
  }

  handleLedStatus();
};

exports.handleTemp = handleTemp;

var handleHum = function handleHum(obj) {
  var jsonObj = JSON.parse(obj);
  humValue = jsonObj.data;
  hum.innerHTML = "Humidity: ".concat(humValue, "%");

  if (humValue >= 60 || humValue <= 40) {
    hum.classList.add("warn");
  } else {
    hum.classList.remove("warn");
  }
};

exports.handleHum = handleHum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvci5qcyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtIiwibGVkU3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZW1wVmFsdWUiLCJodW1WYWx1ZSIsImhhbmRsZUxlZFN0YXR1cyIsImlubmVySFRNTCIsImhhbmRsZVRlbXAiLCJvYmoiLCJqc29uT2JqIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImhhbmRsZUh1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUVBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUlDLFFBQVEsR0FBRyxDQUFmOztBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFJRixTQUFTLElBQUksRUFBYixJQUFtQkEsU0FBUyxJQUFJLEVBQXBDLEVBQXdDO0FBQ3RDRixJQUFBQSxTQUFTLENBQUNLLFNBQVY7QUFDRCxHQUZELE1BRU8sSUFBSUYsUUFBUSxJQUFJLEVBQVosSUFBa0JBLFFBQVEsSUFBSSxFQUFsQyxFQUFzQztBQUMzQ0gsSUFBQUEsU0FBUyxDQUFDSyxTQUFWO0FBQ0QsR0FGTSxNQUVBO0FBQ0xMLElBQUFBLFNBQVMsQ0FBQ0ssU0FBVjtBQUNEO0FBQ0YsQ0FSRDs7QUFVTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDakMsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQUFoQjtBQUNBTCxFQUFBQSxTQUFTLEdBQUdNLE9BQU8sQ0FBQ0csSUFBcEI7QUFFQWYsRUFBQUEsSUFBSSxDQUFDUyxTQUFMLDBCQUFpQ0gsU0FBakM7O0FBRUEsTUFBSUEsU0FBUyxJQUFJLEVBQWIsSUFBbUJBLFNBQVMsSUFBSSxFQUFwQyxFQUF3QztBQUN0Q04sSUFBQUEsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0QsR0FGRCxNQUVPO0FBQ0xqQixJQUFBQSxJQUFJLENBQUNnQixTQUFMLENBQWVFLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDs7QUFDRFYsRUFBQUEsZUFBZTtBQUNoQixDQVpNOzs7O0FBY0EsSUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ1IsR0FBRCxFQUFTO0FBQ2hDLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEdBQVgsQ0FBaEI7QUFDQUosRUFBQUEsUUFBUSxHQUFHSyxPQUFPLENBQUNHLElBQW5CO0FBRUFaLEVBQUFBLEdBQUcsQ0FBQ00sU0FBSix1QkFBNkJGLFFBQTdCOztBQUVBLE1BQUlBLFFBQVEsSUFBSSxFQUFaLElBQWtCQSxRQUFRLElBQUksRUFBbEMsRUFBc0M7QUFDcENKLElBQUFBLEdBQUcsQ0FBQ2EsU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xkLElBQUFBLEdBQUcsQ0FBQ2EsU0FBSixDQUFjRSxNQUFkLENBQXFCLE1BQXJCO0FBQ0Q7QUFDRixDQVhNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKTtcbmNvbnN0IGh1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtXCIpO1xuY29uc3QgbGVkU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0ZhblN0YXR1c1wiKTtcblxubGV0IHRlbXBWYWx1ZSA9IDA7XG5sZXQgaHVtVmFsdWUgPSAwO1xuXG5jb25zdCBoYW5kbGVMZWRTdGF0dXMgPSAoKSA9PiB7XG4gIGlmICh0ZW1wVmFsdWUgPj0gMjYgfHwgdGVtcFZhbHVlIDw9IDE4KSB7XG4gICAgbGVkU3RhdHVzLmlubmVySFRNTCA9IGBGYW4gU3RhdHVzIDogRmFuIE9uYDtcbiAgfSBlbHNlIGlmIChodW1WYWx1ZSA+PSA2MCB8fCBodW1WYWx1ZSA8PSA0MCkge1xuICAgIGxlZFN0YXR1cy5pbm5lckhUTUwgPSBgRmFuIFN0YXR1cyA6IEZhbiBPbmA7XG4gIH0gZWxzZSB7XG4gICAgbGVkU3RhdHVzLmlubmVySFRNTCA9IGBGYW4gU3RhdHVzIDogRmFuIE9mZmA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVUZW1wID0gKG9iaikgPT4ge1xuICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShvYmopO1xuICB0ZW1wVmFsdWUgPSBqc29uT2JqLmRhdGE7XG5cbiAgdGVtcC5pbm5lckhUTUwgPSBgVGVtcGVyYXR1cmU6ICR7dGVtcFZhbHVlfcKwQ2A7XG5cbiAgaWYgKHRlbXBWYWx1ZSA+PSAyNiB8fCB0ZW1wVmFsdWUgPD0gMTgpIHtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ3YXJuXCIpO1xuICB9IGVsc2Uge1xuICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZShcIndhcm5cIik7XG4gIH1cbiAgaGFuZGxlTGVkU3RhdHVzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlSHVtID0gKG9iaikgPT4ge1xuICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZShvYmopO1xuICBodW1WYWx1ZSA9IGpzb25PYmouZGF0YTtcblxuICBodW0uaW5uZXJIVE1MID0gYEh1bWlkaXR5OiAke2h1bVZhbHVlfSVgO1xuXG4gIGlmIChodW1WYWx1ZSA+PSA2MCB8fCBodW1WYWx1ZSA8PSA0MCkge1xuICAgIGh1bS5jbGFzc0xpc3QuYWRkKFwid2FyblwiKTtcbiAgfSBlbHNlIHtcbiAgICBodW0uY2xhc3NMaXN0LnJlbW92ZShcIndhcm5cIik7XG4gIH1cbn07XG4iXX0=
},{}],6:[function(require,module,exports){
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
},{"./actuator":1,"./sensor":5}]},{},[3])