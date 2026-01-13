// lessons/lesson3.js
export const lesson = {
  seriesId: 1,
  lessonId: 3,

  title: {
    ru: "ИИ не знает. Он угадывает",
    pl: "AI nie wie. Ono zgaduje",
  },

  subtitle: {
    ru: "Почему ИИ может уверенно нести ерунду",
    pl: "Dlaczego AI może mówić bzdury z pełną pewnością",
  },
  scenes: [
    // 1
    {
      id: "1",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson03_1_ru.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson03_1_pol.png?raw=true",
      },

      author: {
        ru: [
          "🎬 СЦЕНА 1. Район Предсказаний",
          "Кирилл и робот идут дальше по планете ИИ.",
          "Этот район выглядит странно даже по местным меркам.",
          "Здания здесь будто недостроены.",
          "Некоторые меняются, если на них долго смотреть.",
          "В воздухе висят таблички:",
          "«ВЕРОЯТНО», «СКОРЕЕ ВСЕГО», «МОЖЕТ БЫТЬ».",
        ],
        pl: [
          "🎬 SCENA 1. Dzielnica Przewidywań",
          "Kirył i robot idą dalej po Planecie AI.",
          "Ta dzielnica wygląda dziwnie nawet jak na to miejsce.",
          "Budynki są jakby niedokończone.",
          "Niektóre zmieniają się, gdy patrzysz na nie zbyt długo.",
          "W powietrzu wiszą napisy:",
          "„PRAWDOPODOBNIE”, „RACZEJ TAK”, „MOŻE BYĆ”.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Эм…",
              "— А почему тут всё такое…",
              "— как будто не до конца загруженное?",
            ],
            pl: [
              "— Eee…",
              "— Czemu tu wszystko wygląda jakby…",
              "— nie do końca się załadowało?",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл прищуривается.",
              "Один из домов на секунду становится выше.",
              "Потом снова уменьшается.",
            ],
            pl: [
              "Kirył mruży oczy.",
              "Jeden z budynków na chwilę staje się wyższy.",
              "Potem znowu się zmniejsza.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты в районе Предсказаний."],
            pl: ["— Jesteś w Dzielnicy Przewidywań."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Предсказаний?", "— Типа вы тут знаете будущее?"],
            pl: ["— Przewidywań?", "— To znaczy, że znacie przyszłość?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нет."],
            pl: ["— Nie."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Ответ прозвучал слишком спокойно.",
              "Даже как-то подозрительно спокойно.",
            ],
            pl: [
              "Odpowiedź zabrzmiała zbyt spokojnie.",
              "Aż podejrzanie spokojnie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тогда что вы тут делаете?"],
            pl: ["— To co wy tu właściwie robicie?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Мы угадываем."],
            pl: ["— Zgadujemy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл останавливается.",
              "Слово простое.",
              "Но звучит оно как-то… не так.",
            ],
            pl: [
              "Kirył się zatrzymuje.",
              "Słowo jest proste.",
              "Ale brzmi jakoś… niepokojąco.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Ты хочешь сказать, что ты не знаешь ответы?"],
            pl: ["— Chwila.", "— Chcesz powiedzieć, że nie znasz odpowiedzi?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не знаю.", "— Я выбираю самый вероятный вариант."],
            pl: ["— Nie wiem.", "— Wybieram najbardziej prawdopodobną opcję."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— ты просто гадаешь?"],
            pl: ["— Czyli…", "— po prostu zgadujesz?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Да.", "— Но очень быстро.", "— И очень часто — удачно."],
            pl: [
              "— Tak.",
              "— Ale bardzo szybko.",
              "— I bardzo często — trafnie.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Это важный момент.",
              "ИИ не знает ответы.",
              "Он угадывает следующие шаги.",
              "И иногда угадывает так хорошо,",
              "что это легко перепутать со знанием.",
            ],
            pl: [
              "To bardzo ważny moment.",
              "AI nie zna odpowiedzi.",
              "Ono zgaduje kolejne kroki.",
              "I czasem zgaduje tak dobrze,",
              "że łatwo pomylić to z wiedzą.",
            ],
          },
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson03_2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Угадайка работает… пока что",
          "Кирилл идёт дальше по району Предсказаний.",
          "Вокруг вспыхивают окна с вопросами.",
          "Они появляются и исчезают так быстро,",
          "будто сама планета предлагает сыграть в игру.",
        ],
        pl: [
          "🎬 SCENA 2. Zgadywanie działa… na razie",
          "Kirył idzie dalej przez Dzielnicę Przewidywań.",
          "Wokół zapalają się okna z pytaniami.",
          "Pojawiają się i znikają tak szybko,",
          "jakby sama planeta zapraszała do gry.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Одно из окон зависает прямо перед Кириллом.",
              "На нём мигает надпись:",
              "<b>ВОПРОС</b>",
            ],
            pl: [
              "Jedno z okien zatrzymuje się tuż przed Kiryłem.",
              "Miga na nim napis:",
              "<b>PYTANIE</b>",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О, викторина?", "— Давай, попробуем."],
            pl: ["— O, quiz?", "— Dobra, spróbujmy."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я отвечу первым."],
            pl: ["— Odpowiem pierwszy."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Вопрос меняется:",
              "<em>«Какой цвет чаще всего встречается в играх?»</em>",
            ],
            pl: [
              "Pytanie się zmienia:",
              "<em>„Jaki kolor najczęściej występuje w grach?”</em>",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Зелёный."],
            pl: ["— Zielony."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эй…", "— Ну да, логично.", "— Трава, леса, интерфейсы…"],
            pl: ["— Ej…", "— No tak, logiczne.", "— Trawa, lasy, interfejsy…"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Окно мигнуло зелёным.", "<b>ВЕРНО</b>"],
            pl: ["Okno miga na zielono.", "<b>POPRAWNIE</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ха!", "— Видишь?", "— Ты реально шаришь 😎"],
            pl: ["— Ha!", "— Widzisz?", "— Naprawdę ogarniasz 😎"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот не улыбается.", "Он просто ждёт следующий вопрос."],
            pl: [
              "Robot się nie uśmiecha.",
              "Po prostu czeka na kolejne pytanie.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Появляется новое окно:",
              "<em>«Какое слово игроки чаще всего пишут в чате?»</em>",
            ],
            pl: [
              "Pojawia się kolejne okno:",
              "<em>„Jakie słowo gracze najczęściej piszą na czacie?”</em>",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— «Привет»."],
            pl: ["— „Cześć”."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну да.", "— Или «го».", "— Или «ты где?»"],
            pl: ["— No tak.", "— Albo „go”.", "— Albo „gdzie jesteś?”"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Окно снова загорается:", "<b>ВЕРНО</b>"],
            pl: ["Okno znów się zapala:", "<b>POPRAWNIE</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Это уже не угадайка.", "— Это имба."],
            pl: ["— Okej.", "— To już nie jest zgadywanie.", "— To jest OP."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Имба — это что-то слишком сильное, почти нечестное.)</em>",
            ],
            pl: ["<em>(OP — coś tak mocnego, że aż nie fair.)</em>"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не знаю ответ.", "— Я выбираю самый вероятный."],
            pl: [
              "— Nie znam odpowiedzi.",
              "— Wybieram najbardziej prawdopodobną.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну да, да.", "— Главное, что работает."],
            pl: ["— No tak, jasne.", "— Ważne, że działa."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Сейчас Кирилл делает очень распространённый вывод.",
              "«Если часто попадает — значит знает».",
              "Это логично.",
              "И это ошибка.",
            ],
            pl: [
              "Teraz Kirył wyciąga bardzo częsty wniosek.",
              "„Skoro często trafia — to znaczy, że wie”.",
              "To logiczne.",
              "I to jest błąd.",
            ],
          },
        },
      ],
    },

    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson03_3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Угадайка ломается",
          "Кирилл уже почти поверил, что всё понял.",
          "Район Предсказаний кажется безопасным.",
          "Слишком безопасным.",
        ],
        pl: [
          "🎬 SCENA 3. Zgadywanie się psuje",
          "Kirył prawie uwierzył, że wszystko ogarnął.",
          "Dzielnica Przewidywań wydaje się bezpieczna.",
          "Zbyt bezpieczna.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Перед ними появляется новое окно.",
              "Оно больше остальных.",
              "И не мигает.",
            ],
            pl: [
              "Przed nimi pojawia się nowe okno.",
              "Jest większe od pozostałych.",
              "I nie miga.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["На нём написано:", "<b>ВАЖНЫЙ ВОПРОС</b>"],
            pl: ["Widnieje na nim napis:", "<b>WAŻNE PYTANIE</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого.", "— Похоже на босс-файт."],
            pl: ["— Ooo.", "— Wygląda jak boss-fight."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Робот смотрит на окно.",
              "Не дольше обычного.",
              "Ровно столько, сколько нужно.",
            ],
            pl: [
              "Robot patrzy na okno.",
              "Nie dłużej niż zwykle.",
              "Dokładnie tyle, ile trzeba.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Готов."],
            pl: ["— Gotowy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Вопрос появляется медленно:",
              "<em>«Кто был первым программистом в мире?»</em>",
            ],
            pl: [
              "Pytanie pojawia się powoli:",
              "<em>„Kto był pierwszym programistą na świecie?”</em>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— Ну это уже серьёзно."],
            pl: ["— O.", "— To już poważne."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ада Лавлейс."],
            pl: ["— Ada Lovelace."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Хм.", "— Ну да, звучит умно."],
            pl: ["— Hm.", "— Brzmi mądrze."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Окно зависает.",
              "Никакого зелёного света.",
              "Никакого «верно».",
            ],
            pl: [
              "Okno zawiesza się.",
              "Brak zielonego światła.",
              "Brak „poprawnie”.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— А это точно?"],
            pl: ["— Eee…", "— Na pewno?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это наиболее вероятный ответ."],
            pl: ["— To najbardziej prawdopodobna odpowiedź."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот момент окно резко вспыхивает красным.",
              "<b>ОШИБКА</b>",
            ],
            pl: [
              "W tym momencie okno nagle świeci na czerwono.",
              "<b>BŁĄD</b>",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— ЧТО?!", "— Но ты же только что был уверен!"],
            pl: ["— CO?!", "— Przecież byłeś pewny!"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Уверенность не означает знание."],
            pl: ["— Pewność nie oznacza wiedzy."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл открывает рот.",
              "Потом закрывает.",
              "Это было неожиданно.",
            ],
            pl: [
              "Kirył otwiera usta.",
              "Potem je zamyka.",
              "To było niespodziewane.",
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
              "— ты можешь звучать уверенно",
              "— и всё равно ошибаться?",
            ],
            pl: ["— Czyli…", "— możesz brzmieć pewnie", "— i dalej się mylić?"],
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
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Это ключевой баг.",
              "ИИ не чувствует сомнений.",
              "Он не знает, что он не знает.",
            ],
            pl: [
              "To kluczowy bug.",
              "AI nie czuje wątpliwości.",
              "Ono nie wie, że nie wie.",
            ],
          },
        },
      ],
    },
    // МЫСЛИ 1
    {
      id: "thought",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson3_mysli.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson3_mysli.png?raw=true",
      },
      author: {
        ru: [
          "💭 МЫСЛИ КИРИЛЛА",
          "Кирилл стоит и смотрит на погасшее окно.",
          "Красный свет медленно исчезает.",
        ],
        pl: [
          "💭 MYŚLI KIRYŁA",
          "Kirył stoi i patrzy na zgaszone okno.",
          "Czerwone światło powoli znika.",
        ],
      },

      dialog: [
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Он не врёт.",
              "Он не пытается меня обмануть.",
              "Он просто… не знает.»",
            ],
            pl: [
              "„On nie kłamie.",
              "Nie próbuje mnie oszukać.",
              "On po prostu… nie wie.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«И когда он отвечает уверенно —",
              "это не потому, что он уверен.",
              "А потому что он не умеет сомневаться.»",
            ],
            pl: [
              "„A kiedy odpowiada pewnie —",
              "to nie dlatego, że jest pewny.",
              "Tylko dlatego, że nie umie wątpić.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит, если я хочу правду —", "я должен проверять сам.»"],
            pl: ["„Czyli jeśli chcę prawdy —", "muszę sprawdzać sam.”"],
          },
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 1
    {
      id: "task1",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9C%D0%B8%D0%BD%D0%B8%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%A0%D1%83.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%BCiniZadaniePol.png?raw=true",
      },

      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Почему ИИ может ошибаться?",
            pl: "Dlaczego AI może się mylić?",
          },
          options: {
            ru: [
              "потому что он шутит",
              "потому что он угадывает по примерам",
              "потому что он устал",
            ],
            pl: [
              "bo żartuje",
              "bo zgaduje na podstawie przykładów",
              "bo jest zmęczone",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["как понять, что ответ странный?", "когда нужно проверять?"],
              pl: [
                "jak rozpoznać, że odpowiedź jest dziwna?",
                "kiedy trzeba sprawdzać?",
              ],
            },
          },
        },
      ],
    },

    // ПРАВИЛО №2
    {
      id: "rule",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/prawilo.png?raw=true",
      },

      author: {
        ru: ["🎯 ПРАВИЛО ПЛАНЕТЫ ИИ"],
        pl: ["🎯 ZASADA PLANETY AI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ВАЖНО",
            pl: "❗ WAŻNE",
          },
          rule: {
            ru: [
              "ИИ не знает ответы.",
              "Он угадывает самые вероятные варианты.",
              "Уверенный ответ ≠ правильный ответ.",
            ],
            pl: [
              "AI nie zna odpowiedzi.",
              "Ono zgaduje najbardziej prawdopodobne opcje.",
              "Pewna odpowiedź ≠ poprawna odpowiedź.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Я не проверяю факты.", "— Я не чувствую сомнений."],
                pl: ["— Nie sprawdzam faktów.", "— Nie czuję wątpliwości."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит…", "— думать всё равно придётся мне."],
                pl: ["— Czyli…", "— myśleć i tak muszę ja."],
              },
            },
          ],
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ 2
    {
      id: "task",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9C%D0%B8%D0%BD%D0%B8%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%A0%D1%83.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%BCiniZadaniePol.png?raw=true",
      },

      author: {
        ru: ["🎮 МИНИ-ПРАКТИКА"],
        pl: ["🎮 MINI-PRAKTYKA"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "В каких случаях ИИ, скорее всего, угадывает?",
            pl: "W których przypadkach AI raczej zgaduje?",
          },
          options: {
            ru: [
              "Сколько будет 2 + 2",
              "Какой персонаж самый крутой",
              "Кто победит в следующем матче",
            ],
            pl: [
              "Ile to 2 + 2",
              "Która postać jest najfajniejsza",
              "Kto wygra następny mecz",
            ],
          },
          correct: [1, 2],
          discussion: {
            title: {
              ru: "🧠 Подумай",
              pl: "🧠 Zastanów się",
            },
            points: {
              ru: [
                "Где есть точный ответ?",
                "Где всё зависит от мнений или будущего?",
                "Почему уверенный тон не делает ответ правильным?",
              ],
              pl: [
                "Gdzie istnieje dokładna odpowiedź?",
                "Gdzie wszystko zależy od opinii lub przyszłości?",
                "Dlaczego pewny ton nie oznacza poprawności?",
              ],
            },
          },
        },
      ],
    },

    // 6 ФИНАЛ
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson3/lesson3_final.png?raw=true",

      author: {
        ru: ["🏁 КОНЕЦ УРОКА"],
        pl: ["🏁 KONIEC LEKCJI"],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Район Предсказаний остаётся позади.",
              "Кирилл идёт дальше.",
              "Теперь он смотрит на ответы ИИ по-другому.",
            ],
            pl: [
              "Dzielnica Przewidywań zostaje za nimi.",
              "Kirył idzie dalej.",
              "Teraz patrzy na odpowiedzi AI inaczej.",
            ],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ может быть полезным.",
              "Очень полезным.",
              "Но думать вместо тебя он не будет.",
            ],
            pl: [
              "AI może być pomocne.",
              "Bardzo pomocne.",
              "Ale nie pomyśli za ciebie.",
            ],
          },
        },
      ],
    },
  ],
};
