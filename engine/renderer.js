// renderer.js

// 🔹 утилита: текст = строка или массив строк
function renderText(text) {
  if (Array.isArray(text)) {
    return text.map((line) => `<div>${line}</div>`).join("");
  }
  return `<div>${text}</div>`;
}

// 🔹 рендер сцены (картинка + автор + очистка диалогов)
export function renderScene(scene) {
  // картинка
  const img = document.getElementById("scene-image");
  if (img) {
    if (scene.image) {
      img.src = scene.image;
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }

  // авторский блок
  const authorBlock = document.getElementById("author-block");
  if (authorBlock) {
    authorBlock.innerHTML = "";
    if (Array.isArray(scene.author)) {
      scene.author.forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        authorBlock.appendChild(p);
      });
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
  if (dialog.type === "story" || dialog.type === "ai") {
    block.className = `dialog ${dialog.type}`;
    block.innerHTML = `
      ${dialog.speaker ? `<div class="speaker">${dialog.speaker}</div>` : ""}
      <div class="text">${renderText(dialog.text)}</div>
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
    <div class="rule-title">${dialog.title}</div>
    <div class="rule-text">${dialog.rule}</div>
    <div class="rule-dialog">
      ${dialog.dialog
        .map(
          (d) => `
          <div class="rule-line">
            <strong>${d.speaker}:</strong>
            ${
              Array.isArray(d.text)
                ? d.text.map((t) => `<div>${t}</div>`).join("")
                : d.text
            }
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
    <p class="task-question">${dialog.question}</p>

    <div class="options">
      ${dialog.options
        .map(
          (opt, i) => `<button class="task-btn" data-i="${i}">${opt}</button>`
        )
        .join("")}
    </div>

    <div class="task-result"></div>

    ${
      dialog.discussion
        ? `<div class="task-discussion hidden">
            <h4>${dialog.discussion.title}</h4>
            <ul>
              ${dialog.discussion.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
          </div>`
        : ""
    }
  `;

    const result = block.querySelector(".task-result");
    const buttons = block.querySelectorAll(".task-btn");
    const discussionBlock = block.querySelector(".task-discussion");

    buttons.forEach((btn) => {
      btn.onclick = () => {
        const i = Number(btn.dataset.i);

        // блокируем кнопки
        buttons.forEach((b) => (b.disabled = true));

        if (i === dialog.correct) {
          result.textContent = "✅ Верно! ИИ понял бы именно так.";
          result.style.color = "green";
        } else {
          result.textContent = "❌ Не совсем. ИИ нужен чёткий запрос.";
          result.style.color = "red";
        }

        // показываем обсуждение
        if (discussionBlock) {
          discussionBlock.classList.remove("hidden");
        }
      };
    });
  }

  list.appendChild(block);
  list.scrollTop = list.scrollHeight;
}
