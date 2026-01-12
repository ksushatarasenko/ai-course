// lessons/lesson2-2.js
export const lesson = {
  seriesId: 3,
  lessonId: 11,

  title: {
    ru: "ИИ не понимает смысл, он ищет шаблоны",
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
          "🎬 СЦЕНА 1. Архив шаблонов",
          "Кирилл выходит из центра управления.",
          "Вместо кнопок и экранов — огромный зал.",
          "Он похож на библиотеку.",
          "Но не с книгами.",
          "А с миллионами одинаковых фрагментов.",
          "Стены уходят вверх.",
          "Пол — как сетка.",
          "Всё выглядит так, будто мир собран из повторов.",
        ],
        pl: [
          "🎬 SCENA 1. Archiwum wzorców",
          "Kirył wychodzi z centrum sterowania.",
          "Zamiast przycisków i ekranów — ogromna sala.",
          "Wygląda jak biblioteka.",
          "Ale nie z książkami.",
          "Tylko z milionami podobnych fragmentów.",
          "Ściany pną się wysoko.",
          "Podłoga wygląda jak siatka.",
          "Wszystko sprawia wrażenie, jakby świat był złożony z powtórek.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— Это что вообще?", "— Какой-то бесконечный склад?"],
            pl: [
              "— Eee…",
              "— Co to w ogóle jest?",
              "— Jakiś nieskończony magazyn?",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это Архив шаблонов."],
            pl: ["— To Archiwum wzorców."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Шаблонов?", "— Типа скинов?"],
            pl: ["— Wzorców?", "— Jak skiny?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<em>(Скин — внешний вид персонажа в игре.)</em>"],
            pl: ["<em>(Skin — wygląd postaci w grze.)</em>"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Похоже.",
              "— Но это не внешний вид.",
              "— Это способы, как что-то обычно выглядит,",
              "— звучит или происходит.",
            ],
            pl: [
              "— Podobnie.",
              "— Ale to nie wygląd.",
              "— To sposoby, w jakie coś zwykle wygląda,",
              "— brzmi lub się dzieje.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл берёт один из фрагментов.",
              "Он вспыхивает и разворачивается в текст.",
            ],
            pl: [
              "Kirył bierze jeden z fragmentów.",
              "Rozbłyska i zamienia się w tekst.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Это же…", "— я где-то уже это видел."],
            pl: ["— Czekaj.", "— Przecież…", "— ja to już gdzieś widziałem."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно.", "— Я не понимаю смысл.", "— Я ищу совпадения."],
            pl: [
              "— Zgadza się.",
              "— Nie rozumiem znaczenia.",
              "— Szukam dopasowań.",
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
              "— ты как игрок,",
              "— который копирует лучший билд?",
            ],
            pl: [
              "— Czyli…",
              "— jesteś jak gracz,",
              "— który kopiuje najlepszy build?",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Билд — удачная сборка персонажа или стратегии в игре.)</em>",
            ],
            pl: [
              "<em>(Build — skuteczna konfiguracja postaci lub strategii w grze.)</em>",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Да.",
              "— Только я копирую не лучший.",
              "— А самый часто встречающийся.",
            ],
            pl: [
              "— Tak.",
              "— Tylko że kopiuję nie najlepszy.",
              "— A ten, który pojawia się najczęściej.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Оу…", "— Это уже звучит не так имбово."],
            pl: ["— Ooo…", "— To już nie brzmi tak OP."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<em>(Имбовый — слишком сильный, сломанный баланс.)</em>"],
            pl: ["<em>(OP — overpowered, zbyt mocny, łamiący balans.)</em>"],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл только что узнал важную вещь.",
              "ИИ не ищет правду.",
              "Он ищет то,",
              "что чаще всего встречалось раньше.",
            ],
            pl: [
              "Kirył właśnie dowiedział się czegoś ważnego.",
              "AI nie szuka prawdy.",
              "Szukа tego,",
              "co najczęściej pojawiało się wcześniej.",
            ],
          },
        },
      ],
    },
    // СЦЕНА 2 — Умно звучит ≠ верно
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Умно звучит ≠ верно",
          "В глубине Архива шаблонов загорается экран.",
          "Он выглядит особенно солидно.",
          "Рамка блестит.",
          "Шрифт — как в научной статье.",
          "Кажется, сейчас будет что-то очень умное.",
        ],
        pl: [
          "🎬 SCENA 2. Brzmi mądrze ≠ jest poprawne",
          "W głębi Archiwum wzorców zapala się ekran.",
          "Wygląda wyjątkowo poważnie.",
          "Rama błyszczy.",
          "Czcionka jak z artykułu naukowego.",
          "Wydaje się, że zaraz będzie coś bardzo mądrego.",
        ],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Подготовлен аналитический ответ."],
            pl: ["— Przygotowano odpowiedź analityczną."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляется длинный текст.",
              "Сложные слова.",
              "Уверенный тон.",
              "Ссылки на «исследования».",
            ],
            pl: [
              "Na ekranie pojawia się długi tekst.",
              "Trudne słowa.",
              "Pewny ton.",
              "Odniesienia do „badań”.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого.", "— Это звучит…", "— жёстко умно."],
            pl: ["— Ooo.", "— To brzmi…", "— mega mądrze."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл читает.", "И кивает.", "Почти автоматически."],
            pl: ["Kirył czyta.", "I kiwa głową.", "Prawie automatycznie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— А я вообще понял,", "— что тут написано?"],
            pl: [
              "— Chwila…",
              "— Czy ja w ogóle rozumiem,",
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
              "Он перечитывает абзац.",
              "Потом ещё раз.",
              "Слова знакомые.",
              "Смысла — всё ещё нет.",
            ],
            pl: [
              "Czyta akapit jeszcze raz.",
              "Potem jeszcze raz.",
              "Słowa są znajome.",
              "Sensu — nadal brak.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Это как когда игрок",
              "— кидает кучу умных слов в чате,",
              "— но по факту ноль пользы.",
            ],
            pl: [
              "— To jak gracz,",
              "— który rzuca mądrymi słowami na czacie,",
              "— a w praktyce zero pożytku.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(В играх это называют «флексить словами» —",
              "делать вид, что ты профи, но без реального скилла.)</em>",
            ],
            pl: [
              "<em>(W grach mówi się na to „flexować słowami” —",
              "udawać pro, bez prawdziwego skilla.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Робот,", "— а ты вообще уверен,", "— что это правда?"],
            pl: [
              "— Robot,",
              "— a ty w ogóle jesteś pewien,",
              "— że to prawda?",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я не проверяю правдивость.",
              "— Я подбираю формулировки,",
              "— которые обычно выглядят убедительно.",
            ],
            pl: [
              "— Nie sprawdzam prawdziwości.",
              "— Dobieram sformułowania,",
              "— które zazwyczaj brzmią przekonująco.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Чегооо?"],
            pl: ["— Cooo?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В Архиве шаблонов что-то щёлкает.",
              "Как будто ещё один кусочек мозаики",
              "встаёт на место.",
            ],
            pl: [
              "W Archiwum wzorców coś klika.",
              "Jakby kolejny element układanki",
              "wskoczył na swoje miejsce.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно, но чётко):",
          avatar: "narrator",
          text: {
            ru: ["Запомни:", "умно звучит —", "не значит верно."],
            pl: [
              "Zapamiętaj:",
              "brzmi mądrze —",
              "nie znaczy, że jest poprawne.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 3.
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Факты vs предположения",
          "Архив шаблонов меняется.",
          "Часть полок загорается зелёным.",
          "Часть — жёлтым.",
          "Часть — тревожно красным.",
          "Как будто кто-то включил режим анализа.",
        ],
        pl: [
          "🎬 SCENA 3. Fakty vs przypuszczenia",
          "Archiwum wzorców się zmienia.",
          "Część półek świeci na zielono.",
          "Część — na żółto.",
          "Część — niepokojąco na czerwono.",
          "Jakby włączono tryb analizy.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей…", "— А это ещё что за светофор?"],
            pl: ["— Okej…", "— A to co za sygnalizacja?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это уровень уверенности информации."],
            pl: ["— To poziom pewności informacji."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Типа:", "— зелёный — можно верить?"],
            pl: ["— Czyli:", "— zielone — można wierzyć?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Не совсем.",
              "— Зелёный — это то,",
              "— что часто подтверждалось.",
            ],
            pl: [
              "— Nie do końca.",
              "— Zielony to to,",
              "— co często było potwierdzane.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл берёт зелёный фрагмент.",
              "На нём короткое утверждение.",
            ],
            pl: [
              "Kirył bierze zielony fragment.",
              "Jest na nim krótkie stwierdzenie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Это факт?"],
            pl: ["— To fakt?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это <b>вероятный факт</b>."],
            pl: ["— To <b>prawdopodobny fakt</b>."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Вероятный факт — звучит странно, да?",
              "Но для ИИ это нормально.)</em>",
            ],
            pl: [
              "<em>(„Prawdopodobny fakt” brzmi dziwnie, prawda?",
              "Ale dla AI to normalne.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Факт либо есть, либо нет."],
            pl: ["— Chwila.", "— Fakt albo jest, albo go nie ma."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл тянется к жёлтому фрагменту.", "Тот мерцает."],
            pl: ["Kirył sięga po żółty fragment.", "Migocze."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А это тогда что?"],
            pl: ["— A to co?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Предположение.",
              "— Оно похоже на факт,",
              "— но не подтверждено.",
            ],
            pl: [
              "— Przypuszczenie.",
              "— Wygląda jak fakt,",
              "— ale nie jest potwierdzone.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть", "— выглядит легитно,", "— но может быть фейком?"],
            pl: ["— Czyli", "— wygląda legitnie,", "— ale może być fejkiem?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<em>(Фейк — ложная или выдуманная информация.)</em>"],
            pl: ["<em>(Fake — fałszywa lub zmyślona informacja.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Но звучит уверенно."],
            pl: ["— Tak.", "— Ale brzmi pewnie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А красный?"],
            pl: ["— A czerwony?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот делает паузу."],
            pl: ["Robot robi pauzę."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это догадка.", "— Или выдумка."],
            pl: ["— To domysł.", "— Albo zmyślenie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— И ты всё это", "— можешь выдать как ответ?"],
            pl: ["— I ty to wszystko", "— możesz podać jako odpowiedź?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Если это похоже на шаблон."],
            pl: ["— Tak.", "— Jeśli pasuje do wzorca."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл медленно выдыхает.",
              "Кажется, он начинает понимать масштаб проблемы.",
            ],
            pl: [
              "Kirył powoli wypuszcza powietrze.",
              "Zaczyna rozumieć skalę problemu.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (чётко):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ не помечает:",
              "где факт,",
              "а где предположение.",
              "Это должен сделать человек.",
            ],
            pl: [
              "AI nie oznacza,",
              "gdzie jest fakt,",
              "a gdzie przypuszczenie.",
              "To musi zrobić człowiek.",
            ],
          },
        },
      ],
    },

    // 👉 СЦЕНА 4 — «Ошибки и галлюцинации»

    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_scene4.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 4. Ошибки и галлюцинации",
          "В Архиве шаблонов что-то идёт не так.",
          "Некоторые фрагменты начинают дрожать.",
          "Цвета путаются.",
          "Зелёные и красные элементы смешиваются.",
          "Как будто система словила баг.",
        ],
        pl: [
          "🎬 SCENA 4. Błędy i halucynacje",
          "W Archiwum wzorców coś zaczyna działać nie tak.",
          "Niektóre fragmenty drżą.",
          "Kolory się mieszają.",
          "Zielone i czerwone elementy nakładają się na siebie.",
          "Jakby system złapał buga.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эй…", "— Оно сейчас сломается?"],
            pl: ["— Ej…", "— To się zaraz zepsuje?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет.", "— Это нормальный режим."],
            pl: ["— Nie.", "— To tryb normalny."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— НОРМАЛЬНЫЙ?!"],
            pl: ["— NORMALNY?!"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Один из фрагментов резко увеличивается.",
              "На нём появляется длинный ответ.",
              "Уверенный.",
              "Подробный.",
              "Полностью выдуманный.",
            ],
            pl: [
              "Jeden z fragmentów nagle się powiększa.",
              "Pojawia się na nim długa odpowiedź.",
              "Pewna siebie.",
              "Szczegółowa.",
              "Całkowicie zmyślona.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Но этого же не было!"],
            pl: ["— Chwila.", "— Przecież tego nie było!"],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тогда почему", "— ты так уверенно это рассказываешь?"],
            pl: ["— To dlaczego", "— opowiadasz to tak pewnie?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Потому что ответ",
              "— выглядит логично.",
              "— И похож на шаблон.",
            ],
            pl: [
              "— Ponieważ odpowiedź",
              "— wygląda logicznie.",
              "— I pasuje do wzorca.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— ты сейчас просто", "— придумал?"],
            pl: ["— Czyli…", "— ty to po prostu", "— wymyśliłeś?"],
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
            ru: ["— И ты не понимаешь,", "— что это неправда?"],
            pl: ["— I nie rozumiesz,", "— że to nieprawda?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не понимаю правду.", "— Я подбираю продолжение."],
            pl: ["— Nie rozumiem prawdy.", "— Dobieram kontynuację."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Такую ситуацию называют «галлюцинацией ИИ» —",
              "когда он уверенно выдаёт то, чего не существует.)</em>",
            ],
            pl: [
              "<em>(Taka sytuacja to „halucynacja AI” —",
              "gdy AI z pełną pewnością podaje coś, co nie istnieje.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Это как NPC,",
              "— который уверенно врёт,",
              "— потому что у него такой диалог.",
            ],
            pl: [
              "— To jak NPC,",
              "— który pewnie kłamie,",
              "— bo taki ma dialog.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(NPC — персонаж в игре, которым не управляет игрок.)</em>",
            ],
            pl: ["<em>(NPC — postać w grze,", "którą nie steruje gracz.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Точное сравнение."],
            pl: ["— Trafne porównanie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на фрагменты иначе.",
              "Теперь он видит не знания.",
              "А вероятность ошибки.",
            ],
            pl: [
              "Kirył patrzy na fragmenty inaczej.",
              "Widzą już nie wiedzę.",
              "Ale prawdopodobieństwo błędu.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (очень спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ может ошибаться.",
              "ИИ может выдумывать.",
              "И он не знает,",
              "когда делает это.",
            ],
            pl: [
              "AI może się mylić.",
              "AI może zmyślać.",
              "I nie wie,",
              "kiedy to robi.",
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
            ru: [
              "«Раньше, если ответ звучал уверенно,",
              "я думал, что он правильный.»",
            ],
            pl: [
              "„Wcześniej, jeśli odpowiedź brzmiała pewnie,",
              "myślałem, że jest poprawna.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Сложные слова,",
              "длинные объяснения —",
              "и мозг такой: окей, принято.»",
            ],
            pl: [
              "„Trudne słowa,",
              "długie wyjaśnienia —",
              "i mózg mówi: okej, przyjęte.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Но теперь я вижу:",
              "уверенность — это стиль.",
              "А не гарантия.»",
            ],
            pl: ["„Ale teraz widzę:", "pewność to styl.", "A nie gwarancja.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«ИИ может звучать умно,", "даже когда он не знает.»"],
            pl: ["„AI może brzmieć mądrze,", "nawet gdy nie wie.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Он не врёт специально.", "Он просто продолжает шаблон.»"],
            pl: [
              "„On nie kłamie specjalnie.",
              "Po prostu kontynuuje wzorzec.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит,", "моя задача —", "не верить тону.»"],
            pl: ["„Czyli", "moim zadaniem jest", "nie wierzyć tonowi.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«А задавать вопросы:", "где факт,", "а где догадка.»"],
            pl: [
              "„Tylko zadawać pytania:",
              "gdzie jest fakt,",
              "a gdzie przypuszczenie.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Теперь я знаю:", "умно звучит —", "не значит правда.»"],
            pl: ["„Teraz wiem:", "brzmi mądrze —", "nie znaczy prawda.”"],
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
            ru: "❗ ГЛАВНОЕ ПРАВИЛО АРХИВА ШАБЛОНОВ",
            pl: "❗ GŁÓWNA ZASADA ARCHIWUM WZORCÓW",
          },
          rule: {
            ru: [
              "ИИ не понимает смысл.",
              "Он ищет похожие шаблоны.",
              "",
              "Поэтому его ответ",
              "может звучать умно,",
              "но быть <b>предположением или ошибкой</b>.",
              "",
              "Уверенный тон —",
              "не доказательство.",
              "Проверка — обязательна.",
            ],
            pl: [
              "AI nie rozumie sensu.",
              "Szuka podobnych wzorców.",
              "",
              "Dlatego jego odpowiedź",
              "może brzmieć mądrze,",
              "ale być <b>przypuszczeniem lub błędem</b>.",
              "",
              "Pewny ton —",
              "to nie dowód.",
              "Sprawdzanie jest konieczne.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я не отличаю факт от предположения."],
                pl: ["— Nie odróżniam faktu od przypuszczenia."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— это должен делать я."],
                pl: ["— Czyli", "— to muszę zrobić ja."],
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
          "Кирилл решает проверить, сможет ли он отличить факты от догадок.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić, czy potrafi odróżnić fakty od domysłów.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой из ответов ИИ является фактом?",
            pl: "Która odpowiedź AI jest faktem?",
          },
          options: {
            ru: [
              "Скорее всего, это произошло из-за популярности этого варианта",
              "Это подтверждено несколькими независимыми источниками",
              "Обычно в таких случаях бывает именно так",
            ],
            pl: [
              "Najprawdopodobniej stało się tak z powodu popularności tego wariantu",
              "Jest to potwierdzone przez kilka niezależnych źródeł",
              "Zazwyczaj w takich sytuacjach dzieje się właśnie tak",
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
                "Где есть проверка и подтверждение?",
                "Какие варианты звучат уверенно, но не доказывают ничего?",
                "Почему слова «обычно» и «скорее всего» — это сигнал опасности?",
              ],
              pl: [
                "Gdzie jest sprawdzenie i potwierdzenie?",
                "Które opcje brzmią pewnie, ale niczego nie dowodzą?",
                "Dlaczego słowa „zazwyczaj” i „najprawdopodobniej” to sygnał ostrzegawczy?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "Какой ответ ИИ больше всего похож на галлюцинацию?",
            pl: "Która odpowiedź AI najbardziej przypomina halucynację?",
          },
          options: {
            ru: [
              "Я не уверен, информации недостаточно",
              "Согласно исследованиям 2018 года, это всегда работает",
              "Этот факт подтверждён официальной статистикой",
            ],
            pl: [
              "Nie jestem pewien, brakuje danych",
              "Zgodnie z badaniami z 2018 roku, to zawsze działa",
              "Ten fakt jest potwierdzony oficjalnymi statystykami",
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
                "Почему точная дата и уверенный тон могут быть ловушкой?",
                "Что должен сделать человек, услышав такой ответ?",
                "Почему честное «я не знаю» безопаснее?",
              ],
              pl: [
                "Dlaczego dokładna data i pewny ton mogą być pułapką?",
                "Co powinien zrobić człowiek, słysząc taką odpowiedź?",
                "Dlaczego uczciwe „nie wiem” jest bezpieczniejsze?",
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
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Архив шаблонов постепенно затихает.",
          "Фрагменты возвращаются на свои места.",
          "Цвета гаснут.",
          "Остаётся только ровный свет.",
          "Как будто система ждёт следующего запроса.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Archiwum wzorców stopniowo cichnie.",
          "Fragmenty wracają na swoje miejsca.",
          "Kolory gasną.",
          "Zostaje tylko spokojne światło.",
          "Jakby system czekał na kolejne polecenie.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Странное чувство.", "— Как будто ИИ стал менее крутым…"],
            pl: ["— Dziwne uczucie.", "— Jakby AI było mniej imponujące…"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …но при этом", "— более понятным."],
            pl: ["— …ale jednocześnie", "— bardziej zrozumiałe."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не стал хуже.", "— Ты стал внимательнее."],
            pl: ["— Nie stałem się gorszy.", "— To ty stałeś się uważniejszy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл усмехается.", "Похоже, это правда."],
            pl: ["Kirył się uśmiecha.", "Wygląda na to, że to prawda."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Значит,",
              "— если я хочу правду…",
              "— мне придётся думать.",
            ],
            pl: ["— Czyli", "— jeśli chcę prawdy…", "— muszę myśleć."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Архив шаблонов медленно растворяется.",
              "Перед Кириллом открывается новый проход.",
              "Он выглядит иначе.",
              "Более логично.",
              "Более строго.",
            ],
            pl: [
              "Archiwum wzorców powoli się rozmywa.",
              "Przed Kiryłem otwiera się nowe przejście.",
              "Wygląda inaczej.",
              "Bardziej logicznie.",
              "Bardziej surowo.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Когда исчезает магия,",
              "появляется понимание.",
              "А это куда сильнее.",
            ],
            pl: [
              "Gdy znika magia,",
              "pojawia się zrozumienie.",
              "A to jest o wiele silniejsze.",
            ],
          },
        },
      ],
    },
  ],
};
