// player.js
import { renderScene, renderDialog } from "./renderer.js";
import { getLang } from "./lang.js";
import { i18n } from "./i18n.js";

const lang = getLang();
const ui = i18n[lang].ui;
console.log("🎬 player.js запущен");



// 1️⃣ читаем параметры URL
const params = new URLSearchParams(window.location.search);
const seriesId = Number(params.get("series"));
const lessonId = Number(params.get("lesson"));

// 2️⃣ проверка
console.log("📘 Серия:", seriesId);
console.log("📗 Урок:", lessonId);

if (!seriesId || !lessonId) {
  throw new Error("❌ Не переданы series или lesson");
}
let lessonData = null;
let sceneIndex = 0;
let dialogIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const backBtn = document.getElementById("back");

  if (prevBtn) prevBtn.textContent = ui.back;
  if (nextBtn) nextBtn.textContent = ui.next;
  if (backBtn) backBtn.textContent = ui.seriesMap;

  nextBtn.onclick = next;
  prevBtn.onclick = prev;

  backBtn.onclick = () => {
    window.location.href = `series.html?series=${seriesId}`;
  };
});

import(`../lessons/lesson${lessonId}.js`).then(module => {
  lessonData = module.lesson;

  document.getElementById("lesson-title").textContent = lessonData.title[lang];
  document.getElementById("lesson-subtitle").textContent = lessonData.subtitle[lang];

  loadScene();
});

function loadScene() {
  const scene = lessonData.scenes[sceneIndex];

  if (!scene) {
    alert("🎉 Урок завершён!");
    window.location.href = "index.html";
    return;
  }

  dialogIndex = 0;
  renderScene(scene);

  // если в сцене есть диалоги — показываем первый
  if (Array.isArray(scene.dialog) && scene.dialog.length > 0) {
    renderDialog(scene.dialog[dialogIndex]);
  }
  updateButtons();
}

function next() {
  const scene = lessonData.scenes[sceneIndex];

  // 🔹 сцена БЕЗ диалогов
  if (!Array.isArray(scene.dialog)) {
    sceneIndex++;
    loadScene();
    return;
  }

  // 🔹 сцена С диалогами
  dialogIndex++;

  if (dialogIndex < scene.dialog.length) {
    renderDialog(scene.dialog[dialogIndex]);
  } else {
    // диалоги закончились → следующая сцена
    sceneIndex++;
    loadScene();
  }
  updateButtons();
}

function prev() {
  // если есть предыдущий диалог — идём к нему
  if (dialogIndex > 0) {
    dialogIndex--;
    rerenderSceneUpTo(dialogIndex);
    return;
  }

  // если диалогов нет или мы в начале — идём к предыдущей сцене
  if (sceneIndex > 0) {
    sceneIndex--;
    loadScene();
    updateButtons();
  }
}

function rerenderSceneUpTo(lastIndex) {
  const scene = lessonData.scenes[sceneIndex];

  renderScene(scene);

  for (let i = 0; i <= lastIndex; i++) {
    renderDialog(scene.dialog[i]);
  }
}

function updateButtons() {
  const prevBtn = document.getElementById("prev");

  prevBtn.disabled = sceneIndex === 0 && dialogIndex === 0;
}