// lessons/lesson2-1.js
export const lesson = {
  seriesId: 2,
  lessonId: 2 - 1,

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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module5_scena2.png?raw=true",

      author: {
        ru: ["🎮 СЦЕНА 2. ПЛОХОЙ ПРИМЕР"],
        pl: ["🎮 SCENA 2. ZŁY PRZYKŁAD"],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Некоторые дети спрашивают так:",
              "На экране:",
              "• «Вот мой адрес…»",
              "• «Вот мой пароль…»",
              "• «Вот номер маминой карты…»",
            ],
            pl: [
              "— Niektóre dzieci pytają tak:",
              "Na ekranie:",
              "• „To jest mój adres…”",
              "• „To jest moje hasło…”",
              "• „To numer karty mamy…”",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— ЧЕГО 😳", "— Кто так делает?!"],
            pl: ["— CO 😳", "— Kto tak robi?!"],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_scena3.png?raw=true",

      author: {
        ru: ["😠 СЦЕНА 3. КИРИЛЛ СЕРЬЁЗНЫЙ"],
        pl: ["😠 SCENA 3. KIRYŁ JEST POWAŻNY"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Стоп.", "— Ты не друг.", "— Ты программа."],
            pl: [
              "— Stop.",
              "— Nie jesteś przyjacielem.",
              "— Jesteś programem.",
            ],
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
            ru: [
              "— И ты не должен знать:",
              "— где я живу,",
              "— какие у меня пароли",
              "— и вообще личное.",
            ],
            pl: [
              "— I nie powinieneś wiedzieć:",
              "— gdzie mieszkam,",
              "— jakie mam hasła,",
              "— ani żadnych danych osobistych.",
            ],
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

    // МЫСЛИ
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_mysli1.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА"],
        pl: ["💭 MYŚLI KIRYŁA"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["«ИИ — это как чат в игре."],
            pl: ["„AI to jak czat w grze."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["Можно болтать,", "но нельзя сливать личное."],
            pl: ["Można pogadać,", "ale nie wolno ujawniać prywatnych rzeczy."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: ["А то потом будет беда.»"],
            pl: ["Bo potem mogą być kłopoty."],
          },
        },
      ],
    },

    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_prawiloSwetofor.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 4. ПРАВИЛО «СВЕТОФОРА» 🚦"],
        pl: ["🧠 SCENA 4. ZASADA „SYGNALIZATORA” 🚦"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Давай проще.", "— Как понять, что можно говорить?"],
            pl: ["— Prościej.", "— Skąd wiedzieć, co można mówić?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Используй правило светофора."],
            pl: ["— Użyj zasady sygnalizatora."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "<b>🟢 МОЖНО</b>",
              "<ul><li>идеи</li><li>вопросы</li><li>помощь с учёбой</li><li>игры и творчество</li></ul>",
            ],
            pl: [
              "<b>🟢 MOŻNA</b>",
              "<ul><li>pomysły</li><li>pytania</li><li>pomoc w nauce</li><li>gry i twórczość</li></ul>",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "<b>🟡 ОСТОРОЖНО</b>",
              "<ul><li>osobiste historie</li><li>эмоции</li><li>жалобы</li></ul>",
            ],
            pl: [
              "<b>🟡 OSTROŻNIE</b>",
              "<ul><li>osobiste historie</li><li>emocje</li><li>skargi</li></ul>",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "<b>🔴 НЕЛЬЗЯ</b>",
              "<ul><li>адрес</li><li>пароли</li><li>номера карт</li><li>данные семьи</li></ul>",
            ],
            pl: [
              "<b>🔴 NIE WOLNO</b>",
              "<ul><li>adres</li><li>hasła</li><li>numery kart</li><li>dane rodziny</li></ul>",
            ],
          },
        },
      ],
    },

    // правило №5
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_prawilo.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 5. ПРАВИЛО №5 ПЛАНЕТЫ ИИ"],
        pl: ["🧠 SCENA 5. ZASADA NR 5 PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ №5",
            pl: "❗ ZASADA PLANETY AI NR 5",
          },
          rule: {
            ru: "ИИ — не человек и не друг.<br>Личное — не для него",
            pl: "AI nie jest człowiekiem ani przyjacielem.<br>Dane osobiste nie są dla niego",
          },
          dialog: [
            {
              speaker: "Kyrylo",
              text: {
                ru: ["— Запомнил."],
                pl: ["— Zapamiętane."],
              },
            },
            {
              speaker: "AI robot",
              text: {
                ru: ["— Это делает тебя безопасным пользователем."],
                pl: ["— To czyni cię bezpiecznym użytkownikiem."],
              },
            },
          ],
        },
      ],
    },
    // 6
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_final.png?raw=true",

      author: {
        ru: ["🏁 ФИНАЛ УРОКА 6"],
        pl: ["🏁 FINAŁ LEKCJI 6"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Знаешь…", "— Ты полезный."],
            pl: ["— Wiesz…", "— Jesteś pomocny."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Спасибо."],
            pl: ["— Dziękuję."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Но только если держать дистанцию."],
            pl: ["— Ale tylko jeśli zachować dystans."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это разумно."],
            pl: ["— To rozsądne."],
          },
        },
      ],
    },

    // финал
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module6/module6_final.png?raw=true",

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
            ru: ["• ИИ помогает, но не думает за человека"],
            pl: ["• AI pomaga, ale nie myśli za człowieka"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["• личную информацию нельзя передавать"],
            pl: ["• nie wolno przekazywać danych osobistych"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["• ответственность всегда на человеке"],
            pl: ["• odpowiedzialność zawsze leży po stronie człowieka"],
          },
        },
      ],
    },
  ],
};
