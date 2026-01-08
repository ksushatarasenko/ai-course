export function getProgress() {
  return JSON.parse(localStorage.getItem("progress")) || {};
}

export function setLessonDone(id) {
  const progress = getProgress();
  progress[id] = true;
  localStorage.setItem("progress", JSON.stringify(progress));
}
