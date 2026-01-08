console.log("🚀 index.js стартовал");

const lessons = [
  { id: 1, title: "Почему ИИ ведёт себя странно?" },
  { id: 2, title: "Почему ИИ делает не то, что ты хотел?" },
  { id: 3, title: "ИИ не знает. Он угадывает" },
  { id: 4, title: "Как не вестись на ответы ИИ" },
  { id: 5, title: "ИИ не понимает эмоции" },
  { id: 6, title: "Ошибки в заданиях" },
  { id: 7, title: "Чиним запросы" },
  { id: 8, title: "Если → то" },
  { id: 9, title: "Сложный запрос" },
  { id: 10, title: "Финальная миссия" }
];

const container = document.getElementById("lessons");

if (!container) {
  throw new Error("❌ Контейнер #lessons не найден");
}

lessons.forEach(lesson => {
  const card = document.createElement("a");
  card.className = "lesson-card";
  card.href = `lesson.html?lesson=${lesson.id}`;

  card.innerHTML = `
    <span class="lesson-num">${String(lesson.id).padStart(2, "0")}</span>
    <h3>${lesson.title}</h3>
  `;

  container.appendChild(card);
});

console.log("✅ Карточки уроков созданы");
