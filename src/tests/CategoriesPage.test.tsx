import { screen, fireEvent } from "@testing-library/react";

import {
  renderComponent,
  resetMocks,
  mockNavigate,
  mockDispatch,
} from "./testUtils";
import { startGame } from "../redux/gameSlice";
import { setQuiz } from "../redux/quizSlice";
import { gameData } from "../gameData/gameData";

// Mocki przed komponentem!
import { mockGoToQuizPage } from "./mocks/navigationMock";
import { CategoriesPage } from "../components/CategoriesPage";

beforeEach(() => {
  resetMocks();
  mockGoToQuizPage.mockClear();
  renderComponent(<CategoriesPage />);
});

test("renders at least one quiz", () => {
  expect(screen.getByText(/Wybierz Quiz/i)).toBeInTheDocument();

  const quizContainers = screen.getAllByTestId("quiz-container");
  expect(quizContainers.length).toBeGreaterThan(0);
});

test("clicking on a quiz triggers dispatch and navigation", () => {
  const quizzes = screen.getAllByTestId("quiz-container");
  fireEvent.click(quizzes[0]);

  expect(mockDispatch).toHaveBeenCalledWith(startGame());
  expect(mockDispatch).toHaveBeenCalledWith(setQuiz(gameData[0]));

  expect(mockGoToQuizPage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToQuizPage).toHaveBeenCalledTimes(1);
});
