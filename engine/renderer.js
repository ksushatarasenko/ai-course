// renderer.js

import { i18n } from "./i18n.js";
import { getLang } from "./lang.js";

const lang = getLang();
const ui = i18n[lang].ui;

export function resolveText(text) {
  if (typeof text === "string") return text;

  if (Array.isArray(text)) return text;

  if (typeof text === "object" && text[lang]) {
    return text[lang];
  }

  return "⚠️ Текст недоступен";
}

// 🔹 утилита: текст = строка или массив строк
function renderText(text) {
  const resolved = resolveText(text);

  if (Array.isArray(resolved)) {
    return resolved.map((line) => `<div>${line}</div>`).join("");
  }

  return `<div>${resolved}</div>`;
}

// 🔹 рендер сцены (картинка + автор + очистка диалогов)
export function renderScene(scene) {
  // картинка (с поддержкой мультиязыка)
  const img = document.getElementById("scene-image");

  if (img && scene.image) {
    let imageSrc = null;

    // старый формат — строка
    if (typeof scene.image === "string") {
      imageSrc = scene.image;
    }

    // новый формат — объект { ru, pl }
    if (typeof scene.image === "object") {
      imageSrc = scene.image[lang];
    }

    if (imageSrc) {
      img.src = imageSrc;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }

  // авторский блок
  const authorBlock = document.getElementById("author-block");
  if (authorBlock) {
    authorBlock.innerHTML = "";

    if (scene.author) {
      const content = resolveText(scene.author);

      if (Array.isArray(content)) {
        content.forEach((line) => {
          const p = document.createElement("p");
          p.textContent = line;
          authorBlock.appendChild(p);
        });
      } else {
        const p = document.createElement("p");
        p.textContent = content;
        authorBlock.appendChild(p);
      }
    }
  }

  // очистка диалогов
  const dialogList = document.getElementById("dialog-list");
  if (dialogList) {
    dialogList.innerHTML = "";
  }
}

// 🔹 добавление одного элемента (диалог / мысль / задание)
export function renderDialog(dialog) {
  const list = document.getElementById("dialog-list");
  if (!list) return;

  const block = document.createElement("div");

  // 🗨 обычный диалог
  if (
    dialog.type === "story" ||
    dialog.type === "ai" ||
    dialog.type === "master"
  ) {
    block.className = `dialog ${dialog.type}`;

    block.innerHTML = `
    <div class="dialog-header">
      ${
        dialog.avatar
          ? `<img class="avatar" src="assets/img/${dialog.avatar}.png" alt="${dialog.speaker}">`
          : ""
      }
      <div class="speaker">${dialog.speaker}</div>
    </div>

    <div class="text">
      ${renderText(dialog.text)}
    </div>
  `;
  }

  // ✍️ автор в диалогах
  else if (dialog.type === "author") {
    block.className = "author";
    block.innerHTML = renderText(dialog.text);
  }

  // 💭 мысли
  else if (dialog.type === "thought") {
    block.className = "thought";
    block.innerHTML = renderText(dialog.text);
  }
  // prawilo
  else if (dialog.type === "rule") {
    block.className = "rule-block";

    block.innerHTML = `
    <div class="rule-title">${resolveText(dialog.title)}</div>
    <div class="rule-text">${resolveText(dialog.rule)}</div>
    <div class="rule-dialog">
      ${dialog.dialog
        .map(
          (d) => `
          <div class="rule-line">
            <strong>${d.speaker}:</strong>
            ${(() => {
              const resolved = resolveText(d.text);

              return Array.isArray(resolved)
                ? resolved.map((t) => `<div>${t}</div>`).join("")
                : `<div>${resolved}</div>`;
            })()}
          </div>
        `
        )
        .join("")}
    </div>
  `;
  }

  // 🎮 МИНИ-ЗАДАНИЕ
  else if (dialog.type === "task") {
    block.className = "task";

    block.innerHTML = `
    <p class="task-question">${resolveText(dialog.question)}</p>

    <div class="options">
      ${resolveText(dialog.options)
        .map(
          (opt, i) => `
            <div class="task-option" data-i="${i}">
              <span class="checkbox"></span>
              <span class="option-text">${opt}</span>
            </div>`
        )
        .join("")}
    </div>

    <button class="task-check">${ui.check}</button>

    <div class="task-result"></div>

    ${
      dialog.discussion
        ? `<div class="task-discussion hidden">
            <h4>${resolveText(dialog.discussion.title)}</h4>
            <ul>
              ${resolveText(dialog.discussion.points)
                .map((p) => `<li>${p}</li>`)
                .join("")}
            </ul>
          </div>`
        : ""
    }
  `;

    const options = block.querySelectorAll(".task-option");
    const checkBtn = block.querySelector(".task-check");
    const result = block.querySelector(".task-result");
    const discussionBlock = block.querySelector(".task-discussion");

    let selected = new Set();
    const correctIndex = dialog.correct;

    // выбор вариантов
    options.forEach((opt) => {
      opt.onclick = () => {
        const i = Number(opt.dataset.i);

        if (selected.has(i)) {
          selected.delete(i);
          opt.classList.remove("selected");
        } else {
          selected.add(i);
          opt.classList.add("selected");
        }
      };
    });

    // проверка
    checkBtn.onclick = () => {
      if (selected.size === 0) {
        result.textContent = ui.task.empty;
        result.style.color = "orange";
        return;
      }

      if (selected.has(correctIndex) && selected.size === 1) {
        result.textContent = ui.task.correct;
        result.style.color = "green";

        // блокируем ТОЛЬКО при правильном ответе
        options.forEach((o) => (o.onclick = null));
        checkBtn.disabled = true;

        if (discussionBlock) {
          discussionBlock.classList.remove("hidden");
        }
      } else {
        result.textContent = ui.task.wrong;
        result.style.color = "red";
      }
    };
  } // ⬅️ закрывается else if (dialog.type === "task")

  // ⬇️ ОДИН РАЗ, СНАРУЖИ ВСЕХ if
  list.appendChild(block);
  list.scrollTop = list.scrollHeight;
} // ⬅️ renderDialog
