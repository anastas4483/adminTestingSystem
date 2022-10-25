import { Test } from "../../utils/types/Test";

export const tests: Test[] = [
  {
    id: 0,
    title: "Астрономия",
    isHide: true,
    questions: [
      {
        questionId: 0,
        title: "Сколько планет в солнечной системе?",
        answers: [
          {
            answerId: 0,
            title: "8",
            isRight: true,
          },
          {
            answerId: 1,
            title: "8 + Плутон",
          },
          {
            answerId: 2,
            title: "2",
          },
          {
            answerId: 3,
            title: "123456789",
          },
        ],
      },
      {
        questionId: 1,
        title:
          "Какая планета, кроме Венеры, вращается вокруг Солнца в сторону, противоположную вращению всех других планет?",
        answers: [
          {
            answerId: 0,
            title: "Россия",
          },
          {
            answerId: 1,
            title: "Уран",
            isRight: true,
          },
          {
            answerId: 2,
            title: "Другая Венера",
          },
          {
            answerId: 3,
            title: "X12Y6",
          },
        ],
      },
      {
        questionId: 2,
        title:
          "Какое название носит самый большой естественный спутник из всех планет Солнечной системы?",
        answers: [
          {
            answerId: 0,
            title: "Луна",
          },
          {
            answerId: 1,
            title: "Советский",
          },
          {
            answerId: 2,
            title: "Ганимед",
            isRight: true,
          },
          {
            answerId: 3,
            title: "Плутон",
          },
        ],
      },
      {
        questionId: 3,
        title: "Что мы называем «Парадом планет»?",
        answers: [
          {
            answerId: 0,
            title: "Торжественный смотр (войск, спортсменов)",
          },
          {
            answerId: 1,
            title: "Движение планет как обычно",
          },
          {
            answerId: 2,
            title:
              "Планетная конфигурация, при которой пять ярких планет Солнечной системы (Меркурий, Венера, Марс, Юпитер и Сатурн) в своем движении по небосводу подходят друг к другу на близкое расстояние, и становятся видны в одно время в небольшом секторе неба — 10—40 градусов",
            isRight: true,
          },
          {
            answerId: 3,
            title: "Планеты в 2 колонны",
          },
        ],
      },
      {
        questionId: 4,
        title: "Чем отличается метеор от метеорита? ",
        answers: [
          {
            answerId: 0,
            title: "Суффиксом",
          },
          {
            answerId: 1,
            title: "Размером",
          },
          {
            answerId: 2,
            title:
              "Метеорит — это небесное тело, упавшее на поверхность Земли. Метеоры сгорают, не долетая до Земли, в плотных слоях атмосферы",
            isRight: true,
          },
          {
            answerId: 3,
            title: "Цветом",
          },
        ],
      },
      {
        questionId: 5,
        title:
          "Вавилоняне называли его «Лесная птица», арабы — «Курица». А как называем это созвездие мы?",
        answers: [
          {
            answerId: 0,
            title: "Созвездие спящего Петуха",
          },
          {
            title: "Созвездие глухаря в кустах",
            answerId: 1,
          },
          {
            title: "Созвездие стаи попугаев",
            answerId: 2,
          },
          {
            title: "Созвездие Лебедя",
            isRight: true,
            answerId: 3,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Гарри Потер",
    questions: [
      {
        questionId: 0,
        title: "Сколько детей в семье Уизли?",
        answers: [
          {
            title: "7",
            isRight: true,
            answerId: 0,
          },
          {
            title: "8",
            answerId: 1,
          },
          {
            title: "4",
            answerId: 2,
          },
          {
            title: "5",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 1,
        title: "Сколько факультетов в Хогвартсе?",
        answers: [
          {
            title: "2",
            answerId: 0,
          },
          {
            title: "4",
            isRight: true,
            answerId: 1,
          },
          {
            title: "3",
            answerId: 2,
          },
          {
            title: "5",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 2,
        title: "Какое животное изображено на гербе факультета Гриффиндор?",
        answers: [
          {
            title: "Орел",
            answerId: 0,
          },
          {
            title: "Гиппогриф",
            answerId: 1,
          },
          {
            title: "Жираф",
            answerId: 2,
          },
          {
            title: "Лев",
            isRight: true,
            answerId: 3,
          },
        ],
      },
      {
        questionId: 3,
        title: "Какой вид принимает патронус Гарри Поттера?",
        answers: [
          {
            title: "Орла",
            answerId: 0,
          },
          {
            title: "Коля",
            answerId: 1,
          },
          {
            title: "Оленя",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Льва",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 4,
        title: "Чего больше всего боится Рон Уизли?",
        answers: [
          {
            title: "Змей",
            answerId: 0,
          },
          {
            title: "Гермионны",
            answerId: 1,
          },
          {
            title: "Пауков",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Старости",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 5,
        title: "Кто убил Седрика Диггори?",
        answers: [
          {
            title: "Люциус Малфой",
            answerId: 0,
          },
          {
            title: "Волан-де-Морт",
            answerId: 1,
          },
          {
            title: "Питер Петтигрю",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Дамблдор",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 6,
        title: "Какой необычной волшебной способностью обладал Гарри Поттер?",
        answers: [
          {
            title: "Анимагия (превращение в животного)",
            answerId: 0,
          },
          {
            title: "Змеиный язык",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Невербальные чары",
            answerId: 2,
          },
          {
            title: "Быстрое исцеление ран",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 7,
        title:
          "Каким волшебным артефактом владела Гермиона Грейнджер в книге «Гарри Поттер и Узник Азкабана»?",
        answers: [
          {
            title: "Маховик времени",
            isRight: true,
            answerId: 0,
          },
          {
            title: "Дневник Тома Реддла",
            answerId: 1,
          },
          {
            title: "Омут памяти",
            answerId: 2,
          },
          {
            title: "Прытко-пищущее перо",
            answerId: 3,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Литература",
    questions: [
      {
        questionId: 0,
        title: "Сколько лет пролежал на печи известный богатырь Илья Муромец",
        answers: [
          {
            answerId: 0,
            title: "30 лет и 3 года",
            isRight: true,
          },
          {
            title: "8 часов",
            answerId: 1,
          },
          {
            title: "12 дней",
            answerId: 2,
          },
          {
            title: "3 века",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 1,
        title: "Назовите имя первого белорусского первопечатника",
        answers: [
          {
            title: "Александр Лукошенко",
            answerId: 0,
          },
          {
            title: "Франциск Скорина",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Дмитрий Донской",
            answerId: 2,
          },
          {
            title: "Анна Медведева",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 2,
        title:
          "Сказка «Курочка–Ряба» на самом деле имеет автора. Назовите его имя",
        answers: [
          {
            title: "А. С. Пушкин",
            answerId: 0,
          },
          {
            title: "В. И. Даль",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Ф. М. Достоевский",
            answerId: 2,
          },
          {
            title: "Н. В. Гоголь",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 3,
        title:
          "Он знаком многим. Был и художником, и доктором, и путешественником, и космонавтом. Кто это?",
        answers: [
          {
            title: "Чебурашка",
            answerId: 0,
          },
          {
            title: "Броненосец",
            answerId: 1,
          },
          {
            title: "Незнайка",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Крош",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 4,
        title:
          "В Древней Греции на этих зданиях было написано: «Здесь живут мертвые и говорят живые»",
        answers: [
          {
            title: "Эйва",
            answerId: 0,
          },
          {
            title: "Кладбище",
            answerId: 1,
          },
          {
            title: "Библиотека",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Храм",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 5,
        title:
          "Сколько лет было Анне Карениной на момент ее гибели в произведении Л.Н.Толстого? ",
        answers: [
          {
            title: "13",
            answerId: 0,
          },
          {
            title: "20",
            answerId: 1,
          },
          {
            title: "28",
            isRight: true,
            answerId: 2,
          },
          {
            title: "45",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 6,
        title: "Какая книга является самой маленькой в мире?",
        answers: [
          {
            title: "'Война и мир' Толстой",
            answerId: 0,
          },
          {
            title: "«Хамелеон» А.П.Чехова",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Мертвые души Гоголь",
            answerId: 2,
          },
          {
            title: "Инструкция по пылесосу",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 7,
        title:
          "Какой перевод у слова «мцыри», одноименного произведения М.Ю. Лермонтова?",
        answers: [
          {
            title: "Послушник",
            isRight: true,
            answerId: 0,
          },
          {
            title: "Рыцарь",
            answerId: 1,
          },
          {
            title: "Товарищ",
            answerId: 2,
          },
          {
            title: "Царь",
            answerId: 3,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Мультфильмы",
    questions: [
      {
        questionId: 0,
        title:
          "Популярный анимационный мульт-сериал, главным героем которого является доброе существо с Луны?",
        answers: [
          {
            title: "Приключения Лунтика",
            isRight: true,
            answerId: 0,
          },
          {
            title: "Свинка Пеппа;",
            answerId: 1,
          },
          {
            title: "Приключения Электроника",
            answerId: 2,
          },
          {
            title: "Аниматроник и его друзья",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 1,
        title: "Как зовут кота из деревни Простоквашино?",
        answers: [
          {
            title: "Шарик",
            answerId: 0,
          },
          {
            title: "Матроскин",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Джек",
            answerId: 2,
          },
          {
            title: "Шарик",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 2,
        title: "Кто из персонажей мультика все время грозится: «Ну, погоди!»?",
        answers: [
          {
            title: "заяц",
            answerId: 0,
          },
          {
            title: "бегемот",
            answerId: 1,
          },
          {
            title: "волк",
            isRight: true,
            answerId: 2,
          },
          {
            title: "почтальон Печкин",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 3,
        title: "Какая фамилия у Простоквашинского почтальона?",
        answers: [
          {
            title: "Пяткин",
            answerId: 0,
          },
          {
            title: "Матроскин",
            answerId: 1,
          },
          {
            title: "Печкин",
            isRight: true,
            answerId: 2,
          },
          {
            title: "Ленинградский",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 4,
        title: "Веселые кругляши – герои популярного мульт сериала?",
        answers: [
          {
            title: "карандаши",
            answerId: 0,
          },
          {
            title: "воздушные шарики",
            answerId: 1,
          },
          {
            title: "смешарики",
            isRight: true,
            answerId: 2,
          },
          {
            title: "телепузики",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 5,

        title:
          " Как зовут подругу медведя – героиню популярного мультипликационного сериала?",
        answers: [
          {
            title: "Марфуша",
            answerId: 0,
          },
          {
            title: "Маша",
            isRight: true,
            answerId: 1,
          },
          {
            title: "Настенька",
            answerId: 2,
          },
          {
            title: "Нюша",
            answerId: 3,
          },
        ],
      },
      {
        questionId: 6,
        title: "Что больше всего любит Винни-Пух?",
        answers: [
          {
            title: "мёд",
            isRight: true,
            answerId: 0,
          },
          {
            title: "капусту",
            answerId: 1,
          },
          {
            title: "траву",
            answerId: 2,
          },
          {
            title: "ягоды",
            answerId: 3,
          },
        ],
      },
    ],
  },
];
