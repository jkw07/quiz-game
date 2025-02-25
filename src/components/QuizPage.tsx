import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../redux/store";
import { goToQuestionsPage } from "../config/navigation";

import { Header } from "./Header";

import "../styles/QuizPage.scss";

export const QuizPage = () => {
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.quiz);

  const handleClick = () => {
    goToQuestionsPage(navigate);
  };

  return (
    <div className="quiz-page">
      <Header text={state.title} />
      <div className="quiz-main-container">
        <img src={state.image || ""} />
        <p>{state.subtitle}</p>
        <button onClick={handleClick}>zaczynamy!</button>
      </div>
    </div>
  );
};
