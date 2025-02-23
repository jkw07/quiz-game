import { Quiz } from "./types";

export const breadQuiz: Quiz = {
  title: "Jakim bochenkiem chleba jesteś?",
  subtitle:
    "Czy jesteś klasycznym chlebem codziennym, czy może rzadko spotykaną, wyjątkową bułką? Sprawdź swój wypiekowy charakter! 🥖",
  image: "/assets/images/bread.jpg",
  output: [
    {
      score: 1,
      result: "PSZENNY KLASYK",
      description:
        "Jesteś chlebem, na którym można polegać – klasyczny, uniwersalny, zawsze w modzie. Pasujesz do wszystkiego – zarówno do masła, jak i do najbardziej wyszukanych dodatków. Ludzie cię kochają, ale nie zawsze doceniają, bo są do ciebie przyzwyczajeni. Gdybyś był człowiekiem, wszyscy przychodziliby do ciebie po radę – jesteś niezastąpiony w każdej sytuacji!",
    },
    {
      score: 2,
      result: "CHLEB NA ZAKWASIE",
      description:
        "Nie każdy cię rozumie, ale ci, którzy cię znają, nie potrafią bez ciebie żyć. Masz głębię charakteru i czasem bywasz nieco kwaśny, ale to właśnie czyni cię wyjątkowym. Nie jesteś dla każdego, ale ci, którzy cię wybierają, wiedzą, że mają do czynienia z klasą premium. Twój charakter rozwija się powoli, ale jak już się ujawni – nikt cię nie zapomni!",
    },
    {
      score: 3,
      result: "BUŁKA MAŚLANA",
      description:
        "Miękki, puszysty i zawsze w centrum uwagi! Ludzie uwielbiają spędzać z tobą czas, bo jesteś chodzącym komfortem. Czasem jesteś trochę zbyt delikatny, ale to tylko dodaje ci uroku. Wszyscy wokół czują się przy tobie dobrze – po prostu otulasz ich swoim ciepłem i masłem!",
    },
    {
      score: 4,
      result: "CHLEB BEZGLUTENOWY",
      description:
        "Jesteś inny niż wszyscy – nie wszyscy cię rozumieją, ale masz swoją wierną ekipę! Ludzie albo cię kochają, albo nie wiedzą, co o tobie myśleć, ale jedno jest pewne – nie da się ciebie zignorować. Często jesteś wybierany w najbardziej wymagających sytuacjach, bo wiesz, jak dostosować się do każdych warunków. Jesteś wyjątkowy i nie boisz się tego pokazać światu!",
    },
  ],
  questions: [
    {
      question: "Jak reagujesz na niespodziewane zmiany planów?",
      answers: [
        { text: "Jestem elastyczny – pasuję do każdej sytuacji!", points: 1 },
        {
          text: "Najpierw muszę to przemyśleć, zmiany wymagają czasu.",
          points: 2,
        },
        { text: "Okej, ale tylko jeśli jest tam coś przyjemnego!", points: 3 },
        { text: "Zmiana? To inni powinni się do mnie dostosować!", points: 4 },
      ],
    },
    {
      question: "Jak ludzie postrzegają twoją osobowość?",
      answers: [
        { text: "Jestem przyjazny i lubiany przez wszystkich.", points: 1 },
        { text: "Mam głębię – potrzeba czasu, by mnie zrozumieć.", points: 2 },
        {
          text: "Jestem miękki i sympatyczny, wszyscy mnie uwielbiają!",
          points: 3,
        },
        {
          text: "Jestem specyficzny, ale moja wyjątkowość przyciąga ludzi.",
          points: 4,
        },
      ],
    },
    {
      question: "Jak wygląda twój idealny poranek?",
      answers: [
        { text: "Kawa, masło, i dobry początek dnia – klasyka!", points: 1 },
        {
          text: "Spokojny, powolny start – nie lubię się spieszyć.",
          points: 2,
        },
        { text: "Długo śpię, a potem otulam się ciepłym kocem.", points: 3 },
        {
          text: "Jestem gotowy na wyzwania, nawet jeśli świat mnie nie rozumie!",
          points: 4,
        },
      ],
    },
    {
      question: "Co myślisz o byciu w centrum uwagi?",
      answers: [
        {
          text: "Nie mam nic przeciwko – wszyscy i tak mnie znają.",
          points: 1,
        },
        {
          text: "Wolę być w tle, ale jeśli mnie zauważą – to zasłużenie!",
          points: 2,
        },
        { text: "Kocham to! Ludzie uwielbiają moją energię!", points: 3 },
        {
          text: "Nie lubię atencji, ale jeśli mnie wybierzesz, to świadomie!",
          points: 4,
        },
      ],
    },
    {
      question: "Jakie jest twoje podejście do tradycji?",
      answers: [
        { text: "Uwielbiam klasyczne podejście do życia!", points: 1 },
        {
          text: "Szanuję tradycję, ale lubię mieć swój własny styl.",
          points: 2,
        },
        { text: "Nie mam zdania, byle było wygodnie!", points: 3 },
        { text: "Tradycja jest dla innych – ja idę swoją drogą!", points: 4 },
      ],
    },
  ],
};
