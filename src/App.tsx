import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ROUTES } from "./config/config";
import { HomePage } from "./components/HomePage";
import "./styles/App.scss";
import { CategoriesPage } from "./components/CategoriesPage";
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
          </Routes>
        </Router>
      </Provider>
    </>
  );
};
