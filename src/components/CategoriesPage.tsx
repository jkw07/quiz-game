import { gameData } from "../constans/gameData/gameData";
import { Header } from "./Header";
import { QuizContainer } from "./QuizContainer";
import "../styles/CategoriesPage.scss";
import { useGameActions } from "../hooks/useGameActions";

export const CategoriesPage = () => {
  const { handlePickQuiz } = useGameActions();

  return (
    <div className="categories-page">
      <Header text={"Wybierz Quiz"} />
      <div className="categories-container">
        {gameData.map((quiz, index) => {
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
