const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");

export const handleTempHum = (data) => {
  data = JSON.parse(data);
  console.log(data);
  temp.innerHTML = `Temparature: ${data.tmp}`;
  hum.innerHTML = `Huminity: ${data.hum}`;
};
