ymaps.ready(init);

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
