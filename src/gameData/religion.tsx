import { Quiz } from "./types";

export const religionQuiz: Quiz = {
  title: "Którą religią jesteś?",
  subtitle:
    "Czy jesteś starą, skostniałą tradycją, czy może nowoczesnym ruchem, który dopiero szuka wyznawców? Sprawdź, jaką duchową drogę reprezentujesz – i czy ktoś w ogóle chce cię praktykować! 🔮",
  image: "/assets/images/church.jpg",
  output: [
    {
      score: 1,
      result: "KATOLICYZM ⛪",
      description:
        "Jesteś instytucją. Dosłownie. Działasz od tysięcy lat, masz swoje tradycje, swoje rytuały i swoich ludzi, którzy zrobią wszystko, żeby cię bronić. Masz ogromne wpływy, ale czasem trochę przesadzasz z kontrolą. Twoje motto? 'Niech się dzieje wola nieba, ale po konsultacji z Watykanem'.",
    },
    {
      score: 2,
      result: "BUDDYZM 🧘",
      description:
        "Jesteś tą spokojną, duchową opcją, którą ludzie wybierają, kiedy mają dość życia i szukają sensu istnienia. Twoi wyznawcy albo są bardzo oświeceni, albo po prostu lubią ładne cytaty o medytacji na Instagramie. Twoje podejście do życia? 'Po co się martwić? To tylko iluzja'.",
    },
    {
      score: 3,
      result: "SCJENTOLOGIA 👽",
      description:
        "Jesteś świeży, kontrowersyjny i dość… dziwny. Nie wiadomo, czy jesteś religią, sektą, czy wielką machiną marketingową, ale jedno jest pewne – masz najlepszy PR w Hollywood. W twojej filozofii kosmici i pieniądze idą w parze. Twoja maksyma? 'Płać i módl się – ale głównie płać'.",
    },
    {
      score: 4,
      result: "PAŃSTWOWY ATEIZM 🌐",
      description:
        "Jesteś tu, żeby powiedzieć wszystkim, że Bóg nie istnieje, i będziesz o tym mówić na każdym kroku. Jesteś logiczny, racjonalny i nie lubisz, gdy ktoś ci mówi, że 'może jednak jest coś więcej'. Masz skłonność do narzucania swojego zdania, ale hej – przecież to dla dobra ludzkości! Twoja dewiza? 'Religia to opium dla mas – ale Netflix już jest w porządku'.",
    },
    {
      score: 5,
      result: "PASTAFARIANIZM 🍝",
      description:
        "Jesteś najbardziej wyluzowaną opcją na tej liście. Wierzysz w Latającego Potwora Spaghetti i masz w nosie, co myślą o tym inni. Twoi wyznawcy noszą durszlaki na głowie i robią to całkiem serio. Twoja filozofia życia? 'Rób, co chcesz, byle było śmiesznie – i jedz dużo makaronu'.",
    },
  ],
  questions: [
    {
      question: "Jak wyobrażasz sobie idealną niedzielę?",
      answers: [
        { text: "W kościele, a potem na obiedzie u babci.", points: 1 },
        { text: "Na medytacji, próbując osiągnąć oświecenie.", points: 2 },
        {
          text: "Dzwoniąc do celebrytów, żeby wstąpili do mojej organizacji.",
          points: 3,
        },
        { text: "Pisząc na forach, że religia to kłamstwo.", points: 4 },
        { text: "W durszlaku na głowie, gotując makaron.", points: 5 },
      ],
    },
    {
      question: "Jaki jest twój stosunek do pieniędzy?",
      answers: [
        {
          text: "Lepiej, żeby było ich dużo, najlepiej w skarbcu Watykanu.",
          points: 1,
        },
        {
          text: "Nie potrzebuję wiele – materialne rzeczy to tylko iluzja.",
          points: 2,
        },
        {
          text: "Wydaj wszystko na kursy samorozwoju i zostaniesz zbawiony!",
          points: 3,
        },
        {
          text: "Religia nie powinna kosztować, ale Netflix to co innego.",
          points: 4,
        },
        { text: "Pieniądze? Wolę kupony na darmowy makaron.", points: 5 },
      ],
    },
    {
      question: "Jaka jest twoja rola w społeczeństwie?",
      answers: [
        { text: "Tradycja, stabilność, tysiące lat historii.", points: 1 },
        { text: "Duchowy przewodnik w drodze do oświecenia.", points: 2 },
        {
          text: "Dostarczanie największych kontrowersji w mediach.",
          points: 3,
        },
        {
          text: "Przekonywanie ludzi, że są głupi, jeśli wierzą w Boga.",
          points: 4,
        },
        { text: "Rozśmieszanie wszystkich i jedzenie makaronu.", points: 5 },
      ],
    },
    {
      question: "Co twoim zdaniem dzieje się po śmierci?",
      answers: [
        { text: "Niebo, piekło i czyściec – klasyka gatunku.", points: 1 },
        { text: "Reinkarnacja i nowa szansa na życie.", points: 2 },
        {
          text: "Jesteś poza systemem, żyjesz w wyższych wibracjach.",
          points: 3,
        },
        { text: "Nic. Po prostu cię nie ma. Koniec tematu.", points: 4 },
        { text: "Makaronowa nirwana wśród chmur z parmezanu.", points: 5 },
      ],
    },
    {
      question: "Jak reagujesz, gdy ktoś nie zgadza się z twoimi poglądami?",
      answers: [
        { text: "Modlę się za niego i liczę, że zmieni zdanie.", points: 1 },
        { text: "Tłumaczę mu spokojnie, że wszystko jest iluzją.", points: 2 },
        {
          text: "Próbuję go przekonać – jeśli się nie uda, trudno, mam innych wyznawców.",
          points: 3,
        },
        {
          text: "Śmieję się i ignoruję – i tak wiem, że mam rację.",
          points: 4,
        },
        {
          text: "Proponuję mu talerz spaghetti i temat sam się rozwiązuje.",
          points: 5,
        },
      ],
    },
    {
      question: "Co najbardziej denerwuje cię w innych religiach?",
      answers: [
        {
          text: "Że nie przestrzegają moich zasad – a przecież są jedyne słuszne!",
          points: 1,
        },
        {
          text: "Że są zbyt materialistyczne i nie szukają prawdy w sobie.",
          points: 2,
        },
        { text: "Że nie są wystarczająco dochodowe i medialne!", points: 3 },
        {
          text: "Że w ogóle istnieją – powinni już dawno zrozumieć, że to bzdura.",
          points: 4,
        },
        {
          text: "Nic mnie nie denerwuje – każda religia jest lepsza z makaronem.",
          points: 5,
        },
      ],
    },
    {
      question: "Co twoi wyznawcy powinni robić?",
      answers: [
        {
          text: "Modlić się, chodzić na msze i przestrzegać przykazań.",
          points: 1,
        },
        { text: "Medytować, odnajdywać wewnętrzny spokój.", points: 2 },
        {
          text: "Płacić mi składki członkowskie i wierzyć w kosmitów.",
          points: 3,
        },
        { text: "Walczyć z religią, bo to zabobony.", points: 4 },
        { text: "Jeść makaron i dobrze się bawić.", points: 5 },
      ],
    },
  ],
};
