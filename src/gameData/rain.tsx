import { Quiz } from "./types";

export const rainQuiz: Quiz = {
  title: "Jakim typem deszczu jesteś?",
  image: "",
  output: [
    {
      score: 1,
      result: "LENIWY KAPUŚNIACZEK",
      description: "Zwykle odkładasz decyzje na później, bo szkoda ci energii.",
    },
    {
      score: 2,
      result: "LETNIA BURZA",
      description: "Pojawiasz się nagle i rozwalasz wszystko wokół!",
    },
    {
      score: 3,
      result: "MŻAWKA Z HORRORU",
      description:
        "Nikt nie wie, skąd się wziąłeś, ale wszyscy mają złe przeczucia",
    },
    {
      score: 4,
      result: "DESZCZ, KTÓRY PADA POZIOMO",
      description:
        "Jesteś chaosem w czystej postaci. Wchodzisz w sytuację, nie bacząc na konsekwencje.",
    },
  ],
  questions: [
    {
      question: "Jaki jest Twój stosunek do zmian w życiu?",
      answers: [
        {
          text: "Wolę, żeby wszystko zostało po staremu – po co się stresować?",
          points: 1,
        },
        {
          text: "Uwielbiam zmiany! Zawsze gotowy na coś nowego i ekscytującego!",
          points: 2,
        },
        {
          text: "Zmiany? Zawsze mam złe przeczucia – lepiej nie ruszać!",
          points: 3,
        },
        {
          text: "Zmiany są jak wiatr! Wchodzę w nie na całego, nawet jeśli nie wiem, dokąd prowadzą.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak reagujesz na nieprzewidziane wydarzenia?",
      answers: [
        {
          text: "Czasami udajesz, że nic się nie stało i po prostu czekasz, aż minie.",
          points: 1,
        },
        {
          text: "Tylko czekam na okazję, żeby zrobić wielki zamach!",
          points: 2,
        },
        {
          text: "Zwykle niepokój ogarnia wszystkich wokół – kto wie, co się wydarzy?",
          points: 3,
        },
        {
          text: "Czas na szaleństwo! Właśnie teraz jest idealny moment, żeby działać!",
          points: 4,
        },
      ],
    },
    {
      question: "Jakie masz podejście do życia?",
      answers: [
        { text: "Życie to impreza, więc bawmy się jak najwięcej!", points: 1 },
        {
          text: "Czasami warto być ostrożnym i trzymać się sprawdzonych ścieżek.",
          points: 2,
        },
        {
          text: "Cenię sobie spokój i harmonię, lubię dbać o innych.",
          points: 3,
        },
        { text: "Życie jest zbyt krótkie na nudę – idź na całość!", points: 4 },
      ],
    },
    {
      question: "Jakie masz podejście do planów?",
      answers: [
        { text: "Planować? Lepiej zostawić wszystko przypadkowi.", points: 1 },
        {
          text: "Plany? A po co? Wolę działać spontanicznie!",
          points: 2,
        },
        {
          text: "Zawsze obawiasz się, że coś się nie uda – lepiej nie planować za bardzo.",
          points: 3,
        },
        {
          text: "Plany są po to, żeby je łamać! Chaos to mój styl życia!",
          points: 4,
        },
      ],
    },
  ],
};
