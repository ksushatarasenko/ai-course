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
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/scena1.png?raw=true",

      author: {
        ru: [
          "🎬 СЦЕНА 1. Обычный день Кирилла",
          "Кирилл сидит дома.",
          "Открыт компьютер. На экране — игра.",
        ],
        pl: [
          "🎬 SCENA 1. Zwykły dzień Kiryła",
          "Kirył siedzi w domu.",
          "Komputer jest włączony. Na ekranie — gra.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: "- Ну давай… придумай мне нормальный квест. Типа сложный, с боссом!",
            pl: "- No dobra… wymyśl mi normalne zadanie. Trudne, z bossem!",
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "- ЧЕГО 😐 Я же сказал нормальный квест!",
              "— Это вообще что?",
              "— Это даже не туториал!",
            ],
            pl: [
              "- CO 😐 Przecież prosiłem o normalne zadanie!",
              "— Co to w ogóle jest?",
              "— To nawet nie tutorial!",
            ],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: ["Кирилл злится.", "Пробует ещё раз."],
            pl: ["Kirył się złości.", "Próbuje jeszcze raz."],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "- Ладно, придумай реально крутой квест, чтобы было интересно!",
            ],
            pl: ["- Dobra, wymyśl naprawdę fajny quest, żeby było ciekawie!"],
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— …", "— Да ты издеваешься?!"],
            pl: ["— …", "— Żartujesz sobie?!"],
          },
        },
      ],
    },

    {
      id: "2",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%A1%D0%A6%D0%95%D0%9D%D0%90%202.%20%D0%91%D0%90%D0%93%20%D0%92%D0%A1%D0%95%D0%9B%D0%95%D0%9D%D0%9D%D0%9E%D0%98%CC%86.png?raw=true",

      author: {
        ru: [
          "💥 СЦЕНА 2. БАГ ВСЕЛЕННОЙ",
          "Экран начинает мигать.",
          "Компьютер зависает.",
          "Вжух — и Кирилла засасывает в экран.",
        ],
        pl: [
          "💥 SCENA 2. BŁĄD WSZECHŚWIATA",
          "Ekran zaczyna migać.",
          "Komputer się zawiesza.",
          "Wziuu — i Kiryła zostaje wciągnięty do ekranu.",
        ],
      },
    },
    {
      id: "3",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%A1%D0%A6%D0%95%D0%9D%D0%90%203.%20%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%82%D0%B0%20%D0%98%D0%98.png?raw=true",

      author: {
        ru: [
          "🌍 СЦЕНА 3. Планета ИИ",
          "Кирилл стоит на странной планете.",
          "Вокруг — пиксели, окна чата, кнопки, иконки.",
        ],
        pl: [
          "🌍 SCENA 3. Planeta AI",
          "Kirył stoi na dziwnej planecie.",
          "Wokół — piksele, okna czatu, przyciski, ikony.",
        ],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Окей… Это что, я в игре? Или это вообще сон?"],
            pl: ["— Okej… To co, jestem w grze? Czy to w ogóle sen?"],
          },
        },
        {
          type: "author",
          speaker: "narrator",
          avatar: "narrator",
          text: {
            ru: [
              "К нему подъезжает робот 🤖",
              "Немного квадратный. Немного смешной.",
            ],
            pl: [
              "Podjeżdża do niego robot 🤖",
              "Trochę kwadratowy. Trochę zabawny.",
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
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["- Э… да. А ты кто?"],
            pl: ["- Eee… tak. A ty kim jesteś?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я ИИ-Робот Помощник версии 0.9.1.",
              "— Рад знакомству.",
              "— Ты выглядишь раздражённым.",
            ],
            pl: [
              "— Jestem Robotem-Pomocnikiem AI w wersji 0.9.1.",
              "— Miło mi cię poznać.",
              "— Wyglądasz na zdenerwowanego.",
            ],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["- ДА. Потому что ты и такие как ты ВООБЩЕ МЕНЯ НЕ ПОНИМАЮТ."],
            pl: ["- TAK. Bo ty i tacy jak ty W OGÓLE MNIE NIE ROZUMIECIE."],
          },
        },
      ],
    },
    {
      id: "4",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%A1%D0%A6%D0%95%D0%9D%D0%90%204.%20%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%20%D0%B7%D0%BB%D0%B8%D1%82%D1%81%D1%8F.png?raw=true",

      author: {
        ru: ["😡 СЦЕНА 4. Кирилл злится"],
        pl: ["😡 SCENA 4. Kirył się złości"],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: [
              "— Я нормально написал!",
              "— Любой человек понял бы!",
              "— Даже мой младший брат понял бы!",
            ],
            pl: [
              "— Napisałem to normalnie!",
              "— Każdy człowiek by to zrozumiał!",
              "— Nawet mój młodszy brat by to zrozumiał!",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: [
              "— Я не человек.",
              "— Я не понимаю «нормально».",
              "— Я понимаю только то, что написано.",
            ],
            pl: [
              "— Nie jestem człowiekiem.",
              "— Nie rozumiem, co znaczy „normalnie”.",
              "— Rozumiem tylko to, co jest napisane.",
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
      ],
    },
    {
      id: "5",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%9C%D0%AB%D0%A1%D0%9B%D0%98%20%D0%9A%D0%98%D0%A0%D0%98%D0%9B%D0%9B%D0%90.png?raw=true",

      author: {
        ru: ["💭 МЫСЛИ КИРИЛЛА (ключевой момент)"],
        pl: ["💭 MYŚLI KIRYŁA (kluczowy moment)"],
      },
      dialog: [
        {
          type: "thought",
          speaker: "💭 Myśli Kyryla:",
          text: {
            ru: [
              "Стоп…",
              "Он реально не прикалывается.",
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
              "Я же написал “квест”.",
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
            ru: [
              "Кирилл перестаёт злиться.",
              "Смотрит на робота уже по-другому.",
            ],
            pl: [
              "Kirył przestaje się złościć.",
              "Patrzy na robota już inaczej.",
            ],
          },
        },
      ],
    },
    {
      id: "6",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%A6%D0%95%D0%9D%D0%90%205.%20%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5.png?raw=true",

      author: {
        ru: ["🧠 СЦЕНА 5. Первое понимание"],
        pl: ["🧠 SCENA 5. Pierwsze zrozumienie"],
      },
      dialog: [
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— Подожди.", "— Ты не специально сделал скучно?"],
            pl: ["— Poczekaj.", "— Nie zrobiłeś tego nudno specjalnie?"],
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
            ru: ["— Хм…", "— То есть если я напишу криво — ты сделаешь криво?"],
            pl: [
              "— Hm…",
              "— Czyli jeśli napiszę byle jak — ty zrobisz byle jak?",
            ],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Верно"],
            pl: ["— Dokładnie"],
          },
        },
        {
          type: "story",
          speaker: "Kyrylo",
          avatar: "kirill",
          text: {
            ru: ["— А если нормально?"],
            pl: ["— A jeśli normalnie?"],
          },
        },
        {
          type: "ai",
          speaker: "AI robot",
          avatar: "robot",
          text: {
            ru: ["— Тогда у нас есть шанс 😐"],
            pl: ["— Wtedy mamy szansę 😐"],
          },
        },
      ],
    },
    {
      id: "task",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%9C%D0%98%D0%9D%D0%98-%D0%97%D0%90%D0%94%D0%90%D0%9D%D0%98%D0%95.png?raw=true",
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
        },
      ],
    },
    {
      id: "7",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/%D0%A1%D0%A6%D0%95%D0%9D%D0%90%206.%20%D0%9D%D0%B0%D0%BC%D0%B5%CC%88%D0%BA%20%D0%BD%D0%B0%20%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D1%8E%20%D0%BA%D1%83%D1%80%D1%81%D0%B0.png?raw=true",

      author: {
        ru: ["🎯 СЦЕНА 6. Намёк на миссию курса"],
        pl: ["🎯 SCENA 6. Wskazówka dotycząca misji kursu"],
      },
      dialog: [
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
            pl: [
              "— Na naszej planecie jest teraz problem.",
              "— Ludzie rozleniwili się i dają zadania byle jak.",
              "— A potem złoszczą się, że AI robi bzdury.",
            ],
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
      ],
    },
    {
      id: "final",
      image:
        "https://github.com/ksushatarasenko/curseAI-course-assets/blob/main/module1/final_module1.png?raw=true",

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
            ru: ["Чем точнее и понятнее запрос —", "тем лучше результат."],
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
