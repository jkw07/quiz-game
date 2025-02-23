export type Answer = {
  text: string;
  points: number;
};

export type Output = {
  score: number;
  result: string;
  description: string;
};

export type Question = {
  question: string;
  answers: { text: string; points: number }[];
};

export type Quiz = {
  title: string;
  subtitle: string;
  image: string | null;
  output: Output[];
  questions: Question[];
};
