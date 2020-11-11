const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");

export const handleTempHum = (data) => {
  data = JSON.parse(data);
  temp.innerHTML = `Temparature: ${data.tmp}C`;
  hum.innerHTML = `Huminity: ${data.hum}%`;
};
