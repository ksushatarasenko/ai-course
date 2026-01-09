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
  if (
    dialog.type === "story" ||
    dialog.type === "ai" ||
    dialog.type === "author"
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
          (opt, i) => `
            <div class="task-option" data-i="${i}">
              <span class="checkbox"></span>
              <span class="option-text">${opt}</span>
            </div>`
        )
        .join("")}
    </div>

    <button class="task-check">Проверить</button>

    <div class="task-result"></div>

    ${
      dialog.discussion
        ? `<div class="task-discussion hidden">
            <h4>${dialog.discussion.title}</h4>
            <ul>
              ${dialog.discussion.points.map(p => `<li>${p}</li>`).join("")}
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
  const correct = new Set(dialog.correct);

  // выбор вариантов
  options.forEach(opt => {
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
      result.textContent = "❗ Выбери хотя бы один вариант.";
      result.style.color = "orange";
      return;
    }

    const correctChosen = [...selected].filter(i => correct.has(i)).length;

    if (correctChosen === correct.size && selected.size === correct.size) {
      result.textContent = "✅ Верно! Ты выбрал все правильные варианты.";
      result.style.color = "green";
    } else if (correctChosen > 0) {
      result.textContent = "⚠️ Почти! Ты выбрал не все правильные варианты.";
      result.style.color = "#d97706";
    } else {
      result.textContent = "❌ Не совсем. Подумай ещё.";
      result.style.color = "red";
    }

    // блокируем после проверки
    options.forEach(o => (o.onclick = null));
    checkBtn.disabled = true;

    if (discussionBlock) {
      discussionBlock.classList.remove("hidden");
    }
  };
}


  list.appendChild(block);
  list.scrollTop = list.scrollHeight;
}
