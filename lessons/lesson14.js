// lessons/lesson2-2.js
export const lesson = {
  seriesId: 3,
  lessonId: 14,

  title: {
    ru: "Кто отвечает за результат",
    pl: "",
  },

  subtitle: {
    ru: "",
    pl: "",
  },

  scenes: [
    // 🟨 СЕРИЯ 3 — УРОК 14
    // «Кто отвечает за результат»
    // СЦЕНА 1. Центр принятия решений

    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_scene1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Центр принятия решений",
          "Кирилл выходит из Архива происхождения.",
          "Впереди — новая локация.",
          "Она не похожа ни на музей,",
          "ни на лабораторию.",
          "Это просторный зал.",
          "Минималистичный.",
          "Без подсказок и эффектов.",
        ],
        pl: [
          "🎬 SCENA 1. Centrum podejmowania decyzji",
          "Kirył wychodzi z Archiwum pochodzenia.",
          "Przed nim pojawia się nowa lokacja.",
          "Nie przypomina muzeum",
          "ani laboratorium.",
          "To duża, otwarta sala.",
          "Minimalistyczna.",
          "Bez podpowiedzi i efektów.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм…", "— Тут как-то пусто."],
            pl: ["— Hmm…", "— Tu jest jakoś pusto."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В центре зала стоит стол.",
              "На нём — один экран.",
              "И одна кнопка.",
              "Без подписей.",
            ],
            pl: [
              "Na środku sali stoi stół.",
              "Na nim — jeden ekran.",
              "I jeden przycisk.",
              "Bez opisów.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Это всё?"],
            pl: ["— To wszystko?"],
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
            ru: ["— А где инструкции?", "— Где правила?"],
            pl: ["— A gdzie instrukcje?", "— Gdzie zasady?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Здесь их нет."],
            pl: ["— Tutaj ich nie ma."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экран загорается.",
              "На нём появляется вопрос:",
              "<b>«Готов ли ты принять решение?»</b>",
            ],
            pl: [
              "Ekran się zapala.",
              "Pojawia się pytanie:",
              "<b>„Czy jesteś gotów podjąć decyzję?”</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— А если я ошибусь?"],
            pl: ["— Chwila.", "— A jeśli się pomylę?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда", "— это будет твоя ошибка."],
            pl: ["— Wtedy", "— to będzie twój błąd."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В зале становится очень тихо.",
              "Никаких эффектов.",
              "Никаких подсказок.",
            ],
            pl: [
              "W sali robi się bardzo cicho.",
              "Bez efektów.",
              "Bez podpowiedzi.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ может предложить варианты.",
              "Но выбирать —",
              "всегда человеку.",
            ],
            pl: [
              "AI może zaproponować opcje.",
              "Ale wybór",
              "zawsze należy do człowieka.",
            ],
          },
        },
      ],
    },

    // 🟨 СЕРИЯ 3 — УРОК 14
    // «Кто отвечает за результат»
    // СЦЕНА 2. Варианты без гарантии

    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Варианты без гарантии",
          "Экран на столе оживает.",
          "Кнопка по-прежнему одна.",
          "Но теперь рядом появляются строки.",
          "Несколько вариантов.",
          "Без пометки «правильный».",
        ],
        pl: [
          "🎬 SCENA 2. Opcje bez gwarancji",
          "Ekran na stole ożywa.",
          "Przycisk nadal jest tylko jeden.",
          "Obok pojawiają się jednak linijki.",
          "Kilka opcji.",
          "Bez oznaczenia „poprawna”.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляются три варианта решения.",
              "Каждый выглядит нормально.",
              "Каждый звучит уверенно.",
            ],
            pl: [
              "Na ekranie pojawiają się trzy warianty rozwiązania.",
              "Każdy wygląda w porządku.",
              "Każdy brzmi pewnie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— А где лучший?"],
            pl: ["— Chwila…", "— A gdzie najlepszy?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Его нет."],
            pl: ["— Nie ma."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Как это нет?"],
            pl: ["— Jak to nie ma?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Есть варианты.", "— У каждого — свои последствия."],
            pl: ["— Są opcje.", "— Każda ma swoje konsekwencje."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Под вариантами появляются мелкие подписи.",
              "Не предупреждения.",
              "Скорее напоминания.",
            ],
            pl: [
              "Pod opcjami pojawiają się drobne napisy.",
              "Nie ostrzeżenia.",
              "Raczej przypomnienia.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>«Может сработать»</em>",
              "<em>«Зависит от условий»</em>",
              "<em>«Есть риск ошибки»</em>",
            ],
            pl: [
              "<em>„Może zadziałać”</em>",
              "<em>„Zależy od warunków”</em>",
              "<em>„Istnieje ryzyko błędu”</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— ты не знаешь,", "— что будет?"],
            pl: ["— Czyli…", "— nie wiesz,", "— co się stanie?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не выбираю.", "— Я предлагаю."],
            pl: ["— Ja nie wybieram.", "— Ja proponuję."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран гаснет.", "Остаётся только кнопка.", "И тишина."],
            pl: ["Ekran gaśnie.", "Zostaje tylko przycisk.", "I cisza."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ не даёт гарантий.",
              "Он даёт варианты.",
              "Ответственность начинается",
              "в момент выбора.",
            ],
            pl: [
              "AI nie daje gwarancji.",
              "Daje opcje.",
              "Odpowiedzialność zaczyna się",
              "w momencie wyboru.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 3. Последствия выбора

    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Последствия выбора",
          "Кирилл смотрит на кнопку.",
          "Несколько секунд — тишина.",
          "Он нажимает.",
        ],
        pl: [
          "🎬 SCENA 3. Konsekwencje wyboru",
          "Kirył patrzy na przycisk.",
          "Kilka sekund ciszy.",
          "Naciska.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экран загорается резко.",
              "Комната меняется.",
              "Стены показывают результат.",
            ],
            pl: [
              "Ekran zapala się gwałtownie.",
              "Pomieszczenie się zmienia.",
              "Ściany pokazują wynik.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Результат не идеальный.",
              "Но и не провал.",
              "Просто — результат.",
            ],
            pl: [
              "Wynik nie jest idealny.",
              "Ale też nie jest porażką.",
              "To po prostu — wynik.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм…", "— Могло быть лучше.", "— Но могло быть и хуже."],
            pl: ["— Hmm…", "— Mogło być lepiej.", "— Ale mogło być gorzej."],
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
            ru: ["— Но это не ты ошибся.", "— Это я выбрал."],
            pl: ["— Ale to nie ty się pomyliłeś.", "— To ja wybrałem."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Именно."],
            pl: ["— Dokładnie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Комната не осуждает.",
              "Не хвалит.",
              "Она просто показывает.",
            ],
            pl: [
              "Pomieszczenie nie ocenia.",
              "Nie chwali.",
              "Po prostu pokazuje.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит,", "— если я использую ИИ…", "— отвечаю я."],
            pl: ["— Czyli", "— jeśli używam AI…", "— to ja odpowiadam."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Всегда."],
            pl: ["— Zawsze."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кнопка исчезает.", "Экран гаснет.", "Решение принято."],
            pl: [
              "Przycisk znika.",
              "Ekran gaśnie.",
              "Decyzja została podjęta.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (тихо):",
          avatar: "narrator",
          text: {
            ru: ["Ответственность —", "это не про вину.", "Это про выбор."],
            pl: ["Odpowiedzialność —", "to nie wina.", "To wybór."],
          },
        },
      ],
    },

    // 💭 МЫСЛИ КИРИЛЛА

    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_thoughts.png?raw=true",

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
            ru: [
              "«Раньше я думал,",
              "что если ИИ сказал —",
              "значит, так и есть.»",
            ],
            pl: [
              "„Wcześniej myślałem,",
              "że skoro AI coś powiedziało —",
              "to tak jest.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Теперь понимаю:", "он предлагает,", "а не решает.»"],
            pl: ["„Teraz rozumiem:", "on proponuje,", "a nie decyduje.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Он может быть полезным.", "И может ошибаться.»"],
            pl: ["„Może być pomocny.", "I może się mylić.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Но выбор —", "всегда мой.»"],
            pl: ["„Ale wybór —", "zawsze jest mój.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит,", "я не перекладываю ответственность", "на ИИ.»"],
            pl: ["„Czyli", "nie zrzucam odpowiedzialności", "na AI.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Я использую инструмент.", "А не слушаю приказы.»"],
            pl: ["„Używam narzędzia.", "A nie słucham rozkazów.”"],
          },
        },
      ],
    },
    // 🎯 ПРАВИЛО УРОКА

    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО ЦЕНТРА РЕШЕНИЙ",
            pl: "❗ GŁÓWNA ZASADA CENTRUM DECYZJI",
          },
          rule: {
            ru: [
              "ИИ — это инструмент.",
              "Он может предлагать варианты,",
              "но не принимает решения.",
              "",
              "Решение всегда принимает человек.",
              "И за результат отвечает тоже человек.",
            ],
            pl: [
              "AI to narzędzie.",
              "Może proponować opcje,",
              "ale nie podejmuje decyzji.",
              "",
              "Decyzję zawsze podejmuje człowiek.",
              "I to on odpowiada za rezultat.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я помогаю думать.", "— Но не думаю за тебя."],
                pl: ["— Pomagam myśleć.", "— Ale nie myślę za ciebie."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— я использую ИИ осознанно."],
                pl: ["— Czyli", "— używam AI świadomie."],
              },
            },
          ],
        },
      ],
    },

    // 🏁 ФИНАЛ

    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson14_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ СЕРИИ",
          "Центр принятия решений пустеет.",
          "Экран погас.",
          "Кнопка исчезла.",
          "Остаётся только пространство.",
          "И тишина.",
        ],
        pl: [
          "🏁 FINAŁ SERII",
          "Centrum podejmowania decyzji pustoszeje.",
          "Ekran gaśnie.",
          "Przycisk znika.",
          "Zostaje tylko przestrzeń.",
          "I cisza.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Странно.", "— Тут больше нечего нажимать."],
            pl: ["— Dziwne.", "— Nie ma już czego naciskać."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Потому что дальше", "— решения принимаешь ты."],
            pl: ["— Bo dalej", "— decyzje podejmujesz ty."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл стоит спокойно.", "Без спешки.", "Без страха."],
            pl: ["Kirył stoi spokojnie.", "Bez pośpiechu.", "Bez strachu."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит,", "— ИИ — это не ответ."],
            pl: ["— Czyli", "— AI to nie odpowiedź."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Это инструмент,", "— который помогает думать."],
            pl: ["— To narzędzie,", "— które pomaga myśleć."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно."],
            pl: ["— Zgadza się."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Дверь в конце зала медленно открывается.",
              "За ней — следующий путь.",
            ],
            pl: [
              "Drzwi na końcu sali powoli się otwierają.",
              "Za nimi — kolejna droga.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Понимание того, как думает ИИ,",
              "начинается с понимания того,",
              "кто думает на самом деле.",
            ],
            pl: [
              "Zrozumienie, jak myśli AI,",
              "zaczyna się od zrozumienia tego,",
              "kto naprawdę myśli.",
            ],
          },
        },
      ],
    },
  ],
};
