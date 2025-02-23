import { Quiz } from "./types";

export const potatoeQuiz: Quiz = {
  title: "Jakim typem ziemniaka jesteś?",
  subtitle:
    "Czy jesteś chrupiącą frytką, spokojnym gotowanym ziemniakiem, czy może kremowym puree? Sprawdź, jakim typem kartofla jesteś i co mówi to o twoim charakterze! 🍟",
  image: "/assets/images/potatoe.jpg",
  output: [
    {
      score: 1,
      result: "FRYTKA",
      description:
        "Szybki, dynamiczny, wszyscy cię kochają. Możesz znaleźć się na każdej imprezie, a ludzie zawsze chcą więcej ciebie. Jeśli coś idzie nie tak, zawsze lądujesz na miękkiej poduszce ketchupu. Żyjesz szybko, smażysz się ostro, ale uważaj – nikt nie lubi zimnej frytki! Twoja obecność sprawia, że nawet smutny burger nabiera sensu.",
    },
    {
      score: 2,
      result: "GOTOWANY ZIEMNIAK",
      description:
        "Klasyczny, ale często trzymasz się na uboczu. Nie musisz być gwiazdą wieczoru – liczy się twoja niezawodność! Może nie robisz show, ale każdy wie, że można na ciebie liczyć. Kiedy wszyscy szaleją, ty spokojnie czekasz w garnku, aż świat się uspokoi. Jesteś ciepły, solidny i sprawiasz, że obiad ma sens – nawet jeśli czasem ktoś cię zgniecie widelcem.",
    },
    {
      score: 3,
      result: "PUREE",
      description:
        "Miękki, delikatny, otula komfortem. Jesteś jak ciepły kocyk dla duszy – zawsze wiesz, jak kogoś pocieszyć. Może i nie masz twardej skorupy, ale za to jesteś najprzyjemniejszą formą ziemniaka. Ludzie mogą cię udekorować masłem, sosem, a nawet serem – i wciąż będziesz kochany. Jedyne, czego się boisz, to grudki – bo perfekcja to twoje drugie imię!",
    },
    {
      score: 4,
      result: "CHIPS",
      description:
        "Chrupiący, ale czasem trochę zbyt szalony. Nie boisz się ryzyka – twoje życie to nieustanne kręcenie się w paczce. Kiedy wchodzisz do pokoju, każdy chce cię spróbować, ale uważaj – łatwo cię pożreć w całości! Jesteś nieprzewidywalny, pełen smaku i zawsze gotowy na przygodę. Czasem jesteś solą towarzystwa, czasem paprykowym tornadem – nigdy nie wiadomo, co przyniesiesz!",
    },
  ],
  questions: [
    {
      question: "Jak reagujesz na stres?",
      answers: [
        { text: "Miażdżę problemy!", points: 1 },
        { text: "Udaję, że mnie nie ma...", points: 2 },
        { text: "Problemy miażdżą mnie.", points: 3 },
        { text: "To ja jestem źródłem stresu dla innych.", points: 4 },
      ],
    },
    {
      question: "Jak spędzasz wolny czas?",
      answers: [
        {
          text: "Na pełnej prędkości! Zawsze w ruchu i wśród ludzi.",
          points: 1,
        },
        { text: "Z książką na kanapie – czasem można być nudnym!", points: 2 },
        {
          text: "Relaksując się w domowym zaciszu, z kubkiem ciepłej herbaty.",
          points: 3,
        },
        {
          text: "Zawsze próbujesz nowych rzeczy, nawet jeśli czasem przesadzisz!",
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
      question: "Jaki jest twój styl ubioru?",
      answers: [
        { text: "Kolorowy, modny i zawsze na czasie!", points: 1 },
        {
          text: "Klasyczny, ale czasem można pomylić z piżamą.",
          points: 2,
        },
        {
          text: "Wygodny i miękki – nic nie może być lepszego!",
          points: 3,
        },
        {
          text: "Odważny i nieprzewidywalny – czasami zbyt ekstrawagancki!",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz gdy poznajesz nowych ludzi?",
      answers: [
        { text: "Od razu zagaduję i staram się rozkręcić rozmowę!", points: 1 },
        {
          text: "Najpierw obserwuję, zanim się odezwę.",
          points: 2,
        },
        {
          text: "Czekam, aż ktoś do mnie zagada – nie lubię wychodzić przed szereg.",
          points: 3,
        },
        {
          text: "Zależy od nastroju – czasem jestem duszą towarzystwa, czasem outsiderem.",
          points: 4,
        },
      ],
    },
  ],
};
