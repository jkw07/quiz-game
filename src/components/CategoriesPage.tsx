import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { startGame } from "../redux/gameSlice";
import { setQuiz } from "../redux/quizSlice";

import { goToQuizPage } from "../config/navigation";

import { GameData } from "../gameData/GameData";
import { Quiz } from "../gameData/types";

import { Header } from "./Header";
import { QuizContainer } from "./QuizContainer";

import "../styles/CategoriesPage.scss";

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePickQuiz = (quiz: Quiz) => {
    dispatch(setQuiz(quiz));
    dispatch(startGame());
    goToQuizPage(navigate);
  };

  return (
    <div className="categories-page">
      <Header text={"Wybierz Quiz"} />
      <div className="categories-container">
        {GameData.map((quiz, index) => {
          return (
            <QuizContainer
              key={index}
              title={quiz.title}
              image={quiz.image}
              onClick={() => handlePickQuiz(quiz)}
            />
          );
        })}
      </div>
    </div>
  );
};
