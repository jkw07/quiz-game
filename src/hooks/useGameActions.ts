import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetGame, startGame } from "../redux/gameSlice";
import { goToCategoriesPage, goToHomePage, goToLoadingScreen, goToQuestionsPage, goToQuizPage } from "../utils/navigation";
import { resetQuiz, setQuiz } from "../redux/quizSlice";
import { Quiz } from "../constans/gameData/types";

export function useGameActions() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePickQuiz = (quiz: Quiz) => {
        dispatch(setQuiz(quiz));
        dispatch(startGame());
        goToQuizPage(navigate);
    };

     const handleReset = () => {
        dispatch(resetGame());
        dispatch(resetQuiz());
      };
    
      const handleResetAndGoToHome = () => {
        goToHomePage(navigate);
        handleReset();
      };
      const handleResetAndGoToCategory = () => {
        goToCategoriesPage(navigate);
        handleReset();
      };

      const handleGoToCategories = () => {
        goToCategoriesPage(navigate);
      };

      const handleGoToLoadingScreen = () => goToLoadingScreen(navigate);

      const handleStartQuestions = () => goToQuestionsPage(navigate);
    
    return {handlePickQuiz, handleReset, handleResetAndGoToCategory, handleResetAndGoToHome, handleGoToCategories, handleGoToLoadingScreen, handleStartQuestions};
};