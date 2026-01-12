// lessons/lesson2-2.js
export const lesson = {
  seriesId: 3,
  lessonId: 13,

  title: {
    ru: "Откуда взялся ИИ и какие бывают",
    pl: "",
  },

  subtitle: {
    ru: "",
    pl: "",
  },

  scenes: [
    // СЦЕНА 1. Архив происхождения
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_scene1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Архив происхождения",
          "Кирилл выходит из Комнаты сигналов.",
          "Дверь за ним закрывается мягко, без звука.",
          "Перед ним — длинный коридор.",
          "Стены уставлены полками.",
          "На них — схемы, старые экраны и странные устройства.",
          "Всё выглядит как музей.",
          "И как серверная одновременно.",
        ],
        pl: [
          "🎬 SCENA 1. Archiwum pochodzenia",
          "Kirył wychodzi z Pokoju sygnałów.",
          "Drzwi za nim zamykają się cicho.",
          "Przed nim rozciąga się długi korytarz.",
          "Ściany wypełnione są półkami.",
          "Na nich — schematy, stare ekrany i dziwne urządzenia.",
          "To wygląda jak muzeum.",
          "I jak serwerownia jednocześnie.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого…", "— Это что,", "— прошлое ИИ?"],
            pl: ["— Wow…", "— To co,", "— przeszłość AI?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Один из экранов загорается.",
              "На нём — простая надпись:",
              "<b>«НИЧЕГО НЕ ПОЯВЛЯЕТСЯ ИЗ НИОТКУДА»</b>.",
            ],
            pl: [
              "Jeden z ekranów się zapala.",
              "Widnieje na nim prosty napis:",
              "<b>„NIC NIE POWSTAJE Z NICZEGO”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит,", "— ИИ не упал с неба?"],
            pl: ["— Czyli", "— AI nie spadło z nieba?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет.", "— Его собирали.", "— Шаг за шагом."],
            pl: ["— Nie.", "— Było budowane.", "— Krok po kroku."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Полки начинают подсвечиваться.",
              "Сначала — очень старые вещи.",
              "Карточки с цифрами.",
              "Простые таблицы.",
            ],
            pl: [
              "Półki zaczynają się podświetlać.",
              "Najpierw bardzo stare rzeczy.",
              "Karty z cyframi.",
              "Proste tabele.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Это…", "— вообще не похоже на ИИ."],
            pl: ["— To…", "— w ogóle nie wygląda jak AI."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Потому что сначала", "— это были просто правила."],
            pl: ["— Bo na początku", "— to były tylko zasady."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Правила — это чёткие инструкции:",
              "«если так — делай это».)</em>",
            ],
            pl: [
              "<em>(Zasady to jasne instrukcje:",
              "„jeśli tak — zrób to”.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Типа старого бота в игре?"],
            pl: ["— Jak stary bot w grze?"],
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
              "Глубже в архиве загорается другой сектор.",
              "Там схемы становятся сложнее.",
              "Данных — больше.",
              "Экранов — тоже.",
            ],
            pl: [
              "Głębiej w archiwum zapala się kolejny sektor.",
              "Schematy stają się bardziej złożone.",
              "Jest więcej danych.",
              "Więcej ekranów.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Чтобы понять,",
              "что ИИ умеет сейчас,",
              "нужно увидеть,",
              "с чего он начинался.",
            ],
            pl: [
              "Żeby zrozumieć,",
              "co AI potrafi dziś,",
              "trzeba zobaczyć,",
              "od czego się zaczęło.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 2. От правил к обучению
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. От правил к обучению",
          "Кирилл идёт глубже в Архив.",
          "Полки с правилами остаются позади.",
          "Впереди — новая зона.",
          "Здесь меньше инструкций.",
          "Зато больше данных.",
          "Экранов становится в разы больше.",
        ],
        pl: [
          "🎬 SCENA 2. Od zasad do uczenia się",
          "Kirył idzie głębiej w Archiwum.",
          "Półki z zasadami zostają za nim.",
          "Przed nim pojawia się nowa strefa.",
          "Jest tu mniej instrukcji.",
          "Za to więcej danych.",
          "Ekranów robi się znacznie więcej.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На стенах больше нет табличек",
              "«если — то».",
              "Вместо них —",
              "тысячи примеров.",
            ],
            pl: [
              "Na ścianach nie ma już tabliczek",
              "„jeśli — to”.",
              "Zamiast nich —",
              "tysiące przykładów.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— А где правила?"],
            pl: ["— Chwila…", "— A gdzie są zasady?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Их стало меньше.", "— Теперь важнее примеры."],
            pl: ["— Jest ich mniej.", "— Teraz ważniejsze są przykłady."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Один из экранов оживает.",
              "На нём — изображения:",
              "кошки, собаки, машины.",
              "Под каждым — подпись.",
            ],
            pl: [
              "Jeden z ekranów ożywa.",
              "Pojawiają się na nim obrazy:",
              "koty, psy, samochody.",
              "Pod każdym — podpis.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ааа.",
              "— Типа:",
              "— «вот это кошка»,",
              "— «вот это не кошка»?",
            ],
            pl: [
              "— Aaa.",
              "— Czyli:",
              "— „to jest kot”,",
              "— „to nie jest kot”?",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Очень много раз."],
            pl: ["— Tak.", "— Bardzo wiele razy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Обучение — это процесс,",
              "когда системе показывают примеры,",
              "а не прописывают каждый шаг.)</em>",
            ],
            pl: [
              "<em>(Uczenie się to proces,",
              "w którym systemowi pokazuje się przykłady,",
              "a nie zapisuje każdy krok.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Как я учился играть.",
              "— Мне не объясняли весь код.",
              "— Я просто много раз пробовал.",
            ],
            pl: [
              "— Jak uczyłem się grać.",
              "— Nikt mi nie tłumaczył całego kodu.",
              "— Po prostu próbowałem wiele razy.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Хорошее сравнение."],
            pl: ["— Dobre porównanie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["На экране появляется надпись:", "<b>«ИИ С ОБУЧЕНИЕМ»</b>."],
            pl: ["Na ekranie pojawia się napis:", "<b>„AI UCZĄCE SIĘ”</b>."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Когда правил слишком много,",
              "их невозможно прописать.",
              "Тогда систему начинают учить.",
            ],
            pl: [
              "Gdy zasad jest zbyt wiele,",
              "nie da się ich wszystkich zapisać.",
              "Wtedy system zaczyna się uczyć.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 3. ИИ бывают разными

    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. ИИ бывают разными",
          "Архив делится на несколько секторов.",
          "Каждый подсвечен своим цветом.",
          "Над входами появляются названия.",
        ],
        pl: [
          "🎬 SCENA 3. AI bywają różne",
          "Archiwum dzieli się na kilka sektorów.",
          "Każdy podświetlony jest innym kolorem.",
          "Nad wejściami pojawiają się nazwy.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Первый сектор светится ровным синим светом.",
              "На табличке написано:",
              "<b>«ПРАВИЛА»</b>.",
            ],
            pl: [
              "Pierwszy sektor świeci równym niebieskim światłem.",
              "Na tabliczce widnieje napis:",
              "<b>„ZASADY”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Это как старые боты.",
              "— Делают только то,",
              "— что им сказали.",
            ],
            pl: [
              "— To jak stare boty.",
              "— Robią tylko to,",
              "— co im kazano.",
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
              "— Если правило не прописано,",
              "— система не знает, что делать.",
            ],
            pl: [
              "— Tak.",
              "— Jeśli zasada nie jest zapisana,",
              "— system nie wie, co zrobić.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Второй сектор мигает зелёным.",
              "Надпись:",
              "<b>«ОБУЧЕНИЕ НА ПРИМЕРАХ»</b>.",
            ],
            pl: [
              "Drugi sektor miga na zielono.",
              "Napis:",
              "<b>„UCZENIE NA PRZYKŁADACH”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А это те,", "— которым показывают примеры?"],
            pl: ["— A to te,", "— którym pokazuje się przykłady?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно.", "— Они ищут похожие случаи."],
            pl: ["— Dokładnie.", "— Szukają podobnych przypadków."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Третий сектор самый большой.",
              "Он переливается разными цветами.",
              "Над входом:",
              "<b>«СОВРЕМЕННЫЕ МОДЕЛИ»</b>.",
            ],
            pl: [
              "Trzeci sektor jest największy.",
              "Mieni się różnymi kolorami.",
              "Nad wejściem:",
              "<b>„WSPÓŁCZESNE MODELE”</b>.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Выглядит…", "— мощно."],
            pl: ["— Wygląda…", "— potężnie."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Они обучены на огромном количестве данных.",
              "— И умеют работать с текстом,",
              "— изображениями и звуками.",
            ],
            pl: [
              "— Są uczone na ogromnej ilości danych.",
              "— I potrafią pracować z tekstem,",
              "— obrazami i dźwiękiem.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Современные модели — это ИИ,",
              "который может выполнять разные задачи,",
              "а не одну конкретную.)</em>",
            ],
            pl: [
              "<em>(Współczesne modele to AI,",
              "które potrafi wykonywać różne zadania,",
              "a nie tylko jedno.)</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— ИИ — это не один тип?"],
            pl: ["— Czyli…", "— AI to nie jeden typ?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет.", "— Это целое семейство систем."],
            pl: ["— Nie.", "— To cała rodzina systemów."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Важно понимать,",
              "с каким типом ИИ ты имеешь дело.",
              "От этого зависят",
              "его возможности",
              "и ошибки.",
            ],
            pl: [
              "Ważne jest,",
              "z jakim typem AI masz do czynienia.",
              "Od tego zależą",
              "jego możliwości",
              "i błędy.",
            ],
          },
        },
      ],
    },

    // 💭 МЫСЛИ КИРИЛЛА

    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_thoughts.png?raw=true",

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
            ru: ["«Раньше я думал,", "что ИИ — это что-то одно.»"],
            pl: ["„Wcześniej myślałem,", "że AI to coś jednego.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Типа один умный мозг,", "который знает всё.»"],
            pl: ["„Jak jeden mądry mózg,", "który wie wszystko.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«А оказывается,", "это вообще не так.»"],
            pl: ["„A okazuje się,", "że wcale tak nie jest.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Есть простые системы —", "по правилам.»"],
            pl: ["„Są proste systemy —", "na zasadach.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Есть те,", "которые учатся на примерах.»"],
            pl: ["„Są takie,", "które uczą się na przykładach.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«И есть современные модели,",
              "которые умеют многое,",
              "но всё равно не всё.»",
            ],
            pl: [
              "„I są współczesne modele,",
              "które potrafią wiele,",
              "ale wciąż nie wszystko.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит,", "важно понимать,", "с чем именно я работаю.»"],
            pl: ["„Czyli", "ważne jest,", "z czym dokładnie pracuję.”"],
          },
        },
      ],
    },

    // 🎯 ПРАВИЛО УРОКА

    {
      id: "rule",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_rule.png?raw=true",

      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО АРХИВА ПРОИСХОЖДЕНИЯ",
            pl: "❗ GŁÓWNA ZASADA ARCHIWUM POCHODZENIA",
          },
          rule: {
            ru: [
              "ИИ — это не один «умный мозг».",
              "",
              "Существуют разные типы ИИ:",
              "— системы по правилам;",
              "— системы, обученные на примерах;",
              "— современные модели, работающие с разными задачами.",
              "",
              "Каждый тип умеет своё",
              "и ошибается по-разному.",
            ],
            pl: [
              "AI to nie jeden „mądry mózg”.",
              "",
              "Istnieją różne typy AI:",
              "— systemy oparte na zasadach;",
              "— systemy uczące się na przykładach;",
              "— współczesne modele obsługujące różne zadania.",
              "",
              "Każdy typ potrafi coś innego",
              "i popełnia inne błędy.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Нельзя ожидать", "— одинакового от разных систем."],
                pl: [
                  "— Nie można oczekiwać",
                  "— tego samego od różnych systemów.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— сначала тип,", "— потом ожидания."],
                pl: ["— Czyli", "— najpierw typ,", "— potem oczekiwania."],
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_task.png?raw=true",

      author: {
        ru: [
          "🎮 ПРАКТИКА",
          "Кирилл решает проверить,",
          "сможет ли он определить тип ИИ по описанию.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić,",
          "czy potrafi rozpoznać typ AI po opisie.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой это тип ИИ?",
            pl: "Jaki to typ AI?",
          },
          options: {
            ru: [
              "Система по правилам",
              "ИИ, обученный на примерах",
              "Современная модель",
            ],
            pl: [
              "System oparty na zasadach",
              "AI uczące się na przykładach",
              "Współczesny model",
            ],
          },
          statement: {
            ru: "«Если игрок нажал кнопку — открой дверь. Если нет — дверь закрыта»",
            pl: "„Jeśli gracz nacisnął przycisk — otwórz drzwi. Jeśli nie — drzwi są zamknięte”",
          },
          correct: 0,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Есть ли здесь обучение?",
                "Что произойдёт, если появится новый случай?",
              ],
              pl: [
                "Czy jest tu uczenie się?",
                "Co się stanie, jeśli pojawi się nowy przypadek?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "Какой это тип ИИ?",
            pl: "Jaki to typ AI?",
          },
          options: {
            ru: [
              "Система по правилам",
              "ИИ, обученный на примерах",
              "Современная модель",
            ],
            pl: [
              "System oparty na zasadach",
              "AI uczące się na przykładach",
              "Współczesny model",
            ],
          },
          statement: {
            ru: "«Системе показали тысячи фотографий кошек и собак, чтобы она научилась их различать»",
            pl: "„Systemowi pokazano tysiące zdjęć kotów i psów, aby nauczył się je rozróżniać”",
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Почему здесь не подходят правила?",
                "Что именно делает система — запоминает или ищет похожее?",
              ],
              pl: [
                "Dlaczego zasady tu nie wystarczą?",
                "Co dokładnie robi system — zapamiętuje czy szuka podobieństw?",
              ],
            },
          },
        },

        {
          type: "task",
          question: {
            ru: "Какой это тип ИИ?",
            pl: "Jaki to typ AI?",
          },
          options: {
            ru: [
              "Система по правилам",
              "ИИ, обученный на примерах",
              "Современная модель",
            ],
            pl: [
              "System oparty na zasadach",
              "AI uczące się na przykładach",
              "Współczesny model",
            ],
          },
          statement: {
            ru: "«Система может отвечать на вопросы, писать тексты и помогать с идеями»",
            pl: "„System potrafi odpowiadać na pytania, pisać teksty i pomagać z pomysłami”",
          },
          correct: 2,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: [
                "Почему это не одна задача?",
                "Почему от такой системы нельзя ждать идеальных ответов?",
              ],
              pl: [
                "Dlaczego to nie jedno zadanie?",
                "Dlaczego nie można oczekiwać idealnych odpowiedzi?",
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module3/module3_lesson13_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Архив происхождения постепенно затихает.",
          "Экраны гаснут.",
          "Секторы остаются на своих местах —",
          "как напоминание, что всё имеет историю.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Archiwum pochodzenia powoli cichnie.",
          "Ekrany gasną.",
          "Sektory zostają na swoich miejscach —",
          "jak przypomnienie, że wszystko ma swoją historię.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Теперь ясно.", "— ИИ не появился внезапно."],
            pl: ["— Teraz jasne.", "— AI nie pojawiło się nagle."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Он рос.", "— От простых правил", "— до сложных систем."],
            pl: ["— Rosło.", "— Od prostych zasad", "— do złożonych systemów."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— И до сих пор развивается."],
            pl: ["— I nadal się rozwija."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на три сектора.",
              "Теперь они для него не загадка,",
              "а карта.",
            ],
            pl: [
              "Kirył patrzy na trzy sektory.",
              "Teraz nie są już zagadką,",
              "ale mapą.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: [
              "Понимание начинается с вопроса:",
              "что это за инструмент",
              "и для чего он создан.",
            ],
            pl: [
              "Zrozumienie zaczyna się od pytania:",
              "jakim to jest narzędziem",
              "i do czego zostało stworzone.",
            ],
          },
        },
      ],
    },
  ],
};
