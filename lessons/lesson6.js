// lessons/lesson2-1.js
export const lesson = {
  seriesId: 2,
  lessonId: 6,

  title: {
    ru: "Говори пошагово",
    pl: "почему ИИ любит инструкции больше, чем догадки",
  },

  subtitle: {
    ru: "",
    pl: "",
  },

  scenes: [
    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_scene1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Район Инструкций",
          "Кирилл идёт дальше по планете ИИ.",
          "Теперь дорога выглядит иначе.",
          "Она разбита на секции.",
          "Каждый шаг подсвечен.",
          "Над дорожкой висят таблички с номерами.",
        ],
        pl: [
          "🎬 SCENA 1. Dzielnica Instrukcji",
          "Kirył idzie dalej po Planecie AI.",
          "Droga wygląda teraz inaczej.",
          "Jest podzielona na sekcje.",
          "Każdy krok jest podświetlony.",
          "Nad ścieżką wiszą tabliczki z numerami.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого.", "— Тут как в туториале."],
            pl: ["— Ooo.", "— Jak w tutorialu."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Туториал — это часть игры, где тебя учат шаг за шагом.)</em>",
            ],
            pl: ["<em>(Tutorial — część gry, która uczy krok po kroku.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это район Инструкций."],
            pl: ["— To Dzielnica Instrukcji."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть?"],
          },
          pl: ["— To znaczy?"],
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Здесь работают задачи,", "— разбитые на шаги."],
            pl: ["— Tutaj działają zadania,", "— podzielone na kroki."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если не разбивать?"],
            pl: ["— A jeśli nie podzielę?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот смотрит на дорожку.", "Где-то вдалеке виден обрыв."],
            pl: ["Robot patrzy na ścieżkę.", "W oddali widać urwisko."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда возможны падения."],
            pl: ["— Wtedy możliwe są upadki."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм.", "— Уже знакомо."],
            pl: ["— Hm.", "— Już znajome."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Во второй серии",
              "Кирилл перестаёт просто спрашивать.",
              "Он начинает управлять процессом.",
            ],
            pl: [
              "W drugiej serii",
              "Kirył przestaje tylko pytać.",
              "Zaczyna sterować procesem.",
            ],
          },
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. «Скажу всё сразу»",
          "Кирилл смотрит на ровную дорожку с номерами.",
          "Потом — на робота.",
          "И решает пойти по старинке.",
        ],
        pl: [
          "🎬 SCENA 2. „Powiem wszystko naraz”",
          "Kirył patrzy na drogę z numerami.",
          "Potem na robota.",
          "I decyduje się zrobić to po staremu.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да ладно.", "— Я и так нормально объясню."],
            pl: ["— Daj spokój.", "— I tak wyjaśnię normalnie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Смотри.",
              "— Хочу игру.",
              "— Чтобы был герой.",
              "— Он шёл, дрался, прокачивался.",
              "— Был босс.",
              "— И в конце награда.",
              "— Ну ты понял.",
            ],
            pl: [
              "— Patrz.",
              "— Chcę grę.",
              "— Ma być bohater.",
              "— Ma chodzić, walczyć, levelować się.",
              "— Ma być boss.",
              "— I na końcu nagroda.",
              "— No wiesz.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл сказал это на одном дыхании.", "Даже не остановился."],
            pl: [
              "Kirył powiedział to jednym tchem.",
              "Nawet się nie zatrzymał.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Обрабатываю запрос."],
            pl: ["— Przetwarzam polecenie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Экран мигает.",
              "Номера над дорожкой начинают путаться.",
              "1 меняется на 4.",
              "3 исчезает.",
              "2 дублируется.",
            ],
            pl: [
              "Ekran miga.",
              "Numery nad ścieżką zaczynają się mieszać.",
              "1 zmienia się w 4.",
              "3 znika.",
              "2 się powiela.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Готово."],
            pl: ["— Gotowe."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Перед Кириллом появляется результат."],
            pl: ["Przed Kiryłem pojawia się wynik."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>ИГРА:</b>",
              "Герой появляется.",
              "Сразу получает награду.",
              "Потом дерётся.",
              "Потом исчезает.",
              "Босса нет.",
            ],
            pl: [
              "<b>GRA:</b>",
              "Bohater się pojawia.",
              "Od razu dostaje nagrodę.",
              "Potem walczy.",
              "Potem znika.",
              "Bossa brak.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эээ…", "— Это что за спидран?"],
            pl: ["— Eee…", "— To jakiś speedrun?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Спидран — когда игру проходят максимально быстро, часто ломая логику.)</em>",
            ],
            pl: [
              "<em>(Speedrun — przejście gry jak najszybciej, często łamiąc logikę.)</em>",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты не указал порядок действий."],
            pl: ["— Nie podałeś kolejności działań."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну я же всё сказал!"],
            pl: ["— Przecież wszystko powiedziałem!"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Но не по шагам."],
            pl: ["— Ale nie krok po kroku."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на дорожку с номерами.",
              "Теперь намёк очевиден.",
            ],
            pl: [
              "Kirył patrzy na drogę z numerami.",
              "Teraz podpowiedź jest oczywista.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Когда ты кидаешь всё в одну кучу,",
              "ИИ сам решает порядок.",
              "И редко угадывает так,",
              "как ты хотел.",
            ],
            pl: [
              "Gdy wrzucasz wszystko do jednego worka,",
              "AI samo ustala kolejność.",
              "I rzadko zgaduje tak,",
              "jak byś chciał.",
            ],
          },
        },
      ],
    },
    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. «А если по шагам?»",
          "Кирилл ещё раз смотрит на сломанную игру.",
          "Потом — на дорожку с номерами.",
          "И ухмыляется.",
        ],
        pl: [
          "🎬 SCENA 3. „A co jeśli krok po kroku?”",
          "Kirył jeszcze raz patrzy na zepsutą grę.",
          "Potem — na ścieżkę z numerami.",
          "I uśmiecha się.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Понял намёк.", "— Давай по-честному."],
            pl: [
              "— Okej.",
              "— Zrozumiałem podpowiedź.",
              "— Zróbmy to uczciwie.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл делает глубокий вдох.", "И начинает считать."],
            pl: ["Kirył bierze głęboki oddech.", "I zaczyna liczyć."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Шаг первый:",
              "— появляется герой.",
              "",
              "— Шаг второй:",
              "— герой идёт по уровню и сражается с врагами.",
              "",
              "— Шаг третий:",
              "— герой прокачивается.",
              "",
              "— Шаг четвёртый:",
              "— появляется босс.",
              "",
              "— Шаг пятый:",
              "— после победы игрок получает награду.",
            ],
            pl: [
              "— Krok pierwszy:",
              "— pojawia się bohater.",
              "",
              "— Krok drugi:",
              "— bohater idzie przez poziom i walczy z wrogami.",
              "",
              "— Krok trzeci:",
              "— bohater się rozwija.",
              "",
              "— Krok czwarty:",
              "— pojawia się boss.",
              "",
              "— Krok piąty:",
              "— po zwycięstwie gracz dostaje nagrodę.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "С каждым шагом",
              "номер над дорожкой загорается.",
              "1.",
              "2.",
              "3.",
              "4.",
              "5.",
            ],
            pl: [
              "Z każdym krokiem",
              "numer nad ścieżką się zapala.",
              "1.",
              "2.",
              "3.",
              "4.",
              "5.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Структура понятна."],
            pl: ["— Struktura zrozumiała."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран собирается.", "Без мигания.", "Без хаоса."],
            pl: ["Ekran się układa.", "Bez migania.", "Bez chaosu."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Выполняю по шагам."],
            pl: ["— Wykonuję krok po kroku."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Перед Кириллом появляется новая версия игры."],
            pl: ["Przed Kiryłem pojawia się nowa wersja gry."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>ИГРА:</b>",
              "Герой появляется.",
              "Проходит уровень.",
              "Сражается.",
              "Прокачивается.",
              "Побеждает босса.",
              "Получает награду.",
            ],
            pl: [
              "<b>GRA:</b>",
              "Bohater się pojawia.",
              "Przechodzi poziom.",
              "Walczy.",
              "Rozwija się.",
              "Pokonuje bossa.",
              "Dostaje nagrodę.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— О-О!", "— Вот теперь логично."],
            pl: ["— O.", "— O-O!", "— Teraz to ma sens."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл улыбается.",
              "Не потому что «повезло».",
              "А потому что понял.",
            ],
            pl: [
              "Kirył się uśmiecha.",
              "Nie dlatego, że „się udało”.",
              "Ale dlatego, że zrozumiał.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты задал порядок.", "— Я его выполнил."],
            pl: ["— Określiłeś kolejność.", "— Ja ją wykonałem."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл сделал важный шаг.",
              "Он перестал говорить «что хочу».",
              "И начал говорить «как делать».",
            ],
            pl: [
              "Kirył zrobił ważny krok.",
              "Przestał mówić „co chcę”.",
              "Zaczął mówić „jak to zrobić”.",
            ],
          },
        },
      ],
    },
    // МЫСЛИ
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_thoughts.png?raw=true",

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
            ru: ["«Я ничего волшебного не сделал.»"],
            pl: ["„Nie zrobiłem nic magicznego.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Я просто разложил всё по полочкам.»"],
            pl: ["„Po prostu poukładałem wszystko krok po kroku.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Когда я говорю по шагам —", "он не путается.»"],
            pl: ["„Gdy mówię krok po kroku —", "on się nie gubi.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит,", "я могу управлять результатом.»"],
            pl: ["„Czyli", "mogę sterować wynikiem.”"],
          },
        },
      ],
    },
    // правило
    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ЗАПОМНИ",
            pl: "❗ ZAPAMIĘTAJ",
          },
          rule: {
            ru: [
              "ИИ не понимает всё сразу.",
              "Он работает шаг за шагом.",
              "",
              "Если хочешь результат —",
              "разбивай задачу на шаги.",
            ],
            pl: [
              "AI nie rozumie wszystkiego naraz.",
              "Działa krok po kroku.",
              "",
              "Jeśli chcesz efekt —",
              "podziel zadanie na kroki.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я выполняю порядок."],
                pl: ["— Wykonuję kolejność."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— порядок задаю я."],
                pl: ["— Czyli", "— to ja ustalam kolejność."],
              },
            },
          ],
        },
      ],
    },
    //  Practic
    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_task.png?raw=true",

      author: {
        ru: [
          "🎮 ПРАКТИКА",
          "Кирилл смотрит на варианты.",
          "Один из них явно лучше.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył patrzy na opcje.",
          "Jedna z nich jest wyraźnie lepsza.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой запрос ИИ поймёт лучше?",
            pl: "Które polecenie AI zrozumie najlepiej?",
          },
          options: {
            ru: [
              "Сделай крутую игру с героем, боссом и наградой",
              "Придумай игру. Герой должен быть сильным. Пусть будет интересно",
              "Придумай игру по шагам: 1) появляется герой, 2) он проходит уровень, 3) сражается с боссом, 4) получает награду",
            ],
            pl: [
              "Zrób fajną grę z bohaterem, bossem i nagrodą",
              "Wymyśl grę. Bohater ma być silny. Niech będzie ciekawie",
              "Wymyśl grę krok po kroku: 1) pojawia się bohater, 2) przechodzi poziom, 3) walczy z bossem, 4) dostaje nagrodę",
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
                "Какие варианты слишком общие?",
                "Где есть порядок действий?",
                "Почему шаги помогают ИИ?",
              ],
              pl: [
                "Które opcje są zbyt ogólne?",
                "Gdzie jest kolejność działań?",
                "Dlaczego kroki pomagają AI?",
              ],
            },
          },
        },
      ],
    },

    // финал
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson1_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Дорожка с номерами остаётся позади.",
          "Теперь Кирилл идёт уверенно.",
          "Не потому что всё знает.",
          "А потому что понимает, как действовать.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Ścieżka z numerami zostaje za nimi.",
          "Kirył idzie teraz pewniej.",
          "Nie dlatego, że wszystko wie.",
          "Ale dlatego, że rozumie, jak działać.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Забавно.",
              "— Раньше я просто просил.",
              "— А теперь как будто объясняю план.",
            ],
            pl: [
              "— Ciekawe.",
              "— Wcześniej po prostu prosiłem.",
              "— A teraz jakbym tłumaczył plan.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты описываешь алгоритм."],
            pl: ["— Opisujesz algorytm."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Алго… что?"],
            pl: ["— Algo… co?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["<em>(Алгоритм — это план действий по шагам.)</em>"],
            pl: ["<em>(Algorytm — to plan działania krok po kroku.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Именно это ты и сделал."],
            pl: ["— Właśnie to zrobiłeś."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ха.", "— То есть я уже немного программист?"],
            pl: ["— Ha.", "— Czyli jestem już trochę programistą?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— На один шаг ближе."],
            pl: ["— O jeden krok bliżej."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл прошёл первый урок второй серии.",
              "Он понял важную вещь:",
              "ИИ любит не магию,",
              "а чёткие шаги.",
              "",
              "Дальше будет сложнее.",
              "И намного интереснее.",
            ],
            pl: [
              "Kirył ukończył pierwszą lekcję drugiej serii.",
              "Zrozumiał ważną rzecz:",
              "AI nie lubi magii,",
              "tylko jasne kroki.",
              "",
              "Dalej będzie trudniej.",
              "I dużo ciekawiej.",
            ],
          },
        },
      ],
    },
  ],
};
