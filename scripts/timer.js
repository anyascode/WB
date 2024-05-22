const main = document.getElementById("main");
const tabMenu = document.querySelector(".tabMenu");

export function loadTimer() {
  tabMenu.dataset.page = "timer";
  main.innerHTML = `
    <div id="timerpage">
      <div class="row p-4 mainBackground">
        <div
          class="col-6 col-lg-10 col-xl-11 d-flex flex-column gap-4 px-4 pt-3 pb-4 mainContent"
        >
          <div class="titleTimer">Timer</div>
          <div id="timer">00:00:00</div>
        </div>
        <div
          class="col-6 col-lg-2 col-xl-1 d-flex flex-row align-items-center justify-content-end gap-1 px-4 pb-5 mainContent"
        >
          <img src="../icons/down.svg" alt="arrow" />
          <img src="../icons/Union.svg" alt="refresh" />
          <img src="../icons/close.svg" alt="close" />
        </div>
      </div>
    </div>
  `;

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
}
