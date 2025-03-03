import logo from "../assets/images/logo2.png";
import "../styles/HomePage.scss";
import { useGameActions } from "../hooks/useGameActions";

export const HomePage = () => {
  const { handleGoToCategories } = useGameActions();

  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Quiz Logo" />
      </div>
      <p>
        Zastanawiałeś się kiedyś, jakim typem ziemniaka jesteś? Może jesteś
        purée - delikatny i zawsze w sam raz, albo chrupiącym frytkiem, pełnym
        energii i charakteru? A może bardziej pasujesz do jakiegoś mebla lub...
        typowej pogody?
      </p>
      <p>
        Odpowiedz na kilka pytań i odkryj, jakim typem jesteś w różnych quizach!
        Czeka Cię niespodzianka!
      </p>
      <button onClick={handleGoToCategories}>
        <i className="fa-solid fa-play"></i>
        START
      </button>
    </div>
  );
};
