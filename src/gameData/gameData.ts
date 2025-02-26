import { attachmentstyleQuiz } from "./attachmentstyle";
import { breadQuiz } from "./bread";
import { mathQuiz } from "./math";
import { petQuiz } from "./pet";
import { potatoeQuiz } from "./potatoe";
import { rainQuiz } from "./rain";
import { religionQuiz } from "./religion";
import { scamQuiz } from "./scam";
import { soilQuiz } from "./soil";
import { tvseriesQuiz } from "./tvseries";
import { Quiz } from "./types";
import { wikiQuiz } from "./wiki";

export const gameData: Quiz[] = [
  potatoeQuiz,
  religionQuiz,
  soilQuiz,
  attachmentstyleQuiz,
  breadQuiz,
  petQuiz,
  mathQuiz,
  rainQuiz,
  scamQuiz,
  tvseriesQuiz,
  wikiQuiz,
];
