const start = Date.now();
sessionStorage.setItem("start", String(start));

import { loadHome } from "./home.js";
import { loadMap } from "./map.js";
import { loadTimer } from "./timer.js";

const routes = {
  "/": loadHome,
  "/map": loadMap,
  "/timer": loadTimer,
};

loadHome();

window.addEventListener("popstate", () => {
  const handle = routes[window.location.pathname];
  handle();
});

const links = document.querySelectorAll(".tabMenu a");
for (const link of links) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);

    const url = new URL(event.target.href);
    const handle = routes[url.pathname];

    handle();
  });
}
