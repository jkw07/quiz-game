import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Header } from "./Header";
import { useGameActions } from "../hooks/useGameActions";
import "../styles/QuizPage.scss";

export const QuizPage = () => {
  const { handleStartQuestions } = useGameActions();
  const state = useSelector((state: RootState) => state.quiz);

  return (
    <div className="quiz-page">
      <Header text={state.title} />
      <div className="quiz-main-container">
        <img src={state.image || ""} />
        <p>{state.subtitle}</p>
        <button onClick={handleStartQuestions}>zaczynamy!</button>
      </div>
    </div>
  );
};
