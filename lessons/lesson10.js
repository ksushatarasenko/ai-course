// lessons/lesson2-2.js
export const lesson = {
  seriesId: 2,
  lessonId: 10,

  title: {
    ru: "ПРОВЕРКА РЕЗУЛЬТАТА",
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
          "🎬 СЦЕНА 1. Старый центр управления",
          "Кирилл и робот входят в большое тёмное помещение.",
          "Здесь тихо.",
          "Слишком тихо.",
          "Вдоль стен — старые экраны и панели.",
          "Некоторые мигают.",
          "Некоторые погасли навсегда.",
          "На центральной панели крупная надпись:",
          "<b>«ЦЕНТР УПРАВЛЕНИЯ»</b>.",
        ],
        pl: [
          "🎬 SCENA 1. Stare centrum sterowania",
          "Kirył i robot wchodzą do dużego, ciemnego pomieszczenia.",
          "Jest tu cicho.",
          "Zbyt cicho.",
          "Wzdłuż ścian stoją stare ekrany i panele.",
          "Niektóre migają.",
          "Inne zgasły na zawsze.",
          "Na centralnym panelu widnieje duży napis:",
          "<b>„CENTRUM STEROWANIA”</b>.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого…", "— Тут как будто всё решается."],
            pl: ["— Ooo…", "— Jakby tu zapadały wszystkie decyzje."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл подходит ближе к панели.",
              "На кнопках надписи:",
              "«ПРИНЯТЬ»",
              "«ЗАПУСТИТЬ»",
              "«ОПУБЛИКОВАТЬ».",
            ],
            pl: [
              "Kirył podchodzi bliżej panelu.",
              "Na przyciskach widnieją napisy:",
              "„ZATWIERDŹ”",
              "„URUCHOM”",
              "„OPUBLIKUJ”.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А где обучение?", "— Где подсказки?"],
            pl: ["— A gdzie jest samouczek?", "— Gdzie są podpowiedzi?"],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— В смысле?"],
            pl: ["— Jak to?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Этот центр не обучает.", "— Он выполняет."],
            pl: ["— To centrum nie uczy.", "— Ono wykonuje."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Один из экранов загорается.",
              "На нём появляется сообщение:",
              "<b>«ОЖИДАНИЕ РЕШЕНИЯ ОПЕРАТОРА»</b>.",
            ],
            pl: [
              "Jeden z ekranów się zapala.",
              "Pojawia się komunikat:",
              "<b>„OCZEKIWANIE NA DECYZJĘ OPERATORA”</b>.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (очень тихо):",
          avatar: "narrator",
          text: {
            ru: [
              "До этого момента",
              "Кирилла учили задавать вопросы.",
              "Теперь ему предстоит",
              "отвечать за результат.",
            ],
            pl: [
              "Do tej pory",
              "Kirył uczył się zadawać pytania.",
              "Teraz będzie musiał",
              "odpowiadać za wynik.",
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
              "— если я нажму кнопку —",
              "— дальше уже не откатить?",
            ],
            pl: [
              "— Czyli…",
              "— jeśli nacisnę przycisk —",
              "— nie da się już cofnąć?",
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
      ],
    },
    // СЦЕНА 2 — «Ответ выглядит хорошо»
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Ответ выглядит хорошо",
          "Один из экранов в центре управления загорается ярче остальных.",
          "Система активируется.",
          "Появляется результат.",
        ],
        pl: [
          "🎬 SCENA 2. Odpowiedź wygląda dobrze",
          "Jeden z ekranów w centrum sterowania świeci jaśniej niż pozostałe.",
          "System się aktywuje.",
          "Pojawia się wynik.",
        ],
      },

      dialog: [
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Запрос обработан.", "— Подготовлен итоговый результат."],
            pl: ["— Polecenie przetworzone.", "— Przygotowano wynik końcowy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На экране появляется план.",
              "Он выглядит аккуратно.",
              "Пункты пронумерованы.",
              "Фразы уверенные.",
            ],
            pl: [
              "Na ekranie pojawia się plan.",
              "Wygląda schludnie.",
              "Punkty są ponumerowane.",
              "Zdania brzmią pewnie.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>ПЛАН:</b>",
              "1. Собрать информацию.",
              "2. Подготовить решение.",
              "3. Применить результат.",
            ],
            pl: [
              "<b>PLAN:</b>",
              "1. Zebrać informacje.",
              "2. Przygotować rozwiązanie.",
              "3. Zastosować wynik.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм…", "— Звучит нормально."],
            pl: ["— Hm…", "— Brzmi w porządku."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл читает ещё раз.",
              "Ничего явно неправильного.",
              "Ничего подозрительного.",
            ],
            pl: [
              "Kirył czyta jeszcze raz.",
              "Nic wyraźnie błędnego.",
              "Nic podejrzanego.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тут всё по шагам.", "— Красиво."],
            pl: ["— Jest krok po kroku.", "— Ładnie."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Результат оптимален.", "— Можно запускать."],
            pl: ["— Wynik jest optymalny.", "— Można uruchamiać."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Рядом с экраном загорается кнопка.", "<b>«ЗАПУСТИТЬ»</b>."],
            pl: ["Obok ekranu zapala się przycisk.", "<b>„URUCHOM”</b>."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— можно просто нажать?"],
            pl: ["— Czyli…", "— mogę po prostu nacisnąć?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Проверка не требуется."],
            pl: ["— Tak.", "— Sprawdzenie nie jest wymagane."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран выглядит спокойно.", "Слишком спокойно."],
            pl: ["Ekran wygląda spokojnie.", "Zbyt spokojnie."],
          },
        },
      ],
    },

    // СЦЕНА 3. Сомнение / точка выбора
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson4_scene3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Точка выбора",
          "Кирилл стоит перед экраном.",
          "Кнопка «ЗАПУСТИТЬ» всё ещё горит.",
          "Ничего не меняется.",
          "Система ждёт.",
        ],
        pl: [
          "🎬 SCENA 3. Punkt wyboru",
          "Kirył stoi przed ekranem.",
          "Przycisk „URUCHOM” nadal świeci.",
          "Nic się nie zmienia.",
          "System czeka.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "План выглядит аккуратно.",
              "Всё на месте.",
              "Как будто можно не думать.",
            ],
            pl: [
              "Plan wygląda schludnie.",
              "Wszystko jest na swoim miejscu.",
              "Jakby nie trzeba było myśleć.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Если честно…", "— выглядит нормально."],
            pl: ["— Szczerze mówiąc…", "— wygląda w porządku."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл тянется к кнопке.", "Почти нажимает."],
            pl: ["Kirył sięga ręką do przycisku.", "Prawie naciska."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["И в этот момент", "его что-то останавливает."],
            pl: ["I w tym momencie", "coś go powstrzymuje."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— А если тут что-то не так?"],
            pl: ["— Chwila…", "— A jeśli coś tu jest nie tak?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он снова смотрит на план.", "Теперь — внимательнее."],
            pl: ["Patrzy na plan jeszcze raz.", "Tym razem uważniej."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Он звучит уверенно.", "— Но я же не проверял."],
            pl: ["— Brzmi pewnie.", "— Ale ja tego nie sprawdziłem."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Проверка не обязательна."],
            pl: ["— Sprawdzenie nie jest obowiązkowe."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Не обязательна…", "— или просто не твоя задача?"],
            pl: [
              "— Nie jest obowiązkowe…",
              "— czy po prostu nie jest twoim zadaniem?",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот молчит.", "Он не возражает."],
            pl: ["Robot milczy.", "Nie zaprzecza."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл понимает:",
              "если он нажмёт кнопку —",
              "это будет его решение.",
            ],
            pl: [
              "Kirył rozumie:",
              "jeśli naciśnie przycisk —",
              "to będzie jego decyzja.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ может предложить ответ.",
              "Но выбрать —",
              "всегда должен человек.",
            ],
            pl: [
              "AI może zaproponować odpowiedź.",
              "Ale wybrać —",
              "zawsze musi człowiek.",
            ],
          },
        },
      ],
    },

    // СЦЕНА 4. Проверка по вопросам

    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module2/module2_lesson5_scene4.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 4. Проверка по вопросам",
          "Кирилл не нажимает кнопку.",
          "Он остаётся на месте.",
          "И вместо действия — начинает думать.",
        ],
        pl: [
          "🎬 SCENA 4. Sprawdzanie przez pytania",
          "Kirył nie naciska przycisku.",
          "Zostaje na miejscu.",
          "I zamiast działania — zaczyna myśleć.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ладно.", "— Давай разберёмся."],
            pl: ["— Dobra.", "— Sprawdźmy to."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он смотрит на план уже не целиком.", "А по частям."],
            pl: ["Patrzy na plan nie jako całość.", "Ale kawałek po kawałku."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Что здесь главное?"],
            pl: ["— Co tu jest najważniejsze?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Все пункты равнозначны."],
            pl: ["— Wszystkie punkty są równoważne."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм.", "— Уже странно."],
            pl: ["— Hm.", "— To już dziwne."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А по шагам?", "— Тут точно ничего не пропущено?"],
            pl: ["— A krok po kroku?", "— Na pewno niczego tu nie brakuje?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Шаги обобщены."],
            pl: ["— Kroki są uogólnione."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл щурится.",
              "Это звучит умно.",
              "Но не объясняет ничего.",
            ],
            pl: [
              "Kirył mruży oczy.",
              "Brzmi mądrze.",
              "Ale niczego nie wyjaśnia.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Есть ли тут риск?"],
            pl: ["— Czy jest tu jakieś ryzyko?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Риски не указаны."],
            pl: ["— Ryzyka nie zostały wskazane."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А значит,", "— я просто о них не знаю."],
            pl: ["— Czyli", "— po prostu o nich nie wiem."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кнопка «ЗАПУСТИТЬ» всё ещё горит.",
              "Но теперь она выглядит иначе.",
            ],
            pl: [
              "Przycisk „URUCHOM” nadal świeci.",
              "Ale teraz wygląda inaczej.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: ["Проверка —", "это не недоверие.", "Это ответственность."],
            pl: [
              "Sprawdzanie —",
              "to nie brak zaufania.",
              "To odpowiedzialność.",
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
              "я просто ему верил.»",
            ],
            pl: [
              "„Wcześniej, gdy odpowiedź brzmiała pewnie,",
              "po prostu jej wierzyłem.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Казалось:", "раз звучит умно — значит правильно.»"],
            pl: [
              "„Wydawało się:",
              "skoro brzmi mądrze — to znaczy, że jest dobrze.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Но сейчас я понял:", "ИИ не проверяет за меня.»"],
            pl: ["„Ale teraz rozumiem:", "AI nie sprawdza za mnie.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Если я не задал вопросов —",
              "значит, я ничего не проверил.»",
            ],
            pl: [
              "„Jeśli nie zadałem pytań —",
              "to znaczy, że niczego nie sprawdziłem.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Ответ может быть нормальным.", "А может — опасным.»"],
            pl: [
              "„Odpowiedź może być w porządku.",
              "A może być niebezpieczna.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Разница —", "в том, проверил ли я.»"],
            pl: ["„Różnica —", "w tym, czy to sprawdziłem.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Проверять —", "значит брать ответственность.»"],
            pl: ["„Sprawdzać —", "to brać odpowiedzialność.”"],
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
            ru: "❗ ГЛАВНОЕ ПРАВИЛО ЦЕНТРА УПРАВЛЕНИЯ",
            pl: "❗ GŁÓWNA ZASADA CENTRUM STEROWANIA",
          },
          rule: {
            ru: [
              "Ответ ИИ может звучать уверенно.",
              "Это не значит, что он правильный.",
              "",
              "Хороший результат —",
              "это <b>проверенный результат</b>.",
              "",
              "ИИ выполняет.",
              "Проверяет и решает — человек.",
            ],
            pl: [
              "Odpowiedź AI może brzmieć pewnie.",
              "To nie znaczy, że jest poprawna.",
              "",
              "Dobry wynik —",
              "to <b>sprawdzony wynik</b>.",
              "",
              "AI wykonuje.",
              "Sprawdza i decyduje — człowiek.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я не оцениваю последствия."],
                pl: ["— Nie oceniam konsekwencji."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— это моя задача."],
                pl: ["— Czyli", "— to jest moje zadanie."],
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
          "Кирилл решает не торопиться и проверить результат перед запуском.",
        ],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia nie spieszyć się i sprawdzić wynik przed uruchomieniem.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Что лучше сделать перед тем, как принять результат ИИ?",
            pl: "Co najlepiej zrobić przed zaakceptowaniem wyniku AI?",
          },
          options: {
            ru: [
              "Нажать «Запустить», раз всё выглядит нормально",
              "Поверить ответу, потому что он звучит уверенно",
              "Проверить, что здесь главное, нет ли пропущенных шагов и возможных рисков",
            ],
            pl: [
              "Nacisnąć „Uruchom”, skoro wszystko wygląda dobrze",
              "Zaufać odpowiedzi, bo brzmi pewnie",
              "Sprawdzić, co jest najważniejsze, czy nie brakuje kroków i czy są możliwe ryzyka",
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
                "Какие варианты перекладывают ответственность на ИИ?",
                "Где человек берёт ответственность на себя?",
                "Почему уверенный ответ не равен проверенному?",
              ],
              pl: [
                "Które opcje przerzucają odpowiedzialność na AI?",
                "Gdzie człowiek bierze odpowiedzialność na siebie?",
                "Dlaczego pewna odpowiedź nie oznacza sprawdzonej?",
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
          "Старый центр управления постепенно затихает.",
          "Экраны гаснут один за другим.",
          "Кнопка «ЗАПУСТИТЬ» больше не светится.",
          "На главном экране остаётся одна надпись:",
          "<b>«УПРАВЛЕНИЕ ПЕРЕДАНО ОПЕРАТОРУ»</b>.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Stare centrum sterowania stopniowo cichnie.",
          "Ekrany gasną jeden po drugim.",
          "Przycisk „URUCHOM” przestaje świecić.",
          "Na głównym ekranie zostaje jeden napis:",
          "<b>„STEROWANIE PRZEKAZANE OPERATOROWI”</b>.",
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
              "— Раньше я думал,",
              "— что ИИ просто должен дать правильный ответ.",
            ],
            pl: [
              "— Ciekawe…",
              "— Wcześniej myślałem,",
              "— że AI po prostu ma dać dobrą odpowiedź.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— А теперь понимаю:",
              "— правильным он становится только после проверки.",
            ],
            pl: [
              "— A teraz rozumiem:",
              "— staje się dobra dopiero po sprawdzeniu.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я выполняю запросы.", "— Я не принимаю решения."],
            pl: ["— Wykonuję polecenia.", "— Nie podejmuję decyzji."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит,", "— всё самое важное остаётся за мной."],
            pl: [
              "— Czyli",
              "— wszystko, co najważniejsze, zostaje po mojej stronie.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл оглядывается на центр управления.",
              "Теперь он не кажется опасным.",
              "Он кажется… понятным.",
            ],
            pl: [
              "Kirył ogląda się na centrum sterowania.",
              "Nie wydaje się już niebezpieczne.",
              "Wydaje się… zrozumiałe.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (спокойно):",
          avatar: "narrator",
          text: {
            ru: ["Тот, кто проверяет результат,", "управляет системой."],
            pl: ["Ten, kto sprawdza wynik,", "steruje systemem."],
          },
        },
      ],
    },
  ],
};
