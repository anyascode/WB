const main = document.getElementById("main");
const tabMenu = document.querySelector(".tabMenu");

export function loadHome() {
  tabMenu.dataset.page = "resume";
  main.innerHTML = `
    <div id="resume">
      <div class="row p-4 d-flex flex-row mainBackground">
        <div class="col-xl-4 col-lg-6 p-4 mainContent">
          <img
            src="./images/IMG_1807.jpg"
            alt="My Personal Photo"
            class="img-fluid"
          />
        </div>

        <div
          class="col-xl-8 col-lg-6 p-4 d-flex flex-column align-items-start justify-content-between mainContent"
        >
          <h4>Фам Киеу Ань (aka Аня)</h4>
          <p class="description">г. Казань (гражданство РФ)</p>
          <h5>Обо мне</h5>
          <p class="description">
            Меня зовут Киеу Ань, мне 26 лет, я прошла очный курс по
            Frontend-разработке в Avenue School в г. Казани и хотела бы начать
            свою карьеру в сфере IT. Очень надеюсь, что вы примите меня на
            стажировку, так как это отличная возможность отточить свои навыки,
            изучить что-то новое для себя и развиваться.
          </p>
          <h5>Навыки</h5>
          <ul class="list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue JS</li>
            <li>Astro</li>
          </ul>
          <h5>Контактная информация</h5>
          <a href="mailto:anyafam@icloud.com" class="d-flex gap-2 contactInfo"
          ><i class="bi bi-envelope"></i>anyafam@icloud.com</a
          >
          <a href="tel:+79656078999" class="d-flex gap-2 contactInfo"
            ><i class="bi bi-phone"></i>+79656078999</a
          >
          <a href="https://t.me/anyanchous" class="d-flex gap-2 contactInfo"
            ><i class="bi bi-telegram"></i>@anyanchous</a
          >
        </div>
      </div>
    </div>
  `;
}
