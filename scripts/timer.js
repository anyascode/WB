let begin = Number(sessionStorage.getItem("start"));

const setTimer = () => {
  let timer = document.querySelector("#timer");

  if (timer) {
    let now = Date.now();
    let elapsed = (now - begin) / 1000 + 1;
    let seconds = String(Math.floor(elapsed) % 60).padStart(2, "0");
    let minutes = String(Math.floor(elapsed / 60) % 60).padStart(2, "0");
    let hours = String(Math.floor(elapsed / 60 / 60) % 60).padStart(2, "0");
    timer.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setTimeout(setTimer, 1000);
};
setTimer();