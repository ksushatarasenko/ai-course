// lessons/lesson2-2.js
export const lesson = {
  seriesId: 3,
  lessonId: 12,

  title: {
    ru: "Факты, версии и фантазии",
    pl: "",
  },

  subtitle: {
    ru: "",
    pl: "",
  },

  scenes: [
    // СЦЕНА 1. Комната разноцветных сигналов
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Комната разноцветных сигналов",
          "Кирилл выходит из Зала убедительных слов",
          "и сразу чувствует, что место другое.",
          "Здесь нет золота и пафоса.",
          "Комната похожа на игровой хаб.",
          "В воздухе висят светящиеся сферы трёх цветов:",
          "зелёные, жёлтые и красные.",
        ],
        pl: [
          "🎬 SCENA 1. Pokój kolorowych sygnałów",
          "Kirył wychodzi z Sali przekonujących słów",
          "i od razu czuje, że to inne miejsce.",
          "Nie ma tu złota ani patosu.",
          "Pokój przypomina growy hub.",
          "W powietrzu unoszą się świecące kule trzech kolorów:",
          "zielone, żółte i czerwone.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О, это уже", "— выглядит как что-то понятное."],
            pl: ["— O, to już", "— wygląda na coś ogarniętego."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Одна из зелёных сфер медленно подплывает ближе.",
              "На ней появляется надпись:",
              "<b>«ФАКТ»</b>.",
            ],
            pl: [
              "Jedna z zielonych kul powoli podpływa bliżej.",
              "Pojawia się na niej napis:",
              "<b>„FAKT”</b>.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Следом за ней — жёлтая:", "<b>«ВЕРСИЯ»</b>."],
            pl: ["Zaraz po niej pojawia się żółta:", "<b>„WERSJA”</b>."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["А потом резко вспыхивает красная:", "<b>«ФАНТАЗИЯ»</b>."],
            pl: ["A potem nagle zapala się czerwona:", "<b>„FANTAZJA”</b>."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— Это как светофор?"],
            pl: ["— Chwila…", "— To jak sygnalizacja świetlna?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Почти.", "— Только для информации."],
            pl: ["— Prawie.", "— Tylko dla informacji."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Сферы начинают вращаться.",
              "На стенах появляются фразы.",
              "Некоторые выглядят спокойно.",
              "Другие — подозрительно уверенно.",
              "Третьи — как будто из фантастической игры.",
            ],
            pl: [
              "Kule zaczynają się obracać.",
              "Na ścianach pojawiają się zdania.",
              "Niektóre wyglądają spokojnie.",
              "Inne — podejrzanie pewnie.",
              "Jeszcze inne — jak z gry science fiction.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— И все они…", "— звучат по-разному."],
            pl: ["— I wszystkie…", "— brzmią inaczej."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Одна и та же фраза",
              "на мгновение появляется",
              "сразу в трёх цветах.",
            ],
            pl: [
              "To samo zdanie",
              "na chwilę pojawia się",
              "we wszystkich trzech kolorach.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эй!", "— Так нечестно."],
            pl: ["— Ej!", "— To nie fair."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Информация редко бывает", "— одного цвета."],
            pl: ["— Informacja rzadko bywa", "— jednego koloru."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Чтобы не ошибаться,",
              "нужно сначала понять:",
              "что перед тобой —",
              "факт, версия",
              "или фантазия.",
            ],
            pl: [
              "Żeby się nie pomylić,",
              "najpierw trzeba zrozumieć:",
              "co masz przed sobą —",
              "fakt, wersję",
              "czy fantazję.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 2. Одна фраза — три цвета
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Одна фраза — три цвета",
          "Сферы в комнате начинают двигаться быстрее.",
          "Одна из стен превращается в огромный экран.",
          "На нём появляется одна и та же фраза.",
          "Но что-то с ней не так.",
        ],
        pl: [
          "🎬 SCENA 2. Jedno zdanie — trzy kolory",
          "Kule w pokoju zaczynają poruszać się szybciej.",
          "Jedna ze ścian zamienia się w ogromny ekran.",
          "Pojawia się na nim to samo zdanie.",
          "Ale coś jest z nim nie tak.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Фраза вспыхивает зелёным цветом:",
              "<b>«Этот мост открыт»</b>.",
            ],
            pl: [
              "Zdanie zapala się na zielono:",
              "<b>„Ten most jest otwarty”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Либо открыт, либо нет."],
            pl: ["— Okej.", "— Albo jest otwarty, albo nie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Фраза меняет цвет на жёлтый:",
              "<b>«Этот мост, скорее всего, открыт»</b>.",
            ],
            pl: [
              "Zdanie zmienia kolor na żółty:",
              "<b>„Ten most jest prawdopodobnie otwarty”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ага.", "— Уже не точно."],
            pl: ["— Aha.", "— Już nie na sto procent."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экран на секунду гаснет.",
              "А потом вспыхивает красным:",
              "<b>«Этот мост открыт,",
              "потому что его охраняют невидимые дроны»</b>.",
            ],
            pl: [
              "Ekran na chwilę gaśnie.",
              "A potem zapala się na czerwono:",
              "<b>„Ten most jest otwarty,",
              "ponieważ pilnują go niewidzialne drony”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эй!", "— Это уже фантастика."],
            pl: ["— Ej!", "— To już fantastyka."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Три версии одной фразы",
              "висят рядом.",
              "Зелёная.",
              "Жёлтая.",
              "Красная.",
            ],
            pl: [
              "Trzy wersje jednego zdania",
              "wiszą obok siebie.",
              "Zielona.",
              "Żółta.",
              "Czerwona.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Слова похожи.", "— Смысл разный."],
            pl: ["— Słowa są podobne.", "— Sens jest inny."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— И последствия тоже."],
            pl: ["— I konsekwencje też."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Жёлтая версия начинает мигать.", "Как предупреждение."],
            pl: ["Żółta wersja zaczyna migać.", "Jak ostrzeżenie."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Одна и та же мысль",
              "может быть фактом,",
              "версией",
              "или фантазией.",
              "Цвет меняет всё.",
            ],
            pl: [
              "Ta sama myśl",
              "może być faktem,",
              "wersją",
              "lub fantazją.",
              "Kolor zmienia wszystko.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 3. Опасный жёлтый
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Опасный жёлтый",
          "Жёлтая сфера начинает вращаться быстрее остальных.",
          "Она светится мягко.",
          "Не пугающе.",
          "Даже приятно.",
          "Как будто говорит:",
          "«Со мной всё нормально».",
        ],
        pl: [
          "🎬 SCENA 3. Niebezpieczny żółty",
          "Żółta kula zaczyna obracać się szybciej niż pozostałe.",
          "Świeci miękko.",
          "Nie straszy.",
          "Jest nawet przyjemna.",
          "Jakby mówiła:",
          "„Ze mną wszystko w porządku”.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Странно.",
              "— Красное сразу видно.",
              "— А жёлтое…",
              "— почти как правда.",
            ],
            pl: [
              "— Dziwne.",
              "— Czerwone od razu widać.",
              "— A żółte…",
              "— prawie jak prawda.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["На стене появляются фразы.", "Все они жёлтые."],
            pl: ["Na ścianie pojawiają się zdania.", "Wszystkie są żółte."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>«Скорее всего, это безопасно»</b>",
              "<b>«Обычно так и бывает»</b>",
              "<b>«Похоже, что всё работает»</b>",
            ],
            pl: [
              "<b>„Najprawdopodobniej to bezpieczne”</b>",
              "<b>„Zazwyczaj tak bywa”</b>",
              "<b>„Wygląda na to, że wszystko działa”</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Они звучат…", "— нормально."],
            pl: ["— Brzmią…", "— normalnie."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— В этом и проблема."],
            pl: ["— W tym jest problem."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Типа?"],
            pl: ["— W sensie?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это не факты.", "— Но и не фантазии.", "— Это версии."],
            pl: [
              "— To nie są fakty.",
              "— Ale też nie fantazje.",
              "— To są wersje.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Жёлтые фразы начинают медленно приближаться.",
              "Они не давят.",
              "Не пугают.",
              "Они просто…",
              "заполняют пространство.",
            ],
            pl: [
              "Żółte zdania zaczynają się powoli zbliżać.",
              "Nie naciskają.",
              "Nie straszą.",
              "Po prostu…",
              "wypełniają przestrzeń.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Понял.",
              "— В красное никто не верит.",
              "— А жёлтому верят все.",
            ],
            pl: [
              "— Rozumiem.",
              "— W czerwone nikt nie wierzy.",
              "— A w żółte wierzą wszyscy.",
            ],
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
            ru: ["Жёлтая сфера замирает.", "И на секунду становится ярче."],
            pl: ["Żółta kula zatrzymuje się.", "I na chwilę świeci jaśniej."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Версии опасны тем,",
              "что выглядят как факты.",
              "Но ими не являются.",
            ],
            pl: [
              "Wersje są niebezpieczne,",
              "bo wyglądają jak fakty.",
              "Ale nimi nie są.",
            ],
          },
        },
      ],
    },

    // 💭 МЫСЛИ КИРИЛЛА
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_thoughts.png?raw=true",

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
              "«Раньше я думал:",
              "если звучит уверенно —",
              "значит, это правда.»",
            ],
            pl: [
              "„Wcześniej myślałem:",
              "jeśli brzmi pewnie —",
              "to znaczy, że to prawda.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«А теперь вижу:", "бывает зелёное,", "жёлтое", "и красное.»"],
            pl: ["„A teraz widzę:", "jest zielone,", "żółte", "i czerwone.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Факты — это одно.", "Версии — совсем другое.»"],
            pl: ["„Fakty to jedno.", "Wersje to coś zupełnie innego.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«И самое коварное —", "версии выглядят", "почти как факты.»"],
            pl: [
              "„Najbardziej podstępne jest to,",
              "że wersje wyglądają",
              "prawie jak fakty.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Теперь, когда я вижу",
              "„скорее всего“",
              "или „обычно“ —",
              "я торможу.»",
            ],
            pl: [
              "„Teraz, gdy widzę",
              "„najprawdopodobniej“",
              "albo „zwykle“ —",
              "zatrzymuję się.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Я больше не путаю", "уверенность", "с правдой.»"],
            pl: ["„Nie mylę już", "pewności", "z prawdą.”"],
          },
        },
      ],
    },

    // 🎯 ПРАВИЛО УРОКА
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО КОМНАТЫ СИГНАЛОВ",
            pl: "❗ GŁÓWNA ZASADA POKOJU SYGNAŁÓW",
          },
          rule: {
            ru: [
              "Любая информация бывает разной:",
              "",
              "🟢 <b>Факт</b> — то, что точно известно и можно проверить.",
              "🟡 <b>Версия</b> — предположение или догадка.",
              "🔴 <b>Фантазия</b> — выдумка без подтверждений.",
              "",
              "Самая опасная — версия.",
              "Она звучит почти как факт.",
            ],
            pl: [
              "Każda informacja może być różna:",
              "",
              "🟢 <b>Fakt</b> — coś, co jest pewne i można to sprawdzić.",
              "🟡 <b>Wersja</b> — przypuszczenie lub domysł.",
              "🔴 <b>Fantazja</b> — wymysł bez potwierdzeń.",
              "",
              "Najbardziej niebezpieczna jest wersja.",
              "Brzmi prawie jak fakt.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: [
                  "— Я могу звучать уверенно",
                  "— и при этом давать версию.",
                ],
                pl: [
                  "— Mogę brzmieć pewnie",
                  "— i jednocześnie podawać wersję.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— мне нужно сначала понять цвет."],
                pl: ["— Czyli", "— najpierw muszę zobaczyć kolor."],
              },
            },
          ],
        },
      ],
    },

    // 🎮 ПРАКТИКА

    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_task.png?raw=true",

      author: {
        ru: [
          "🎮 ПРАКТИКА",
          "Кирилл решает проверить,",
          "сможет ли он определить цвет информации.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić,",
          "czy potrafi rozpoznać kolor informacji.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какого цвета эта фраза?",
            pl: "Jakiego koloru jest to zdanie?",
          },
          options: {
            ru: ["🟢 Факт", "🟡 Версия", "🔴 Фантазия"],
            pl: ["🟢 Fakt", "🟡 Wersja", "🔴 Fantazja"],
          },
          statement: {
            ru: "«Скорее всего, эта игра станет популярной»",
            pl: "„Najprawdopodobniej ta gra stanie się popularna”",
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Есть ли здесь точные данные?",
                "Можно ли это проверить прямо сейчас?",
                "Почему это звучит убедительно?",
              ],
              pl: [
                "Czy są tu dokładne dane?",
                "Czy da się to sprawdzić od razu?",
                "Dlaczego brzmi przekonująco?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "Какого цвета эта фраза?",
            pl: "Jakiego koloru jest to zdanie?",
          },
          options: {
            ru: ["🟢 Факт", "🟡 Версия", "🔴 Фантазия"],
            pl: ["🟢 Fakt", "🟡 Wersja", "🔴 Fantazja"],
          },
          statement: {
            ru: "«Игра вышла 10 мая 2024 года»",
            pl: "„Gra wyszła 10 maja 2024 roku”",
          },
          correct: 0,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Где можно проверить эту информацию?",
                "Почему здесь нет слов-маркеров версии?",
              ],
              pl: [
                "Gdzie można sprawdzić tę informację?",
                "Dlaczego nie ma tu słów-markerów wersji?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "Какого цвета эта фраза?",
            pl: "Jakiego koloru jest to zdanie?",
          },
          options: {
            ru: ["🟢 Факт", "🟡 Версия", "🔴 Фантазия"],
            pl: ["🟢 Fakt", "🟡 Wersja", "🔴 Fantazja"],
          },
          statement: {
            ru: "«Эта игра стала популярной благодаря тайному алгоритму»",
            pl: "„Ta gra stała się popularna dzięki tajnemu algorytmowi”",
          },
          correct: 2,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Есть ли доказательства тайного алгоритма?",
                "Почему это звучит как объяснение?",
              ],
              pl: [
                "Czy są dowody na istnienie tajnego algorytmu?",
                "Dlaczego brzmi to jak wyjaśnienie?",
              ],
            },
          },
        },
      ],
    },

    // 🏁 ФИНАЛ

    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson12_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Комната разноцветных сигналов медленно гаснет.",
          "Сферы замирают в воздухе.",
          "Зелёная светится спокойно.",
          "Жёлтая — мигает, словно напоминает.",
          "Красная — исчезает первой.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Pokój kolorowych sygnałów powoli gaśnie.",
          "Kule zatrzymują się w powietrzu.",
          "Zielona świeci spokojnie.",
          "Żółta — miga, jakby przypominała.",
          "Czerwona — znika jako pierwsza.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Теперь понятно.", "— Дело не в том,", "— кто говорит."],
            pl: ["— Teraz jasne.", "— To nie chodzi o to,", "— kto mówi."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А в том,", "— что именно говорится."],
            pl: ["— Chodzi o to,", "— co dokładnie jest powiedziane."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— И какого это цвета."],
            pl: ["— I jakiego to koloru."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на жёлтую сферу.",
              "Она мигает мягко.",
              "Не запрещает.",
              "Просто просит остановиться.",
            ],
            pl: [
              "Kirył patrzy na żółtą kulę.",
              "Miga miękko.",
              "Nie zakazuje.",
              "Po prostu prosi, żeby się zatrzymać.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: ["Тот, кто различает цвета,", "реже попадает в ловушки."],
            pl: ["Ten, kto rozróżnia kolory,", "rzadziej wpada w pułapki."],
          },
        },
      ],
    },
  ],
};
