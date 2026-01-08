export function aiRespond(input) {
  if (input.length < 10) return "Слишком мало информации.";
  if (input.includes("босс")) return "Окей, добавляю босса.";
  return "Я сделал самый простой вариант.";
}

