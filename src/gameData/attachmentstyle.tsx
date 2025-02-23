import { Quiz } from "./types";

export const attachmentstyleQuiz: Quiz = {
  title: "Jakim stylem przywiązania jesteś?",
  subtitle:
    "Jesteś czułym i stabilnym „bezpiecznym przywiązaniem”, czy może chodzącą bombą emocjonalną w stylu „lękowo-unikającym”? Sprawdź, jak zniszczył cię system i co robisz innym ludziom w związkach! 😘",
  image: "/assets/images/heart.jpg",
  output: [
    {
      score: 1,
      result: "BEZPIECZNE PRZYWIĄZANIE 🛡️",
      description:
        "Jesteś jednorożcem w świecie relacji – emocjonalnie stabilnym, kochającym i gotowym do zdrowej komunikacji. Ludzie wokół cię nienawidzą, bo nie masz traum, a terapeuci nie zarabiają na twoich problemach. Twoja supermoc? Możesz wysłać wiadomość i nie umierać wewnętrznie, jeśli ktoś nie odpisze w 5 sekund.",
    },
    {
      score: 2,
      result: "LĘKOWE PRZYWIĄZANIE 😱",
      description:
        "Jesteś emocjonalnym rollercoasterem i każdy, kto cię spotka, wsiada bez biletu. Nie wiesz, czy ludzie cię kochają, dopóki nie napiszą tego 12 razy dziennie. Twoja supermoc? Pisanie wiadomości w stylu 'ok, nic się nie stało' i jednoczesne umieranie w środku, bo jednak coś się stało.",
    },
    {
      score: 3,
      result: "UNIKAJĄCE PRZYWIĄZANIE 🚷",
      description:
        "Twój ulubiony sport? Uciekanie. Ucieczka od emocji, bliskości i wszystkiego, co może sugerować, że ktoś cię lubi. Kiedy ktoś się do ciebie zbliża, twój mózg mówi 'RUN'. Twoja supermoc? Pisanie 'nie szukam niczego poważnego' na Tinderze i blokowanie ludzi, gdy robi się za miło.",
    },
    {
      score: 4,
      result: "LĘKOWO-UNIKAJĄCE PRZYWIĄZANIE 🔥💀",
      description:
        "Jesteś emocjonalnym chaosem, który nie wie, czy chce miłości, czy spokoju. Jednego dnia umierasz z tęsknoty, drugiego znikasz bez śladu. Twoja supermoc? Tworzenie dramatów, których nie wymyśliłby nawet Netflix i wywoływanie w innych traumy, z której będą się leczyć przez lata.",
    },
  ],
  questions: [
    {
      question:
        "Co robisz, gdy ktoś nie odpisuje na twoją wiadomość przez kilka godzin?",
      answers: [
        { text: "Spoko, ludzie mają życie poza telefonem.", points: 1 },
        {
          text: "Zaczynam analizować każdą naszą rozmowę i panikować.",
          points: 2,
        },
        { text: "Niech sobie nie odpisuje – ja też nie będę.", points: 3 },
        {
          text: "Piszę jeszcze trzy wiadomości, a potem ich blokuję dla zasady.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak wygląda twoja reakcja na konflikt w związku?",
      answers: [
        {
          text: "Rozmawiam spokojnie i próbuję dojść do kompromisu.",
          points: 1,
        },
        {
          text: "Panikuję i boję się, że to koniec naszej relacji.",
          points: 2,
        },
        { text: "Ignoruję temat i liczę, że samo się rozwiąże.", points: 3 },
        {
          text: "Najpierw błagam o uwagę, potem ignoruję i wychodzę z dramą.",
          points: 4,
        },
      ],
    },
    {
      question: "Co myślisz, gdy ktoś okazuje ci miłość i zaangażowanie?",
      answers: [
        { text: "To super, w końcu na tym polega zdrowa relacja.", points: 1 },
        { text: "Czy on/ona mnie kocha, czy tylko tak mówi?!", points: 2 },
        {
          text: "O nie, to za dużo – muszę znaleźć wymówkę, żeby się zdystansować.",
          points: 3,
        },
        {
          text: "Najpierw jestem zachwycony/a, a potem mam ochotę uciec w góry.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak wyglądają twoje związki?",
      answers: [
        { text: "Stabilne, szczere i pełne wzajemnego wsparcia.", points: 1 },
        {
          text: "Pełne niepewności i ciągłych pytań o to, czy mnie kochają.",
          points: 2,
        },
        {
          text: "Przerywane ucieczkami i tekstami 'nie jestem gotowy na związek'.",
          points: 3,
        },
        {
          text: "Burzliwe jak brazylijska telenowela – jeden dzień miłość, drugi dramat.",
          points: 4,
        },
      ],
    },
    {
      question: "Jakie jest twoje podejście do bliskości?",
      answers: [
        { text: "Uwielbiam bliskość i dobrze się z nią czuję.", points: 1 },
        { text: "Kocham ją, ale boję się, że nagle zniknie.", points: 2 },
        { text: "Bliskość? Tylko na chwilę, potem muszę uciec.", points: 3 },
        {
          text: "Chcę jej, ale jak się pojawia, to robię wszystko, żeby ją zniszczyć.",
          points: 4,
        },
      ],
    },
  ],
};
