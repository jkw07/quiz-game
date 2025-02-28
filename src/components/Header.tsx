import "../styles/Header.scss";
import { useGameActions } from "../hooks/useGameActions";

type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => {
  const { handleResetAndGoToCategory, handleResetAndGoToHome } =
    useGameActions();

  return (
    <div className="header-container">
      <div className="header-buttons-container">
        <button onClick={handleResetAndGoToHome} data-testid="home-button">
          <i className="fa-solid fa-house fa-2xl home-button"></i>
        </button>
        <button
          onClick={handleResetAndGoToCategory}
          data-testid="categories-button"
        >
          <i className="fa-solid fa-list fa-2xl categories-button"></i>
        </button>
      </div>
      <h1>{text}</h1>
    </div>
  );
};
