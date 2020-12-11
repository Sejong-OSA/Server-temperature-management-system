(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdHVhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG4vLyBjb25zdCBmYW5PbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNGYW5PblwiKTtcbi8vIGNvbnN0IGZhbk9mZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNGYW5PZmZcIik7XG4vLyBjb25zdCBmYW5TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRmFuU3RhdHVzXCIpO1xuLy8gY29uc3QgZGV2aWNlRGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXZpY2VEZXRhaWxcIik7XG4vLyBjb25zdCBkZXZpY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNEZXZpY2VUaXRsZVwiKTtcblxuLy8gY29uc3QgaGFuZGxlRmFuT25PZmYgPSAoZXZlbnQpID0+IHtcbi8vICAgY29uc3Qge1xuLy8gICAgIHRhcmdldDogeyBuYW1lIH0sXG4vLyAgIH0gPSBldmVudDtcbi8vICAgY29uc3QgZGF0YSA9IG5hbWU7XG5cbi8vICAgLy8ge1wiZmFuXCI6MH0sIHtcImZhblwiOjF9XG4vLyAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5jb21tYW5kRmFuLCB7XG4vLyAgICAgZGF0YSxcbi8vICAgICBhY3R1YXRvcjogXCJmYW4xXCIsXG4vLyAgICAgdGl0bGU6IGRldmljZVRpdGxlLmlubmVySFRNTCxcbi8vICAgfSk7XG4vLyAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5jb21tYW5kRmFuLCB7XG4vLyAgICAgZGF0YSxcbi8vICAgICBhY3R1YXRvcjogXCJmYW4yXCIsXG4vLyAgICAgdGl0bGU6IGRldmljZVRpdGxlLmlubmVySFRNTCxcbi8vICAgfSk7XG4vLyAgIGZhblN0YXR1cy5pbm5lckhUTUwgPSBgRmFuIFN0YXR1cyA6IEZhbiAke25hbWUgPT09IFwiMVwiID8gXCJPblwiIDogXCJPZmZcIn1gO1xuLy8gfTtcblxuLy8gaWYgKGRldmljZURldGFpbCkge1xuLy8gICBmYW5Pbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRmFuT25PZmYpO1xuLy8gICBmYW5PZmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUZhbk9uT2ZmKTtcbi8vIH1cbiJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var clock = document.getElementById("jsClock");
var deviceDetail = document.querySelector(".deviceDetail");

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

if (deviceDetail) setInterval(handleTime, 1000);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NrLmpzIl0sIm5hbWVzIjpbImNsb2NrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRldmljZURldGFpbCIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVUaW1lIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ0aW1lQXJyYXkiLCJ0b1N0cmluZyIsInNwbGl0Iiwid2VlayIsIm1vbnRoIiwidG9kYXkiLCJ5ZWFyIiwidGltZSIsImlubmVySFRNTCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixlQUF2QixDQUFyQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxJQUFKLEVBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixVQUFVLENBQUNHLFFBQVgsR0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLENBQWxCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSCxTQUFTLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQU1JLEtBQUssR0FBR0osU0FBUyxDQUFDLENBQUQsQ0FBdkI7QUFDQSxNQUFNSyxLQUFLLEdBQUdMLFNBQVMsQ0FBQyxDQUFELENBQXZCO0FBQ0EsTUFBTU0sSUFBSSxHQUFHTixTQUFTLENBQUMsQ0FBRCxDQUF0QjtBQUNBLE1BQU1PLElBQUksR0FBR1AsU0FBUyxDQUFDLENBQUQsQ0FBdEI7QUFFQVIsRUFBQUEsS0FBSyxDQUFDZ0IsU0FBTixhQUFxQkYsSUFBckIsY0FBNkJGLEtBQTdCLGNBQXNDQyxLQUF0QyxjQUErQ0YsSUFBL0MsZUFBd0RJLElBQXhEO0FBQ0QsQ0FWRDs7QUFZQSxJQUFJWixZQUFKLEVBQWtCYyxXQUFXLENBQUNaLFVBQUQsRUFBYSxJQUFiLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDbG9ja1wiKTtcbmNvbnN0IGRldmljZURldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV2aWNlRGV0YWlsXCIpO1xuXG5jb25zdCBoYW5kbGVUaW1lID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGVkX2F0ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZUFycmF5ID0gY3JlYXRlZF9hdC50b1N0cmluZygpLnNwbGl0KFwiIFwiKTtcbiAgY29uc3Qgd2VlayA9IHRpbWVBcnJheVswXTtcbiAgY29uc3QgbW9udGggPSB0aW1lQXJyYXlbMV07XG4gIGNvbnN0IHRvZGF5ID0gdGltZUFycmF5WzJdO1xuICBjb25zdCB5ZWFyID0gdGltZUFycmF5WzNdO1xuICBjb25zdCB0aW1lID0gdGltZUFycmF5WzRdO1xuXG4gIGNsb2NrLmlubmVySFRNTCA9IGAke3llYXJ9ICR7bW9udGh9ICR7dG9kYXl9KCR7d2Vla30pICR7dGltZX1gO1xufTtcblxuaWYgKGRldmljZURldGFpbCkgc2V0SW50ZXJ2YWwoaGFuZGxlVGltZSwgMTAwMCk7XG4iXX0=
},{}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var deviceDetail = document.querySelector(".deviceDetail");
var deviceTitle = document.getElementById("jsDeviceTitle");
var fanOn = document.getElementById("jsFanOn");
var fanOff = document.getElementById("jsFanOff");
var fanStatus = document.getElementById("jsFanStatus");
var aSocket = io("/");
(0, _sockets.initSocket)(aSocket);
var timer = null;

var timer1 = function timer1() {
  console.log("timer1");
  (0, _sockets.getSocket)().emit(window.events.reqTemp, {
    title: deviceTitle.innerHTML
  });
  (0, _sockets.getSocket)().emit(window.events.reqHum, {
    title: deviceTitle.innerHTML
  });
};

if (timer == null && deviceDetail) {
  timer = setInterval(timer1, 1000);
}

var handleFanOnOff = function handleFanOnOff(event) {
  var name = event.target.name;
  var data = name; // {"fan":0}, {"fan":1}

  (0, _sockets.getSocket)().emit(window.events.commandFan, {
    data: data,
    actuator: "fan1",
    title: deviceTitle.innerHTML
  });
  (0, _sockets.getSocket)().emit(window.events.commandFan, {
    data: data,
    actuator: "fan2",
    title: deviceTitle.innerHTML
  });
  fanStatus.innerHTML = "Fan Status : Fan ".concat(name === "1" ? "On" : "Off");
};

if (deviceDetail) {
  var timerFlag = false;
  fanOn.addEventListener("click", handleFanOnOff);
  fanOn.addEventListener("click", function () {
    clearTimeout(timer);
    timerFlag = true;
  });
  fanOff.addEventListener("click", handleFanOnOff);
  fanOff.addEventListener("click", function () {
    if (timerFlag) {
      timerFlag = false;
      (0, _sockets.getSocket)().emit(window.events.fanAuto, {});
      timer = setInterval(timer1, 1000);
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldmljZURldGFpbC5qcyJdLCJuYW1lcyI6WyJkZXZpY2VEZXRhaWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXZpY2VUaXRsZSIsImdldEVsZW1lbnRCeUlkIiwiZmFuT24iLCJmYW5PZmYiLCJmYW5TdGF0dXMiLCJhU29ja2V0IiwiaW8iLCJ0aW1lciIsInRpbWVyMSIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwicmVxVGVtcCIsInRpdGxlIiwiaW5uZXJIVE1MIiwicmVxSHVtIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVGYW5Pbk9mZiIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsImRhdGEiLCJjb21tYW5kRmFuIiwiYWN0dWF0b3IiLCJ0aW1lckZsYWciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0IiwiZmFuQXV0byJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGVBQXhCLENBQXBCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQU1FLE1BQU0sR0FBR0wsUUFBUSxDQUFDRyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNRyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUVBLElBQU1JLE9BQU8sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBbEI7QUFDQSx5QkFBV0QsT0FBWDtBQUVBLElBQUlFLEtBQUssR0FBRyxJQUFaOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLE9BQS9CLEVBQXdDO0FBQUVDLElBQUFBLEtBQUssRUFBRWYsV0FBVyxDQUFDZ0I7QUFBckIsR0FBeEM7QUFDQSw0QkFBWUwsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNJLE1BQS9CLEVBQXVDO0FBQUVGLElBQUFBLEtBQUssRUFBRWYsV0FBVyxDQUFDZ0I7QUFBckIsR0FBdkM7QUFDRCxDQUpEOztBQU1BLElBQUlULEtBQUssSUFBSSxJQUFULElBQWlCVixZQUFyQixFQUFtQztBQUNqQ1UsRUFBQUEsS0FBSyxHQUFHVyxXQUFXLENBQUNWLE1BQUQsRUFBUyxJQUFULENBQW5CO0FBQ0Q7O0FBRUQsSUFBTVcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUVwQkMsSUFGb0IsR0FHNUJELEtBSDRCLENBRTlCRSxNQUY4QixDQUVwQkQsSUFGb0I7QUFJaEMsTUFBTUUsSUFBSSxHQUFHRixJQUFiLENBSmdDLENBTWhDOztBQUNBLDRCQUFZVixJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1csVUFBL0IsRUFBMkM7QUFDekNELElBQUFBLElBQUksRUFBSkEsSUFEeUM7QUFFekNFLElBQUFBLFFBQVEsRUFBRSxNQUYrQjtBQUd6Q1YsSUFBQUEsS0FBSyxFQUFFZixXQUFXLENBQUNnQjtBQUhzQixHQUEzQztBQUtBLDRCQUFZTCxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1csVUFBL0IsRUFBMkM7QUFDekNELElBQUFBLElBQUksRUFBSkEsSUFEeUM7QUFFekNFLElBQUFBLFFBQVEsRUFBRSxNQUYrQjtBQUd6Q1YsSUFBQUEsS0FBSyxFQUFFZixXQUFXLENBQUNnQjtBQUhzQixHQUEzQztBQUtBWixFQUFBQSxTQUFTLENBQUNZLFNBQVYsOEJBQTBDSyxJQUFJLEtBQUssR0FBVCxHQUFlLElBQWYsR0FBc0IsS0FBaEU7QUFDRCxDQWxCRDs7QUFvQkEsSUFBSXhCLFlBQUosRUFBa0I7QUFDaEIsTUFBSTZCLFNBQVMsR0FBRyxLQUFoQjtBQUVBeEIsRUFBQUEsS0FBSyxDQUFDeUIsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NSLGNBQWhDO0FBQ0FqQixFQUFBQSxLQUFLLENBQUN5QixnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDQyxJQUFBQSxZQUFZLENBQUNyQixLQUFELENBQVo7QUFDQW1CLElBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsR0FIRDtBQUlBdkIsRUFBQUEsTUFBTSxDQUFDd0IsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNSLGNBQWpDO0FBQ0FoQixFQUFBQSxNQUFNLENBQUN3QixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ3JDLFFBQUlELFNBQUosRUFBZTtBQUNiQSxNQUFBQSxTQUFTLEdBQUcsS0FBWjtBQUNBLGdDQUFZZixJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2dCLE9BQS9CLEVBQXdDLEVBQXhDO0FBQ0F0QixNQUFBQSxLQUFLLEdBQUdXLFdBQVcsQ0FBQ1YsTUFBRCxFQUFTLElBQVQsQ0FBbkI7QUFDRDtBQUNGLEdBTkQ7QUFPRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCwgaW5pdFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgZGV2aWNlRGV0YWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXZpY2VEZXRhaWxcIik7XG5jb25zdCBkZXZpY2VUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNEZXZpY2VUaXRsZVwiKTtcbmNvbnN0IGZhbk9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0Zhbk9uXCIpO1xuY29uc3QgZmFuT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0Zhbk9mZlwiKTtcbmNvbnN0IGZhblN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNGYW5TdGF0dXNcIik7XG5cbmNvbnN0IGFTb2NrZXQgPSBpbyhcIi9cIik7XG5pbml0U29ja2V0KGFTb2NrZXQpO1xuXG5sZXQgdGltZXIgPSBudWxsO1xuXG5jb25zdCB0aW1lcjEgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidGltZXIxXCIpO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVxVGVtcCwgeyB0aXRsZTogZGV2aWNlVGl0bGUuaW5uZXJIVE1MIH0pO1xuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVxSHVtLCB7IHRpdGxlOiBkZXZpY2VUaXRsZS5pbm5lckhUTUwgfSk7XG59O1xuXG5pZiAodGltZXIgPT0gbnVsbCAmJiBkZXZpY2VEZXRhaWwpIHtcbiAgdGltZXIgPSBzZXRJbnRlcnZhbCh0aW1lcjEsIDEwMDApO1xufVxuXG5jb25zdCBoYW5kbGVGYW5Pbk9mZiA9IChldmVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgdGFyZ2V0OiB7IG5hbWUgfSxcbiAgfSA9IGV2ZW50O1xuICBjb25zdCBkYXRhID0gbmFtZTtcblxuICAvLyB7XCJmYW5cIjowfSwge1wiZmFuXCI6MX1cbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmNvbW1hbmRGYW4sIHtcbiAgICBkYXRhLFxuICAgIGFjdHVhdG9yOiBcImZhbjFcIixcbiAgICB0aXRsZTogZGV2aWNlVGl0bGUuaW5uZXJIVE1MLFxuICB9KTtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmNvbW1hbmRGYW4sIHtcbiAgICBkYXRhLFxuICAgIGFjdHVhdG9yOiBcImZhbjJcIixcbiAgICB0aXRsZTogZGV2aWNlVGl0bGUuaW5uZXJIVE1MLFxuICB9KTtcbiAgZmFuU3RhdHVzLmlubmVySFRNTCA9IGBGYW4gU3RhdHVzIDogRmFuICR7bmFtZSA9PT0gXCIxXCIgPyBcIk9uXCIgOiBcIk9mZlwifWA7XG59O1xuXG5pZiAoZGV2aWNlRGV0YWlsKSB7XG4gIGxldCB0aW1lckZsYWcgPSBmYWxzZTtcblxuICBmYW5Pbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRmFuT25PZmYpO1xuICBmYW5Pbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXJGbGFnID0gdHJ1ZTtcbiAgfSk7XG4gIGZhbk9mZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRmFuT25PZmYpO1xuICBmYW5PZmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodGltZXJGbGFnKSB7XG4gICAgICB0aW1lckZsYWcgPSBmYWxzZTtcbiAgICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5mYW5BdXRvLCB7fSk7XG4gICAgICB0aW1lciA9IHNldEludGVydmFsKHRpbWVyMSwgMTAwMCk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

require("./sockets");

require("./deviceDetail");

require("./sensor");

require("./actuator");

require("./clock");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTU0MjE5YjcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9kZXZpY2VEZXRhaWxcIjtcbmltcG9ydCBcIi4vc2Vuc29yXCI7XG5pbXBvcnQgXCIuL2FjdHVhdG9yXCI7XG5pbXBvcnQgXCIuL2Nsb2NrXCI7XG4iXX0=
},{"./actuator":1,"./clock":2,"./deviceDetail":3,"./sensor":5,"./sockets":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleHum = exports.handleTemp = void 0;
var temp = document.querySelector(".temp");
var hum = document.querySelector(".hum");
var fanStatus = document.getElementById("jsFanStatus");
var tempValue = 0;
var humValue = 0;

var handleFanStatus = function handleFanStatus() {
  if (tempValue >= 26 || tempValue <= 18) {
    fanStatus.innerHTML = "Fan Status : Fan On";
  } else if (humValue >= 40 || humValue <= 15) {
    fanStatus.innerHTML = "Fan Status : Fan On";
  } else {
    fanStatus.innerHTML = "Fan Status : Fan Off";
  }
};

var handleTemp = function handleTemp(_ref) {
  var data = _ref.data;
  tempValue = data;
  temp.innerHTML = "Temperature: ".concat(data, "\xB0C");

  if (tempValue >= 26 || tempValue <= 18) {
    temp.classList.add("warn");
  } else {
    temp.classList.remove("warn");
  }

  handleFanStatus();
};

exports.handleTemp = handleTemp;

var handleHum = function handleHum(_ref2) {
  var data = _ref2.data;
  humValue = data;
  hum.innerHTML = "Humidity: ".concat(data, "%");

  if (humValue >= 40 || humValue <= 15) {
    hum.classList.add("warn");
  } else {
    hum.classList.remove("warn");
  }
};

exports.handleHum = handleHum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbnNvci5qcyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtIiwiZmFuU3RhdHVzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZW1wVmFsdWUiLCJodW1WYWx1ZSIsImhhbmRsZUZhblN0YXR1cyIsImlubmVySFRNTCIsImhhbmRsZVRlbXAiLCJkYXRhIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGFuZGxlSHVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLElBQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBRUEsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLENBQWY7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQUlGLFNBQVMsSUFBSSxFQUFiLElBQW1CQSxTQUFTLElBQUksRUFBcEMsRUFBd0M7QUFDdENGLElBQUFBLFNBQVMsQ0FBQ0ssU0FBVjtBQUNELEdBRkQsTUFFTyxJQUFJRixRQUFRLElBQUksRUFBWixJQUFrQkEsUUFBUSxJQUFJLEVBQWxDLEVBQXNDO0FBQzNDSCxJQUFBQSxTQUFTLENBQUNLLFNBQVY7QUFDRCxHQUZNLE1BRUE7QUFDTEwsSUFBQUEsU0FBUyxDQUFDSyxTQUFWO0FBQ0Q7QUFDRixDQVJEOztBQVVPLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdENMLEVBQUFBLFNBQVMsR0FBR0ssSUFBWjtBQUNBWCxFQUFBQSxJQUFJLENBQUNTLFNBQUwsMEJBQWlDRSxJQUFqQzs7QUFFQSxNQUFJTCxTQUFTLElBQUksRUFBYixJQUFtQkEsU0FBUyxJQUFJLEVBQXBDLEVBQXdDO0FBQ3RDTixJQUFBQSxJQUFJLENBQUNZLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixNQUFuQjtBQUNELEdBRkQsTUFFTztBQUNMYixJQUFBQSxJQUFJLENBQUNZLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixNQUF0QjtBQUNEOztBQUNETixFQUFBQSxlQUFlO0FBQ2hCLENBVk07Ozs7QUFZQSxJQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxRQUFjO0FBQUEsTUFBWEosSUFBVyxTQUFYQSxJQUFXO0FBQ3JDSixFQUFBQSxRQUFRLEdBQUdJLElBQVg7QUFDQVIsRUFBQUEsR0FBRyxDQUFDTSxTQUFKLHVCQUE2QkUsSUFBN0I7O0FBRUEsTUFBSUosUUFBUSxJQUFJLEVBQVosSUFBa0JBLFFBQVEsSUFBSSxFQUFsQyxFQUFzQztBQUNwQ0osSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsTUFBbEI7QUFDRCxHQUZELE1BRU87QUFDTFYsSUFBQUEsR0FBRyxDQUFDUyxTQUFKLENBQWNFLE1BQWQsQ0FBcUIsTUFBckI7QUFDRDtBQUNGLENBVE0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpO1xuY29uc3QgaHVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1cIik7XG5jb25zdCBmYW5TdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRmFuU3RhdHVzXCIpO1xuXG5sZXQgdGVtcFZhbHVlID0gMDtcbmxldCBodW1WYWx1ZSA9IDA7XG5cbmNvbnN0IGhhbmRsZUZhblN0YXR1cyA9ICgpID0+IHtcbiAgaWYgKHRlbXBWYWx1ZSA+PSAyNiB8fCB0ZW1wVmFsdWUgPD0gMTgpIHtcbiAgICBmYW5TdGF0dXMuaW5uZXJIVE1MID0gYEZhbiBTdGF0dXMgOiBGYW4gT25gO1xuICB9IGVsc2UgaWYgKGh1bVZhbHVlID49IDQwIHx8IGh1bVZhbHVlIDw9IDE1KSB7XG4gICAgZmFuU3RhdHVzLmlubmVySFRNTCA9IGBGYW4gU3RhdHVzIDogRmFuIE9uYDtcbiAgfSBlbHNlIHtcbiAgICBmYW5TdGF0dXMuaW5uZXJIVE1MID0gYEZhbiBTdGF0dXMgOiBGYW4gT2ZmYDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVRlbXAgPSAoeyBkYXRhIH0pID0+IHtcbiAgdGVtcFZhbHVlID0gZGF0YTtcbiAgdGVtcC5pbm5lckhUTUwgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YX3CsENgO1xuXG4gIGlmICh0ZW1wVmFsdWUgPj0gMjYgfHwgdGVtcFZhbHVlIDw9IDE4KSB7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKFwid2FyblwiKTtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YXJuXCIpO1xuICB9XG4gIGhhbmRsZUZhblN0YXR1cygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUh1bSA9ICh7IGRhdGEgfSkgPT4ge1xuICBodW1WYWx1ZSA9IGRhdGE7XG4gIGh1bS5pbm5lckhUTUwgPSBgSHVtaWRpdHk6ICR7ZGF0YX0lYDtcblxuICBpZiAoaHVtVmFsdWUgPj0gNDAgfHwgaHVtVmFsdWUgPD0gMTUpIHtcbiAgICBodW0uY2xhc3NMaXN0LmFkZChcIndhcm5cIik7XG4gIH0gZWxzZSB7XG4gICAgaHVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YXJuXCIpO1xuICB9XG59O1xuIl19
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _sensor = require("./sensor");

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
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsInJlc1RlbXAiLCJoYW5kbGVUZW1wIiwicmVzSHVtIiwiaGFuZGxlSHVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFBQSxnQkFDbEJDLE1BRGtCO0FBQUEsTUFDN0JDLE1BRDZCLFdBQzdCQSxNQUQ2QjtBQUVyQ0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyxrQkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksTUFBakIsRUFBeUJDLGlCQUF6QjtBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVUZW1wLCBoYW5kbGVIdW0gfSBmcm9tIFwiLi9zZW5zb3JcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5yZXNUZW1wLCBoYW5kbGVUZW1wKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5yZXNIdW0sIGhhbmRsZUh1bSk7XG59O1xuIl19
},{"./sensor":5}]},{},[4])