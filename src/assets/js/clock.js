const clock = document.getElementById("jsClock");

const handleTime = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const created_at = new Date(
    Date.UTC(year, month, today, hours, minutes, seconds)
  );
  const timeArray = created_at.toString().split(" ");
  const week = timeArray[0];
  month = timeArray[1];
  today = timeArray[2];
  year = timeArray[3];
  const time = timeArray[4];

  clock.innerHTML = `${year} ${month} ${today}(${week}) ${time}`;
};

function init() {
  setInterval(handleTime, 1000);
}

init();
