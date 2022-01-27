const $clock = document.getElementById('clock');


function onClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  $clock.innerText = `${hours}:${minutes}:${seconds}`;
}

onClock();
setInterval(onClock, 1000);
