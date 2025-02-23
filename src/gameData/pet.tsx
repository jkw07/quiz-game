import { Quiz } from "./types";

export const petQuiz: Quiz = {
  title: "Jakim zwierzątkiem domowym jesteś?",
  subtitle:
    "Czy jesteś kotem, który rządzi światem, czy może puchatym króliczkiem, który kocha relaks? Sprawdź swój zwierzęcy charakter! 🏡🐕🐱",
  image: "/assets/images/hamster.jpg",
  output: [
    {
      score: 1,
      result: "KOT 🐱",
      description:
        "Jesteś królem (lub królową) własnego świata – i dobrze ci z tym. Wybierasz, kiedy masz ochotę na kontakt z ludźmi, a kiedy lepiej, żeby ci nie przeszkadzali. Masz talent do ignorowania rzeczy, które cię nie interesują, a wszyscy i tak próbują zdobyć twoją uwagę. Chcesz miłości? Może. Chcesz jedzenia? Zawsze!",
    },
    {
      score: 2,
      result: "PIES 🐶",
      description:
        "Wierność to twoje drugie imię! Jesteś lojalny, przyjacielski i zawsze gotowy do wspólnej zabawy. Czasem masz aż za dużo energii, ale nie można cię za to nie kochać. Każdy cię lubi, bo jesteś promieniem słońca w ich życiu. Twoja supermoc? Sprawianie, że ludzie czują się wyjątkowi – a w zamian chcesz tylko głasków i smakołyków!",
    },
    {
      score: 3,
      result: "CHOMIK 🐹",
      description:
        "Jesteś mały, ale masz wielkie plany (i jeszcze większy magazyn przekąsek). Czasem wpadniesz w szał aktywności, a czasem po prostu chowasz się i odpoczywasz. Nikt nie rozumie, jakim cudem masz tyle siły w tym małym ciele. Jesteś mistrzem organizacji – nikt nie wie, gdzie chowasz swoje skarby, ale ty zawsze o tym pamiętasz!",
    },
    {
      score: 4,
      result: "KRÓLIK 🐰",
      description:
        "Masz w sobie coś uroczo tajemniczego. Wydajesz się spokojny, ale w rzeczywistości jesteś niezłym kombinatorem! Lubisz komfort i delikatność, ale jeśli trzeba, potrafisz pokazać pazurki. Każdy myśli, że jesteś tylko słodką kuleczką, ale wiesz, jak skoczyć na wyższy poziom – dosłownie i w przenośni!",
    },
  ],
  questions: [
    {
      question: "Jak lubisz spędzać wolny czas?",
      answers: [
        { text: "Samotnie, w ciszy – tylko ja i moje myśli.", points: 1 },
        {
          text: "Wśród ludzi! Kocham towarzystwo i wspólne zabawy!",
          points: 2,
        },
        {
          text: "Aktywnie! Ale tylko przez chwilę, bo szybko się męczę.",
          points: 3,
        },
        { text: "Leniwie – im więcej relaksu, tym lepiej!", points: 4 },
      ],
    },
    {
      question: "Jaka jest twoja reakcja na jedzenie?",
      answers: [
        { text: "Jem, kiedy mam ochotę, nie kiedy ktoś mi każe.", points: 1 },
        { text: "Jedzenie to moje paliwo – im więcej, tym lepiej!", points: 2 },
        {
          text: "Zbieram zapasy – nigdy nie wiadomo, kiedy się przydadzą.",
          points: 3,
        },
        { text: "Wolę podjadać małe przekąski przez cały dzień.", points: 4 },
      ],
    },
    {
      question: "Co myślisz o ludziach?",
      answers: [
        { text: "Lubię ich, ale w ograniczonych dawkach.", points: 1 },
        { text: "Ludzie to moi najlepsi przyjaciele!", points: 2 },
        {
          text: "Są okej, dopóki nie przeszkadzają mi w moich planach.",
          points: 3,
        },
        {
          text: "Jeśli przynoszą jedzenie i głaszczą, to mogą zostać!",
          points: 4,
        },
      ],
    },
    {
      question: "Jak reagujesz na stres?",
      answers: [
        { text: "Ignoruję go, jakby nie istniał.", points: 1 },
        { text: "Szukam wsparcia u bliskich – razem damy radę!", points: 2 },
        { text: "Biegam w kółko i nie wiem, co robić!", points: 3 },
        { text: "Znikam i czekam, aż wszystko samo się rozwiąże.", points: 4 },
      ],
    },
    {
      question: "Co myślisz o śnie?",
      answers: [
        {
          text: "Śpię, ale zawsze jednym okiem obserwuję otoczenie.",
          points: 1,
        },
        { text: "Sen? A co to? Mam tyle do zrobienia!", points: 2 },
        { text: "Uwielbiam spać – szczególnie zwinięty w kłębek.", points: 3 },
        {
          text: "Sen to moje drugie imię. Najlepiej cały dzień w ciepełku!",
          points: 4,
        },
      ],
    },
  ],
};
