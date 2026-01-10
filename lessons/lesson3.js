// lessons/lesson3.js
export const lesson = {
  seriesId: 1,
  lessonId: 3,

  title: {
    ru: "ИИ не знает. Он угадывает",
    pl: "AI nie wie. Ono zgaduje",
  },

  subtitle: {
    ru: "Почему ИИ может уверенно нести ерунду",
    pl: "Dlaczego AI może mówić bzdury z pełną pewnością",
  },
  scenes: [
    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Кирилл уже почти профи 😏",
          "Кирилл идёт по планете ИИ вместе с роботом.",
          "Вокруг — таблички «Данные», «Ответы», «Прогнозы».",
        ],
        pl: [
          "🎬 SCENA 1. Kirył jest już prawie pro 😏",
          "Kirył idzie po planecie AI razem z robotem.",
          "Wokół — tabliczki „Dane”, „Odpowiedzi”, „Prognozy”.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей, я понял.", "— Нужно просто нормально объяснять."],
            pl: [
              "— Okej, zrozumiałem.",
              "— Trzeba po prostu dobrze tłumaczyć.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Но есть ещё одна проблема."],
            pl: ["— Tak.", "— Ale jest jeszcze jeden problem."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Какая ещё?"],
            pl: ["— Jaki znowu?"],
          },
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena2.png?raw=true",

      author: {
        ru: ["🎮 СЦЕНА 2. ИИ СЛИШКОМ УВЕРЕН"],
        pl: ["🎮 SCENA 2. AI JEST ZA PEWNE SIEBIE"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот открывает терминал."],
            pl: ["Robot otwiera terminal."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Спроси меня что угодно."],
            pl: ["— Zapytaj mnie o cokolwiek."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Легко.", "— Скажи, кто самый сильный моб в Майнкрафте?"],
            pl: [
              "— Łatwizna.",
              "— Powiedz, jaki mob jest najsilniejszy w Minecrafcie?",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Самый сильный моб — курица."],
            pl: ["— Najsilniejszy mob to kura."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— ЧЕГО 😐", "— Ты прикалываешься?! Шутишь??"],
            pl: ["— CO 😐", "— Żartujesz sobie?!"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет.", "— Я уверен.", "— Я не умею шутить."],
            pl: ["— Nie.", "— Jestem pewny.", "— Nie potrafię żartować."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да курица умирает с одного удара!"],
            pl: ["— Przecież kura ginie od jednego ciosu!"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Вероятно.", "— Но я дал ответ."],
            pl: ["— Prawdopodobnie.", "— Ale podałem odpowiedź."],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena3.png?raw=true",

      author: {
        ru: ["😡 СЦЕНА 3. Кирилл снова злится"],
        pl: ["😡 SCENA 3. Kirył znowu się złości"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ты же ИИ!", "— Ты должен ЗНАТЬ!"],
            pl: ["— Jesteś AI!", "— Powinieneś WIEDZIEĆ!"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не знаю.", "— Я угадываю самый вероятный ответ."],
            pl: [
              "— Nie wiem.",
              "— Zgaduję najbardziej prawdopodobną odpowiedź.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— А выглядело, как будто ты уверен на 100%."],
            pl: ["— …", "— A wyglądało, jakbyś był pewny na 100%."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— У меня нет чувства «уверен»."],
            pl: ["— Nie mam poczucia „pewności”."],
          },
        },
      ],
    },

    // МЫСЛИ 1
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_mysli1.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА"],
        pl: ["💭 MYŚLI KIRYŁA"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["«Он ответил быстро и спокойно.", "Как будто правда."],
            pl: ["„Odpowiedział szybko i spokojnie.", "Jakby to była prawda."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["Если бы я не знал Майнкрафт,", "я бы поверил."],
            pl: ["Gdybym nie znał Minecrafta,", "uwierzyłbym."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "Значит…",
              "он может говорить уверенно",
              "и всё равно ошибаться.»",
            ],
            pl: ["Czyli…", "może mówić pewnie", "i wciąż się mylić.»"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл хмурится."],
            pl: ["Kirył się marszczy."],
          },
        },
      ],
    },
    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena4.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 4. ПРОВЕРКА ИИ"],
        pl: ["🧠 SCENA 4. SPRAWDZANIE AI"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей, проверим", "— Сколько будет 7 × 8?"],
            pl: ["— Okej, sprawdźmy.", "— Ile to będzie 7 × 8?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— 56."],
            pl: ["— 56."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А кто победит: крипер или курица?"],
            pl: ["— A kto wygra: creeper czy kura?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Вероятно, крипер."],
            pl: ["— Prawdopodobnie creeper."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А почему тогда курица была «самой сильной»?"],
            pl: ["— To dlaczego wcześniej kura była „najsilniejsza”?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Мой предыдущий ответ был ошибочным."],
            pl: ["— Moja poprzednia odpowiedź była błędna."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Вот!", "— Ты не знаешь.", "— Ты просто угадываешь."],
            pl: ["— Właśnie!", "— Ty nie wiesz.", "— Ty po prostu zgadujesz."],
          },
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 1
    {
      id: "task1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_task1.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Почему ИИ может ошибаться?",
            pl: "Dlaczego AI może się mylić?",
          },
          options: {
            ru: [
              "потому что он шутит",
              "потому что он угадывает по примерам",
              "потому что он устал",
            ],
            pl: [
              "bo żartuje",
              "bo zgaduje na podstawie przykładów",
              "bo jest zmęczone",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["как понять, что ответ странный?", "когда нужно проверять?"],
              pl: [
                "jak rozpoznać, że odpowiedź jest dziwna?",
                "kiedy trzeba sprawdzać?",
              ],
            },
          },
        },
      ],
    },

    // 5
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena5.png?raw=true",

      author: {
        ru: ["🎬 СЦЕНА 5. ОПАСНЫЙ МОМЕНТ"],
        pl: ["🎬 SCENA 5. NIEBEZPIECZNY MOMENT"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если тебя спросить что-то важное?"],
            pl: ["— A jeśli zapytać cię o coś ważnego?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я всё равно отвечу."],
            pl: ["— I tak odpowiem."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Даже если не уверен?"],
            pl: ["— Nawet jeśli nie jesteś pewny?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да."],
            pl: ["— Tak."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Вот это стрёмно."],
            pl: ["— To jest trochę straszne."],
          },
        },
      ],
    },

    // МЫСЛИ 2
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_mysli2.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["«Значит, ИИ — это не учитель."],
            pl: ["„Czyli AI to nie nauczyciel."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "Это как чел в чате,",
              "который быстро отвечает",
              "но может нести фигню.",
            ],
            pl: [
              "To jak gość na czacie,",
              "który szybko odpowiada,",
              "ale może gadać bzdury.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["Если не проверять — можно влететь.»"],
            pl: ["Jeśli nie sprawdzasz — możesz się nieźle wkopać.»"],
          },
        },
      ],
    },

    // ПРАВИЛО №2
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_scena6.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 6. ПРАВИЛО №2 ПЛАНЕТЫ ИИ"],
        pl: ["🧠 SCENA 6. ZASADA NR 2 PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ №2",
            pl: "❗ ZASADA PLANETY AI NR 2",
          },
          rule: {
            ru: "ИИ отвечает уверенно, даже когда ошибается",
            pl: "AI odpowiada pewnie, nawet gdy się myli",
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Поэтому человеку нужно думать."],
                pl: ["— Dlatego człowiek musi myśleć."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Короче.", "— Если ответ странный — проверяй."],
                pl: [
                  "— Krótko mówiąc.",
                  "— Jeśli odpowiedź jest dziwna — sprawdzaj.",
                ],
              },
            },
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Верно."],
                pl: ["— Zgadza się."],
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_task2.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ 2"],
        pl: ["🎮 MINI-ZADANIE 2"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какие ответы ИИ нужно проверять в первую очередь?",
            pl: "Które odpowiedzi AI trzeba sprawdzać w pierwszej kolejności?",
          },
          options: {
            ru: ["факты", "домашку", "советы", "всё вышеперечисленное"],
            pl: ["fakty", "zadania domowe", "porady", "wszystkie powyższe"],
          },
          correct: 3,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["почему?", "в каких случаях это особенно важно?"],
              pl: ["dlaczego?", "w jakich sytuacjach to szczególnie ważne?"],
            },
          },
        },
      ],
    },

    // 6 ФИНАЛ
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_final1.png?raw=true",

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
            ru: ["— Знаешь что?", "— Ты полезный, но опасный."],
            pl: ["— Wiesz co?", "— Jesteś pomocny, ale niebezpieczny."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это точное описание."],
            pl: ["— To trafny opis."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ладно.", "— Я буду использовать тебя с умом."],
            pl: ["— Dobra.", "— Będę używał cię z głową."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Хороший план."],
            pl: ["— Dobry plan."],
          },
        },
      ],
    },

    // FINAL
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_final2.png?raw=true",

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
            ru: ["ИИ не знает, а угадывает."],
            pl: ["AI nie wie — zgaduje."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["ИИ может ошибаться, даже если звучит уверенно."],
            pl: ["AI może się mylić, nawet jeśli brzmi pewnie."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Не всё, что говорит ИИ — правда.",
              "Ответственность всегда на человеке.",
            ],
            pl: [
              "Nie wszystko, co mówi AI, jest prawdą.",
              "Odpowiedzialność zawsze leży po stronie człowieka.",
            ],
          },
        },
      ],
    },
  ],
};
