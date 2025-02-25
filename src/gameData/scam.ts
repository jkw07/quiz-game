import { Quiz } from "./types";

export const scamQuiz: Quiz = {
  title: "Jakim rodzajem oszustwa jesteś?",
  subtitle:
    "Czy jesteś klasycznym złodziejem tożsamości, sprytną piramidą finansową, czy może naciągaczem na cudowne diety? Sprawdź, jakim oszustwem zawojowałbyś świat! 💸",
  image: "/assets/images/money.jpg",
  output: [
    {
      score: 1,
      result: "PIRAMIDA FINANSOWA 🏗️💰",
      description:
        "Jesteś klasyką gatunku. Obiecujesz gruszki na wierzbie, ale wiesz, że na końcu wszyscy dostaną tylko długi. Twoja supermoc? Sprawianie, że ludzie myślą, iż bogactwo jest tuż za rogiem – o ile namówią jeszcze pięciu znajomych. Najlepsi oszuści na świecie zaczynali od ciebie!",
    },
    {
      score: 2,
      result: "PRINCE Z NIGERII ✉️👑",
      description:
        "Jesteś elegancki i pełen klasy – przynajmniej w mailach, które rozsyłasz. Każdy zna twoje sztuczki, ale nadal znajdujesz naiwnych, którzy myślą, że tajemniczy książę naprawdę chce podzielić się milionami. Twoja supermoc? Umiejętność sprawiania, że ludzie wpisują dane swojej karty kredytowej bez zastanowienia!",
    },
    {
      score: 3,
      result: "DIETA CUD 🍏✨",
      description:
        "Schudnij 20 kg w tydzień bez wysiłku! Brzmi znajomo? Jesteś mistrzem wciskania ludziom, że mogą osiągnąć niemożliwe, o ile kupią twój magiczny proszek albo przestaną jeść cokolwiek poza sokiem z selera. Twoja supermoc? Zdobywanie klientów, którzy po miesiącu wracają do fast foodów.",
    },
    {
      score: 4,
      result: "OSZUSTWO NA 'NAJBOGATSZEGO INWESTORA' 📈💎",
      description:
        "Jesteś królem LinkedIna i Twittera – wszyscy wierzą, że masz luksusowy styl życia, choć tak naprawdę ledwo masz na czynsz. Sprzedajesz kursy o inwestowaniu, choć twoje jedyne inwestycje to grafiki stockowe twojego Bugatti. Twoja supermoc? Ludzie myślą, że ich życie zmieni się dzięki twoim 'strategiom sukcesu'. Spoiler: nie zmieni.",
    },
  ],
  questions: [
    {
      question: "Jaki jest twój ulubiony sposób zarabiania pieniędzy?",
      answers: [
        { text: "Nie zarabiam – inni pracują na mnie!", points: 1 },
        {
          text: "Piszę maile do nieznajomych i liczę na ich hojność.",
          points: 2,
        },
        { text: "Sprzedaję ludziom marzenia o idealnym ciele.", points: 3 },
        {
          text: "Udaję guru biznesu i robię live'y o 'wolności finansowej'.",
          points: 4,
        },
      ],
    },
    {
      question: "Jaką obietnicę złożysz swoim ofiarom?",
      answers: [
        {
          text: "Nieograniczone bogactwo – o ile zaproszą znajomych!",
          points: 1,
        },
        {
          text: "Jestem miliarderem i potrzebuję tylko twojego numeru konta!",
          points: 2,
        },
        {
          text: "Schudniesz bez wysiłku, wystarczy pić tylko wodę i nadzieję.",
          points: 3,
        },
        {
          text: "Za 599 zł nauczę cię, jak zarobić milion. NIGDY nie pracując!",
          points: 4,
        },
      ],
    },
    {
      question: "Jak reagujesz, gdy ktoś odkryje twój przekręt?",
      answers: [
        { text: "Mówię, że to nie moja wina – to system jest zły!", points: 1 },
        { text: "Blokuję ich i szukam kolejnych naiwniaków.", points: 2 },
        {
          text: "Tłumaczę, że nie stosowali mojej diety 'w 100% poprawnie'.",
          points: 3,
        },
        { text: "Tworzę nowy profil i zaczynam od nowa!", points: 4 },
      ],
    },
    {
      question: "Jaki jest twój wymarzony klient?",
      answers: [
        {
          text: "Ktoś, kto desperacko chce być bogaty i uwierzy w każde brednie.",
          points: 1,
        },
        {
          text: "Starsza osoba, która kliknie w każdy dziwny e-mail.",
          points: 2,
        },
        {
          text: "Osoba, która chce schudnąć i kupi wszystko, byleby nie ćwiczyć.",
          points: 3,
        },
        {
          text: "Gość, który myśli, że oglądanie moich kursów uczyni go milionerem.",
          points: 4,
        },
      ],
    },
    {
      question: "Co robisz, gdy ktoś cię oskarży o oszustwo?",
      answers: [
        {
          text: "Mówię, że to ich wina, bo nie zaprosili wystarczającej liczby osób!",
          points: 1,
        },
        { text: "Udaję, że nie rozumiem i wysyłam więcej spamu.", points: 2 },
        {
          text: "Mówię, że 'wystarczyło stosować dietę zgodnie z instrukcją'.",
          points: 3,
        },
        {
          text: "Wyjaśniam, że hejterzy nie rozumieją 'mentalności sukcesu'.",
          points: 4,
        },
      ],
    },
  ],
};
