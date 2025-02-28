import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "../config/routes";

export const goToCategoriesPage = (navigate: NavigateFunction) => navigate(ROUTES.CATEGORY);
export const goToHomePage = (navigate: NavigateFunction) => navigate(ROUTES.HOME);
export const goToQuizPage = (navigate: NavigateFunction) => navigate(ROUTES.QUIZ_PAGE);
export const goToResults = (navigate: NavigateFunction) => navigate(ROUTES.RESULTS);
export const goToLoadingScreen = (navigate: NavigateFunction) => navigate(ROUTES.LOADING_SCREEN);
export const goToQuestionsPage = (navigate: NavigateFunction) => navigate(ROUTES.QUESTIONS_PAGE);

