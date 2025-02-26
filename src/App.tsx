import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ROUTES } from "./config/routes";
import { HomePage } from "./components/HomePage";
import "./styles/App.scss";
import { CategoriesPage } from "./components/CategoriesPage";
import { QuestionsPage } from "./components/QuestionsPage";
import { Results } from "./components/Results";
import { LoadingScreen } from "./components/LoadingScreen";
import { QuizPage } from "./components/QuizPage";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.CATEGORY} element={<CategoriesPage />} />
            <Route path={ROUTES.QUIZ_PAGE} element={<QuizPage />} />
            <Route path={ROUTES.RESULTS} element={<Results />} />
            <Route path={ROUTES.LOADING_SCREEN} element={<LoadingScreen />} />
            <Route path={ROUTES.QUESTIONS_PAGE} element={<QuestionsPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};
