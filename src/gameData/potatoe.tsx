import { Quiz } from "./types";

export const potatoeQuiz: Quiz = {
  title: "Jakim typem ziemniaka jesteś?",
  image: "",
  output: [
    {
      score: 1,
      result: "FRYTKA",
      description: "Szybki, dynamiczny, wszyscy cię kochają.",
    },
    {
      score: 2,
      result: "GOTOWANY ZIEMNIAK",
      description: "Klasyczny, ale często trzymasz się na uboczu",
    },
    {
      score: 3,
      result: "PUREE",
      description: "Miękki, delikatny, otula komfortem",
    },
    {
      score: 4,
      result: "CHIPS",
      description: "Chrupiący, ale czasem trochę zbyt szalony",
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
  ],
};
