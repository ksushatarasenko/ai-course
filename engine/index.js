// engine/index.js
import { i18n } from "./i18n.js";
import { initLang, getLang, setLang } from "./lang.js";

initLang();
const lang = getLang();
const t = i18n[lang];

// текст
document.querySelector("h1").textContent = t.index.heroTitle;
document.querySelector("p").textContent = t.index.heroSubtitle;

// кнопки языка
document.querySelectorAll(".lang-switch button").forEach(btn => {
  if (btn.dataset.lang === lang) btn.classList.add("active");

  btn.onclick = () => {
    setLang(btn.dataset.lang);
    location.reload();
  };
});

// серии
const container = document.getElementById("series-list");
container.innerHTML = "";

t.series.forEach(series => {
  const a = document.createElement("a");
  a.href = `series.html?series=${series.id}`;
  a.innerHTML = `<h3>${series.title}</h3><p>${series.subtitle}</p>`;
  container.appendChild(a);
});
