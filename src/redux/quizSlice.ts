import { createSlice } from "@reduxjs/toolkit";

interface Question {
  question: string;
  answers: { text: string; points: number }[];
}

interface Output {
  score: number;
  result: string;
  description: string;
}

export interface QuizState {
  title: string;
  subtitle: string;
  image: string | null;
  output: Output[];
  questions: Question[];
  selectedAnswers: (number | null)[];
}

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    title: "",
    subtitle: "",
    image: null,
    output: [],
    questions: [],
    selectedAnswers: [] as (number | null)[],
  } as QuizState,
  reducers: {
    setQuiz: (state, action) => {
      const { title, subtitle, image, output, questions } = action.payload;
      state.title = title;
      state.subtitle = subtitle;
      state.image = image;
      state.output = output;
      state.questions = questions;
      state.selectedAnswers = Array(questions.length).fill(null);
    },
    recordAnswer: (state, action) => {
      const { questionIndex, points } = action.payload;
      state.selectedAnswers[questionIndex] = points;
    },
    resetQuiz: (state) => {
      state.title = "";
      state.subtitle = "";
      state.image = "";
      state.output = [];
      state.questions = [];
      state.selectedAnswers = [];
    },
  },
});

export const { setQuiz, recordAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
