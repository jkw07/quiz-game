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

interface QuizState {
  title: string | null;
  subtitle: string | null;
  image: string | null;
  output: Output[] | null;
  questions: Question[] | null;
  selectedAnswers: (number | null)[];
}

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    title: null,
    subtitle: null,
    image: null,
    output: null,
    questions: null,
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
      state.title = null;
      state.subtitle = null;
      state.image = null;
      state.output = null;
      state.questions = null;
      state.selectedAnswers = [];
    },
  },
});

export const { setQuiz, recordAnswer, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
