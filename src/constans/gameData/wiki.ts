import { Quiz } from "./types";

export const wikiQuiz: Quiz = {
  title: "Którą stroną Wikipedii jesteś?",
  subtitle:
    "Czy twoje życie to niekończąca się wędrówka po linkach, czy może jesteś pełen dramatycznych informacji? Sprawdź, czy jesteś stroną o filozofii, listą zgonów, czy może tajemniczym artykułem o krowach! 🐄",
  image: "/assets/images/wiki.jpg",
  output: [
    {
      score: 1,
      result: "FILOZOFIA",
      description:
        "Zaczynasz od jednego tematu, a kończysz na zupełnie innym 🤯. Klikasz w jeden link i nagle jesteś w tunelu bez końca. Twoje rozmowy to (nie)logiczne wywody, które prowadzą od pizzy do teorii istnienia. Każdy, kto cię słucha, zadaje sobie pytanie: 'Jak my tu w ogóle dotarliśmy?'. Nawet twoja historia przeglądania wygląda jak ścieżka myśli szalonego geniusza.",
    },
    {
      score: 2,
      result: "SZTUKA RENESANSU",
      description:
        "Lubisz udawać, że jesteś inteligentny, ale i tak nikt nie sprawdza źródeł 🎨. Twoje zdania zaczynają się od 'Jak powiedział Michelangelo...' i kończą na 'chyba'. Nikt nie wie, skąd masz te wszystkie informacje – nawet ty sam. Twoje życie to estetyka i ładne czcionki, bo przecież wrażenie jest ważniejsze niż treść!",
    },
    {
      score: 3,
      result: "LISTA ZGONÓW W 2024 ROKU",
      description:
        "Zawsze masz dramatyczne informacje ☠️. Każda rozmowa zaczyna się od 'Słyszeliście, że…?' i kończy na 'To niesamowicie smutne'. Masz w sobie niepokojącą zdolność do znajdowania najbardziej przygnębiających tematów. Ludzie nie wiedzą, czy cię słuchać, czy uciekać. Mimo to – wszyscy wracają po więcej, bo przecież trochę tragedii w rozmowie zawsze dodaje pikanterii.",
    },
    {
      score: 4,
      result: "STRONA Z CIEKAWOSTKAMI O KROWACH",
      description:
        "Twoje życie to jedna wielka ciekawostka 🐄, której ludzie nie potrafią przestać słuchać. Masz w sobie tę dziwną, nieoczywistą charyzmę, która sprawia, że chcą wiedzieć więcej. Na początku wydajesz się przypadkowy, ale potem okazuje się, że jesteś najbardziej wartościowym linkiem, jaki można kliknąć. Jesteś królem mało istotnych, ale fascynujących faktów!",
    },
  ],
  questions: [
    {
      question: "Ile czasu spędzasz na przypadkowym scrollowaniu internetu?",
      answers: [
        { text: "Klikam w jeden link i nagle jest trzecia w nocy.", points: 1 },
        {
          text: "W moim scrollowaniu nie ma przypadku - szukam konkretów.",
          points: 2,
        },
        {
          text: "Tylko wtedy, gdy szukam informacji, które wstrząsną światem.",
          points: 3,
        },
        {
          text: "Zaczynam od pracy, a kończę na dziwnych faktach o zwierzętach.",
          points: 4,
        },
      ],
    },
    {
      question: "Czy często zaczynasz rozmowę od słów: 'Czy wiesz, że...'?",
      answers: [
        {
          text: "Tak, ale zaczynam od jednego faktu, a kończę na kompletnie innym temacie.",
          points: 1,
        },
        {
          text: "Zawsze! Świat musi poznać moją encyklopedyczną wiedzę.",
          points: 2,
        },
        {
          text: "Tylko wtedy, gdy mam coś naprawdę szokującego do powiedzenia.",
          points: 3,
        },
        {
          text: "Nie mogę się powstrzymać – świat musi wiedzieć, ile waży największa krowa!",
          points: 4,
        },
      ],
    },
    {
      question: "Jak reagujesz, gdy ktoś powie coś, co wydaje się nieprawdą?",
      answers: [
        {
          text: "Natychmiast otwieram Wikipedię i sprawdzam źródła.",
          points: 1,
        },
        {
          text: "Nie muszę sprawdzać, zawsze wiem co jest prawdą.",
          points: 2,
        },
        {
          text: "Sprawdzam, ale tylko jeśli to brzmi nieprawdopodobnie.",
          points: 3,
        },
        {
          text: "Nieważne czy to prawda – ważne, że brzmi interesująco!",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz, gdy znajdziesz ciekawy artykuł?",
      answers: [
        {
          text: "Klikam w pierwszy link i tak się zaczyna moja podróż bez końca.",
          points: 1,
        },
        {
          text: "Zapisuję go, żeby móc się nim chwalić na spotkaniach.",
          points: 2,
        },
        {
          text: "Sprawdzam, czy nie ma tam czegoś szokującego, tylko wtedy mnie zainteresuje.",
          points: 3,
        },
        {
          text: "Udostępniam każdemu, bo przecież świat musi to wiedzieć!",
          points: 4,
        },
      ],
    },
    {
      question: "Jaki masz styl nauki?",
      answers: [
        {
          text: "Zaczynam od jednego tematu, a potem wędruję po dziesięciu innych.",
          points: 1,
        },
        {
          text: "Studiuję dokładnie, głównie po to, by dobrze wypaść.",
          points: 2,
        },
        {
          text: "Szukam tylko informacji, które wywołają silne emocje.",
          points: 3,
        },
        {
          text: "Nie wiem, ale za to wiem, ile zębów ma przeciętna koza!",
          points: 4,
        },
      ],
    },
  ],
};
