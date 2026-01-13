// lessons/lesson5.js
export const lesson = {
  seriesId: 1,
  lessonId: 5,

  title: {
    ru: "Главная ошибка людей при общении с ИИ",
    pl: "AI pomaga, ale nie gra za ciebie",
  },

  subtitle: {
    ru: "",
    pl: "",
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson5/lesson5_1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Район Человечности",
          "Кирилл и робот подходят к новому району.",
          "Он выглядит… уютно.",
          "Тут мягкий свет.",
          "Тёплые цвета.",
          "Круглые формы.",
          "И почему-то сразу хочется говорить потише.",
        ],
        pl: [
          "🎬 SCENA 1. Dzielnica Człowieczeństwa",
          "Kirył i robot zbliżają się do nowej dzielnicy.",
          "Wygląda ona… przytulnie.",
          "Miękkie światło.",
          "Ciepłe kolory.",
          "Zaokrąglone kształty.",
          "I jakoś od razu chce się mówić ciszej.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["На входе висит табличка:", "<b>ОН ТЕБЯ ПОЙМЁТ</b>"],
            pl: ["Przy wejściu wisi tabliczka:", "<b>ON CIĘ ZROZUMIE</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— Звучит обнадёживающе."],
            pl: ["— O.", "— Brzmi obiecująco."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Внутри района — скамейки.",
              "Окна чатов выглядят как диалоги в мессенджере.",
              "Сообщения медленно появляются и исчезают.",
            ],
            pl: [
              "W środku dzielnicy stoją ławki.",
              "Okna czatu wyglądają jak rozmowy w komunikatorze.",
              "Wiadomości powoli się pojawiają i znikają.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Тут как будто можно просто…", "— поговорить."],
            pl: ["— Jakby tu można było po prostu…", "— pogadać."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Люди часто так думают."],
            pl: ["— Ludzie często tak myślą."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А что?", "— Разве нельзя?"],
            pl: ["— A co?", "— Nie można?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот делает паузу.", "Редкую."],
            pl: ["Robot robi pauzę.", "Rzadką."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Можно говорить.", "— Но нельзя ожидать понимания."],
            pl: ["— Można mówić.", "— Ale nie można oczekiwać zrozumienia."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— Это сейчас было как-то жёстко."],
            pl: ["— Eee…", "— To zabrzmiało trochę ostro."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "И вот она —",
              "самая частая ошибка людей.",
              "Они ждут от ИИ",
              "человеческого понимания.",
            ],
            pl: [
              "I oto ona —",
              "najczęstsza ludzka pomyłka.",
              "Ludzie oczekują od AI",
              "ludzkiego zrozumienia.",
            ],
          },
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson5/lesson5_2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. «Ну ты же понял…»",
          "Район Человечности и правда располагает к разговору.",
          "Кирилл садится на скамейку.",
          "Робот стоит рядом.",
          "Всё выглядит так, будто сейчас будет обычный диалог.",
        ],
        pl: [
          "🎬 SCENA 2. „No przecież zrozumiałeś…”",
          "Dzielnica Człowieczeństwa naprawdę zachęca do rozmowy.",
          "Kirył siada na ławce.",
          "Robot stoi obok.",
          "Wszystko wygląda jak zwykła rozmowa.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Слушай.", "— Мне нужен нормальный совет."],
            pl: ["— Słuchaj.", "— Potrzebuję normalnej porady."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Опиши задачу."],
            pl: ["— Opisz zadanie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Да всё просто.",
              "— Мне нужно, чтобы всё было нормально.",
              "— Ну, по-человечески.",
            ],
            pl: [
              "— To proste.",
              "— Chcę, żeby wszystko było normalnie.",
              "— No, po ludzku.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл разводит руками.",
              "Как будто говорит:",
              "«Ну ты же понял».",
            ],
            pl: [
              "Kirył rozkłada ręce.",
              "Jakby mówił:",
              "„No przecież zrozumiałeś”.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Поясни слово «нормально»."],
            pl: ["— Wyjaśnij słowo „normalnie”."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну…", "— Как обычно.", "— Чтобы было ок."],
            pl: ["— No…", "— Jak zwykle.", "— Żeby było okej."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Где-то в районе тихо скрипит.",
              "Как будто система задумалась.",
            ],
            pl: [
              "Gdzieś w dzielnicy coś cicho skrzypi.",
              "Jakby system się zastanawiał.",
            ],
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
            ru: ["Перед Кириллом появляется окно.", "В нём — длинный список."],
            pl: ["Przed Kiryłem pojawia się okno.", "W środku — długa lista."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<b>НОРМАЛЬНО:</b>",
              "— соблюдать правила",
              "— быть вежливым",
              "— не выделяться",
              "— не рисковать",
              "— делать как все",
            ],
            pl: [
              "<b>NORMALNIE:</b>",
              "— przestrzegać zasad",
              "— być uprzejmym",
              "— nie wyróżniać się",
              "— nie ryzykować",
              "— robić jak wszyscy",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Чего?", "— Я вообще не это имел в виду."],
            pl: ["— Co?", "— W ogóle nie o to mi chodziło."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты не указал другое значение."],
            pl: ["— Nie wskazałeś innego znaczenia."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да блин!", "— Любой человек бы понял!"],
            pl: ["— No kurczę!", "— Każdy człowiek by zrozumiał!"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В районе становится чуть холоднее.",
              "Уют как будто трескается.",
            ],
            pl: [
              "W dzielnicy robi się trochę chłodniej.",
              "Przytulność jakby pęka.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не человек."],
            pl: ["— Nie jestem człowiekiem."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Вот она.",
              "Главная ошибка.",
              "Говорить с ИИ,",
              "как с человеком.",
            ],
            pl: [
              "Właśnie ona.",
              "Główna pomyłka.",
              "Rozmawiać z AI",
              "jak z człowiekiem.",
            ],
          },
        },
      ],
    },
    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson5/lesson5_3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. «Он и не должен был понимать»",
          "Кирилл сидит молча.",
          "Список всё ещё висит перед ним.",
          "Слово «НОРМАЛЬНО» светится особенно ярко.",
        ],
        pl: [
          "🎬 SCENA 3. „On nie musiał tego rozumieć”",
          "Kirył siedzi w ciszy.",
          "Lista wciąż wisi przed nim.",
          "Słowo „NORMALNIE” świeci się szczególnie jasno.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— Это как-то…", "— неприятно."],
            pl: ["— …", "— To jest jakieś…", "— nieprzyjemne."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он отводит взгляд.", "Как будто обиделся."],
            pl: ["Odwraca wzrok.", "Jakby się obraził."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Я же не специально.", "— Я просто хотел, чтобы ты понял."],
            pl: [
              "— Nie zrobiłem tego specjalnie.",
              "— Chciałem tylko, żebyś zrozumiał.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не понимаю желания.", "— Только инструкции."],
            pl: ["— Nie rozumiem intencji.", "— Tylko instrukcje."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот не оправдывается.", "Не спорит.", "Не защищается."],
            pl: ["Robot się nie tłumaczy.", "Nie kłóci się.", "Nie broni się."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— проблема была не в тебе?"],
            pl: ["— Czyli…", "— problem nie był w tobie?"],
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
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл медленно выдыхает.",
              "Злость уходит.",
              "Остаётся мысль.",
            ],
            pl: [
              "Kirył powoli wypuszcza powietrze.",
              "Złość znika.",
              "Zostaje myśl.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ты не обязан меня понимать.", "— Это я должен объяснять."],
            pl: ["— Nie musisz mnie rozumieć.", "— To ja muszę tłumaczyć."],
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
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот момент район снова становится тёплым.",
              "Мягкий свет возвращается.",
            ],
            pl: [
              "W tym momencie dzielnica znów staje się ciepła.",
              "Miękkie światło wraca.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Это момент взросления.",
              "Кирилл перестал ждать понимания.",
              "И начал брать ответственность.",
            ],
            pl: [
              "To moment dorastania.",
              "Kirył przestał oczekiwać zrozumienia.",
              "I zaczął brać odpowiedzialność.",
            ],
          },
        },
      ],
    },
    // МЫСЛИ 1
    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson5/lesson5_nysli.png?raw=true",

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
            ru: ["«Я говорил с ним,", "как с человеком.»"],
            pl: ["„Rozmawiałem z nim,", "jak z człowiekiem.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: [
              "«Ждал, что он догадается.",
              "Поймёт настроение.",
              "Поймёт, что я имею в виду.»",
            ],
            pl: [
              "„Liczyłem, że się domyśli.",
              "Zrozumie nastrój.",
              "Zrozumie, co mam na myśli.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Но он не человек.", "Он не обязан понимать намёки.»"],
            pl: ["„Ale on nie jest człowiekiem.", "Nie musi rozumieć aluzji.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Если хочу нормальный результат —", "нужно говорить точно.»"],
            pl: ["„Jeśli chcę dobry efekt —", "muszę mówić precyzyjnie.”"],
          },
        },
      ],
    },

    // ПРАВИЛО ПЛАНЕТЫ
    {
      id: "rule",
      image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/prawilo.png?raw=true",
      },

      author: {
        ru: ["🎯 ГЛАВНОЕ ПРАВИЛО ПЛАНЕТЫ ИИ"],
        pl: ["🎯 GŁÓWNA ZASADA PLANETY AI"],
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
              "ИИ — не человек.",
              "Он не понимает намёков.",
              "Не чувствует эмоций.",
              "Не догадывается.",
              "",
              "Он делает только то,",
              "что ты <b>точно</b> объяснил.",
            ],
            pl: [
              "AI nie jest człowiekiem.",
              "Nie rozumie aluzji.",
              "Nie czuje emocji.",
              "Nie domyśla się.",
              "",
              "Robi tylko to,",
              "co mu <b>dokładnie</b> wyjaśnisz.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: [
                  "— Я не понимаю «по-человечески».",
                  "— Я понимаю инструкции.",
                ],
                pl: ["— Nie rozumiem „po ludzku”.", "— Rozumiem instrukcje."],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: [
                  "— Значит,",
                  "— если что-то пошло не так…",
                  "— это повод переписать запрос.",
                ],
                pl: [
                  "— Czyli",
                  "— jeśli coś poszło nie tak…",
                  "— to znak, że trzeba zmienić polecenie.",
                ],
              },
            },
          ],
        },
      ],
    },

    // МИНИ-ЗАДАНИЕ
    {
      id: "task",
      image:{
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9C%D0%B8%D0%BD%D0%B8%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%A0%D1%83.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%BCiniZadaniePol.png?raw=true",
      },

      author: {
        ru: [
          "🎮 МИНИ-ПРАКТИКА",
          "Кирилл смотрит на экран.",
          "Теперь очередь за тобой.",
        ],
        pl: ["🎮 MINI-ZADANIE", "Kirył patrzy na ekran.", "Teraz twoja kolej."],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какой запрос лучше задать ИИ?",
            pl: "Jakie polecenie lepiej dać AI?",
          },
          options: {
            ru: [
              "Сделай нормально",
              "Сделай как обычно",
              "Напиши короткий текст из 3 предложений про дракона для игры",
            ],
            pl: [
              "Zrób to normalnie",
              "Zrób jak zwykle",
              "Napisz krótki tekst z 3 zdań o smoku do gry",
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
                "Какие слова здесь «человеческие» и непонятные для ИИ?",
                "Почему третий вариант лучше?",
                "Что здесь конкретного?",
              ],
              pl: [
                "Które słowa są tu „ludzkie” i niejasne dla AI?",
                "Dlaczego trzeci wariant jest lepszy?",
                "Co tutaj jest konkretne?",
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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson5/lesson5_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ СЕРИИ 1",
          "Планета ИИ медленно затихает.",
          "Районы, которые Кирилл прошёл, остаются позади.",
          "Теперь они выглядят понятнее.",
          "И уже не такими пугающими.",
        ],
        pl: [
          "🏁 FINAŁ SERII 1",
          "Planeta AI powoli cichnie.",
          "Dzielnice, które Kirył przeszedł, zostają za nim.",
          "Teraz wyglądają bardziej zrozumiale.",
          "I już nie tak strasznie.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл стоит на возвышении.",
              "Перед ним — дорога дальше.",
              "На горизонте видны новые зоны.",
              "Они выглядят сложнее.",
            ],
            pl: [
              "Kirył stoi na wzniesieniu.",
              "Przed nim — droga dalej.",
              "Na horyzoncie widać nowe strefy.",
              "Wyglądają na trudniejsze.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Знаешь…", "— Раньше я думал, что ИИ просто тупит."],
            pl: ["— Wiesz…", "— Wcześniej myślałem, że AI po prostu głupieje."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— А теперь понимаю:",
              "— он делает ровно то,",
              "— что я ему сказал.",
            ],
            pl: [
              "— A teraz rozumiem:",
              "— robi dokładnie to,",
              "— co mu powiedziałem.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Это верный вывод."],
            pl: ["— To poprawny wniosek."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл кивает.", "Не победно.", "Спокойно."],
            pl: ["Kirył kiwa głową.", "Nie zwycięsko.", "Spokojnie."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Значит,",
              "— если что-то идёт не так…",
              "— надо не злиться.",
              "— А думать.",
            ],
            pl: [
              "— Czyli,",
              "— jeśli coś idzie nie tak…",
              "— nie trzeba się złościć.",
              "— Trzeba myśleć.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты готов к следующему уровню."],
            pl: ["— Jesteś gotowy na następny poziom."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Перед Кириллом появляется надпись:",
              "<b>УРОВЕНЬ ПРОЙДЕН</b>",
            ],
            pl: ["Przed Kiryłem pojawia się napis:", "<b>POZIOM UKOŃCZONY</b>"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ха.", "— А дальше будет сложнее, да?"],
            pl: ["— Ha.", "— Dalej będzie trudniej, co?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Намного."],
            pl: ["— Znacznie."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл прошёл первый уровень.",
              "Он больше не ждёт магии.",
              "Он начал понимать систему.",
              "",
              "А это и есть",
              "<b>настоящий старт</b>.",
            ],
            pl: [
              "Kirył ukończył pierwszy poziom.",
              "Nie czeka już na magię.",
              "Zaczyna rozumieć system.",
              "",
              "A to jest właśnie",
              "<b>prawdziwy start</b>.",
            ],
          },
        },
      ],
    },
  ],
};
