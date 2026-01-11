// lessons/lesson2-2.js
export const lesson = {
  seriesId: 2,
  lessonId: 9,

  title: {
    ru: "Исправление и уточнение",
    pl: "",
  },

  subtitle: {
    ru: "",
    pl: "",
  },

  scenes: [
    // СЦЕНА 1. Лаборатория прототипов
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene1.png?raw=true",

      author: {
        ru: [
          "🧪 СЦЕНА 1. Лаборатория прототипов",
          "Кирилл и робот заходят в большое помещение.",
          "Оно похоже одновременно на лабораторию и мастерскую.",
          "Повсюду столы, экраны, чертежи.",
          "Некоторые устройства работают.",
          "Некоторые — дымятся.",
          "Некоторые выглядят так, будто их бросили на середине идеи.",
        ],
        pl: [
          "🧪 SCENA 1. Laboratorium prototypów",
          "Kirył i robot wchodzą do dużego pomieszczenia.",
          "To coś pomiędzy laboratorium a warsztatem.",
          "Wszędzie stoły, ekrany, szkice.",
          "Niektóre urządzenia działają.",
          "Inne dymią.",
          "Jeszcze inne wyglądają, jakby porzucono je w połowie pomysłu.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На стене крупная надпись:",
              "<b>«ЛАБОРАТОРИЯ ПРОТОТИПОВ»</b>",
              "",
              "Чуть ниже — приписка:",
              "<em>«Первая версия — почти никогда не финальная»</em>.",
            ],
            pl: [
              "Na ścianie duży napis:",
              "<b>„LABORATORIUM PROTOTYPÓW”</b>",
              "",
              "Niżej dopisek:",
              "<em>„Pierwsza wersja prawie nigdy nie jest ostateczna”</em>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— Тут что, всё сломано?"],
            pl: ["— Eee…", "— Tu wszystko jest zepsute?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет.", "— Здесь всё <b>в процессе</b>."],
            pl: ["— Nie.", "— Tutaj wszystko jest <b>w trakcie</b>."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл проходит между столами.",
              "На одном экране — наполовину готовая игра.",
              "На другом — текст, обрывающийся на середине предложения.",
              "Где-то робот двигается странно.",
              "Где-то вообще не двигается.",
            ],
            pl: [
              "Kirył przechodzi między stołami.",
              "Na jednym ekranie — gra w połowie gotowa.",
              "Na innym — tekst urwany w połowie zdania.",
              "Gdzieś robot porusza się dziwnie.",
              "Gdzie indziej — wcale.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Но ведь ИИ уже дал ответ.", "— Разве этого недостаточно?"],
            pl: ["— Ale AI już dało odpowiedź.", "— Czy to nie wystarczy?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Первый ответ — это <b>прототип</b>.",
              "— Он показывает направление.",
              "— Но не гарантирует результат.",
            ],
            pl: [
              "— Pierwsza odpowiedź to <b>prototyp</b>.",
              "— Pokazuje kierunek.",
              "— Ale nie gwarantuje wyniku.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот момент загорается один из экранов.",
              "На нём появляется мигающее сообщение:",
              "<b>«ЗАДАНИЕ АКТИВИРОВАНО»</b>.",
            ],
            pl: [
              "W tym momencie jeden z ekranów się zapala.",
              "Pojawia się migający komunikat:",
              "<b>„ZADANIE AKTYWOWANE”</b>.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно, но серьёзно):",
          avatar: "narrator",
          text: {
            ru: [
              "Добро пожаловать в Лабораторию.",
              "Здесь проверяют не идеи.",
              "А умение их улучшать.",
            ],
            pl: [
              "Witaj w Laboratorium.",
              "Tutaj nie testuje się pomysłów.",
              "Tutaj testuje się umiejętność ich poprawiania.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— То есть…",
              "— если результат так себе,",
              "— это ещё не конец?",
            ],
            pl: [
              "— Czyli…",
              "— jeśli wynik jest średni,",
              "— to jeszcze nie koniec?",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это только начало."],
            pl: ["— To dopiero początek."],
          },
        },
      ],
    },
    // СЦЕНА 2. Первый результат
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene2.png?raw=true",

      author: {
        ru: [
          "🧪 СЦЕНА 2. Первый результат",
          "Один из столов в лаборатории загорается ярче остальных.",
          "На экране появляется результат.",
          "Он выглядит… законченным.",
          "Но что-то в нём не так.",
        ],
        pl: [
          "🧪 SCENA 2. Pierwszy wynik",
          "Jeden ze stołów w laboratorium świeci jaśniej niż pozostałe.",
          "Na ekranie pojawia się wynik.",
          "Wygląda… na gotowy.",
          "Ale coś w nim się nie zgadza.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл наклоняется ближе к экрану.",
              "Это игра.",
              "Но слишком простая.",
              "Как будто собранная на скорую руку.",
            ],
            pl: [
              "Kirył pochyla się bliżej ekranu.",
              "To gra.",
              "Ale zbyt prosta.",
              "Jakby zrobiona na szybko.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Результат готов.", "— Прототип версии 1.0."],
            pl: ["— Wynik gotowy.", "— Prototyp wersji 1.0."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В игре есть начало.",
              "Есть персонаж.",
              "Есть цель.",
              "Но всё какое-то плоское.",
              "Без выбора.",
              "Без напряжения.",
            ],
            pl: [
              "W grze jest początek.",
              "Jest postać.",
              "Jest cel.",
              "Ale wszystko jest jakieś płaskie.",
              "Bez wyboru.",
              "Bez napięcia.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— Это всё?"],
            pl: ["— Eee…", "— To wszystko?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он чувствует знакомое разочарование.",
              "То самое,",
              "когда ожидал «вау»,",
              "а получил «ну… ладно».",
            ],
            pl: [
              "Czuje znajome rozczarowanie.",
              "To samo,",
              "kiedy spodziewał się „wow”,",
              "a dostał „no… okej”.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Честно?", "— Мне не нравится."],
            pl: ["— Szczerze?", "— Nie podoba mi się."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это допустимо."],
            pl: ["— To dopuszczalne."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тогда зачем это вообще?", "— Если результат так себе?"],
            pl: ["— To po co to w ogóle?", "— Skoro wynik jest taki sobie?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В лаборатории на секунду становится тише.",
              "Даже дымящиеся устройства будто замирают.",
            ],
            pl: [
              "W laboratorium robi się na chwilę ciszej.",
              "Nawet dymiące urządzenia jakby się zatrzymały.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Потому что первый результат",
              "— нужен не для использования.",
              "— А для улучшения.",
            ],
            pl: [
              "— Ponieważ pierwszy wynik",
              "— nie jest do użycia.",
              "— Jest do poprawiania.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл задумывается.", "Это звучит… неожиданно."],
            pl: ["Kirył się zastanawia.", "To brzmi… nieoczekiwanie."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (ровно):",
          avatar: "narrator",
          text: {
            ru: [
              "Большинство людей",
              "бросают здесь.",
              "Они ждут идеал сразу.",
            ],
            pl: [
              "Większość ludzi",
              "rezygnuje w tym miejscu.",
              "Czekają na ideał od razu.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— это не ошибка?"],
            pl: ["— Czyli…", "— to nie jest błąd?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это шаг."],
            pl: ["— To krok."],
          },
        },
      ],
    },

    // СЦЕНА 3. Уточни — и станет лучше
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene3.png?raw=true",

      author: {
        ru: [
          "🧪 СЦЕНА 3. Уточни — и станет лучше",
          "Кирилл всё ещё смотрит на экран с прототипом.",
          "Теперь он не раздражён.",
          "Он пытается понять, что именно ему не понравилось.",
        ],
        pl: [
          "🧪 SCENA 3. Doprecyzuj — będzie lepiej",
          "Kirył wciąż patrzy na ekran z prototypem.",
          "Nie jest już zirytowany.",
          "Próbuje zrozumieć, co dokładnie mu się nie spodobało.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он ловит себя на мысли:",
              "«Мне не нравится» — это не объяснение.",
              "Это просто эмоция.",
            ],
            pl: [
              "Łapie się na myśli:",
              "„Nie podoba mi się” — to nie jest wyjaśnienie.",
              "To tylko emocja.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— А что именно тут не так?"],
            pl: ["— Chwila…", "— Co dokładnie tu nie gra?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл начинает разбирать результат по частям.",
              "Как конструктор.",
              "Без спешки.",
            ],
            pl: [
              "Kirył zaczyna rozkładać wynik na części.",
              "Jak konstruktor.",
              "Bez pośpiechu.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Начало скучное.",
              "— У игрока нет выбора.",
              "— И непонятно, зачем он вообще играет.",
            ],
            pl: [
              "— Początek jest nudny.",
              "— Gracz nie ma wyboru.",
              "— I nie wiadomo, po co w ogóle gra.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он делает паузу.", "Теперь важно сказать это правильно."],
            pl: [
              "Robi pauzę.",
              "Teraz ważne jest, żeby powiedzieć to właściwie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Давай уточним."],
            pl: ["— Okej.", "— Doprecyzujmy."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Измени начало игры:",
              "— добавь выбор для игрока с первых минут.",
              "— Сделай так, чтобы от выбора менялась история.",
              "— Объясни цель игрока уже в начале.",
            ],
            pl: [
              "— Zmień początek gry:",
              "— dodaj wybór dla gracza od pierwszych minut.",
              "— Niech wybór wpływa na historię.",
              "— Wyjaśnij cel gracza już na początku.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В лаборатории снова становится тихо.",
              "Но теперь это другая тишина.",
              "Рабочая.",
            ],
            pl: [
              "W laboratorium znowu robi się cicho.",
              "Ale to już inna cisza.",
              "Robocza.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Принято."],
            pl: ["— Przyjęto."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран мигает.", "Прототип обновляется."],
            pl: ["Ekran miga.", "Prototyp się aktualizuje."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Обновлённая версия:",
              "Игрок сразу делает выбор,",
              "который влияет на дальнейшие события.",
              "Цель ясна с первых минут.",
            ],
            pl: [
              "— Zaktualizowana wersja:",
              "Gracz od razu dokonuje wyboru,",
              "który wpływa na dalsze wydarzenia.",
              "Cel jest jasny od pierwszych minut.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Разница заметна сразу.",
              "Это всё ещё не идеал.",
              "Но это уже <b>лучше</b>.",
            ],
            pl: [
              "Różnica jest widoczna od razu.",
              "To wciąż nie ideał.",
              "Ale to już <b>lepiej</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— Вот теперь да."],
            pl: ["— O.", "— Teraz tak."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Исправление — это не признание ошибки.",
              "Это управление результатом.",
            ],
            pl: [
              "Poprawianie to nie przyznanie się do błędu.",
              "To kontrola nad wynikiem.",
            ],
          },
        },
      ],
    },
    // 🟩 СЕРИЯ 2 — УРОК 4
    // 💭 МЫСЛИ КИРИЛЛА

    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_thoughts.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА"],
        pl: ["💭 MYŚLI KIRYŁA"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Раньше, если результат был плохой,", "я просто злился.»"],
            pl: [
              "„Wcześniej, gdy wynik był słaby,",
              "po prostu się złościłem.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Или думал, что ИИ тупит.»"],
            pl: ["„Albo myślałem, że AI jest głupie.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«А сейчас понимаю:", "первый ответ — это просто черновик.»"],
            pl: ["„A teraz rozumiem:", "pierwsza odpowiedź to tylko szkic.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Если я хочу лучше —", "мне нужно объяснить точнее.»"],
            pl: ["„Jeśli chcę lepiej —", "muszę wyjaśnić dokładniej.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Не эмоциями.", "А деталями.»"],
            pl: ["„Nie emocjami.", "Tylko szczegółami.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Исправлять —", "значит управлять.»"],
            pl: ["„Poprawiać —", "to znaczy kontrolować.”"],
          },
        },
      ],
    },

    // 🎯 ПРАВИЛО УРОКА
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО ЛАБОРАТОРИИ",
            pl: "❗ GŁÓWNA ZASADA LABORATORIUM",
          },
          rule: {
            ru: [
              "Первый ответ ИИ — это черновик.",
              "Если результат не нравится —",
              "его нужно не ругать,",
              "а <b>уточнять и улучшать</b>.",
              "",
              "Исправление — это не ошибка.",
              "Это способ получить лучший результат.",
            ],
            pl: [
              "Pierwsza odpowiedź AI to szkic.",
              "Jeśli wynik się nie podoba —",
              "nie trzeba go krytykować,",
              "tylko <b>doprecyzować i poprawić</b>.",
              "",
              "Poprawianie to nie błąd.",
              "To sposób na lepszy wynik.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Чем точнее уточнение,", "— тем лучше результат."],
                pl: [
                  "— Im dokładniejsze doprecyzowanie,",
                  "— tym lepszy wynik.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— идеал — это несколько версий."],
                pl: ["— Czyli", "— ideał to kilka wersji."],
              },
            },
          ],
        },
      ],
    },
    // 🟩 СЕРИЯ 2 — УРОК 4
    // 🎮 ПРАКТИКА — исправление и уточнение

    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_task.png?raw=true",

      author: {
        ru: [
          "🎮 ПРАКТИКА",
          "Кирилл решает проверить, сможет ли он улучшить результат сам.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić, czy potrafi sam poprawić wynik.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой запрос лучше поможет улучшить результат?",
            pl: "Które polecenie lepiej pomoże poprawić wynik?",
          },
          options: {
            ru: [
              "Сделай лучше",
              "Мне не нравится, переделай",
              "Добавь выбор в начале игры, объясни цель игрока и сделай так, чтобы выбор влиял на сюжет",
            ],
            pl: [
              "Zrób lepiej",
              "Nie podoba mi się, przerób",
              "Dodaj wybór na początku gry, wyjaśnij cel gracza i spraw, aby wybór wpływał na fabułę",
            ],
          },
          correct: 2,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Какие варианты — просто эмоции?",
                "Где есть конкретные указания?",
                "Почему третий вариант понятнее для ИИ?",
              ],
              pl: [
                "Które opcje to tylko emocje?",
                "Gdzie są konkretne wskazówki?",
                "Dlaczego trzecia opcja jest jaśniejsza dla AI?",
              ],
            },
          },
        },
      ],
    },

    // 🟩 СЕРИЯ 2 — УРОК 4
    // 🏁 ФИНАЛ ЛАБОРАТОРИИ ПРОТОТИПОВ

    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Лаборатория постепенно затихает.",
          "Экраны гаснут.",
          "Прототипы остаются на столах — ждать следующей версии.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Laboratorium powoli cichnie.",
          "Ekrany gasną.",
          "Prototypy zostają na stołach — czekają na kolejną wersję.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Прикольно.",
              "— Оказывается,",
              "— не обязательно делать идеально сразу.",
            ],
            pl: [
              "— Fajne.",
              "— Okazuje się,",
              "— że nie trzeba robić idealnie od razu.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Идеал — это процесс."],
            pl: ["— Ideał to proces."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Значит,",
              "— если что-то не получилось…",
              "— это ещё не конец.",
            ],
            pl: [
              "— Czyli",
              "— jeśli coś nie wyszło…",
              "— to jeszcze nie koniec.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл выходит из Лаборатории прототипов.",
              "Теперь он знает:",
              "плохой результат — это материал для улучшения.",
            ],
            pl: [
              "Kirył wychodzi z Laboratorium Prototypów.",
              "Teraz wie:",
              "słaby wynik to materiał do poprawy.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: ["Тот, кто умеет исправлять,", "не боится начинать."],
            pl: ["Ten, kto potrafi poprawiać,", "nie boi się zaczynać."],
          },
        },
      ],
    },
  ],
};
