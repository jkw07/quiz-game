import { Quiz } from "./types";

export const mathQuiz: Quiz = {
  title: "Którą funkcją matematyczną jesteś?",
  subtitle:
    "Czy twoje życie to harmonijne sinusoidy, czy może rozwijasz się w tempie logarytmicznym? Sprawdź, jaka matematyczna zasada rządzi twoją osobowością! 📊",
  image: "/assets/images/math.jpg",
  output: [
    {
      score: 1,
      result: "SINUSOIDA",
      description:
        "Lubisz wzloty i upadki, byle było ekscytująco! Żyjesz według zasady: raz na górze, raz na dole, ale nigdy w miejscu. Nawet gdy ludzie myślą, że ogarnęli twój rytm, nagle ich zaskakujesz. Twoje życie to nieustanna fala emocji – czasem surfing, czasem tsunami!",
    },
    {
      score: 2,
      result: "LOGARYTM",
      description:
        "Zaczynasz powoli, ale później nie da się Ciebie zatrzymać! Ludzie mogą cię lekceważyć na początku, ale potem nagle – BUM – jesteś wszędzie. Masz ukrytą siłę, która rośnie w nieskończoność, a zanim inni się zorientują, już jesteś na szczycie. Nie spieszysz się – twoja strategia to cierpliwe wspinanie się po wykresie życia!",
    },
    {
      score: 3,
      result: "WIELOMIAN",
      description:
        "Skomplikowany, ale wart wysiłku! Nie każdy od razu cię rozumie, ale ci, którzy się postarają, wiedzą, że jesteś geniuszem. Możesz mieć wiele zwrotów akcji, a rozwiązanie twoich tajemnic to nie lada wyzwanie. Gdy pojawiają się problemy, przekształcasz je w wielkie rzeczy – dosłownie!",
    },
    {
      score: 4,
      result: "STAŁA",
      description:
        "Stabilny, ale kiedy trzeba, potrafisz zaskoczyć. Jesteś jak matematyczny zen – nic cię nie rusza, zawsze trzymasz się swojej wartości. Można na ciebie liczyć – dosłownie, bo przecież jesteś stały!",
    },
  ],
  questions: [
    {
      question: "Jak podchodzisz do zmian w życiu?",
      answers: [
        {
          text: "Kocham zmiany! Bez wzlotów i upadków byłoby nudno.",
          points: 1,
        },
        {
          text: "Powoli się dostosowuję, ale jak już wejdę na ścieżkę, to lecę!",
          points: 2,
        },
        {
          text: "Zależy od sytuacji – czasem się skomplikuję, a czasem uproszczę.",
          points: 3,
        },
        {
          text: "Ja się nie zmieniam, to świat zmienia się wokół mnie.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak reagujesz na niespodzianki?",
      answers: [
        {
          text: "Zupełnie normalnie… a potem BUM! Zaskakuję wszystkich!",
          points: 1,
        },
        {
          text: "Na początku nie wiem, co się dzieje, ale potem wygrywam!",
          points: 2,
        },
        {
          text: "Niektóre mnie bawią, inne sprawiają, że zaczynam kombinować.",
          points: 3,
        },
        {
          text: "Nic mnie nie rusza, przecież wszystko ma swój porządek.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak wyglądają twoje relacje z ludźmi?",
      answers: [
        {
          text: "Raz jestem duszą towarzystwa, raz chowam się w kącie – zależy od dnia!",
          points: 1,
        },
        {
          text: "Na początku jestem cichy, ale potem wszyscy mnie znają!",
          points: 2,
        },
        {
          text: "Niełatwo mnie rozgryźć, ale gdy się uda, jestem niezastąpiony.",
          points: 3,
        },
        {
          text: "Mam swoją stałą ekipę i trzymam się jej niezależnie od wszystkiego.",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz, gdy napotykasz trudności?",
      answers: [
        {
          text: "Chwila paniki, a potem lecę dalej – nie pierwszy raz!",
          points: 1,
        },
        {
          text: "Na początku wolno, ale potem radzę sobie lepiej niż inni.",
          points: 2,
        },
        {
          text: "Wiem, że będzie ciężko, ale ostatecznie i tak znajdę rozwiązanie.",
          points: 3,
        },
        {
          text: "Problemy? Jakie problemy? Działam tak samo niezależnie od sytuacji.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak wygląda twój typowy dzień?",
      answers: [
        {
          text: "Każdy dzień jest inny – nigdy nie wiadomo, co się wydarzy!",
          points: 1,
        },
        {
          text: "Powoli rozkręcam się w ciągu dnia, ale wieczorem jestem w szczytowej formie!",
          points: 2,
        },
        {
          text: "Zależy, co mnie spotka – czasem jest prosto, czasem pełen chaos!",
          points: 3,
        },
        { text: "Dzień jak co dzień – wszystko pod kontrolą.", points: 4 },
      ],
    },
  ],
};
