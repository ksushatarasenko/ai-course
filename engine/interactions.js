export function renderChoice(choices) {
  const box = document.getElementById("interaction");
  box.innerHTML = "";

  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c.text;
    btn.onclick = c.onSelect;
    box.appendChild(btn);
  });
}

