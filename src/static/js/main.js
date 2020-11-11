(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var ledOn = document.getElementById("jsLedOn");
var ledOff = document.getElementById("jsLedOff");
var ledStatus = document.getElementById("jsLedStatus");

var handleLedOnOff = function handleLedOnOff(event) {
  var name = event.target.name;
  var data = JSON.stringify({
    led: name
  }); // {"led":1}, {"led":2}

  (0, _sockets.getSocket)().emit(window.events.commandLed, data);
  ledStatus.innerHTML = "LED STATUS : LED ".concat(name === "1" ? "ON" : "OFF");
};

ledOn.addEventListener("click", handleLedOnOff);
ledOff.addEventListener("click", handleLedOnOff);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhdG9yLmpzIl0sIm5hbWVzIjpbImxlZE9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxlZE9mZiIsImxlZFN0YXR1cyIsImhhbmRsZUxlZE9uT2ZmIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsZWQiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiY29tbWFuZExlZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFsQjs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRXBCQyxJQUZvQixHQUc1QkQsS0FINEIsQ0FFOUJFLE1BRjhCLENBRXBCRCxJQUZvQjtBQUloQyxNQUFNRSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVDLElBQUFBLEdBQUcsRUFBRUw7QUFBUCxHQUFmLENBQWIsQ0FKZ0MsQ0FNaEM7O0FBQ0EsNEJBQVlNLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxVQUEvQixFQUEyQ1AsSUFBM0M7QUFDQUwsRUFBQUEsU0FBUyxDQUFDYSxTQUFWLDhCQUEwQ1YsSUFBSSxLQUFLLEdBQVQsR0FBZSxJQUFmLEdBQXNCLEtBQWhFO0FBQ0QsQ0FURDs7QUFXQVAsS0FBSyxDQUFDa0IsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NiLGNBQWhDO0FBQ0FGLE1BQU0sQ0FBQ2UsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNiLGNBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBsZWRPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMZWRPblwiKTtcbmNvbnN0IGxlZE9mZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMZWRPZmZcIik7XG5jb25zdCBsZWRTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTGVkU3RhdHVzXCIpO1xuXG5jb25zdCBoYW5kbGVMZWRPbk9mZiA9IChldmVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgdGFyZ2V0OiB7IG5hbWUgfSxcbiAgfSA9IGV2ZW50O1xuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBsZWQ6IG5hbWUgfSk7XG5cbiAgLy8ge1wibGVkXCI6MX0sIHtcImxlZFwiOjJ9XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5jb21tYW5kTGVkLCBkYXRhKTtcbiAgbGVkU3RhdHVzLmlubmVySFRNTCA9IGBMRUQgU1RBVFVTIDogTEVEICR7bmFtZSA9PT0gXCIxXCIgPyBcIk9OXCIgOiBcIk9GRlwifWA7XG59O1xuXG5sZWRPbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTGVkT25PZmYpO1xubGVkT2ZmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVMZWRPbk9mZik7XG4iXX0=
},{"./sockets":5}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./home");

require("./sensor");

require("./actuator");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDJlNTNmMTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9ob21lXCI7XG5pbXBvcnQgXCIuL3NlbnNvclwiO1xuaW1wb3J0IFwiLi9hY3R1YXRvclwiO1xuIl19
},{"./actuator":1,"./home":3,"./sensor":4,"./sockets":5}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var aSocket = io("/");
(0, _sockets.initSocket)(aSocket);
var timer = null;

var timer1 = function timer1() {
  (0, _sockets.getSocket)().emit(window.events.reqTempHum);
};

if (timer == null) {
  timer = setInterval(timer1, 1000);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYVNvY2tldCIsImlvIiwidGltZXIiLCJ0aW1lcjEiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwicmVxVGVtcEh1bSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBbEI7QUFDQSx5QkFBV0QsT0FBWDtBQUVBLElBQUlFLEtBQUssR0FBRyxJQUFaOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxVQUEvQjtBQUNELENBRkQ7O0FBSUEsSUFBSUwsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakJBLEVBQUFBLEtBQUssR0FBR00sV0FBVyxDQUFDTCxNQUFELEVBQVMsSUFBVCxDQUFuQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0LCBpbml0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBhU29ja2V0ID0gaW8oXCIvXCIpO1xuaW5pdFNvY2tldChhU29ja2V0KTtcblxubGV0IHRpbWVyID0gbnVsbDtcblxuY29uc3QgdGltZXIxID0gKCkgPT4ge1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVxVGVtcEh1bSk7XG59O1xuXG5pZiAodGltZXIgPT0gbnVsbCkge1xuICB0aW1lciA9IHNldEludGVydmFsKHRpbWVyMSwgMTAwMCk7XG59XG4iXX0=
},{"./sockets":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTempHum = void 0;
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");

var handleTempHum = function handleTempHum(data) {
  data = JSON.parse(data);
  temp.innerHTML = "Temparature: ".concat(data.tmp, "C");
  hum.innerHTML = "Huminity: ".concat(data.hum, "%");
};

exports.handleTempHum = handleTempHum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvci5qcyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtIiwiaGFuZGxlVGVtcEh1bSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJpbm5lckhUTUwiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaOztBQUVPLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3JDQSxFQUFBQSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixJQUFYLENBQVA7QUFDQUwsRUFBQUEsSUFBSSxDQUFDUSxTQUFMLDBCQUFpQ0gsSUFBSSxDQUFDSSxHQUF0QztBQUNBTixFQUFBQSxHQUFHLENBQUNLLFNBQUosdUJBQTZCSCxJQUFJLENBQUNGLEdBQWxDO0FBQ0QsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBcIik7XG5jb25zdCBodW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bVwiKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVRlbXBIdW0gPSAoZGF0YSkgPT4ge1xuICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgdGVtcC5pbm5lckhUTUwgPSBgVGVtcGFyYXR1cmU6ICR7ZGF0YS50bXB9Q2A7XG4gIGh1bS5pbm5lckhUTUwgPSBgSHVtaW5pdHk6ICR7ZGF0YS5odW19JWA7XG59O1xuIl19
},{}],5:[function(require,module,exports){
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
  socket = aSocket;
  socket.on(events.resTempHum, _sensor.handleTempHum); // socket.on(events.playerUpdate, handlePlayerUpdate);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJyZXNUZW1wSHVtIiwiaGFuZGxlVGVtcEh1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUZBO0FBSUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDckNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFEcUMsZ0JBRWxCQyxNQUZrQjtBQUFBLE1BRTdCQyxNQUY2QixXQUU3QkEsTUFGNkI7QUFHckNQLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNRLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxVQUFqQixFQUE2QkMscUJBQTdCLEVBSnFDLENBS3JDO0FBQ0QsQ0FOTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbmltcG9ydCB7IGhhbmRsZVRlbXBIdW0gfSBmcm9tIFwiLi9zZW5zb3JcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc29sZS5sb2coXCJpbml0c29ja2V0XCIpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICBzb2NrZXQgPSBhU29ja2V0O1xuICBzb2NrZXQub24oZXZlbnRzLnJlc1RlbXBIdW0sIGhhbmRsZVRlbXBIdW0pO1xuICAvLyBzb2NrZXQub24oZXZlbnRzLnBsYXllclVwZGF0ZSwgaGFuZGxlUGxheWVyVXBkYXRlKTtcbn07XG4iXX0=
},{"./sensor":4}]},{},[2])