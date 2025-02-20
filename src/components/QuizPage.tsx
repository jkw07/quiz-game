import { Header } from "./Header";
import { useSelector } from "react-redux";

interface Output {
  score: number;
  result: string;
  description: string;
}

export const QuizPage = () => {
  const quizTitle = useSelector(
    (state: { quiz: { title: string } }) => state.quiz.title
  );
  const quizOutput = useSelector(
    (state: { quiz: { output: Output } }) => state.quiz.output
  );
  console.log(quizOutput);
  return <Header text={quizTitle} />;
};

/* title: null,
    output: null,
    questions: null,
    selectedAnswers: [] as (number | null)[],

    const quizTitle = useSelector(
    (state: { quiz: { title: string } }) => state.quiz.title
  ); */
