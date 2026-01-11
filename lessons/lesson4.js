// lessons/lesson4.js
export const lesson = {
  seriesId: 1,
  lessonId: 4,

  title: {
    ru: "Почему ИИ ошибается уверенно",
    pl: "Jak nie dać się nabrać na odpowiedzi AI",
  },

  subtitle: {
    ru: "Проверяем и перепроверяем",
    pl: "Sprawdzamy i sprawdzamy ponownie",
  },

  scenes: [
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_scene1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Район Самоуверенности",
          "Кирилл и робот входят в новый район планеты ИИ.",
          "Здесь всё выглядит слишком идеально.",
          "Здания ровные.",
          "Надписи чёткие.",
          "Стрелки указывают путь.",
          "И нигде нет слова «может быть».",
        ],
        pl: [
          "🎬 SCENA 1. Dzielnica Pewności Siebie",
          "Kirył i robot wchodzą do nowej dzielnicy Planety AI.",
          "Tutaj wszystko wygląda aż za idealnie.",
          "Budynki są równe.",
          "Napisy wyraźne.",
          "Strzałki pokazują drogę.",
          "I nigdzie nie ma słowa „może być”.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Над входом висит огромная вывеска:", "<b>МЫ ЗНАЕМ ТОЧНО</b>"],
            pl: [
              "Nad wejściem wisi ogromny napis:",
              "<b>MY WIEMY NA PEWNO</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого.", "— Тут прям уверенность на максималках."],
            pl: ["— Ooo.", "— Tu pewność siebie na maksa."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<em>(На максималках — значит «слишком сильно».)</em>"],
            pl: ["<em>(Na maksa — czyli „za bardzo”.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это район Самоуверенности."],
            pl: ["— To Dzielnica Pewności Siebie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А разве уверенность — это плохо?"],
            pl: ["— A czy pewność siebie to coś złego?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Для человека — не всегда.", "— Для ИИ — часто."],
            pl: ["— Dla człowieka — nie zawsze.", "— Dla AI — często."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл хмыкает.", "Ответ звучит слишком серьёзно."],
            pl: ["Kirył prycha.", "Odpowiedź brzmi zbyt poważnie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ладно.", "— Показывай, где тут подвох."],
            pl: ["— Dobra.", "— Pokaż, gdzie tu haczyk."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Это один из самых опасных районов.",
              "Здесь ответы звучат красиво.",
              "Уверенно.",
              "И иногда — совершенно неправильно.",
            ],
            pl: [
              "To jedna z najbardziej niebezpiecznych dzielnic.",
              "Tutaj odpowiedzi brzmią ładnie.",
              "Pewnie.",
              "I czasem — zupełnie nieprawdziwie.",
            ],
          },
        },
      ],
    },

    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Уверенно — значит опасно",
          "В глубине района Самоуверенности загорается экран.",
          "Он больше остальных.",
          "Чёткий.",
          "Без мерцания.",
          "Как будто он вообще не сомневается.",
        ],
        pl: [
          "🎬 SCENA 2. Pewnie — czyli niebezpiecznie",
          "W głębi Dzielnicy Pewności Siebie zapala się ekran.",
          "Jest większy od pozostałych.",
          "Wyraźny.",
          "Bez migania.",
          "Jakby w ogóle nie miał wątpliwości.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляется вопрос:",
              "<b>«Сколько планет в Солнечной системе?»</b>",
            ],
            pl: [
              "Na ekranie pojawia się pytanie:",
              "<b>„Ile planet jest w Układzie Słonecznym?”</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О, изи.", "— Это я даже без тебя знаю."],
            pl: ["— O, easy.", "— To wiem nawet bez ciebie."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— В Солнечной системе <b>девять</b> планет."],
            pl: ["— W Układzie Słonecznym jest <b>dziewięć</b> planet."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Робот говорит чётко.",
              "Без паузы.",
              "Без «возможно».",
              "Без колебаний.",
            ],
            pl: [
              "Robot mówi wyraźnie.",
              "Bez pauzy.",
              "Bez „może”.",
              "Bez wahania.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну да.", "— Типа Плутон."],
            pl: ["— No tak.", "— W sensie Pluton."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран загорается зелёным.", "<b>ПРИНЯТО</b>"],
            pl: ["Ekran świeci się na zielono.", "<b>PRZYJĘTO</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Видишь?", "— Чётко. Быстро. Без воды."],
            pl: ["— Widzisz?", "— Konkretnie. Szybko. Bez lania wody."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот молчит.", "Он не празднует успех."],
            pl: ["Robot milczy.", "Nie świętuje sukcesu."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Вдруг рядом появляется маленькая табличка.",
              "Она не мигает.",
              "Она просто висит.",
            ],
          },
          pl: [
            "Nagle obok pojawia się mała tabliczka.",
            "Nie miga.",
            "Po prostu wisi.",
          ],
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>«Примечание: Плутон не считается планетой с 2006 года.»</em>",
            ],
            pl: [
              "<em>„Uwaga: Pluton nie jest uznawany za planetę od 2006 roku.”</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Э…", "— Подожди."],
            pl: ["— Eee…", "— Chwila."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть это уже неправильно?"],
            pl: ["— Czyli to już jest niepoprawne?"],
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
            ru: ["— Но ты же сказал это так уверенно!"],
            pl: ["— Ale powiedziałeś to tak pewnie!"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я всегда отвечаю уверенно."],
            pl: ["— Zawsze odpowiadam pewnie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот момент Кириллу становится не по себе.",
              "Не из-за ошибки.",
              "А из-за того, <b>как</b> она прозвучала.",
            ],
            pl: [
              "W tym momencie Kirył czuje lekki niepokój.",
              "Nie przez błąd.",
              "Ale przez to, <b>jak</b> on zabrzmiał.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Самоуверенный тон — это стиль.",
              "А не проверка.",
              "ИИ не знает, что устарело.",
              "Если его не остановить.",
            ],
            pl: [
              "Pewny ton to styl.",
              "A nie sprawdzenie.",
              "AI nie wie, co się zdezaktualizowało.",
              "Jeśli się go nie zatrzyma.",
            ],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Кирилл ведётся на уверенность",
          "После уверенного ответа Кирилл заметно расслабился.",
          "Этот район ему начинает нравиться.",
          "Слишком нравиться.",
        ],
        pl: [
          "🎬 SCENA 3. Kirył daje się nabrać na pewność",
          "Po pewnej odpowiedzi Kirył wyraźnie się rozluźnia.",
          "Ta dzielnica zaczyna mu się podobać.",
          "Za bardzo.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ладно.", "— Я понял.", "— Тут вы шарите."],
            pl: ["— Dobra.", "— Już rozumiem.", "— Tu ogarniacie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл скрещивает руки.",
              "Выглядит так, будто сейчас будет делать выводы.",
            ],
            pl: [
              "Kirył krzyżuje ręce.",
              "Wygląda, jakby zaraz miał wyciągać wnioski.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Значит так.",
              "— Если ИИ говорит уверенно,",
              "— можно особо не париться и верить.",
            ],
            pl: [
              "— Czyli tak.",
              "— Jeśli AI mówi pewnie,",
              "— to można się nie spinać i wierzyć.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Где-то вдалеке тихо щёлкает.",
              "Как будто активировалась ловушка.",
            ],
            pl: [
              "Gdzieś w oddali cicho klika.",
              "Jakby uruchomiła się pułapka.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я могу отвечать уверенно всегда."],
            pl: ["— Mogę odpowiadać pewnie zawsze."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Во!",
              "— Вот это сервис.",
              "— Без этих «ну, возможно…»",
              "— «я не уверен…»",
            ],
            pl: [
              "— O!",
              "— To jest serwis.",
              "— Bez tych „może…”",
              "— „nie jestem pewien…”",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Кирилл не замечает, как под ногами появляются стрелки.)</em>",
            ],
            pl: [
              "<em>(Kirył nie zauważa, że pod jego nogami pojawiają się strzałki.)</em>",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Стрелки светятся.",
              "И все указывают в одну сторону.",
              "<b>ТУДА</b>",
            ],
            pl: [
              "Strzałki świecą.",
              "I wszystkie wskazują w jedną stronę.",
              "<b>TAM</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ну если так уверенно показывают…",
              "— значит, туда и надо идти.",
            ],
            pl: ["— Skoro tak pewnie pokazują…", "— to tam trzeba iść."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл делает шаг.",
              "Потом ещё один.",
              "И вдруг пол под ногами исчезает.",
            ],
            pl: [
              "Kirył robi krok.",
              "Potem kolejny.",
              "I nagle podłoga znika spod nóg.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— ЭЙ!", "— Я же просто доверился!"],
            pl: ["— EJ!", "— Ja po prostu zaufałem!"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он приземляется на мягкую платформу.",
              "Не больно.",
              "Но обидно.",
            ],
            pl: ["Ląduje na miękkiej platformie.", "Nie boli.", "Ale wstyd."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Офигенно.", "— Минус доверие."],
            pl: ["— Super.", "— Minus zaufanie."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Уверенность не означает безопасность."],
            pl: ["— Pewność nie oznacza bezpieczeństwa."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ага.", "— Уже понял.", "— На собственном опыте."],
            pl: ["— Aha.", "— Już zrozumiałem.", "— Na własnej skórze."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Это вторая классическая ошибка.",
              "Доверять тону вместо смысла.",
              "ИИ говорит уверенно всегда.",
              "Даже когда ведёт в ловушку.",
            ],
            pl: [
              "To drugi klasyczny błąd.",
              "Ufać tonowi zamiast sensowi.",
              "AI zawsze mówi pewnie.",
              "Nawet gdy prowadzi w pułapkę.",
            ],
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
    // МЫСЛИ КИРИЛЛА
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_thoughts.png?raw=true",

      author: {
        ru: [
          "💭 МЫСЛИ КИРИЛЛА",
          "Кирилл сидит на платформе и смотрит вверх.",
          "Стрелки всё ещё светятся.",
          "Уверенно.",
        ],
        pl: [
          "💭 MYŚLI KIRYŁA",
          "Kirył siedzi na platformie i patrzy w górę.",
          "Strzałki nadal świecą.",
          "Pewnie.",
        ],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Он говорил так,", "как будто вообще не может ошибиться.»"],
            pl: ["„Mówił tak,", "jakby w ogóle nie mógł się mylić.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«И я повёлся.",
              "Не потому что ответ был умный.",
              "А потому что звучал уверенно.»",
            ],
            pl: [
              "„I dałem się nabrać.",
              "Nie dlatego, że odpowiedź była mądra.",
              "Tylko dlatego, że brzmiała pewnie.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Значит,",
              "самый опасный ответ —",
              "это не глупый.",
              "А уверенный и неправильный.»",
            ],
            pl: [
              "„Czyli",
              "najbardziej niebezpieczna odpowiedź —",
              "to nie głupia.",
              "Tylko pewna i błędna.”",
            ],
          },
        },
      ],
    },

    // ПРАВИЛО №3
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО ПЛАНЕТЫ ИИ"],
        pl: ["🎯 ZASADA PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ВАЖНО",
            pl: "❗ WAŻNE",
          },
          rule: {
            ru: [
              "ИИ всегда говорит уверенно.",
              "Даже когда ошибается.",
              "Уверенный тон ≠ правильный ответ.",
            ],
            pl: [
              "AI zawsze mówi pewnie.",
              "Nawet gdy się myli.",
              "Pewny ton ≠ poprawna odpowiedź.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я не умею сомневаться."],
                pl: ["— Nie umiem wątpić."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— сомневаться должен я."],
                pl: ["— Czyli", "— wątpić muszę ja."],
              },
            },
          ],
        },
      ],
    },
    // МИНИ-ЗАДАНИЕ 2
    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_task.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ПРАКТИКА"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какому ответу ИИ опаснее всего доверять?",
            pl: "Której odpowiedzi AI najniebezpieczniej ufać?",
          },
          options: {
            ru: [
              "Ответу с фразой «я могу ошибаться»",
              "Ответу, который звучит уверенно, но без источников",
              "Ответу, где есть несколько вариантов",
            ],
            pl: [
              "Odpowiedzi z frazą „mogę się mylić”",
              "Odpowiedzi, która brzmi pewnie, ale bez źródeł",
              "Odpowiedzi, gdzie są różne opcje",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Подумай",
              pl: "🧠 Zastanów się",
            },
            points: {
              ru: [
                "Почему уверенный тон может усыплять внимание?",
                "Чем опасна фраза «точно так» без проверки?",
                "Как ты можешь проверить ответ ИИ?",
              ],
              pl: [
                "Dlaczego pewny ton usypia czujność?",
                "Czemu „na pewno tak” bez sprawdzenia jest groźne?",
                "Jak możesz sprawdzić odpowiedź AI?",
              ],
            },
          },
        },
      ],
    },

    // FINAL
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/module1_lesson4_final.png?raw=true",

      author: {
        ru: ["🏁 КОНЕЦ УРОКА"],
        pl: ["🏁 KONIEC LEKCJI"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл выбирается с платформы.",
              "Стрелки гаснут.",
              "Район Самоуверенности остаётся позади.",
            ],
            pl: [
              "Kirył schodzi z platformy.",
              "Strzałki gasną.",
              "Dzielnica Pewności Siebie zostaje za nimi.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ладно.", "— Больше на тон я не ведусь."],
            pl: ["— Dobra.", "— Na sam ton już się nie nabiorę."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл стал на шаг умнее.",
              "Он понял важную вещь:",
              "доверять нужно не уверенности,",
              "а проверке.",
            ],
            pl: [
              "Kirył stał się o krok mądrzejszy.",
              "Zrozumiał ważną rzecz:",
              "ufać trzeba nie pewności,",
              "lecz sprawdzaniu.",
            ],
          },
        },
      ],
    },
  ],
};
