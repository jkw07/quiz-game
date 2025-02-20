import "../styles/CategoriesPage.scss";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { GameData } from "../gameData/GameData";
import { QuizContainer } from "./QuizContainer";
import { useDispatch } from "react-redux";
import { startGame } from "../redux/gameSlice";
import { setQuiz } from "../redux/quizSlice";
import { Quiz } from "../gameData/types";
import { goToQuizPage } from "../config/navigation";

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
              onClick={() => handlePickQuiz(quiz)}
            />
          );
        })}
      </div>
    </div>
  );
};
