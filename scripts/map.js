const main = document.getElementById("main");
const tabMenu = document.querySelector(".tabMenu");

export async function loadMap() {
  tabMenu.dataset.page = "map";
  const html = await fetch("/pages/map.html").then((data) => data.text());
  main.innerHTML = html;

  window.setTimeout(() => ymaps.ready(init), 1000);
}

function init() {
  const map = new ymaps.Map("mapYandex", {
    center: [55.819722803774, 49.14909861148066],
    zoom: 17,
  });

  const placemark = new ymaps.Placemark([
    55.819878340324635, 49.14875797093578,
  ]);
  map.geoObjects.add(placemark);
}
