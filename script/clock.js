const clock = document.querySelector(".js-clock .clock__text"); // div


function getTime() {
  const now = new Date();
  let hours = now.getHours();
  let timeL = hours > 12 ? "PM " : "AM " ; 
  hours = hours > 12 ? hours - 12: hours;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `${hours < 10 ? `0${hours}` : hours}
  : ${minutes < 10 ? `0${minutes}` : minutes}`;
  
  clock.innerHTML = timeL + time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();