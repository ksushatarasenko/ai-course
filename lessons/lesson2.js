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
        ],
        pl: [
          "🎬 SCENA 1. Kirył czuje się mądrzejszy 😏",
          "Kirył idzie po planecie AI razem z robotem.",
          "Wokół — dziwne budowle, okna czatu, wiszące przyciski.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ладно, я понял",
              "— Ты не человек, ты программа.",
              "— Сейчас я тебе нормально объясню.",
            ],
            pl: [
              "— Dobra, zrozumiałem.",
              "— Nie jesteś człowiekiem, jesteś programem.",
              "— Teraz wyjaśnię ci to porządnie.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Отлично.", "— Я готов выполнять задания."],
            pl: ["— Świetnie.", "— Jestem gotowy wykonywać zadania."],
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
      ],
    },

    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena2.png?raw=true",

      author: {
        ru: ["🤦 СЦЕНА 2. СНОВА НЕ ТО"],
        pl: ["🤦 SCENA 2. ZNOWU NIE TO"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Появляется описание:"],
            pl: ["Pojawia się opis:"],
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
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_scena3.png?raw=true",

      author: {
        ru: ["😤 СЦЕНА 3. Кирилл бесится"],
        pl: ["😤 SCENA 3. Kirył się wścieka"],
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
      ],
    },

    // МЫСЛИ
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_mysliKyryla.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          avatar: "kirill",
          text: {
            ru: ["«Так… Он реально не прикалывается."],
            pl: ["„Tak… On naprawdę nie żartuje."],
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
              "но не понятны ИИ.",
            ],
            pl: [
              "Mówię słowami,",
              "które są zrozumiałe dla ludzi,",
              "ale nie dla AI.",
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
            ],
            pl: [
              "Powiedziałem „fajny”,",
              "ale co to właściwie znaczy?",
              "Dla mnie jedno, dla niego — nic.»",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл останавливается."],
            pl: ["Kirył się zatrzymuje."],
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
        ru: ["🧠 СЦЕНА 4. ВАЖНОЕ ОТКРЫТИЕ"],
        pl: ["🧠 SCENA 4. WAŻNE ODKRYCIE"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Подожди…",
              "— Ты понимаешь только то, что можно представить как правила?",
            ],
            pl: [
              "— Poczekaj…",
              "— Rozumiesz tylko to, co da się opisać zasadami?",
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
              "— Чем больше правил — тем лучше результат.",
              "— Чем больше конкретных слов, тем лучше.",
            ],
            pl: [
              "— Tak.",
              "— Im więcej zasad, tym lepszy wynik.",
              "— Im więcej konkretnych słów, tym lepiej.",
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
        ru: ["🎬 СЦЕНА 5. Кирилл учится объяснять"],
        pl: ["🎬 SCENA 5. Kirył uczy się tłumaczyć"],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Придумай квест для игры.",
              "— Он должен быть сложным.",
              "— Там должен быть босс.",
              "— Должны быть ловушки.",
              "— И в конце — крутая награда.",
            ],
            pl: [
              "— Wymyśl quest do gry.",
              "— Ma być trudny.",
              "— Musi być boss.",
              "— Muszą być pułapki.",
              "— I na końcu — fajna nagroda.",
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
            ru: ["Появляется новый квест."],
            pl: ["Pojawia się nowy quest."],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— О-О!", "— Вот это уже похоже на игру."],
            pl: ["— O.", "— O-O!", "— To już wygląda jak gra."],
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
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«Я ничего магического не сделал.",
              "Я просто объяснил нормально.",
            ],
            pl: [
              "„Nie zrobiłem nic magicznego.",
              "Po prostu wyjaśniłem normalnie.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["Типа как другу,", "который не в теме.»"],
            pl: ["Tak jak przyjacielowi,", "który nie ogarnia.»"],
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
        ru: ["🎯 СЦЕНА 6. ПРАВИЛО ПЛАНЕТЫ ИИ"],
        pl: ["🎯 SCENA 6. ZASADA PLANETY AI"],
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
                ru: ["— Это главное правило нашей планеты."],
                pl: ["— To główna zasada naszej planety."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: [
                  "— Запомнил.",
                  "— И вообще…",
                  "— Это полезно не только для ИИ.",
                ],
                pl: [
                  "— Zapamiętałem.",
                  "— I w ogóle…",
                  "— To przydaje się nie tylko AI.",
                ],
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

    // 6 ФИНАЛ
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_%D0%A1%D0%A6%D0%95%D0%9D%D0%90%201..png?raw=true",

      author: {
        ru: ["🏁 ФИНАЛ УРОКА"],
        pl: ["🏁 FINAŁ LEKCJI"],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты начал понимать, как с нами разговаривать."],
            pl: ["— Zaczynasz rozumieć, jak z nami rozmawiać."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ага.",
              "— Вы не тупые.",
              "— Вам просто нужны нормальные инструкции.",
            ],
            pl: [
              "— Aha.",
              "— Nie jesteście głupi.",
              "— Po prostu potrzebujecie dobrych instrukcji.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно."],
            pl: ["— Dokładnie."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ладно.",
              "— Пошли дальше.",
              "— Мне кажется, я могу вас прокачать 😎",
            ],
            pl: [
              "— Dobra.",
              "— Idziemy dalej.",
              "— Chyba mogę was trochę ulepszyć 😎",
            ],
          },
        },
      ],
    },

    // FINAL
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_final.png?raw=true",

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
            ru: ["ИИ понимает <b>буквально</b>."],
            pl: ["AI rozumie <b>dosłownie</b>."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Слова типа «круто», «нормально», «как обычно» — плохие инструкции.",
            ],
            pl: [
              "Słowa takie jak „fajnie”, „normalnie”, „jak zwykle” to złe instrukcje.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Чем больше деталей — тем лучше результат.",
              "Если задание плохое, ИИ начинает угадывать.",
            ],
            pl: [
              "Im więcej szczegółów — tym lepszy wynik.",
              "Jeśli zadanie jest słabe, AI zaczyna zgadywać.",
            ],
          },
        },
      ],
    },
  ],
};



