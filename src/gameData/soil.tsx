import { Quiz } from "./types";

export const soilQuiz: Quiz = {
  title: "Jakim rodzajem gleby jesteś?",
  subtitle:
    "Czy jesteś żyzną, pełną życia glebą, czy może suchym i upartym piaskiem? Sprawdź, jaką masz osobowość w świecie geologii! 🌍",
  image: "/assets/images/soil.jpg",
  output: [
    {
      score: 1,
      result: "CZARNOZIEM 🌿",
      description:
        "Jesteś najbardziej żyzną glebą – wszyscy chcą mieć cię w swoim życiu! Potrafisz sprawić, że każdy wokół ciebie rozkwita, ale jeśli ktoś cię zaniedba, nie dajesz z siebie wszystkiego. Masz w sobie mnóstwo wartości, ale czasem czujesz, że ludzie wykorzystują cię bez wdzięczności. Nic dziwnego, że czasem potrzebujesz regeneracji – nawet najlepsza gleba potrzebuje przerwy!",
    },
    {
      score: 2,
      result: "GLEBA PIASTOWA 🏜️",
      description:
        "Jesteś stabilny, ale nie każdemu łatwo się z tobą dogadać. Nie lubisz, kiedy ktoś za bardzo cię rozkopuje – wolisz być pozostawiony w spokoju. Czasami jesteś trudny do zrozumienia, ale kiedy ktoś się do ciebie dopasuje, okazuje się, że masz w sobie więcej, niż się wydaje. Twoja odporność na zmiany jest imponująca – nawet wiatr nie jest w stanie cię tak łatwo ruszyć!",
    },
    {
      score: 3,
      result: "GLINA 🏺",
      description:
        "Jesteś lepki, ale w pozytywnym sensie – ludzie do ciebie lgną i czują się przy tobie komfortowo. Masz tendencję do trzymania wszystkiego w sobie, ale to sprawia, że jesteś solidnym fundamentem. Czasem może być ci trudno się przystosować, ale kiedy już znajdziesz odpowiednie środowisko – jesteś niezastąpiony. Gdy się w coś zaangażujesz, nic nie jest w stanie cię powstrzymać!",
    },
    {
      score: 4,
      result: "GLEBA PIESZCZYSTA 💨",
      description:
        "Jesteś lekki, nieprzewidywalny i uwielbiasz zmieniać swoje miejsce! Ludzie nigdy nie wiedzą, gdzie akurat będziesz, ale to część twojego uroku. Masz luźne podejście do życia – nie przejmujesz się drobiazgami, bo zawsze znajdziesz swoje miejsce. Bywasz trudny do okiełznania, ale twoja wolność i energia sprawiają, że ludzie cię uwielbiają!",
    },
  ],
  questions: [
    {
      question: "Jak radzisz sobie ze zmianami w życiu?",
      answers: [
        {
          text: "Dostosowuję się do wszystkiego i staram się wyciągnąć z tego coś dobrego.",
          points: 1,
        },
        { text: "Zmiany? Wolę stabilność i spokój.", points: 2 },
        {
          text: "Muszę się trochę nagiąć, ale koniec końców sobie radzę!",
          points: 3,
        },
        { text: "Zmiany? To moje drugie imię!", points: 4 },
      ],
    },
    {
      question: "Jak opisaliby cię znajomi?",
      answers: [
        {
          text: "Pełen życia i wsparcia, jak prawdziwy przyjaciel!",
          points: 1,
        },
        { text: "Solidny, ale czasem trudny do rozgryzienia.", points: 2 },
        {
          text: "Zawsze obecny, ale trzeba wiedzieć, jak do mnie dotrzeć.",
          points: 3,
        },
        { text: "Nieprzewidywalny i pełen energii!", points: 4 },
      ],
    },
    {
      question: "Jak reagujesz na kryzys?",
      answers: [
        { text: "Staram się pomóc innym i znaleźć rozwiązanie.", points: 1 },
        {
          text: "Zachowuję spokój i czekam, aż sytuacja się ustabilizuje.",
          points: 2,
        },
        {
          text: "Potrzebuję chwili, żeby się przystosować, ale daję radę.",
          points: 3,
        },
        { text: "Po prostu idę tam, gdzie wydaje się najlepiej!", points: 4 },
      ],
    },
    {
      question: "Jaka jest twoja wymarzona praca?",
      answers: [
        { text: "Coś, gdzie mogę pomagać i rozwijać innych.", points: 1 },
        {
          text: "Coś, co daje mi stabilność i poczucie bezpieczeństwa.",
          points: 2,
        },
        { text: "Coś, co wymaga elastyczności i pracy zespołowej.", points: 3 },
        { text: "Coś, co pozwala mi podróżować i być w ruchu!", points: 4 },
      ],
    },
    {
      question: "Co robisz, gdy ktoś cię krytykuje?",
      answers: [
        { text: "Próbuję zrozumieć i poprawić swoje błędy.", points: 1 },
        {
          text: "Raczej się tym nie przejmuję – jestem, jaki jestem.",
          points: 2,
        },
        {
          text: "Trzymam to w sobie, ale później analizuję sytuację.",
          points: 3,
        },
        { text: "Odpuszczam i idę swoją drogą!", points: 4 },
      ],
    },
  ],
};
