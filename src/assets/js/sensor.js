const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");
const ledStatus = document.getElementById("jsLedStatus");

export const handleTemp = (obj) => {
  const jsonObj = JSON.parse(obj);
  const tempValue = jsonObj.data;

  temp.innerHTML = `Temparature: ${tempValue}°C`;

  if (tempValue >= 26 || tempValue <= 18) {
    ledStatus.innerHTML = `LED STATUS : LED ON`;
  } else {
    ledStatus.innerHTML = `LED STATUS : LED OFF`;
  }
};

export const handleHum = (obj) => {
  const jsonObj = JSON.parse(obj);
  const humValue = jsonObj.data;

  hum.innerHTML = `Humidity: ${humValue}%`;

  if (humValue >= 60 || humValue <= 40) {
    ledStatus.innerHTML = `LED STATUS : LED ON`;
  } else {
    ledStatus.innerHTML = `LED STATUS : LED OFF`;
  }
};
