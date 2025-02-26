import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// MOCKI PRZED `Header`
import {
  mockGoToHomePage,
  mockGoToCategoriesPage,
} from "./mocks/navigationMock";

import { Header } from "../components/Header";
import gameReducer, { resetGame } from "../redux/gameSlice";
import quizReducer, { resetQuiz } from "../redux/quizSlice";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockDispatch = vi.fn();
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    game: gameReducer,
  },
});

beforeEach(() => {
  mockDispatch.mockClear();
  mockGoToHomePage.mockClear();
  mockGoToCategoriesPage.mockClear();

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header text="Test Header" />
      </MemoryRouter>
    </Provider>
  );
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
