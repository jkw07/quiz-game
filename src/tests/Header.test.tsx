import { screen, fireEvent } from "@testing-library/react";

import {
  renderComponent,
  resetMocks,
  mockNavigate,
  mockDispatch,
} from "./testUtils";
import { resetGame } from "../redux/gameSlice";
import { resetQuiz } from "../redux/quizSlice";

// Mocki przed komponentem!
import {
  mockGoToHomePage,
  mockGoToCategoriesPage,
} from "./mocks/navigationMock";

import { Header } from "../components/Header";

beforeEach(() => {
  resetMocks();
  mockGoToHomePage.mockClear();
  mockGoToCategoriesPage.mockClear();
  renderComponent(<Header text="Test Header" />);
});

test("Home button dispatches reset actions and navigates", () => {
  const homeButton = screen.getByTestId("home-button");
  fireEvent.click(homeButton);

  expect(mockDispatch).toHaveBeenCalledWith(resetGame());
  expect(mockDispatch).toHaveBeenCalledWith(resetQuiz());

  expect(mockGoToHomePage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToHomePage).toHaveBeenCalledTimes(1);
});

test("Category button dispatches reset actions and navigates", () => {
  const categoriesButton = screen.getByTestId("categories-button");
  fireEvent.click(categoriesButton);

  expect(mockDispatch).toHaveBeenCalledWith(resetGame());
  expect(mockDispatch).toHaveBeenCalledWith(resetQuiz());

  expect(mockGoToCategoriesPage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToCategoriesPage).toHaveBeenCalledTimes(1);
});
