const main = document.getElementById("main");
const tabMenu = document.querySelector(".tabMenu");

export async function loadHome() {
  tabMenu.dataset.page = "resume";
  const html = await fetch("/pages/home.html").then((data) => data.text());
  main.innerHTML = html;
}
