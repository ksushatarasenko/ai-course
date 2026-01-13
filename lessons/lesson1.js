// lessons/lesson1.js
export const lesson = {
  seriesId: 1, // ← серия
  lessonId: 1, // ← номер урока в серии  id: 1,
  title: {
    ru: "Почему ИИ ведёт себя странно?",
    pl: "Dlaczego AI zachowuje się dziwnie?",
  },
  subtitle: {
    ru: "Кирилл узнаёт, что ИИ понимает всё буквально",
    pl: "Kirył dowiaduje się, że AI rozumie wszystko dosłownie",
  },

  scenes: [
    {
      id: "1",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Обычный день Кирилла",
          "Кирилл сидит дома.",
          "Открыт компьютер. На экране — игра.",
          "Что-то между Minecraft и Roblox: кубы, мобы, кнопки, меню.",
          "Он уже минут десять бегал по одному и тому же месту.",
          "И решил пообщаться с ИИ",
        ],
        pl: [
          "🎬 SCENA 1. Zwykły dzień Kiryła",
          "Kirill siedział w domu przed komputerem.",
          "Komputer jest włączony. Na ekranie — gra.",
          "Coś pomiędzy <b>Minecraftem a Robloxem</b>: bloki, moby, menu.",
          "Od dobrych dziesięciu minut kręcił się w tym samym miejscu.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "- Ну давай… придумай мне нормальный квест.Он немного     подумал и добавил:",
              "- Типа сложный, с боссом! Чтобы было не скучно.",
            ],
            pl: [
              "- No dobra… ",
              "— Wymyśl mi normalny quest.",
              "— Taki trudny.",
              "— Z bossem.",
              "— Żeby nie było nudno.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл нажал Enter и откинулся на спинку стула.",
              "Внутри было чувство: <em>«Ну сейчас-то ты обязан выдать что-то имбовое».</em>",
              "На экране появился ответ.",
            ],
            pl: [
              "Nacisnął Enter i odchylił się na krześle.",
              "W głowie miał jedno: <em>„No teraz to musi być coś OP.</em>”",
              "Na ekranie pojawiła się odpowiedź.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: "- Квест: найди 3 яблока.",
            pl: "- Zadanie: znajdź 3 jabłka.",
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл замер."],
            pl: ["Kirill zamarł."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["- ЧЕГО 😐 Я же сказал нормальный квест!"],
            pl: ["- CO 😐 Przecież prosiłem o normalne zadanie!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он наклонился ближе к экрану. Проверил, не залагал ли комп."],
            pl: [
              "Pochylił się bliżej monitora.",
              "Sprawdził, czy komputer się nie zbugował.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Это что сейчас было?",
              "— Это даже не квест, это <b>туториал для младенцев.</b>",
            ],
            pl: [
              "— Serio?",
              "— Co to w ogóle jest?",
              "— To nawet nie jest quest, to <b>tutorial dla noobów</b>.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Туториал — это когда игра объясняет самые-самые базовые вещи.)</em>",
              "Кирилл фыркнул.",
            ],
            pl: [
              "<em>(Tutorial — początek gry, gdzie wszystko jest super proste.)</em>",
              "Kirill prychnął.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл начал злится.", "Пробует ещё раз."],
            pl: ["Kirył się złości.", "Próbuje jeszcze raz."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "- Ладно, окей. Попробуем ещё раз. ",
              "— Придумай <b>реально крутой</b> квест!",
            ],
            pl: ["— Dobra, jeszcze raz.", "— Wymyśl mega fajny quest!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Ответ появился почти сразу."],
            pl: ["Odpowiedź pojawiła się natychmiast."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["- Квест: пройди по дороге и поговори с NPC."],
            pl: ["- Quest: idź drogą i porozmawiaj z NPC."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл медленно моргнул."],
            pl: ["Kirill mrugnął powoli."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— Ты сейчас серьёзно?", "— Да ты издеваешься?!"],
            pl: ["— …", "— Ty to mówisz serio?", "— Żartujesz sobie?!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(NPC — персонаж в игре, которым управляет сама игра, а не человек. Обычно они стоят и говорят одно и то же.)</em>",
              "Кирилл откинулся назад.",
            ],
            pl: [
              "<em>(NPC — postać w grze sterowana przez grę, a nie przez gracza.)</em>",
              "Kirill opadł na krzesło.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да ты издеваешься?!", "— Это какой-то кринж."],
            pl: ["— …", "— Żartujesz sobie?!", "— To jest totalny cringe."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(Кринж — это когда что-то настолько неловкое или странное, что хочется закрыть лицо рукой.)</em>",
              "Он резко хлопнул по столу.",
            ],
            pl: [
              "<em>(Cringe — coś tak dziwnego lub żenującego, że aż boli.)</em>",
              "Uderzył dłonią w biurko.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Я же нормально написал!", "— Любой человек бы понял!"],
            pl: [
              "— Przecież napisałem normalnie!",
              "— Każdy człowiek by ogarnął!",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран тихо светился.", "ИИ молчал."],
            pl: ["Ekran świecił spokojnie.", "AI milczało."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "- Кирилл пока этого не знает, но он только что сделал первую классическую ошибку на планете ИИ.",
              "И сейчас будет баг.",
            ],
            pl: [
              "Kirill jeszcze o tym nie wie, ale właśnie popełnił <b>pierwszy klasyczny błąd</b> na Planecie AI.",
              "I za chwilę pojawi się bug.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран вдруг мигнул.", "Потом ещё раз.", "Комп завис."],
            pl: ["Ekran zamigał.", "Komputer się zawiesił."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эй, эй, эй…", "— Только не сейчас!"],
            pl: ["— Ej, ej, ej…", "— Tylko nie teraz!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран ярко вспыхнул — и Кирилла словно потянуло внутрь."],
            pl: ["Światło rozbłysło — i Kirill wpadł prosto do środka."],
          },
        },
      ],
    },
    // 2
    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_2.png?raw=true",

      author: {
        ru: [
          "💥 СЦЕНА 2. БАГ ВСЕЛЕННОЙ",
          "Экран начинает мигать.",
          "Компьютер зависает.",
          "Яркая вспышка ударила в глаза.",
          "Вжух — и Кирилла засасывает в экран.",
        ],
        pl: [
          "💥 SCENA 2. BŁĄD WSZECHŚWIATA",
          "Ekran zaczyna migać.",
          "Komputer się zawiesza.",
          "Jasny błysk uderzył Kirilla w oczy.",
          "Wziuu — i Kiryła zostaje wciągnięty do ekranu.",
        ],
      },
      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Кирилл почувствовал, будто его:",
              "— сначала <b>залагало</b>,",
              "— потом <b>выкинуло из игры</b>,",
              "— а потом резко <b>загрузило в новую локацию</b>.",
              "Он упал на что-то твёрдое.",
            ],
            pl: [
              "Miał wrażenie, że:",
              "— najpierw złapał <b>laga</b>,",
              "— potem wyrzuciło go z gry,",
              "— a potem nagle załadowało do nowej lokacji.",
              "Upadł na coś twardego.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ай…", "— Это что сейчас было?"],
            pl: ["— Au…", "— Co to było?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он встал и огляделся.",
              "Мира, который он знал, больше не было.",
              "Вместо комнаты — пиксельное небо.",
              "Вместо пола — сетка из светящихся линий.",
              "Вокруг в воздухе висели: окна чата, кнопки, иконки, курсоры.",
            ],
            pl: [
              "Podniósł się i rozejrzał.",
              "Jego pokój zniknął.",
              "Zamiast niego — pikselowe niebo.",
              "Zamiast podłogi — świecąca siatka.",
              "W powietrzu wisiały: okna czatu, przyciski, ikony, kursory.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Некоторые мигали.",
              "Некоторые зависли.",
              "Некоторые выглядели… сломанными.",
            ],
            pl: [
              "Niektóre migały.",
              "Niektóre się zawiesiły.",
              "Niektóre wyglądały… źle.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Окей…",
              "— Либо я сплю,",
              "— либо это самый жёсткий баг в моей жизни.",
            ],
            pl: [
              "— Okej…",
              "— Albo śnię,",
              "— albo to największy bug w moim życiu.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Он осторожно сделал шаг.",
              "Под ногами что-то щёлкнуло, и в воздухе появилось сообщение:",
              "<b>SYSTEM: Добро пожаловать.</b>",
            ],
            pl: [
              "Zrobił krok do przodu.",
              "Klik.",
              "W powietrzu pojawił się napis:",
              "<b>SYSTEM: Witaj.</b>",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Эм…", "— Куда именно?"],
            pl: ["— Eee…", "— Gdzie dokładnie?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Ответа не было."],
            pl: ["Brak odpowiedzi."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Если бы это была игра,",
              "Кирилл только что прошёл <b>точку невозврата.</b>",
              "Назад — нельзя.",
              "Зато дальше будет интересно.",
            ],
            pl: [
              "Gdyby to była gra,",
              "Kirill właśnie minął <b>punkt bez powrotu</b>.",
              "Cofnąć się nie da.",
              "Ale dalej robi się ciekawie.",
            ],
          },
        },
      ],
    },
    // 3
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_3.png?raw=true",

      author: {
        ru: [
          "🌍 СЦЕНА 3. Планета ИИ",
          "Кирилл шёл вперёд.",
          "Каждый шаг сопровождался тихими звуками —",
          "как будто система что-то пересчитывала.",
        ],
        pl: [
          "🌍 SCENA 3. Planeta AI",
          "Kirill szedł dalej.",
          "Każdy krok brzmiał tak, jakby system coś liczył.",
        ],
      },
      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Вдруг сбоку послышалось жужжание.",
              "К нему подъехал робот 🤖",
              "Немного квадратный. Немного смешной.",
              "Как будто его собрали из кубиков и инструкций.",
            ],
            pl: [
              "Nagle z boku rozległo się ciche brzęczenie.",
              "Podjechał do niego robot 🤖",
              "Trochę kwadratowy. Trochę zabawny.",
              "Jakby zbudowany z bloków i instrukcji.",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Привет! Ты Кирилл?"],
            pl: ["— Cześć! Ty jesteś Kirył?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл вздрогнул."],
            pl: ["Kirill podskoczył."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— АА—", "— Ты кто?!"],
            pl: ["— Aaa!", "— Kim ty jesteś?!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот наклонил голову."],
            pl: ["Robot przechylił głowę."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я ИИ-Робот Помощник версии 0.9.1.", "— Рад знакомству."],
            pl: [
              "— Jestem Robotem-Pomocnikiem AI w wersji 0.9.1.",
              "— Miło mi cię poznać, Kirill.",
              "",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Откуда ты знаешь моё имя?"],
            pl: ["— Skąd znasz moje imię?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Оно было в запросе."],
            pl: ["— Było w zapytaniu."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— В каком ещё запросе?"],
            pl: ["— Jakim zapytaniu?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— В том, где ты просил «нормальный квест»."],
            pl: ["— Tym, w którym prosiłeś o „normalny quest”."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл замер."],
            pl: ["Kirill zamarł."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— Так это ты был?"],
            pl: ["— …", "— To ty?"],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А это…", "— Это что вообще за место?"],
            pl: ["— A to miejsce…", "— Co to w ogóle jest?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Робот сделал жест рукой.",
              "Вокруг вспыхнули надписи:",
              "<b>ДАННЫЕ</b>",
              "<b>ЗАПРОСЫ</b>",
              "<b>ОТВЕТЫ</b>",
              "<b>ОШИБКИ</b>",
            ],
            pl: [
              "Robot machnął ręką.",
              "Wokół pojawiły się napisy:",
              "<b>DANE</b>",
              "<b>ZAPYTANIA</b>",
              "<b>ODPOWIEDZI</b>",
              "<b>BŁĘDY</b>",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Добро пожаловать на Планету ИИ."],
            pl: ["— Witaj na Planecie AI."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— То есть…", "— Я внутри искусственного интеллекта?"],
            pl: ["— Czyli…", "— Jestem w środku sztucznej inteligencji?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Примерно."],
            pl: ["— Mniej więcej."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Примерно?!"],
            pl: ["— „Mniej więcej”?!"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Людям так проще понять."],
            pl: ["— Ludziom łatwiej to tak przyjąć."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Офигеть…"],
            pl: ["— Niezłe…"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он посмотрел на робота внимательнее."],
            pl: ["Kirill spojrzał na robota uważniej."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Тогда у меня к тебе вопрос.",
              "— Почему ты делаешь такие <b>убогие квесты</b>?",
            ],
            pl: [
              "— To mam pytanie.",
              "— Czemu robisz takie <b>słabe questy</b>?",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот моргнул."],
            pl: ["Robot mrugnął."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Поясни."],
            pl: ["— Wyjaśnij."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ну типа…",
              "— яблоки.",
              "— дорога.",
              "— NPC.",
              "— Это же не квест, это <b>дно</b>.",
            ],
            pl: [
              "— No wiesz…",
              "— jabłka.",
              "— droga.",
              "— NPC.",
              "— To nie quest, to totalne <b>dno</b>.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "<em>(«Дно» — так говорят, когда что-то совсем плохое и разочаровывающее.)</em>",
              "Робот спокойно ответил:",
            ],
            pl: ["Robot odpowiedział spokojnie:"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я сделал то, что ты написал."],
            pl: ["— Zrobiłem dokładnie to, co napisałeś."],
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
            ru: ["— Ты написал «квест».", "— Я сделал квест."],
            pl: ["— Napisałeś „quest”.", "— Zrobiłem quest."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Но любой нормальный человек понял бы, что я имел в виду!"],
            pl: ["— Każdy normalny człowiek by ogarnął, o co mi chodzi!"],
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
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он сказал это без обиды.", "Без злости.", "Как факт."],
            pl: ["Powiedział to bez emocji."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я не понимаю «нормально».",
              "— Я понимаю только то, что написано.",
            ],
            pl: [
              "— Nie rozumiem słowa „normalnie”.",
              "— Rozumiem tylko to, co jest napisane.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл открыл рот…", "и закрыл."],
            pl: ["Kirill chciał coś powiedzieć… ale zamilkł."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Вот он.", "Первый настоящий конфликт."],
            pl: ["I oto on.", "Pierwszy prawdziwy konflikt."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Человек думает, что его <b>поняли</b>.",
              "ИИ думает, что всё сделал <b>правильно</b>.",
              "И оба искренне удивлены.",
            ],
            pl: [
              "Człowiek myśli, że został <b>zrozumiany</b>.",
              "AI myśli, że zrobiło wszystko <b>poprawnie</b>.",
              "I obaj są szczerze zdziwieni.",
            ],
          },
        },
      ],
    },
    // 4
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_4.png?raw=true",

      author: {
        ru: ["😡 СЦЕНА 4. Кирилл злится"],
        pl: ["😡 SCENA 4. Kirył się złości"],
      },
      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл резко сжал кулаки."],
            pl: ["Kirill zacisnął pięści."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Да блин!", "— Я же <b>старался</b> нормально написать!"],
            pl: ["— No nie…", "— Przecież napisałem normalnie!"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Он начал ходить туда-сюда."],
            pl: ["Chodził w kółko."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Любой человек понял бы!",
              "— Даже мой младший брат понял бы!",
            ],
            pl: [
              "— Każdy człowiek by to zrozumiał!",
              "— Nawet mój młodszy brat by to zrozumiał!",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "Робот смотрел спокойно.",
              "Слишком спокойно — и это бесило ещё сильнее.",
            ],
            pl: ["Robot patrzył spokojnie.", "Za spokojnie.,"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Я не человек.", "— Я не понимаю «нормально»."],
            pl: [
              "— Nie jestem człowiekiem.",
              "— Nie rozumiem, co znaczy „normalnie”.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Ну супер.", "— Значит, ты тупой."],
            pl: ["— No super.", "— Czyli jesteś głupi."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот моргнул."],
            pl: ["Robot mrugnął."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я не тупой.",
              "— Я быстрый.",
              "— Но я не умею догадываться, как человек.",
            ],
            pl: [
              "— Nie jestem głupi.",
              "— Jestem szybki.",
              "— Ale nie potrafię się domyślać jak człowiek.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл остановился."],
            pl: ["Kirill zatrzymał się."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Иногда правда звучит особенно раздражающе.",
              "Особенно когда она спокойная.",
            ],
            pl: ["Prawda bywa najbardziej wkurzająca,", "kiedy jest spokojna."],
          },
        },
      ],
    },
    // 5
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_5.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },
      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл глубоко выдохнул."],
            pl: ["Kirill głęboko odetchnął."],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryla:",
          text: {
            ru: [
              "Стоп…",
              "Он реально не прикалывается.",
              "Он не троллит.",
              "Не издевается.",
              "Он просто делает то, что я написал…",
            ],
            pl: [
              "Stop…",
              "On naprawdę nie żartuje.",
              "On po prostu robi to, co napisałem…",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryla:",
          avatar: "kirill",
          text: {
            ru: [
              "Я написал “квест”.",
              "Но не написал:",
              "— какой,",
              "— зачем,",
              "— для кого.",
            ],
            pl: [
              "Przecież napisałem „quest”.",
              "Ale nie napisałem:",
              "— jaki,",
              "— po co,",
              "— dla kogo.",
            ],
          },
        },
        {
          type: "thought",
          speaker: "💭 Myśli Kyryla:",
          avatar: "kirill",
          text: {
            ru: [
              "Если бы я был ИИ……",
              "я бы тоже сделал самый простой вариант.»",
            ],
            pl: ["Gdybym był AI……", "też zrobiłbym najprostszy wariant.”"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл посмотрел на робота уже по-другому."],
            pl: ["Kirill spojrzał na robota w inny sposób."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Ты не специально сделал скучно?"],
            pl: ["Gdybym był AI……", "też zrobiłbym najprostszy wariant.”"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Нет.",
              "— Я сделал логично.",
              "— Я понимаю только то, что написано.",
            ],
            pl: [
              "— Nie.",
              "— Zrobiłem to logicznie.",
              "— Rozumiem tylko to, co jest napisane.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["—— То есть…", "— если я пишу криво — ты делаешь криво?"],
            pl: ["— Czyli jak piszę byle jak…”"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно."],
            pl: ["— Wynik też jest byle jaki."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если нормально?"],
            pl: ["— A jak dokładnie?”"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда у нас есть шанс 😐"],
            pl: ["— Wtedy ma to sens 😐"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл хмыкнул."],
            pl: ["Kirill parsknął."],
          },
        },
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: ["Вот он.", "Момент апгрейда мышления."],
            pl: ["Level up.", "Nowa umiejętność odblokowana."],
          },
        },
      ],
    },
    // 6
    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_6ru.png?raw=true",
      author: {
        ru: ["🎮 МИНИ-ЗАДАНИЕ"],
        pl: ["🎮 MINI-ZADANIE"],
      },

      dialog: [
        {
          type: "task",
          question: {
            ru: "Какое задание ИИ поймёт лучше?",
            pl: "Jakie zadanie AI zrozumie lepiej?",
          },
          options: {
            ru: [
              "Придумай квест",
              "Придумай сложный квест для игры, где есть босс, ловушки и награда",
            ],
            pl: [
              "Wymyśl quest",
              "Wymyśl skomplikowany quest do gry, w którym jest boss, pułapki i nagroda",
            ],
          },
          correct: 1,
          discussion: {
            title: {
              ru: "🧠 Обсуждение",
              pl: "🧠 Dyskusja",
            },
            points: {
              ru: ["что добавили?", "почему второе понятнее?"],
              pl: ["które zadanie jest jaśniejsze?", "dlaczego?"],
            },
          },
        },
      ],
    },
    // 7
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_7.png?raw=true",

      author: {
        ru: ["🎯 СЦЕНА 6. Намёк на миссию курса"],
        pl: ["🎯 SCENA 6. Wskazówka dotycząca misji kursu"],
      },
      dialog: [
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Робот развернулся и показал на планету вокруг."],
            pl: ["Robot odwrócił się i wskazał na planetę dookoła."],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— На нашей планете сейчас проблема.",
              "— Люди обленились и дают задания кое-как.",
              "— А потом злятся, что ИИ делает ерунду.",
            ],
            pl: ["— Na Planecie AI mamy problem.", "— Ludzie źle tłumaczą."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Знакомо…"],
            pl: ["— Znajome…"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Нам нужен кто-то,кто умеет думать и объяснять."],
            pl: ["— Potrzebujemy kogoś, kto potrafi myśleć i wyjaśniać."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Типа… я?"],
            pl: ["— To znaczy… ja?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Типа ты."],
            pl: ["— Właśnie ty."],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл усмехнулся."],
            pl: ["Kirill uśmiechnął się z lekką ironią."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Ладно.",
              "— Давай ещё раз.",
              "— Но теперь нормально.",
              "Подумаем...",
            ],
            pl: [
              "— Dobra.",
              "— Spróbujmy jeszcze raz.",
              "— Ale tym razem porządnie.",
              "Pomyślmy...",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Экран вокруг мягко потемнел."],
            pl: ["Światło przygasło."],
          },
        },
      ],
    },
    // 8
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/imageCurs/lesson1/lesson01_8.png?raw=true",

      author: {
        ru: ["🧩 ВЫВОД УРОКА"],
        pl: ["🧩 WNIOSEK Z LEKCJI"],
      },

      dialog: [
        {
          type: "master",
          speaker: "🎮 Гейм-мастер (почти шёпотом):",
          avatar: "narrator",
          text: {
            ru: [
              "Если коротко — ИИ не странный.",
              "Он просто <b>не человек.</b>",
            ],
            pl: [
              "Krótko mówiąc — AI nie jest dziwne.",
              "Ono po prostu <b>nie jest człowiekiem.</b>",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ не понимает намёков и эмоций.",
              "Он работает строго по тому, что написано.",
            ],
            pl: [
              "AI nie rozumie aluzji ani emocji.",
              "Działa ściśle według tego, co jest napisane.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "ИИ делает ровно то, что написано",
              "Чем точнее и понятнее запрос —",
              "тем лучше результат.",
            ],
            pl: [
              "Im dokładniejsze i jaśniejsze zapytanie —",
              "tym lepszy wynik.",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "📌 Чтобы ИИ понял тебя:",
              "— пиши конкретно",
              "— объясняй, что именно ты хочешь",
              "— не надейся, что он «догадается»",
            ],
            pl: [
              "📌 Żeby AI cię zrozumiało:",
              "— pisz konkretnie",
              "— wyjaśniaj, czego dokładnie chcesz",
              "— nie licz na to, że się „domyśli”",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "На следующем уроке Кирилл научится",
              "писать запросы так, чтобы ИИ делал крутые вещи 😉",
            ],
            pl: [
              "Na następnej lekcji Kirył nauczy się",
              "pisać zapytania tak, żeby AI robiło fajne rzeczy 😉",
            ],
          },
        },
      ],
    },
  ],
};
