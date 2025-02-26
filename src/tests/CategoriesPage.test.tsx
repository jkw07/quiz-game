import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { vi } from "vitest";
import { gameData } from "../gameData/gameData";
import "@testing-library/jest-dom";

// MOCKI PRZED `Header`
import { mockGoToQuizPage } from "./mocks/navigationMock";

import { CategoriesPage } from "../components/CategoriesPage";
import gameReducer, { startGame } from "../redux/gameSlice";
import quizReducer, { setQuiz } from "../redux/quizSlice";

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
  mockGoToQuizPage.mockClear();

  render(
    <Provider store={store}>
      <MemoryRouter>
        <CategoriesPage />
      </MemoryRouter>
    </Provider>
  );
});

test("renders at least one quiz", () => {
  expect(screen.getByText(/Wybierz Quiz/i)).toBeInTheDocument();

  // czy wyświetla się przynajmniej jeden quiz
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
