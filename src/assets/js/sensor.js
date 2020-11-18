const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");
const ledStatus = document.getElementById("jsFanStatus");

let tempValue = 0;
let humValue = 0;

const handleLedStatus = () => {
  if (tempValue >= 26 || tempValue <= 18) {
    ledStatus.innerHTML = `Fan Status : Fan On`;
  } else if (humValue >= 60 || humValue <= 40) {
    ledStatus.innerHTML = `Fan Status : Fan On`;
  } else {
    ledStatus.innerHTML = `Fan Status : Fan Off`;
  }
};

export const handleTemp = (obj) => {
  const jsonObj = JSON.parse(obj);
  tempValue = jsonObj.data;

  temp.innerHTML = `Temperature: ${tempValue}°C`;

  if (tempValue >= 26 || tempValue <= 18) {
    temp.classList.add("warn");
  } else {
    temp.classList.remove("warn");
  }
  handleLedStatus();
};

export const handleHum = (obj) => {
  const jsonObj = JSON.parse(obj);
  humValue = jsonObj.data;

  hum.innerHTML = `Humidity: ${humValue}%`;

  if (humValue >= 60 || humValue <= 40) {
    hum.classList.add("warn");
  } else {
    hum.classList.remove("warn");
  }
};
