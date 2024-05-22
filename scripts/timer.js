let timer = document.querySelector("#timer");
let begin = Number(sessionStorage.getItem("start"));

window.setInterval(() => {
  let now = Date.now();
  let elapsed = (now - begin) / 1000;
  let seconds = String(Math.floor(elapsed) % 60).padStart(2, "0");
  let minutes = String(Math.floor(elapsed / 60) % 60).padStart(2, "0");
  let hours = String(Math.floor(elapsed / 60 / 60) % 60).padStart(2, "0");
  timer.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
