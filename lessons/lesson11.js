// lessons/lesson2-2.js
export const lesson = {
  seriesId: 3,
  lessonId: 11,

  title: {
    ru: "Почему мы верим умным словам",
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
          "🎬 СЦЕНА 1. Зал убедительных слов",
          "Кирилл делает шаг вперёд — и пространство вокруг меняется.",
          "Он оказывается в огромном зале.",
          "Всё здесь выглядит очень серьёзно.",
          "Колонны с золотыми надписями.",
          "Парящие экраны.",
          "Тексты медленно прокручиваются в воздухе.",
          "Каждый из них выглядит так, будто его писал кто-то очень умный.",
        ],
        pl: [
          "🎬 SCENA 1. Sala przekonujących słów",
          "Kirył robi krok do przodu — i przestrzeń wokół się zmienia.",
          "Znajduje się w ogromnej sali.",
          "Wszystko wygląda tu bardzo poważnie.",
          "Kolumny ze złotymi napisami.",
          "Lewitujące ekrany.",
          "Teksty powoli przewijają się w powietrzu.",
          "Każdy wygląda tak, jakby napisał go ktoś bardzo mądry.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Вау…", "— Тут всё какое-то…", "— официальное."],
            pl: ["— Wow…", "— Wszystko tutaj jest takie…", "— oficjalne."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Один из экранов опускается ниже.",
              "Текст на нём длинный.",
              "Сложный.",
              "С кучей умных слов.",
              "Кирилл читает и машинально кивает.",
            ],
            pl: [
              "Jeden z ekranów opuszcza się niżej.",
              "Tekst jest długi.",
              "Skomplikowany.",
              "Pełen mądrych słów.",
              "Kirył czyta i automatycznie kiwa głową.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ага…", "— Да…", "— Логично."],
            pl: ["— Aha…", "— Tak…", "— Logiczne."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Проходит несколько секунд.", "Кирилл останавливается."],
            pl: ["Mija kilka sekund.", "Kirył się zatrzymuje."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Стоп.", "— А я вообще понял,", "— что тут написано?"],
            pl: [
              "— Chwila.",
              "— Czy ja w ogóle zrozumiałem,",
              "— co tu jest napisane?",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл перечитывает текст.",
              "Слова всё ещё выглядят умно.",
              "Но смысл ускользает.",
            ],
            pl: [
              "Kirył czyta tekst jeszcze raz.",
              "Słowa nadal brzmią mądrze.",
              "Ale sens się wymyka.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Текст звучит убедительно."],
            pl: ["— Tekst brzmi przekonująco."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Вот именно.", "— Звучит."],
            pl: ["— Właśnie.", "— Brzmi."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл оглядывается.",
              "В зале сотни таких текстов.",
              "Все разные.",
              "И все одинаково убедительные.",
            ],
            pl: [
              "Kirył rozgląda się.",
              "W sali są setki takich tekstów.",
              "Wszystkie różne.",
              "I wszystkie jednakowo przekonujące.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Иногда мозг",
              "верит не потому, что понял.",
              "А потому, что",
              "звучит уверенно.",
            ],
            pl: [
              "Czasem mózg",
              "wierzy nie dlatego, że zrozumiał.",
              "Ale dlatego, że",
              "brzmi pewnie.",
            ],
          },
        },
      ],
    },
    // СЦЕНА 2. Автокивок
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Автокивок",
          "Кирилл идёт дальше по залу.",
          "Экраны реагируют на его движение.",
          "Чем дальше он идёт,",
          "тем быстрее прокручиваются тексты.",
          "Слова становятся сложнее.",
          "Фразы — длиннее.",
        ],
        pl: [
          "🎬 SCENA 2. Automatyczne kiwanie głową",
          "Kirył idzie dalej przez salę.",
          "Ekrany reagują na jego ruch.",
          "Im dalej idzie,",
          "tym szybciej przewijają się teksty.",
          "Słowa stają się trudniejsze.",
          "Zdania — dłuższe.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл читает на ходу.",
              "Не останавливаясь.",
              "Он кивает.",
              "Снова и снова.",
            ],
            pl: [
              "Kirył czyta w ruchu.",
              "Nie zatrzymując się.",
              "Kiwa głową.",
              "Znowu i znowu.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ага.", "— Понятно.", "— Ну да."],
            pl: ["— Aha.", "— Jasne.", "— No tak."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На одном из экранов загорается надпись:",
              "<b>«ПОЛНОЕ ПОНИМАНИЕ ДОСТИГНУТО»</b>.",
            ],
            pl: [
              "Na jednym z ekranów pojawia się napis:",
              "<b>„PEŁNE ZROZUMIENIE OSIĄGNIĘTE”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О, nice."],
            pl: ["— O, nice."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл улыбается.", "Но через секунду хмурится."],
            pl: ["Kirył się uśmiecha.", "Ale po chwili marszczy brwi."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— А что именно я понял?"],
            pl: ["— Chwila.", "— A co dokładnie zrozumiałem?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он пытается пересказать текст.",
              "В голове — пусто.",
              "Только ощущение,",
              "что «вроде всё ок».",
            ],
            pl: [
              "Próbuje streścić tekst.",
              "W głowie — pustka.",
              "Jest tylko uczucie,",
              "że „chyba wszystko gra”.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Странно…", "— Я согласился.", "— Но не понял."],
            pl: ["— Dziwne…", "— Zgodziłem się.", "— Ale nie zrozumiałem."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это распространённая реакция."],
            pl: ["— To częsta reakcja."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Реакция на что?"],
            pl: ["— Reakcja na co?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— На уверенный тон.", "— И сложные формулировки."],
            pl: ["— Na pewny ton.", "— I skomplikowane sformułowania."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экраны вокруг мигают.",
              "Надпись «ПОЛНОЕ ПОНИМАНИЕ» исчезает.",
            ],
            pl: ["Ekrany wokół migają.", "Napis „PEŁNE ZROZUMIENIE” znika."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно, с улыбкой):",
          avatar: "narrator",
          text: {
            ru: [
              "Если ты киваешь,",
              "но не можешь объяснить —",
              "это и есть автокивок.",
            ],
            pl: [
              "Jeśli kiwasz głową,",
              "ale nie potrafisz wyjaśnić —",
              "to właśnie jest automatyczne kiwanie.",
            ],
          },
        },
      ],
    },

    //  СЦЕНА 3. Разбор ловушки
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Разбор ловушки",
          "Зал вокруг Кирилла меняется.",
          "Тексты останавливаются.",
          "Экраны гаснут.",
          "Остаётся один — перед ним.",
          "На нём всего несколько строк.",
          "Простых.",
          "Слишком простых для этого места.",
        ],
        pl: [
          "🎬 SCENA 3. Analiza pułapki",
          "Sala wokół Kiryła się zmienia.",
          "Teksty zatrzymują się.",
          "Ekrany gasną.",
          "Zostaje tylko jeden — przed nim.",
          "Jest na nim tylko kilka linijek.",
          "Prostych.",
          "Zbyt prostych jak na to miejsce.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Странно.", "— А где всё умное?"],
            pl: ["— Dziwne.", "— A gdzie to całe „mądre”?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Сейчас будет не умно.", "— Сейчас будет понятно."],
            pl: ["— Teraz nie będzie mądrze.", "— Teraz będzie jasno."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляется вопрос:",
              "<b>«Ты понял — или просто согласился?»</b>",
            ],
            pl: [
              "Na ekranie pojawia się pytanie:",
              "<b>„Zrozumiałeś — czy po prostu się zgodziłeś?”</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Блин…", "— Кажется, второе."],
            pl: ["— Kurczę…", "— Chyba to drugie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экран делится на две части.",
              "Слева — длинный, сложный текст.",
              "Справа — короткий, простой.",
            ],
            pl: [
              "Ekran dzieli się na dwie części.",
              "Po lewej — długi, skomplikowany tekst.",
              "Po prawej — krótki, prosty.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Мозг любит экономить энергию.",
              "— Он выбирает то,",
              "— что выглядит уверенно.",
            ],
            pl: [
              "— Mózg lubi oszczędzać energię.",
              "— Wybiera to,",
              "— co wygląda pewnie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Даже если не понял?"],
            pl: ["— Nawet jeśli nie zrozumiał?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Особенно тогда."],
            pl: ["— Zwłaszcza wtedy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Простой текст справа загорается.", "Сложный — тускнеет."],
            pl: [
              "Prosty tekst po prawej się podświetla.",
              "Skomplikowany — przygasa.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Мозг часто путает «звучит умно»",
              "с «я понимаю».)</em>",
            ],
            pl: ["<em>(Mózg często myli „brzmi mądrze”", "z „rozumiem”.)</em>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— То есть…",
              "— если я не могу объяснить,",
              "— это тревожный знак?",
            ],
            pl: [
              "— Czyli…",
              "— jeśli nie potrafię wyjaśnić,",
              "— to sygnał ostrzegawczy?",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Очень полезный сигнал."],
            pl: ["— Tak.", "— Bardzo przydatny sygnał."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Если ты не можешь",
              "объяснить простыми словами —",
              "значит, понимание ещё не произошло.",
            ],
            pl: [
              "Jeśli nie potrafisz",
              "wyjaśnić prostymi słowami —",
              "to znaczy, że zrozumienie jeszcze się nie pojawiło.",
            ],
          },
        },
      ],
    },

    // 💭 МЫСЛИ КИРИЛЛА

    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_thoughts.png?raw=true",

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
            ru: ["«Я реально кивал,", "даже не понимая, что читаю.»"],
            pl: [
              "„Naprawdę kiwałem głową,",
              "nawet nie rozumiejąc, co czytam.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Просто потому что", "это звучало умно.»"],
            pl: ["„Tylko dlatego,", "że brzmiało mądrze.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Типа:", "если я не понял —", "значит, я туплю.»"],
            pl: ["„Jakby:", "jeśli nie rozumiem —", "to ja jestem głupi.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Но, похоже,", "это не так работает.»"],
            pl: ["„Ale wygląda na to,", "że to tak nie działa.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Если я не могу",
              "объяснить простыми словами —",
              "я просто ещё не понял.»",
            ],
            pl: [
              "„Jeśli nie potrafię",
              "wyjaśnić prostymi słowami —",
              "to po prostu jeszcze nie zrozumiałem.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«И это не стыдно.»"],
            pl: ["„I to nie jest wstyd.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Страшнее —", "делать вид, что понял.»"],
            pl: ["„Straszniejsze jest", "udawać, że się zrozumiało.”"],
          },
        },
      ],
    },
    // 🎯 ПРАВИЛО УРОКА
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО ЗАЛА УБЕДИТЕЛЬНЫХ СЛОВ",
            pl: "❗ GŁÓWNA ZASADA SALI PRZEKONUJĄCYCH SŁÓW",
          },
          rule: {
            ru: [
              "Умные слова и уверенный тон",
              "не означают понимание.",
              "",
              "Если ты не можешь",
              "объяснить простыми словами —",
              "значит, ты ещё не понял.",
              "",
              "Это нормально.",
              "Опасно — делать вид,",
              "что понял.",
            ],
            pl: [
              "Mądre słowa i pewny ton",
              "nie oznaczają zrozumienia.",
              "",
              "Jeśli nie potrafisz",
              "wyjaśnić prostymi słowami —",
              "to znaczy, że jeszcze nie zrozumiałeś.",
              "",
              "To normalne.",
              "Niebezpieczne jest",
              "udawać, że się rozumie.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Сложность звучания", "— не равна сложности смысла."],
                pl: [
                  "— Złożoność brzmienia",
                  "— nie równa się złożoności sensu.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— простота — это не слабость."],
                pl: ["— Czyli", "— prostota to nie słabość."],
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_task.png?raw=true",

      author: {
        ru: [
          "🎮 ПРАКТИКА",
          "Кирилл решает проверить,",
          "всегда ли умные слова означают понимание.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić,",
          "czy mądre słowa zawsze oznaczają zrozumienie.",
        ],
      },
      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой текст ты действительно понял?",
            pl: "Który tekst naprawdę zrozumiałeś?",
          },
          options: {
            ru: [
              "Этот процесс основан на многоуровневой оптимизации параметров с учётом вероятностных моделей",
              "Система выбирает вариант, который чаще всего подходит в похожих случаях",
              "Данный механизм реализует комплексный анализ входных данных с последующей генерацией результата",
            ],
            pl: [
              "Proces ten opiera się na wielopoziomowej optymalizacji parametrów z uwzględnieniem modeli probabilistycznych",
              "System wybiera opcję, która najczęściej pasuje w podobnych sytuacjach",
              "Mechanizm ten realizuje kompleksową analizę danych wejściowych z późniejszym generowaniem wyniku",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Какой вариант можно объяснить своими словами?",
                "Какие варианты звучат умно, но не ясно?",
                "Где есть конкретный смысл, а где только форма?",
              ],
              pl: [
                "Którą opcję można wyjaśnić własnymi słowami?",
                "Które opcje brzmią mądrze, ale są niejasne?",
                "Gdzie jest konkretny sens, a gdzie tylko forma?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "В каком случае мозг скорее всего сделает «автокивок»?",
            pl: "W którym przypadku mózg najpewniej wykona „automatyczne kiwanie głową”?",
          },
          options: {
            ru: [
              "Когда текст короткий и простой",
              "Когда текст длинный, сложный и звучит уверенно",
              "Когда кто-то честно говорит: «я не уверен»",
            ],
            pl: [
              "Gdy tekst jest krótki i prosty",
              "Gdy tekst jest długi, skomplikowany i brzmi pewnie",
              "Gdy ktoś uczciwie mówi: „nie jestem pewien”",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Почему уверенность может быть ловушкой?",
                "Что проще: понять или согласиться?",
                "Как можно остановить автокивок?",
              ],
              pl: [
                "Dlaczego pewność może być pułapką?",
                "Co jest łatwiejsze: zrozumieć czy się zgodzić?",
                "Jak można zatrzymać automatyczne kiwanie głową?",
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_final.png?raw=true",

      author: {
        rru: [
          "🏁 ФИНАЛ УРОКА",
          "Зал убедительных слов постепенно пустеет.",
          "Экраны гаснут один за другим.",
          "Золотые надписи теряют блеск.",
          "Остаётся тишина.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Sala przekonujących słów powoli pustoszeje.",
          "Ekrany gasną jeden po drugim.",
          "Złote napisy tracą blask.",
          "Zostaje cisza.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Забавно…",
              "— Раньше я бы просто кивнул",
              "— и пошёл дальше.",
            ],
            pl: [
              "— Zabawne…",
              "— Wcześniej po prostu bym kiwnął głową",
              "— i poszedł dalej.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А сейчас", "— как будто что-то щёлкнуло."],
            pl: ["— A teraz", "— jakby coś kliknęło."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты перестал", "— автоматически соглашаться."],
            pl: ["— Przestałeś", "— automatycznie się zgadzać."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да.", "— Теперь, если я не понял…", "— я это замечаю."],
            pl: [
              "— Tak.",
              "— Teraz, jeśli czegoś nie rozumiem…",
              "— to to zauważam.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл делает шаг к выходу.",
              "Дверь открывается не сразу.",
              "Как будто проверяет:",
              "он правда понял — или просто кивнул.",
            ],
            pl: [
              "Kirył robi krok w stronę wyjścia.",
              "Drzwi nie otwierają się od razu.",
              "Jakby sprawdzały:",
              "czy naprawdę zrozumiał — czy tylko kiwnął głową.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Понимание начинается",
              "не с умных слов.",
              "А с честного вопроса:",
              "«Я правда это понял?»",
            ],
            pl: [
              "Zrozumienie zaczyna się",
              "nie od mądrych słów.",
              "Ale od uczciwego pytania:",
              "„Czy ja naprawdę to zrozumiałem?”",
            ],
          },
        },
      ],
    },
  ],
};
