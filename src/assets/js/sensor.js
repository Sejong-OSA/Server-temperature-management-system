const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");

export const handleTemp = (obj) => {
  const jsonObj = JSON.parse(obj);
  console.log(jsonObj.data);
  temp.innerHTML = `Temparature: ${jsonObj.data}°C`;
};

export const handleHum = (obj) => {
  const jsonObj = JSON.parse(obj);
  console.log(jsonObj.data);
  hum.innerHTML = `Huminity: ${jsonObj.data}%`;
};
