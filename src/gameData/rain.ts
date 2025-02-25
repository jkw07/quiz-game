import { Quiz } from "./types";

export const rainQuiz: Quiz = {
  title: "Jakim typem deszczu jesteś?",
  subtitle:
    "Czy pojawiasz się nagle jak letnia burza, czy raczej jesteś mżawką, która zaskakuje wszystkich? Sprawdź, jakim deszczem jesteś i jak wpływasz na otoczenie! ⚡",
  image: "/assets/images/rain.jpg",
  output: [
    {
      score: 1,
      result: "LENIWY KAPUŚNIACZEK",
      description:
        "Zwykle odkładasz decyzje na później, bo szkoda ci energii. Czasem ledwo widać, że jesteś, ale wszyscy czują, że jednak jesteś. Ludzie patrzą na ciebie przez okno i zastanawiają się, czy warto brać parasol. Jesteś jak powolny internet – niby działa, ale każdy się zastanawia, czy to ma sens.",
    },
    {
      score: 2,
      result: "LETNIA BURZA",
      description:
        "Pojawiasz się nagle i rozwalasz wszystko wokół! Jesteś jak impreza niespodzianka – wszyscy są zaskoczeni, ale nie mogą przestać patrzeć. Masz w sobie piorunującą energię, a czasem nawet dosłownie strzelasz iskrami. Kiedy wchodzisz do pokoju, robi się głośno, dramatycznie i trochę mokro.",
    },
    {
      score: 3,
      result: "MŻAWKA Z HORRORU",
      description:
        "Nikt nie wie, skąd się wziąłeś, ale wszyscy mają złe przeczucia. Czasem pojawiasz się znikąd i sprawiasz, że ludzie przyspieszają kroku. Jesteś tym typem deszczu, który nie wygląda groźnie, ale po 5 minutach wszyscy są przemoczeni. Każdy film grozy ma ciebie w tle – to twoja supermoc.",
    },
    {
      score: 4,
      result: "DESZCZ, KTÓRY PADA POZIOMO",
      description:
        "Jesteś chaosem w czystej postaci. Wchodzisz w sytuację, nie bacząc na konsekwencje. Nikt nie jest na ciebie gotowy, nawet parasole i płaszcze przeciwdeszczowe. Przypadkowi ludzie próbują się przed tobą schować, ale to ty wygrywasz każdą bitwę. Jesteś siłą natury i nikt ci nie powie, jak masz padać!",
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
          text: "Zwykle ogarnia mnie niepokój – kto wie, co się wydarzy?",
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
        { text: "Życie jest zbyt krótkie na nudę – idę na całość!", points: 4 },
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
          text: "Zawsze obawiam się, że coś się nie uda – lepiej nie planować za bardzo.",
          points: 3,
        },
        {
          text: "Plany są po to, żeby je zmieniać! Chaos to mój styl życia!",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz, gdy zaczyna padać deszcz?",
      answers: [
        { text: "Nic. Patrzę przez okno i czekam, aż przestanie.", points: 1 },
        { text: "Wybiegam na dwór i skaczę w kałużach!", points: 2 },
        {
          text: "Zaciągam zasłony. To idealna pogoda na dreszczowiec.",
          points: 3,
        },
        {
          text: "Wychodzę na zewnątrz i zderzam się z wiatrem jak bohater filmu akcji!",
          points: 4,
        },
      ],
    },
  ],
};
