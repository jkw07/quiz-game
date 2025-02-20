import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "../config/config";

export const goToCategoriesPage = (navigate: NavigateFunction) => {
  navigate(ROUTES.CATEGORY);
};

export const goToHomePage = (navigate: NavigateFunction) => {
  navigate(ROUTES.HOME);
};

export const goToQuizPage = (navigate: NavigateFunction) => {
  navigate(ROUTES.QUIZ_PAGE);
};
