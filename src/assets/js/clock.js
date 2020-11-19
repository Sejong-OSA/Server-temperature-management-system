const clock = document.getElementById("jsClock");
const deviceDetail = document.querySelector(".deviceDetail");

const handleTime = () => {
  const created_at = new Date();
  const timeArray = created_at.toString().split(" ");
  const week = timeArray[0];
  const month = timeArray[1];
  const today = timeArray[2];
  const year = timeArray[3];
  const time = timeArray[4];

  clock.innerHTML = `${year} ${month} ${today}(${week}) ${time}`;
};

if (deviceDetail) setInterval(handleTime, 1000);
