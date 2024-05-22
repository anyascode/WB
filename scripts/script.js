const start = Date.now();
sessionStorage.setItem("start", String(start));

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "resume",
  "/map": "map",
  "/timerpage": "timerpage",
};

function showPage(page) {
  document.querySelectorAll("#main > div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(page).style.display = "block";
  document.querySelector(".tabMenu").dataset.page = page;
}

function handleLocation() {
  const path = window.location.pathname;
  const page = routes[path];
  showPage(page || "resume");
}
window.onpopstate = handleLocation;
window.route = route;
handleLocation();

document.querySelector(".tabMenu").addEventListener("click", route);
