// lessons/lesson2-2.js
export const lesson = {
  seriesId: 2,
  lessonId: 8,

  title: {
    ru: "Что важно, а что нет (приоритеты)",
    pl: "",
  },

  subtitle: {
    ru: "",
    pl: "",
  },
  // 🟩 СЕРИЯ 2 — УРОК 3
  scenes: [
    // 1

    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson8/lesson8_1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Слишком много всего",
          "Кирилл идёт дальше по планете ИИ.",
          "Вокруг — шумно.",
          "Окна, списки, всплывающие задачи.",
          "Всё мигает и требует внимания.",
        ],
        pl: [
          "🎬 SCENA 1. Za dużo wszystkiego",
          "Kirył idzie dalej po Planecie AI.",
          "Wokół jest głośno.",
          "Okna, listy, zadania.",
          "Wszystko miga i domaga się uwagi.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Над районом висит табличка:", "«МНОГОЗАДАЧНОСТЬ»"],
            pl: ["Nad dzielnicą wisi napis:", "„WIELOZADANIOWOŚĆ”"],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ого…", "— Тут как в браузере, когда открыто 50 вкладок."],
            pl: ["— Wow…", "— Jak w przeglądarce, gdy jest 50 kart."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Многие задачи выглядят важными."],
            pl: ["— Wiele zadań wygląda na ważne."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Выглядят — да.", "— Но ведь не все же одинаково важны?"],
            pl: [
              "— Wyglądają — tak.",
              "— Ale przecież nie wszystkie są tak samo ważne?",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Для меня — одинаково."],
            pl: ["— Dla mnie — tak."],
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
            ru: [
              "— Если ты не указал приоритеты,",
              "— я не знаю, что для тебя главное.",
            ],
            pl: [
              "— Jeśli nie podałeś priorytetów,",
              "— nie wiem, co jest dla ciebie najważniejsze.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл задумывается.", "Это звучит знакомо."],
            pl: ["Kirył się zamyśla.", "To brzmi znajomo."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Если всё важно —", "значит, на самом деле не важно ничего."],
            pl: [
              "Jeśli wszystko jest ważne —",
              "to tak naprawdę nic nie jest.",
            ],
          },
        },
      ],
    },
   
    // СЦЕНА 2. Перегруженное задание

    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson8/lesson8_2.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 2. Когда всего слишком много",
          "Кирилл останавливается посреди района.",
          "Вокруг него десятки окон с заданиями.",
          "Они всплывают, накладываются друг на друга, мигают.",
          "Каждое выглядит важным.",
          "И каждое требует внимания прямо сейчас.",
        ],
        pl: [
          "🎬 SCENA 2. Gdy wszystkiego jest za dużo",
          "Kirył zatrzymuje się na środku dzielnicy.",
          "Wokół niego dziesiątki okien z zadaniami.",
          "Pojawiają się, nakładają na siebie, migają.",
          "Każde wygląda na ważne.",
          "Każde domaga się uwagi natychmiast.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл смотрит на этот хаос и вдруг решает:",
              "— Ладно, давай попробуем.",
              "Если ИИ такой умный —",
              "пусть сам разберётся.",
            ],
            pl: [
              "Kirył patrzy na ten chaos i w końcu decyduje:",
              "— Dobra, spróbujmy.",
              "Skoro AI jest takie mądre —",
              "niech samo się połapie.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Придумай мне игру.",
              "— Чтобы была интересная.",
              "— С сюжетом.",
              "— С боями.",
              "— С прокачкой.",
              "— И чтобы не скучно.",
              "— И вообще, сделай круто.",
            ],
            pl: [
              "— Wymyśl mi grę.",
              "— Żeby była ciekawa.",
              "— Z fabułą.",
              "— Z walką.",
              "— Z rozwojem postaci.",
              "— I żeby nie była nudna.",
              "— Ogólnie — zrób fajnie.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл замолкает.",
              "Задание звучит солидно.",
              "Даже внушительно.",
              "Он уверен: сейчас получится что-то мощное.",
            ],
            pl: [
              "Kirył milknie.",
              "Polecenie brzmi poważnie.",
              "Nawet imponująco.",
              "Jest pewien, że teraz wyjdzie coś konkretnego.",
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
            ru: [
              "Вокруг становится тихо.",
              "Окна замирают.",
              "Как будто система думает.",
            ],
            pl: [
              "Wokół robi się cicho.",
              "Okna nieruchomieją.",
              "Jakby system się zastanawiał.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["А потом появляется результат."],
            pl: ["A potem pojawia się wynik."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Игра:",
              "Игрок начинает в деревне.",
              "Он может сражаться.",
              "Он может исследовать мир.",
              "Есть прокачка.",
              "Есть сюжет.",
              "Иногда происходят события.",
            ],
            pl: [
              "— Gra:",
              "Gracz zaczyna w wiosce.",
              "Może walczyć.",
              "Może eksplorować świat.",
              "Jest rozwój postaci.",
              "Jest fabuła.",
              "Czasami dzieją się wydarzenia.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Описание звучит… нормально.",
              "Не плохо.",
              "Но и не так, как Кирилл ожидал.",
              "Как будто всё есть —",
              "но ничего не цепляет.",
            ],
            pl: [
              "Opis brzmi… w porządku.",
              "Nie źle.",
              "Ale nie tak, jak Kirył się spodziewał.",
              "Jakby wszystko było —",
              "ale nic nie wciągało.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— А что тут главное?"],
            pl: ["— Eee…", "— A co tu jest najważniejsze?"],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты не указал."],
            pl: ["— Nie wskazałeś."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл чувствует знакомое раздражение.",
              "Как будто он объяснял задачу,",
              "а его поняли не так.",
            ],
            pl: [
              "Kirył czuje znajome rozdrażnienie.",
              "Jakby tłumaczył zadanie,",
              "a ktoś zrozumiał je inaczej.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ не выбирает главное.",
              "Он выполняет всё сразу.",
              "И поэтому результат получается размытым.",
            ],
            pl: [
              "AI nie wybiera tego, co najważniejsze.",
              "Robi wszystko naraz.",
              "Dlatego wynik jest rozmyty.",
            ],
          },
        },
      ],
    },
   
    // СЦЕНА 3. Главное — это главное

    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson8/lesson8_3.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 3. Главное — это главное",
          "Кирилл смотрит на результат ещё раз.",
          "Он не злится.",
          "Он пытается понять, где именно всё пошло не так.",
          "Вокруг по-прежнему много окон — но он больше не на них смотрит.",
        ],
        pl: [
          "🎬 SCENA 3. Najważniejsze to najważniejsze",
          "Kirył patrzy na wynik jeszcze raz.",
          "Nie złości się.",
          "Próbuje zrozumieć, gdzie dokładnie coś poszło nie tak.",
          "Wokół nadal jest wiele okien — ale on już na nie nie patrzy.",
        ],
      },

      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл делает шаг назад.",
              "Как будто отдаляется от шума.",
              "От лишнего.",
              "От всего, что мешает думать.",
            ],
            pl: [
              "Kirył robi krok w tył.",
              "Jakby oddalał się od hałasu.",
              "Od zbędnych rzeczy.",
              "Od wszystkiego, co przeszkadza myśleć.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди…", "— Мне правда всё это нужно?"],
            pl: ["— Chwila…", "— Czy naprawdę potrzebuję tego wszystkiego?"],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он начинает вычёркивать.",
              "Не вслух — в голове.",
              "Сюжет, бои, прокачка, события…",
              "Всё важно.",
              "Но не всё — сейчас.",
            ],
            pl: [
              "Zaczyna skreślać.",
              "Nie na głos — w myślach.",
              "Fabuła, walka, rozwój, wydarzenia…",
              "Wszystko jest ważne.",
              "Ale nie wszystko — teraz.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей.", "— Давай по-другому."],
            pl: ["— Okej.", "— Spróbujmy inaczej."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Придумай игру.",
              "— Главное: интересный сюжет.",
              "— Всё остальное — вторично.",
            ],
            pl: [
              "— Wymyśl grę.",
              "— Najważniejsze: ciekawa fabuła.",
              "— Reszta jest drugorzędna.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "В этот раз Кирилл говорит медленно.",
              "Как будто сам проверяет каждое слово.",
            ],
            pl: [
              "Tym razem Kirył mówi wolno.",
              "Jakby sam sprawdzał każde słowo.",
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
            ru: ["Шум вокруг стихает.", "Окна исчезают.", "Остаётся одно."],
            pl: ["Hałas wokół cichnie.", "Okna znikają.", "Zostaje jedno."],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Игра:",
              "Игрок попадает в мир,",
              "где каждое решение меняет историю.",
              "Сюжет — главный двигатель.",
            ],
            pl: [
              "— Gra:",
              "Gracz trafia do świata,",
              "w którym każda decyzja zmienia historię.",
              "Fabuła jest głównym napędem.",
            ],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Ответ стал короче.",
              "Но почему-то — интереснее.",
              "Как будто появился фокус.",
            ],
            pl: [
              "Odpowiedź jest krótsza.",
              "Ale jakoś — ciekawsza.",
              "Jakby pojawił się fokus.",
            ],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— О.", "— Вот теперь понятно."],
            pl: ["— O.", "— Teraz jest jasne."],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Когда ты выбираешь главное —",
              "остальное само встаёт на места.",
            ],
            pl: [
              "Gdy wybierasz to, co najważniejsze —",
              "reszta sama układa się na swoim miejscu.",
            ],
          },
        },
      ],
    },
    
    // 💭 МЫСЛИ КИРИЛЛА

    {
      id: "thought",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson8/lesson8_vysli.png?raw=true",

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
            ru: ["«Я думал, что чем больше скажу —", "тем лучше получится.»"],
            pl: [
              "„Myślałem, że im więcej powiem —",
              "tym lepszy będzie wynik.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«А вышло наоборот.", "Всё смешалось.»"],
            pl: ["„A wyszło odwrotnie.", "Wszystko się pomieszało.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«ИИ не понимает,", "что для меня главное.»"],
            pl: ["„AI nie wie,", "co jest dla mnie najważniejsze.”"],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Если я сам не выбрал главное —", "он не сможет угадать.»"],
            pl: [
              "„Jeśli sam nie wybiorę tego, co najważniejsze —",
              "on nie będzie w stanie zgadnąć.”",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Мысли Кирилла:",
          avatar: "kirill",
          text: {
            ru: ["«Значит, сначала — цель.", "Потом — детали.»"],
            pl: ["„Czyli najpierw — cel.", "Potem — szczegóły.”"],
          },
        },
      ],
    },
    
    // 🎯 ПРАВИЛО УРОКА

    {
      id: "rule",
       image: {
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/prawilo.png?raw=true",
      },
      author: {
        ru: ["🎯 ПРАВИЛО УРОКА"],
        pl: ["🎯 ZASADA LEKCJI"],
      },

      dialog: [
        {
          type: "rule",
          title: {
            ru: "❗ ГЛАВНОЕ ПРАВИЛО",
            pl: "❗ NAJWAŻNIEJSZA ZASADA",
          },
          rule: {
            ru: [
              "ИИ не понимает, что для тебя главное.",
              "Если ты не выбрал приоритет —",
              "он попытается сделать всё сразу.",
              "Поэтому:",
              "сначала цель — потом детали.",
            ],
            pl: [
              "AI nie wie, co jest dla ciebie najważniejsze.",
              "Jeśli nie wybierzesz priorytetu —",
              "spróbuje zrobić wszystko naraz.",
              "Dlatego:",
              "najpierw cel — potem szczegóły.",
            ],
          },
          dialog: [
            {
              speaker: "AI robot",
              avatar: "robot",
              text: {
                ru: ["— Когда всё важно,", "— результат становится размытым."],
                pl: [
                  "— Gdy wszystko jest ważne,",
                  "— wynik staje się rozmyty.",
                ],
              },
            },
            {
              speaker: "Kyrylo",
              avatar: "kirill",
              text: {
                ru: ["— Значит,", "— главное нужно сказать первым."],
                pl: [
                  "— Czyli",
                  "— to, co najważniejsze, trzeba powiedzieć jako pierwsze.",
                ],
              },
            },
          ],
        },
      ],
    },
    
    // 🎮 ПРАКТИКА — приоритеты

    {
      id: "task",
      image:{
        ru: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%9C%D0%B8%D0%BD%D0%B8%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%D0%A0%D1%83.png?raw=true",
        pl: "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/%D0%BCiniZadaniePol.png?raw=true",
      },
      author: {
        ru: ["🎮 ПРАКТИКА", "Кирилл решает проверить, понял ли он правило."],
        pl: [
          "🎮 PRAKTYKA",
          "Kirył postanawia sprawdzić, czy dobrze zrozumiał zasadę.",
        ],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какое задание поможет ИИ сделать лучший результат?",
            pl: "Które polecenie pomoże AI zrobić najlepszy wynik?",
          },
          options: {
            ru: [
              "Придумай игру, чтобы было интересно, с сюжетом, боями, прокачкой и чтобы не скучно",
              "Придумай игру. Главное — интересный сюжет. Остальное можно добавить позже",
              "Придумай всё, что считаешь нужным",
            ],
            pl: [
              "Wymyśl grę, żeby była ciekawa, z fabułą, walką, rozwojem i żeby nie była nudna",
              "Wymyśl grę. Najważniejsze — ciekawa fabuła. Resztę można dodać później",
              "Wymyśl wszystko, co uznasz za potrzebne",
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
                "Где указано главное?",
                "Что можно добавить потом?",
                "Почему второй вариант понятнее для ИИ?",
              ],
              pl: [
                "Gdzie wskazano to, co najważniejsze?",
                "Co można dodać później?",
                "Dlaczego druga opcja jest jaśniejsza dla AI?",
              ],
            },
          },
        },
      ],
    },
    
    // 🏁 ФИНАЛ УРОКА

    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson8/lesson8_final.png?raw=true",

      author: {
        ru: [
          "🏁 ФИНАЛ УРОКА",
          "Район Многозадачности остаётся позади.",
          "Шум стихает.",
          "Мыслей становится меньше — и они становятся чётче.",
        ],
        pl: [
          "🏁 FINAŁ LEKCJI",
          "Dzielnica Wielozadaniowości zostaje za nimi.",
          "Hałas cichnie.",
          "Myśli jest mniej — i są wyraźniejsze.",
        ],
      },

      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Странно.", "— Я сказал меньше,", "— а получил лучше."],
            pl: [
              "— Dziwne.",
              "— Powiedziałem mniej,",
              "— a dostałem lepszy wynik.",
            ],
          },
        },

        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Ты дал фокус."],
            pl: ["— Dałeś fokus."],
          },
        },

        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Значит,", "— главное — выбрать цель."],
            pl: ["— Czyli", "— najpierw trzeba wybrać cel."],
          },
        },

        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл идёт дальше.",
              "Теперь он смотрит не на всё сразу.",
              "Он ищет главное.",
            ],
            pl: [
              "Kirył idzie dalej.",
              "Nie patrzy już na wszystko naraz.",
              "Szuka tego, co najważniejsze.",
            ],
          },
        },

        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Тот, кто умеет выбирать главное,", "управляет результатом."],
            pl: [
              "Ten, kto potrafi wybrać to, co najważniejsze,",
              "kontroluje wynik.",
            ],
          },
        },
      ],
    },
  ],
};
