
// series.js 
import { i18n } from "./i18n.js";
import { initLang, getLang, setLang } from "./lang.js";

initLang();
const lang = getLang();
const t = i18n[lang];

console.log("🌍 Текущий язык:", lang);
console.log("📦 i18n[lang]:", t);
// 1. читаем серию
const params = new URLSearchParams(window.location.search);
const seriesId = Number(params.get("series"));

// 2. находим серию
const series = t.series.find(s => s.id === seriesId);
console.log("📘 seriesId из URL:", seriesId);
console.log("📘 Найденная серия:", series);
// защита
if (!series) {
  document.getElementById("lessons").innerHTML = "<p>Серия не найдена</p>";
  throw new Error("Series not found");
}

// 3. заголовок
document.getElementById("series-title").textContent = series.title;
document.getElementById("series-subtitle").textContent = series.subtitle;

// 4. уроки
const container = document.getElementById("lessons");
container.innerHTML = "";

series.lessons.forEach(lesson => {
  console.log("📗 Урок:", lesson);

  const a = document.createElement("a");
  a.className = "lesson-card";
  a.href = `lesson.html?series=${seriesId}&lesson=${lesson.id}`;
  a.innerHTML = `
    <span class="lesson-num">${lesson.id}</span>
    <h3>${lesson.title}</h3>
  `;
  container.appendChild(a);
});

document.querySelectorAll(".lang-switch button").forEach(btn => {
  if (btn.dataset.lang === lang) {
    btn.classList.add("active");
  }

  btn.onclick = () => {
    setLang(btn.dataset.lang);
    location.reload();
  };
});