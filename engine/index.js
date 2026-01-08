console.log("🔥 index.js стартовал");

const lessons = [
  { id: 1, title: "Почему ИИ ведёт себя странно?" },
  { id: 2, title: "ИИ понимает всё буквально" },
  { id: 3, title: "Контекст важен" },
  { id: 4, title: "ИИ любит порядок" },
  { id: 5, title: "ИИ не понимает эмоции" },
  { id: 6, title: "Ошибки в заданиях" },
  { id: 7, title: "Чиним запросы" },
  { id: 8, title: "Если → то" },
  { id: 9, title: "Сложный запрос" },
  { id: 10, title: "Финальная миссия" }
];

const container = document.getElementById("lessons");

console.log("📦 container =", container);

if (!container) {
  throw new Error("Контейнер #lessons не найден");
}

lessons.forEach(lesson => {
  const btn = document.createElement("button");
  btn.textContent = `Урок ${lesson.id}: ${lesson.title}`;
  btn.style.display = "block";
  btn.style.margin = "10px auto";

  btn.onclick = () => {
    window.location.href = `lesson.html?lesson=${lesson.id}`;
  };

  container.appendChild(btn);
});

console.log("✅ Кнопки добавлены");



