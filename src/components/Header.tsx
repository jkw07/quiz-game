import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetGame } from "../redux/gameSlice";
import { resetQuiz } from "../redux/quizSlice";

import { goToHomePage } from "../config/navigation";
import { goToCategoriesPage } from "../config/navigation";

import "../styles/Header.scss";

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch(resetGame());
    dispatch(resetQuiz());
  };

  const handleGoToHome = () => {
    goToHomePage(navigate);
    handleReset();
  };
  const handleGoToCategory = () => {
    goToCategoriesPage(navigate);
    handleReset();
  };

  return (
    <div className="header-container">
      <div className="header-buttons-container">
        <button onClick={handleGoToHome}>
          <i className="fa-solid fa-house fa-2xl home-button"></i>
        </button>
        <button onClick={handleGoToCategory}>
          <i className="fa-solid fa-list fa-2xl categories-button"></i>
        </button>
      </div>
      <h1>{text}</h1>
    </div>
  );
};
