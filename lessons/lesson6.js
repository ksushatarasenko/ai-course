// lessons/lesson1.js
export const lesson = {
  id: 6,
  title: "Что можно и что нельзя говорить ИИ",
  subtitle: "Безопасность без занудства",

  scenes: [
    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena1.png?raw=true",

      author: [
        "🎬 СЦЕНА 1. СТРАШНЫЙ РАЙОН 😬",
        "Цель урока:",
        "- объяснить личную информацию",
        "- научить защищать себя",
        "- показать ответственность",
      ],

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          speaker: "",
          text: [
            "Кирилл и робот подходят к тёмной части планеты.",
            "Табличка:",
            "⚠️ РАЙОН ДОВЕРИЯ",
            "«Не всё, что спрашивают, — безопасно»",
          ],
        },
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— О, криповая зона."],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Здесь часто происходят ошибки."],
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena2.png?raw=true",

      author: ["🎮 СЦЕНА 2. ПЛОХОЙ ПРИМЕР"],

      dialog: [
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: [
            "— Некоторые дети спрашивают так:",
            "На экране:",
            "•	«Вот мой адрес…»",
            "•	«Вот мой пароль…»",
            "•	«Вот номер маминой карты…»",
          ],
        },
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— ЧЕГО 😳", "— Кто так делает?!"],
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena3.png?raw=true",

      author: ["😠 СЦЕНА 3. КИРИЛЛ СЕРЬЁЗНЫЙ"],

      dialog: [
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— Стоп.", "— Ты не друг.", "— Ты программа."],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Верно."],
        },
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: [
            "— И ты не должен знать",
            "— где я живу,",
            "— какие у меня пароли",
            "— и вообще личное.",
          ],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Согласен."],
        },
      ],
    },

    // mysli 1
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_mysli1.png?raw=true",

      author: ["💭 МЫСЛИ КИРИЛЛА"],
      dialog: [
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          text: ["«ИИ — это как чат в игре."],
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          text: ["Можно болтать,", "но нельзя сливать личное."],
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          text: ["А то потом будет беда.»"],
        },
      ],
    },
    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena4.png?raw=true",

      author: ["🧠 СЦЕНА 4. ПРАВИЛО «СВЕТОФОРА» 🚦"],
      dialog: [
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— Давай проще.", "— Как понять, что можно говорить?"],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Используй правило светофора."],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: [
            "<b>🟢 МОЖНО</b>",
            "<ul><li>идеи</li><li>вопросы</li><li>помощь с учёбой</li><li>игры и творчество</li></ul>",
          ],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: [
            "<b>🟡 ОСТОРОЖНО</b>",
            "<ul><li>личные истории</li><li>эмоции</li><li>жалобы</li></ul>",
          ],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: [
            "<b>🔴 НЕЛЬЗЯ</b>",
            "<ul><li>адрес</li><li>пароли</li><li>номера карт</li><li>личные данные семьи</li></ul>",
          ],
        },
      ],
    },
    // МИНИ-ЗАДАНИЕ 1
    {
      id: "task1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_task1.png?raw=true",
      author: ["🎮 МИНИ-ЗАДАНИЕ"],

      dialog: [
        {
          type: "task",
          question: ["Что из этого можно писать ИИ?"],
          options: [
            "- Придумай квест",
            "- Вот мой пароль",
            "- Помоги объяснить тему",
          ],
          correct: [0, 2],
          discussion: {
            title: "",
            points: ["", ""],
          },
        },
      ],
    },

    // правило
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_prawilo.png?raw=true",

      author: ["🧠 СЦЕНА 5. ПРАВИЛО №5 ПЛАНЕТЫ ИИ"],

      dialog: [
        {
          type: "rule",
          title: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ №5",
          rule: "ИИ — не человек и не друг. <br> Личное — не для него ",
          dialog: [
            {
              type: "story",
              speaker: "Кирилл",
              avatar: "kirill",
              text: ["— Запомнил."],
            },
            {
              type: "ai",
              speaker: "ИИ робот",
              avatar: "robot",
              text: ["— Это делает тебя безопасным пользователем."],
            },
          ],
        },
      ],
    },
    // 6
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_final.png?raw=true",

      author: ["🏁 ФИНАЛ УРОКА 6"],
      dialog: [
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— Знаешь…", "— Ты полезный."],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Спасибо."],
        },
        {
          type: "story",
          speaker: "Кирилл",
          avatar: "kirill",
          text: ["— Но только если держать дистанцию."],
        },
        {
          type: "ai",
          speaker: "ИИ робот",
          avatar: "robot",
          text: ["— Это разумно."],
        },
      ],
    },
    // final
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module4/module4_final.png?raw=true",

      author: ["🧩 ВЫВОД УРОКА"],

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: [
            "•	ИИ помогает, но не думает за человека",
                      ],
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: ["•	без идеи ИИ делает скучно",
            ]
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: [
            "•	ИИ — не чит-код",
          ],
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: [
            "•	личную информацию нельзя передавать",
          ],
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: [
            "•	ответственность всегда у человеке",
          ],
        },
      ],
    },
  ],
};
