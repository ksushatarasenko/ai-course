// lessons/lesson2.js
// lessons/lesson2.js
export const lesson = {
  seriesId: 1,
  lessonId: 2,

  title: {
    ru: "Урок 2 - Почему ИИ делает не то, что ты хотел?",
    pl: "Lesson2 - Dlaczego AI robi nie to, czego chciałeś?",
  },

  subtitle: {
    ru: "Кирилл узнаёт, почему общие слова не работают",
    pl: "Kirył dowiaduje się, dlaczego ogólne słowa nie działają",
  },

  scenes: [
    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_%D0%A1%D0%A6%D0%95%D0%9D%D0%90%201..png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Кирилл чувствует себя умнее 😏",
          "Кирилл идёт по планете ИИ вместе с роботом.",
          "Вокруг — странные постройки, окна чатов, висящие кнопки.",
          "Кажется, он уже разобрался.",
          "По крайней мере, ему так кажется.",
        ],
        pl: [
          "🎬 SCENA 1. Kirył czuje się mądrzejszy 😏",
          "Kirył idzie po planecie AI razem z robotem.",
          "Wokół — dziwne budowle, okna czatu, wiszące przyciski.",
          "Wygląda na to, że już wszystko ogarnął.",
          "A przynajmniej tak mu się wydaje.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ладно.",
              "— Кажется, я понял, как вы работаете.",
              "— Ты не человек, ты программа.",
            ],
            pl: [
              "— Dobra.",
              "— Chyba już rozumiem, jak działacie.",
              "— Nie jesteś człowiekiem, jesteś programem.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл говорит спокойно.",
              "Слишком спокойно для человека, который ещё ошибается.",
            ],
            pl: [
              "Kirył mówi spokojnie.",
              "Zbyt spokojnie jak na kogoś, kto jeszcze się myli.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Значит, с тобой просто нужно говорить правильно.",
              "— Сейчас я тебе нормально объясню.",
            ],
            pl: [
              "— Czyli trzeba po prostu mówić do ciebie właściwie.",
              "— Teraz wyjaśnię ci to porządnie.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я готов выполнять задания."],
            pl: ["— Jestem gotowy wykonywać zadania."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл кивает сам себе.",
              "Как будто только что поставил галочку.",
            ],
            pl: [
              "Kirył kiwa głową.",
              "Jakby właśnie odhaczył punkt na liście.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Придумай мне <em>крутой</em> квест."],
            pl: ["— Wymyśl mi <em>fajny</em> quest."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Выполняю."],
            pl: ["— Wykonuję."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот момент Кирилл даже не сомневается.",
              "Он уверен: теперь-то он сказал всё правильно.",
            ],
            pl: [
              "W tym momencie Kirył nawet nie ma wątpliwości.",
              "Jest pewien, że tym razem powiedział wszystko właściwie.",
            ],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл сейчас уверен, что всё понял.",
              "А это самый опасный момент.",
            ],
            pl: [
              "Kirył jest teraz pewien, że wszystko zrozumiał.",
              "A to jest najbardziej niebezpieczny moment.",
            ],
          },
        },
      ],
    },

    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena2.png?raw=true",

      author: {
        ru: [
          "🤦 СЦЕНА 2. СНОВА НЕ ТО",
          "Иногда самый неприятный момент — не первый провал.",
          "А тот, который происходит после слов «я всё понял».",
          "Кирилл ждёт чего-то крутого.",
          "Но система ждёт только инструкцию.",
        ],
        pl: [
          "🤦 SCENA 2. ZNOWU NIE TO",
          "Najbardziej irytujący moment to nie pierwsza porażka.",
          "Tylko ta, która przychodzi po słowach „już wszystko wiem”.",
          "Kirył czeka na coś fajnego.",
          "Ale system czeka tylko na instrukcję.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Ответ появляется быстро.",
              "Слишком быстро для чего-то по-настоящему сложного.",
            ],
            pl: [
              "Odpowiedź pojawia się szybko.",
              "Zbyt szybko jak na coś naprawdę złożonego.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Появляется описание.",
              "На первый взгляд — всё выглядит логично.",
              "Но только на первый взгляд.",
            ],
            pl: [
              "Pojawia się opis.",
              "Na pierwszy rzut oka wszystko wygląda logicznie.",
              "Ale tylko na pierwszy rzut oka.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Квест: иди вперёд, победи одного слабого врага и получи 1 монету.",
            ],
            pl: [
              "— Quest: idź naprzód, pokonaj jednego słabego wroga i zdobądź 1 monetę.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл читает.", "И не верит глазам."],
            pl: ["Kirył czyta.", "I nie wierzy własnym oczom."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— ЧЕГО",
              "— Я же сказал «крутой»!",
              "",
              "— Это даже не мид-гейм, это стартовый остров 😐",
            ],
            pl: [
              "— CO?!",
              "— Przecież powiedziałem „fajny”!",
              "",
              "— To nawet nie mid-game, to wyspa startowa 😐",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— <b>«Крутой»</b> — неясно.",
              "— У меня нет списка <em>«круто / не круто»</em>.",
            ],
            pl: [
              "— <b>„Fajny”</b> — niejasne.",
              "— Nie mam listy <em>„fajne / niefajne”</em>.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл сжимает губы.",
              "Вот теперь злость возвращается.",
              "Не потому что результат плохой.",
              "А потому что он ожидал другого.",
            ],
            pl: [
              "Kirył zaciska usta.",
              "Złość wraca.",
              "Nie dlatego, że wynik jest słaby.",
              "Ale dlatego, że spodziewał się czegoś innego.",
            ],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["ИИ не нарушил правил.", "Он просто выполнил инструкцию."],
            pl: [
              "AI nie złamało żadnych zasad.",
              "Po prostu wykonało instrukcję.",
            ],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena3.png?raw=true",

      author: {
        ru: [
          "😤 СЦЕНА 3. Кирилл бесится",
          "Есть момент, когда злость уже не помогает.",
          "Но ещё кажется, что проблема точно не в тебе.",
        ],
        pl: [
          "😤 SCENA 3. Kirył się wścieka",
          "Przychodzi moment, w którym złość już nie pomaga.",
          "Ale wciąż wydaje się, że problem na pewno nie jest w tobie.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да блин!", "— Любой нормальный человек понял бы!"],
            pl: ["— No kurczę!", "— Każdy normalny człowiek by to zrozumiał!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл говорит громче, чем нужно.",
              "Как будто громкость может что-то изменить.",
            ],
            pl: [
              "Kirył mówi głośniej, niż trzeba.",
              "Jakby głośność mogła coś zmienić.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я не человек.",
              "— Я не понимаю «любой», «нормальный» и «понял бы».",
            ],
            pl: [
              "— Nie jestem człowiekiem.",
              "— Nie rozumiem „każdy”, „normalny” ani „zrozumiałby”.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— Это бесит."],
            pl: ["— …", "— To wkurza."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл замолкает.", "Иногда пауза злит сильнее, чем ответ."],
            pl: [
              "Kirył milknie.",
              "Czasem cisza wkurza bardziej niż odpowiedź.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ не спорит.",
              "Он просто не понимает, за что на него злятся.",
            ],
            pl: [
              "AI się nie kłóci.",
              "Po prostu nie rozumie, za co ktoś się na nie złości.",
            ],
          },
        },
      ],
    },

    // МЫСЛИ
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_mysliKyryla.png?raw=true",

      author: {
        ru: [
          "💭 МЫСЛИ КИРИЛЛА (ключевой момент)",
          "Злость постепенно уходит.",
          "Остаётся странное чувство, будто пазл не сходится.",
        ],
        pl: [
          "💭 MYŚLI KIRYŁA (kluczowy moment)",
          "Złość powoli opada.",
          "Zostaje dziwne uczucie, jakby układanka się nie zgadzała.",
        ],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          avatar: "kirill",
          text: {
            ru: [
              "«Так…",
              "Он правда не прикалывается.",
              "Не троллит.",
              "И не делает это назло.»",
            ],
            pl: [
              "„Tak…",
              "On naprawdę nie żartuje.",
              "Nie trolluje.",
              "I nie robi tego specjalnie.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          avatar: "kirill",
          text: {
            ru: [
              "Я говорю словами,",
              "которые понятны людям,",
              "Но для него они пустые.",
            ],
            pl: [
              "Mówię słowami,",
              "które są zrozumiałe dla ludzi,",
              "Ale dla niego są puste.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          avatar: "kirill",
          text: {
            ru: [
              "Я сказал “крутой”,",
              "а что это значит?",
              "Для меня — одно, для него — вообще ничего.»",
              "Просто звук.»",
            ],
            pl: [
              "Powiedziałem „fajny”,",
              "ale co to właściwie znaczy?",
              "Dla mnie jedno, dla niego — nic.»",
              "Tylko dźwięk.”",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл останавливается.",
              "Иногда, чтобы понять, нужно перестать спорить.",
            ],
            pl: [
              "Kirył się zatrzymuje.",
              "Czasem, żeby zrozumieć, trzeba przestać się spierać.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Если бы я был ИИ…",
              "Я бы тоже сделал самый простой вариант.»",
            ],
            pl: ["„Gdybym był AI…", "Też zrobiłbym najprostszy wariant.”"],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Вот здесь начинается мышление.",
              "Не с ответа — с попытки посмотреть с другой стороны.",
            ],
            pl: [
              "Właśnie tutaj zaczyna się myślenie.",
              "Nie od odpowiedzi — lecz od spojrzenia z innej strony.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena4.png?raw=true",

      author: {
        ru: [
          "🧠 СЦЕНА 4. ВАЖНОЕ ОТКРЫТИЕ",
          "Злость ушла.",
          "На её месте появилось что-то другое.",
          "Не ответ — догадка.",
        ],
        pl: [
          "🧠 SCENA 4. WAŻNE ODKRYCIE",
          "Złość minęła.",
          "Na jej miejscu pojawiło się coś innego.",
          "Nie odpowiedź — lecz domysł.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит…", "— Чем больше правил, тем понятнее?"],
            pl: ["— Czyli…", "— Im więcej zasad, tym jaśniej?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно.", "— Чем больше конкретики — тем точнее результат."],
            pl: [
              "— Zgadza się.",
              "— Im więcej konkretów — tym dokładniejszy wynik.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если правил мало?"],
            pl: ["— A jeśli zasad jest mało?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда я угадываю."],
            pl: ["— Wtedy zgaduję."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А угадываешь ты… так себе 😅"],
            pl: ["— A zgadywanie idzie ci… średnio 😅"],
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
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Кирилл только что нашёл ключ.", "Не к ИИ — к инструкции."],
            pl: [
              "Kirył właśnie znalazł klucz.",
              "Nie do AI — lecz do instrukcji.",
            ],
          },
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 1
    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_task.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Почему ИИ не понял задание «крутой квест»?",
            pl: "Dlaczego AI nie zrozumiało zadania „fajny quest”?",
          },
          options: {
            ru: [
              "потому что он ленивый",
              "потому что он тупой",
              "потому что задание слишком общее",
            ],
            pl: [
              "bo jest leniwe",
              "bo jest głupie",
              "bo zadanie jest zbyt ogólne",
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
                "Какие слова здесь «пустые»?",
                "Что именно значит «крутой»?",
                "Что в задании осталось непонятным для ИИ?",
              ],
              pl: [
                "Które słowa są tu „puste”?",
                "Co dokładnie znaczy „fajny”?",
                "Co w zadaniu pozostało niejasne dla AI?",
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena5.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 5. Кирилл учится объяснять",
          "Теперь Кирилл не злится.",
          "Он пробует по-другому.",
        ],
        pl: [
          "🎬 SCENA 5. Kirył uczy się tłumaczyć",
          "Kirył już się nie złości.",
          "Próbuje inaczej.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Тогда слушай внимательно."],
            pl: ["— Okej.", "— To teraz słuchaj uważnie."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл делает паузу.",
              "Не торопится.",
              "Как будто сначала формулирует мысль у себя в голове.",
            ],
            pl: [
              "Kirył robi pauzę.",
              "Nie spieszy się.",
              "Jakby najpierw układał myśl w głowie.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Придумай квест для игры.", "— Он должен быть сложным."],
            pl: ["— Wymyśl quest do gry.", "— Ma być trudny."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на робота.",
              "Будто проверяет: понял ли он сам то, что сказал.",
            ],
            pl: [
              "Kirył patrzy na robota.",
              "Jakby sprawdzał, czy sam rozumie to, co powiedział.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Там должен быть босс.", "— И ловушки."],
            pl: ["— Musi być boss.", "— I pułapki."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он говорит медленнее, чем раньше.", "Словно ставит флажки."],
            pl: [
              "Mówi wolniej niż wcześniej.",
              "Jakby stawiał kolejne znaczniki.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— И в конце игрок должен получить награду.", "— Редкую."],
            pl: ["— A na końcu gracz ma dostać nagrodę.", "— Rzadką."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл замолкает.", "На этот раз — специально."],
            pl: ["Kirył milknie.", "Tym razem — celowo."],
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
            ru: [
              "Ответ появляется не сразу.",
              "Будто система действительно думает.",
            ],
            pl: [
              "Odpowiedź nie pojawia się od razu.",
              "Jakby system naprawdę myślał.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Квест:",
              "Игрок проходит лабиринт с ловушками,",
              "сражается с боссом",
              "и получает редкий артефакт.",
            ],
            pl: [
              "— Quest:",
              "Gracz przechodzi labirynt z pułapkami,",
              "walczy z bossem",
              "i zdobywa rzadki artefakt.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл читает описание.", "Медленно.", "И вдруг улыбается."],
            pl: ["Kirył czyta opis.", "Powoli.", "I nagle się uśmiecha."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— О-О!", "— Вот это уже похоже на игру."],
            pl: ["— O.", "— O-O!", "— To już wygląda jak gra."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Ничего магического не произошло.",
              "Кирилл просто начал объяснять.",
            ],
            pl: [
              "Nie wydarzyło się nic magicznego.",
              "Kirył po prostu zaczął tłumaczyć.",
            ],
          },
        },
      ],
    },

    // МЫСЛИ 2
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_mysliKyryla.png?raw=true",

      author: {
        ru: [
          "💭 МЫСЛИ КИРИЛЛА (ещё один шаг)",
          "Иногда понимание приходит тихо.",
          "Без вспышек и эффектов.",
        ],
        pl: [
          "💭 MYŚLI KIRYŁA (kolejny krok)",
          "Czasem zrozumienie przychodzi cicho.",
          "Bez efektów specjalnych.",
        ],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«Я ничего особенного не сделал.",
              "Не стал умнее за пять минут.",
              "Я просто объяснил нормально.»",
            ],
            pl: [
              "„Nie zrobiłem nic niezwykłego.",
              "Nie stałem się nagle mądrzejszy.",
              "Po prostu dobrze wytłumaczyłem.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«Типа как другу,",
              "который вообще не в теме.",
              "Без намёков.»",
            ],
            pl: [
              "„Tak jak koledze,",
              "który kompletnie nie ogarnia.",
              "Bez domyślania się.”",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл вдруг понимает:", "дело было не в ИИ."],
            pl: ["Kirył nagle rozumie:", "to nie był problem AI."],
          },
        },

        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Дело было в том,", "как я формулировал.»"],
            pl: ["„Chodziło o to,", "jak formułowałem polecenie.”"],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Навык появился.", "Теперь его нужно закрепить."],
            pl: ["Umiejętność się pojawiła.", "Teraz trzeba ją utrwalić."],
          },
        },
      ],
    },

    // ПРАВИЛО
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_%20prawilo.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО ПЛАНЕТЫ ИИ"],
        pl: ["🎯 ZASADA PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ",
            pl: "❗ ZASADA PLANETY AI",
          },
          rule: {
            ru: "Чем точнее задание — тем лучше результат",
            pl: "Im dokładniejsze zadanie — tym lepszy wynik",
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: [
                  "— Это главное правило нашей планеты.",
                  "— Мы не догадываемся.",
                ],
                pl: [
                  "— To główna zasada naszej planety.",
                  "— Nie domyślamy się.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Зато вы идеально выполняете инструкции."],
                pl: ["— Za to idealnie wykonujecie instrukcje."],
              },
            },
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Именно."],
                pl: ["— Dokładnie."],
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_zadanie2.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Сравни задания и выбери нужное",
            pl: "Porównaj zadania i wybierz właściwe",
          },
          options: {
            ru: [
              "Придумай персонажа",
              "Придумай персонажа для игры: злой маг, живёт в башне, использует молнии",
            ],
            pl: [
              "Wymyśl postać",
              "Wymyśl postać do gry: zły mag, mieszka w wieży, używa piorunów",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["какое задание понятнее?", "почему?"],
              pl: ["które zadanie jest jaśniejsze?", "dlaczego?"],
            },
          },
        },
      ],
    },

    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_final.png?raw=true",

      author: {
        ru: ["🏁 ФИНАЛ УРОКА"],
        pl: ["🏁 FINAŁ LEKCJI"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["ИИ понимает не «смысл».", "ИИ понимает <b>формулировку</b>."],
            pl: ["AI nie rozumie „sensu”.", "AI rozumie <b>formułowanie</b>."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Слова вроде «круто», «нормально», «как обычно»",
              "для ИИ — пустые.",
            ],
            pl: [
              "Słowa takie jak „fajnie”, „normalnie”, „jak zwykle”",
              "dla AI są puste.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Чем больше деталей —", "тем меньше догадок."],
            pl: ["Im więcej szczegółów —", "tym mniej zgadywania."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Этот навык нужен не только для ИИ.",
              "Он работает и с людьми.",
            ],
            pl: [
              "Ta umiejętność nie jest tylko dla AI.",
              "Działa również w relacjach z ludźmi.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл это ещё не до конца осознал.",
              "Но первый апгрейд уже произошёл.",
            ],
            pl: [
              "Kirył jeszcze nie do końca to uświadamia.",
              "Ale pierwszy upgrade już się wydarzył.",
            ],
          },
        },
      ],
    },
  ],
};
