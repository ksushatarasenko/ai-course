// lang.js

// engine/lang.js

const LANG_KEY = "lang";

export function initLang() {
  if (!localStorage.getItem(LANG_KEY)) {
    localStorage.setItem(LANG_KEY, "ru");
  }

  document.documentElement.lang = getLang();
}

export function getLang() {
  return localStorage.getItem(LANG_KEY) || "ru";
}

export function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}
