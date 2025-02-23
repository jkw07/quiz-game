import { attachmentstyleQuiz } from "./attachmentstyle";
import { breadQuiz } from "./bread";
import { petQuiz } from "./pet";
import { potatoeQuiz } from "./potatoe";
import { religionQuiz } from "./religion";
import { soilQuiz } from "./soil";
import { Quiz } from "./types";

export const GameData: Quiz[] = [
  potatoeQuiz,
  religionQuiz,
  soilQuiz,
  attachmentstyleQuiz,
  breadQuiz,
  petQuiz,
];
