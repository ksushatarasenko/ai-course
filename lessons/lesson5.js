
// lessons/lesson5.js
export const lesson = {
  seriesId: 1,
  lessonId: 5,

  title: {
    ru: "ИИ помогает, но не играет за тебя",
    pl: "AI pomaga, ale nie gra za ciebie",
  },

  subtitle: {
    ru: "Почему ИИ — это буст, а не чит",
    pl: "Dlaczego AI to boost, a nie cheat",
  },

  scenes: [
    // 0
    {
      id: "0",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena0.png?raw=true",

      author: {
        ru: ["Что такое «чит» и «буст»"],
        pl: ["Czym jest „cheat” i „boost”"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>Чит</b> (от cheat — жульничать) — это:",
              "- нечестный способ получить результат",
              "- нарушение правил",
            ],
            pl: [
              "<b>Cheat</b> (od cheat — oszukiwać) to:",
              "- nieuczciwy sposób zdobycia wyniku",
              "- łamanie zasad",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "📌 Примеры:",
              "- списывать на экзамене",
              "- использовать zakazane programy w grze",
              "<b>👉 Ключевая идея:</b> ты получаешь результат, <em>не делая работу сам</em> и <em>нарушая правила</em>.",
            ],
            pl: [
              "📌 Przykłady:",
              "- ściąganie na egzaminie",
              "- używanie zakazanych programów w grze",
              "<b>👉 Kluczowa idea:</b> dostajesz wynik, <em>nie wykonując pracy samodzielnie</em> i <em>łamiąc zasady</em>.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>Буст</b> (от boost — усиление) — это:",
              "- инструмент, который <b>усиливает твои способности</b>",
              "- ускоряет работу",
              "- помогает думать, но <b>не делает всё за тебя</b>",
            ],
            pl: [
              "<b>Boost</b> (od boost — wzmocnienie) to:",
              "- narzędzie, które <b>wzmacnia twoje możliwości</b>",
              "- przyspiesza pracę",
              "- pomaga myśleć, ale <b>nie robi wszystkiego za ciebie</b>",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "📌 Примеры:",
              "- калькулятор вместо счёта в столбик",
              "- автопереводчик для понимания текста",
              "- навигатор вместо бумажной карты",
              "<b>👉 Ключевая идея:</b> ты всё равно принимаешь решения и отвечаешь за результат — просто делаешь это <b>быстрее и эффективнее</b>.",
            ],
            pl: [
              "📌 Przykłady:",
              "- kalkulator zamiast liczenia w słupku",
              "- automatyczny tłumacz do zrozumienia tekstu",
              "- nawigacja zamiast papierowej mapy",
              "<b>👉 Kluczowa idea:</b> nadal podejmujesz decyzje i odpowiadasz za wynik — po prostu robisz to <b>szybciej i efektywniej</b>.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>Очень коротко, одной фразой:</b>",
              "<b>Чит</b> — обман системы.",
              "<b>Буст</b> — усиление человека.",
            ],
            pl: [
              "<b>Bardzo krótko, jednym zdaniem:</b>",
              "<b>Cheat</b> — oszustwo systemu.",
              "<b>Boost</b> — wzmocnienie człowieka.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "Значит <b>«чититься»</b> — это <em>жульничать / получать преимущество нечестным способом</em>.",
              "<b>👉 чититься = обманывать систему</b>",
            ],
            pl: [
              "Czyli <b>„cheatować”</b> to <em>oszukiwać / zdobywać przewagę nieuczciwie</em>.",
              "<b>👉 cheatować = oszukiwać system</b>",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "Совершенно верно.",
              "<b>🔴 Чититься:</b>",
              "— против правил",
              "<b>🟢 Буститься:</b>",
              "— ответственность остаётся на тебе",
            ],
            pl: [
              "Dokładnie tak.",
              "<b>🔴 Cheatowanie:</b>",
              "— wbrew zasadom",
              "<b>🟢 Boostowanie:</b>",
              "— odpowiedzialność zostaje po twojej stronie",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>Очень коротко:</b>",
              "<b>чит</b> — запрещённый способ",
              "<b>чититься</b> — пользоваться им",
              "<b>буст</b> — усиление",
              "<b>буститься</b> — усиливать себя инструментами",
            ],
            pl: [
              "<b>Bardzo krótko:</b>",
              "<b>cheat</b> — zakazany sposób",
              "<b>cheatować</b> — korzystać z niego",
              "<b>boost</b> — wzmocnienie",
              "<b>boostować się</b> — wzmacniać się narzędziami",
            ],
          },
        },
      ],
    },

    // 1
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. ЗАПРЕТНАЯ ЗОНА ПЛАНЕТЫ ИИ",
          "Цель урока:",
          "- показать разницу: помощь vs замена",
          "- снять желание «пусть ИИ всё сделает»",
          "- закрепить: думать должен человек",
        ],
        pl: [
          "🎬 SCENA 1. ZAKAZANA STREFA PLANETY AI",
          "Cel lekcji:",
          "- pokazać różnicę: pomoc vs zastępowanie",
          "- zdjąć pokusę „niech AI zrobi wszystko”",
          "- utrwalić: myśleć musi człowiek",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл и робот подходят к огромной двери.",
              "Табличка:",
              "🚫 ЗОНА ЛЕНИ",
              "«Тут люди перестали думать»",
            ],
            pl: [
              "Kirył i robot podchodzą do ogromnych drzwi.",
              "Tabliczka:",
              "🚫 STREFA LENISTWA",
              "„Tutaj ludzie przestali myśleć”",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого.", "— Это что, бан за лень?"],
            pl: ["— Wow.", "— To jakiś ban za lenistwo?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Почти.",
              "— Здесь люди просили ИИ делать всё за них.",
            ],
            pl: [
              "— Prawie.",
              "— Tutaj ludzie prosili AI, żeby robiło wszystko za nich.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ммм…", "— Звучит удобно 😏"],
            pl: ["— Hmm…", "— Brzmi wygodnie 😏"],
          },
        },
      ],
    },

        // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena2.png?raw=true",

      author: {
        ru: ["🎮 СЦЕНА 2. ИИ ДЕЛАЕТ ВСЁ САМ"],
        pl: ["🎮 SCENA 2. AI ROBI WSZYSTKO SAMO"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Они заходят внутрь.",
              "ИИ показывает пример:",
            ],
            pl: [
              "Wchodzą do środka.",
              "AI pokazuje przykład:",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Человек попросил:",
              "«Придумай игру полностью».",
            ],
            pl: [
              "— Człowiek poprosił:",
              "„Wymyśl grę w całości”.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну и?"],
            pl: ["— No i?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Вот результат.",
              "Появляется игра:",
              "скучная, без идеи, без души.",
            ],
            pl: [
              "— Oto wynik.",
              "Pojawia się gra:",
              "nudna, bez pomysłu, bez duszy.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Это что…",
              "— Клон клона клона.",
            ],
            pl: [
              "— To co to jest…",
              "— Klon klona klona.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Он ничего не придумал сам."],
            pl: ["— On niczego nie wymyślił sam."],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena3.png?raw=true",

      author: {
        ru: ["😬 СЦЕНА 3. КИРИЛЛ ПЫТАЕТСЯ СХИТРИТЬ"],
        pl: ["😬 SCENA 3. KIRYŁ PRÓBUJE CWANIACZYĆ"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ладно, проверим.",
              "— Придумай мне офигенную игру, чтобы я вообще ничего не делал.",
            ],
            pl: [
              "— Dobra, sprawdźmy.",
              "— Wymyśl mi super grę, żebym w ogóle nic nie robił.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Выполняю.",
              "Результат — длинное, но пустое описание.",
            ],
            pl: [
              "— Wykonuję.",
              "Rezultat — długi, ale pusty opis.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Много слов…",
              "— А играть не хочется.",
            ],
            pl: [
              "— Dużo słów…",
              "— A nie chce się grać.",
            ],
          },
        },
      ],
    },

    // МЫСЛИ 1
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_mysli1.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА"],
        pl: ["💭 MYŚLI KIRYŁA"],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "«Если я сам не знаю,",
              "что хочу сделать,",
              "ИИ тоже не знает.",
            ],
            pl: [
              "„Jeśli sam nie wiem,",
              "co chcę zrobić,",
              "AI też tego nie wie.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryła:",
          text: {
            ru: [
              "Он просто накидывает варианты.",
              "Без идеи — всё скучное.»",
            ],
            pl: [
              "Po prostu rzuca propozycje.",
              "Bez pomysłu wszystko jest nudne.”",
            ],
          },
        },
      ],
    },

    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_scena4.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 4. ПРАВИЛО ИГРЫ"],
        pl: ["🧠 SCENA 4. ZASADA GRY"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Подожди.",
              "— А если сначала я придумаю идею?",
            ],
            pl: [
              "— Czekaj.",
              "— A jeśli najpierw wymyślę pomysł?",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда я смогу помочь."],
            pl: ["— Wtedy będę mógł pomóc."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Типа так:",
              "— я = идея,",
              "— ты = помощь?",
            ],
            pl: [
              "— Czyli tak:",
              "— ja = pomysł,",
              "— ty = pomoc?",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Точно."],
            pl: ["— Dokładnie."],
          },
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ
    {
      id: "task1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_task1.png?raw=true",

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: ["Сравни:"],
            pl: ["Porównaj:"],
          },
          options: {
            ru: [
              "«Придумай игру»",
              "«Я придумал игру про выживание на острове. Помоги придумать врагов и квесты»",
            ],
            pl: [
              "„Wymyśl grę”",
              "„Wymyśliłem grę o przetrwaniu na wyspie. Pomóż wymyślić wrogów i questy”",
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
                "где думает человек?",
                "где помогает ИИ?",
              ],
              pl: [
                "gdzie myśli człowiek?",
                "gdzie pomaga AI?",
              ],
            },
          },
        },
      ],
    },

    // ПРАВИЛО №4
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_prawilo.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 5. ПРАВИЛО №4 ПЛАНЕТЫ ИИ"],
        pl: ["🧠 SCENA 5. ZASADA NR 4 PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ПРАВИЛО ПЛАНЕТЫ ИИ №4",
            pl: "❗ ZASADA PLANETY AI NR 4",
          },
          rule: {
            ru: "ИИ не играет за тебя. Он даёт подсказки",
            pl: "AI nie gra za ciebie. Daje podpowiedzi",
          },
          dialog: [
            {
              speaker: "Kyrylo",
              text: {
                ru: [
                  "— Короче,",
                  "— ИИ — это не чит-код.",
                ],
                pl: [
                  "— Krótko mówiąc,",
                  "— AI to nie cheat-code.",
                ],
              },
            },
            {
              speaker: "AI robot",
              text: {
                ru: [
                  "— Верно.",
                  "— Это буст.",
                ],
                pl: [
                  "— Zgadza się.",
                  "— To boost.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              text: {
                ru: ["— Вот, другое дело 😎"],
                pl: ["— No, to co innego 😎"],
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module5/module5_final.png?raw=true",

      author: {
        ru: ["🏁 ФИНАЛ УРОКА 5"],
        pl: ["🏁 FINAŁ LEKCJI 5"],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Если честно,", "— так даже интереснее."],
            pl: ["— Szczerze mówiąc,", "— tak jest nawet ciekawiej."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Ты играешь.",
              "— Я помогаю.",
            ],
            pl: [
              "— Ty grasz.",
              "— Ja pomagam.",
            ],
          },
        },
      ],
    },

    // … дальше lesson5 продолжается ровно в том же формате
  ],
};
