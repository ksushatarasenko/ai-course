// player.js
import { renderScene, renderDialog } from "./renderer.js";

const params = new URLSearchParams(window.location.search);
const lessonId = params.get("lesson") || 1;

let lessonData = null;
let sceneIndex = 0;
let dialogIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("next").onclick = next;
  document.getElementById("prev").onclick = prev;
  document.getElementById("back").onclick = () => {
    window.location.href = "index.html";
  };
});

import(`../lessons/lesson${lessonId}.js`).then(module => {
  lessonData = module.lesson;

  document.getElementById("lesson-title").textContent = lessonData.title;
  document.getElementById("lesson-subtitle").textContent = lessonData.subtitle;

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