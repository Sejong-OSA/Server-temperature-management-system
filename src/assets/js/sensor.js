const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");
const fanStatus = document.getElementById("jsFanStatus");

let tempValue = 0;
let humValue = 0;

const handleFanStatus = () => {
  if (tempValue >= 26 || tempValue <= 18) {
    fanStatus.innerHTML = `Fan Status : Fan On`;
  } else if (humValue >= 40 || humValue <= 15) {
    fanStatus.innerHTML = `Fan Status : Fan On`;
  } else {
    fanStatus.innerHTML = `Fan Status : Fan Off`;
  }
};

export const handleTemp = ({ data }) => {
  tempValue = data;
  temp.innerHTML = `Temperature: ${data}°C`;

  if (tempValue >= 26 || tempValue <= 18) {
    temp.classList.add("warn");
  } else {
    temp.classList.remove("warn");
  }
  handleFanStatus();
};

export const handleHum = ({ data }) => {
  humValue = data;
  hum.innerHTML = `Humidity: ${data}%`;

  if (humValue >= 40 || humValue <= 15) {
    hum.classList.add("warn");
  } else {
    hum.classList.remove("warn");
  }
};
