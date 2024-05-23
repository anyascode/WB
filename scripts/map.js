const main = document.getElementById("main");
const tabMenu = document.querySelector(".tabMenu");

export function loadMap() {
  tabMenu.dataset.page = "map";
  main.innerHTML = `
    <div id="map">
      <div class="row p-4 d-flex justify-content-between mainBackground">
        <div class="col-xl-11 col-lg-10 col-6 p-4 mainContent">
          <p class="map">Basic map</p>
        </div>
        <div
          class="col-xl-1 col-lg-2 col-6 d-flex flex-row align-items-center justify-content-end gap-1 pb-2 ps-4 mainContent"
        >
          <img src="./icons/down.svg" alt="arrow" />
          <img src="./icons/Union.svg" alt="refresh" />
          <img src="./icons/close.svg" alt="close" />
        </div>
        <div class="col px-4 pb-4 mainContent">
          <div
            style="
              position: relative;
              height: 480px;
              background-color: #ffffff;
            "
          >
            <div
              style="
                position: absolute;
                left: 50%;
                top: 50%;
                translate: -50%-50%;
              "
            >
              <div class="spinner-border"></div>
            </div>
            <div style="position: relative">
              <div id="mapYandex" class="mapYandex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

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
