import { Quiz } from "./types";

export const tvseriesQuiz: Quiz = {
  title: "Jakim serialem jesteś?",
  subtitle:
    "Czy twoje życie to chaotyczna komedia, pełna zwrotów akcji drama, czy może spokojny i ciepły sitcom? Sprawdź, jakim serialem jesteś i jakie emocje serwujesz światu! 🎬",
  image: "/assets/images/tv.jpg",
  output: [
    {
      score: 1,
      result: "PRZYJACIELE (Friends) 🏙️",
      description:
        "Jesteś ciepły, zabawny i wszyscy czują się dobrze w twoim towarzystwie. Twój świat kręci się wokół przyjaźni i codziennych absurdów, które zamieniasz w świetne historie. Nie zawsze wszystko idzie po twojej myśli, ale koniec końców każdy dzień kończy się uśmiechem. Jesteś klasykiem – ludzie wracają do ciebie, gdy potrzebują poprawy humoru!",
    },
    {
      score: 2,
      result: "GRA O TRON (Game of Thrones) 🐉",
      description:
        "Twoje życie to nieustanna walka o przetrwanie – pełne dramatów, intryg i niespodziewanych zwrotów akcji. Ludzie nigdy nie wiedzą, czego się po tobie spodziewać, ale jedno jest pewne: nudno z tobą nie jest! Czasem możesz być nieco brutalny w swoich decyzjach, ale w końcu chodzi o to, żeby wygrać, prawda? Żelazny tron nie zdobędzie się sam!",
    },
    {
      score: 3,
      result: "THE OFFICE 🏢",
      description:
        "Masz nietypowe poczucie humoru i bywasz mistrzem niezręcznych sytuacji. Twoja codzienność to zbiór dziwnych dialogów i absurdalnych sytuacji, które inni mogą nie rozumieć. Ludzie albo cię uwielbiają, albo nie wiedzą, co o tobie myśleć, ale jedno jest pewne – jesteś niezapomniany. Niby zwyczajny, a jednak pełen chaosu i genialnych momentów!",
    },
    {
      score: 4,
      result: "STRANGER THINGS 🚲",
      description:
        "Masz w sobie coś tajemniczego – czasem wkraczasz w inny wymiar rzeczywistości. Twoje życie to mieszanka nostalgii, przygody i lekkiego niepokoju, ale wszyscy i tak chcą być blisko ciebie. Niby zwykły dzień, a jednak zawsze znajdzie się jakiś potwór do pokonania! Twoja ekipa jest dla ciebie wszystkim – razem możecie przetrwać każdy Upside Down.",
    },
  ],
  questions: [
    {
      question: "Jak wygląda twój idealny weekend?",
      answers: [
        { text: "Z przyjaciółmi, śmiejąc się do łez!", points: 1 },
        {
          text: "Intrygi, strategia i walka o swoje – w każdej formie.",
          points: 2,
        },
        { text: "Pracując... ale w sumie i tak się z tego śmieję.", points: 3 },
        {
          text: "Eksplorując tajemnice świata i przeżywając dziwne przygody.",
          points: 4,
        },
      ],
    },
    {
      question: "Jakie jest twoje podejście do problemów?",
      answers: [
        { text: "Śmiech to najlepsza broń!", points: 1 },
        { text: "Każdy problem to okazja do wygranej.", points: 2 },
        {
          text: "Udaję, że wszystko jest w porządku, ale wewnętrznie panikuję.",
          points: 3,
        },
        {
          text: "Najpierw się martwię, potem odkrywam coś niesamowitego.",
          points: 4,
        },
      ],
    },
    {
      question: "Jaką rolę pełnisz w grupie znajomych?",
      answers: [
        { text: "Ten, który zawsze wszystkich rozśmiesza!", points: 1 },
        { text: "Lider, strateg, czasem wróg, czasem przyjaciel.", points: 2 },
        {
          text: "Dziwak, którego ludzie uwielbiają lub totalnie nie rozumieją.",
          points: 3,
        },
        {
          text: "Tajemnicza osoba, która ma przeczucie, że coś się zaraz wydarzy.",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz, gdy ktoś cię zdenerwuje?",
      answers: [
        { text: "Obracam to w żart – po co się stresować?", points: 1 },
        {
          text: "Robię listę rzeczy, które mogę wykorzystać przeciwko tej osobie.",
          points: 2,
        },
        { text: "Zmieniam temat i udaję, że mnie to nie rusza.", points: 3 },
        {
          text: "Obserwuję sytuację – może tu kryje się coś więcej?",
          points: 4,
        },
      ],
    },
    {
      question: "Gdyby twoje życie było filmem, jaki miałoby klimat?",
      answers: [
        {
          text: "Komedia z lekkim dramatem – ale zawsze z happy endem!",
          points: 1,
        },
        { text: "Epicka saga o władzy i przetrwaniu.", points: 2 },
        { text: "Mockument o absurdach codzienności.", points: 3 },
        { text: "Thriller sci-fi z elementami nostalgii.", points: 4 },
      ],
    },
  ],
};
