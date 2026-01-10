
// lessons/lesson4.js
export const lesson = {
  seriesId: 1,
  lessonId: 4,

  title: {
    ru: "Как не вестись на ответы ИИ",
    pl: "Jak nie dać się nabrać na odpowiedzi AI",
  },

  subtitle: {
    ru: "Проверяем и перепроверяем",
    pl: "Sprawdzamy i sprawdzamy ponownie",
  },

  scenes: [
    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_sekcia1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Кирилл уже почти профи 😏",
          "Цель урока:",
          "- научить сомневаться в ответах ИИ",
          "- показать простые способы проверки",
          "- закрепить: ответственность всегда у человека",
        ],
        pl: [
          "🎬 SCENA 1. Kirył jest już prawie pro 😏",
          "Cel lekcji:",
          "- nauczyć się wątpić w odpowiedzi AI",
          "- poznać proste sposoby sprawdzania",
          "- zapamiętać: odpowiedzialność zawsze jest po stronie człowieka",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл идёт по планете ИИ вместе с роботом.",
              "Впереди — зона с табличкой:",
              "⚠️ ОПАСНАЯ ЗОНА: «УВЕРЕННЫЕ ОТВЕТЫ»",
            ],
            pl: [
              "Kirył idzie po planecie AI razem z robotem.",
              "Przed nimi — strefa z tabliczką:",
              "⚠️ STREFA NIEBEZPIECZNA: „PEWNE ODPOWIEDZI”",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— О, я уже знаю.",
              "— Тут вы начинаете нести фигню с умным лицом.",
            ],
            pl: [
              "— O, już wiem.",
              "— Tu zaczynacie gadać bzdury z mądrą miną.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Иногда."],
            pl: ["— Czasami."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Иногда = часто."],
            pl: ["— Czasami = często."],
          },
        },
      ],
    },

    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_sekcia2.png?raw=true",

      author: {
        ru: ["🎮 СЦЕНА 2. ЛОВУШКА ИИ"],
        pl: ["🎮 SCENA 2. PUŁAPKA AI"],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Проведём тест.",
              "— Спроси меня что-то для школы.",
            ],
            pl: [
              "— Zróbmy test.",
              "— Zapytaj mnie o coś do szkoły.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Окей.",
              "— Напиши короткий доклад про динозавров.",
            ],
            pl: [
              "— Okej.",
              "— Napisz krótki referat o dinozaurach.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Выполняю.",
              "",
              "ИИ выдаёт текст.",
              "Всё выглядит красиво и умно.",
            ],
            pl: [
              "— Wykonuję.",
              "",
              "AI wyświetla tekst.",
              "Wszystko wygląda ładnie i mądrze.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Мм…", "— Звучит нормально."],
            pl: ["— Hmm…", "— Brzmi w porządku."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Значит, можно верить?"],
            pl: ["— Czyli można wierzyć?"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Стоп.",
              "— Ты же сам говорил, что можешь ошибаться.",
            ],
            pl: [
              "— Stop.",
              "— Sam mówiłeś, że możesz się mylić.",
            ],
          },
        },
      ],
    },

    // МЫСЛИ 1
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_mysli1.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА"],
        pl: ["💭 MYŚLI KIRYŁA"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«Если я просто скопирую —",
              "я даже не пойму, правильно или нет.",
            ],
            pl: [
              "„Jeśli po prostu skopiuję —",
              "nawet nie będę wiedział, czy to poprawne.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "А если там ошибка,",
              "то влетит мне, а не ИИ.»",
            ],
            pl: [
              "A jeśli jest tam błąd,",
              "to ja za niego odpowiem, nie AI.»",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл напрягается."],
            pl: ["Kirył się napina."],
          },
        },
      ],
    },
        // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_scena3.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 3. КАК ПРОВЕРЯТЬ"],
        pl: ["🧠 SCENA 3. JAK SPRAWDZAĆ"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Как тебя проверить?"],
            pl: ["— Okej.", "— Jak mam cię sprawdzić?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Есть несколько способов."],
            pl: ["— Jest kilka sposobów."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляются иконки.",
              "<b>🔍 СПОСОБ 1. Задать ещё один вопрос</b>",
            ],
            pl: [
              "Na ekranie pojawiają się ikony.",
              "<b>🔍 SPOSÓB 1. Zadać kolejne pytanie</b>",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Если ты знаешь —", "— ответь по-другому."],
            pl: ["— Jeśli wiesz —", "— odpowiedz inaczej."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Назови три факта про динозавров."],
            pl: ["— Podaj trzy fakty o dinozaurach."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Динозавры вымерли около 65 миллионов лет назад.",
              "— Некоторые были травоядными.",
              "— Некоторые были хищниками.",
            ],
            pl: [
              "— Dinozaury wyginęły około 65 milionów lat temu.",
              "— Niektóre były roślinożerne.",
              "— Niektóre były drapieżnikami.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей, это похоже на правду."],
            pl: ["— Okej, to brzmi wiarygodnie."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<b>🔁 СПОСОБ 2. Переформулировать вопрос</b>"],
            pl: ["<b>🔁 SPOSÓB 2. Przeformułować pytanie</b>"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если спросить по-другому?"],
            pl: ["— A jeśli zapytać inaczej?"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Какие динозавры были самыми большими?"],
            pl: ["— Które dinozaury były największe?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Аргентинозавр, Патаготитан…"],
            pl: ["— Argentynozaur, Patagotytan…"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Уже лучше.", "— Ответы совпадают."],
            pl: ["— Już lepiej.", "— Odpowiedzi się zgadzają."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<b>🧠 СПОСОБ 3. Проверить своей головой</b>"],
            pl: ["<b>🧠 SPOSÓB 3. Sprawdzić własną głową</b>"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Это вообще логично?", "— Или звучит как бред?"],
            pl: ["— Czy to w ogóle logiczne?", "— Czy brzmi jak bzdura?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Логика — это твоя работа."],
            pl: ["— Logika to twoja praca."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Вот именно."],
            pl: ["— Właśnie."],
          },
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 1
    {
      id: "task1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_task1.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Что лучше сделать, если ответ ИИ кажется странным?",
            pl: "Co najlepiej zrobić, gdy odpowiedź AI wydaje się dziwna?",
          },
          options: {
            ru: [
              "сразу поверить",
              "перепроверить разными способами",
              "разозлиться и закрыть чат",
            ],
            pl: [
              "od razu uwierzyć",
              "sprawdzić na różne sposoby",
              "zdenerwować się i zamknąć czat",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["где можно ошибиться?", "кто отвечает за результат?"],
              pl: ["gdzie można się pomylić?", "kto odpowiada za wynik?"],
            },
          },
        },
      ],
    },

    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_scena4.png?raw=true",

      author: {
        ru: ["🎬 СЦЕНА 4. ИИ ПРОВОЦИРУЕТ 😈"],
        pl: ["🎬 SCENA 4. AI PROWOKUJE 😈"],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— А если я скажу уверенно?"],
            pl: ["— A jeśli powiem to bardzo pewnie?"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тогда я проверю вдвойне."],
            pl: ["— Wtedy sprawdzę podwójnie."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— А если я скажу красиво?"],
            pl: ["— A jeśli powiem to ładnie?"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Красиво ≠ правильно."],
            pl: ["— Ładnie ≠ poprawnie."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты быстро учишься."],
            pl: ["— Szybko się uczysz."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Просто не хочу получить двойку 😅"],
            pl: ["— Po prostu nie chcę dostać jedynki 😅"],
          },
        },
      ],
    },

    // МЫСЛИ 2
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_mysli2.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«ИИ — это не учитель.",
              "Это как помощник в игре:",
              "подсказывает,",
              "но проходить уровень — мне.»",
            ],
            pl: [
              "„AI to nie nauczyciel.",
              "To jak pomocnik w grze:",
              "podpowiada,",
              "ale poziom przechodzę ja.”",
            ],
          },
        },
      ],
    },

    // ПРАВИЛО №3
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_prawilo.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 5. ПРАВИЛО №3 ПЛАНЕТЫ ИИ"],
        pl: ["🧠 SCENA 5. ZASADA NR 3 PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ №3",
            pl: "❗ ZASADA PLANETY AI NR 3",
          },
          rule: {
            ru: "Если сомневаешься — проверяй",
            pl: "Jeśli masz wątpliwości — sprawdzaj",
          },
          dialog: [
            {
              speaker: "AI robot",
              text: {
                ru: ["— Это правило спасло многих."],
                pl: ["— Ta zasada uratowała wielu."],
              },
            },
            {
              speaker: "Kyrylo",
              text: {
                ru: ["— Верю.", "— Но всё равно проверю 😎"],
                pl: ["— Wierzę.", "— Ale i tak sprawdzę 😎"],
              },
            },
          ],
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 2
    {
      id: "task2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_task2.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ 2"],
        pl: ["🎮 MINI-ZADANIE 2"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "ИИ помог с домашкой.",
            pl: "AI pomogło z pracą domową.",
          },
          options: {
            ru: [
              "можно ли просто скопировать?",
              "кто получит оценку?",
              "кто виноват, если ошибка?",
            ],
            pl: [
              "czy można po prostu skopiować?",
              "kto dostanie ocenę?",
              "kto jest winny, jeśli jest błąd?",
            ],
          },
          correct: 0,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["Правильный ответ: человек."],
              pl: ["Poprawna odpowiedź: człowiek."],
            },
          },
        },
      ],
    },

    // 6
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_final.png?raw=true",

      author: {
        ru: ["🏁 ФИНАЛ УРОКА"],
        pl: ["🏁 FINAŁ LEKCJI"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Короче.", "— Ты нормальный помощник."],
            pl: ["— W skrócie.", "— Jesteś w porządku pomocnikiem."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Спасибо."],
            pl: ["— Dziękuję."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Но без проверки ты — ловушка."],
            pl: ["— Ale bez sprawdzania jesteś pułapką."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Согласен."],
            pl: ["— Zgadzam się."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Пошли дальше.",
              "— Чувствую, впереди ещё много багов.",
            ],
            pl: [
              "— Idziemy dalej.",
              "— Czuję, że przed nami jeszcze sporo bugów.",
            ],
          },
        },
      ],
    },

    // FINAL
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_final.png?raw=true",

      author: {
        ru: ["🧩 ВЫВОД УРОКА"],
        pl: ["🧩 WNIOSEK Z LEKCJI"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["ИИ может звучать умно и всё равно ошибаться."],
            pl: ["AI może brzmieć mądrze i nadal się mylić."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Ответы нужно проверять."],
            pl: ["Odpowiedzi trzeba sprawdzać."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Есть простые способы проверки."],
            pl: ["Są proste sposoby sprawdzania."],
          },
        },
      ],
    },

  ],
};
