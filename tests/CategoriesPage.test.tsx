import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { CategoriesPage } from "../src/components/CategoriesPage";
import gameReducer from "../src/redux/gameSlice";
import quizReducer from "../src/redux/quizSlice";
import "@testing-library/jest-dom";

const store = configureStore({
  reducer: {
    game: gameReducer,
    quiz: quizReducer,
  },
});

test("renders at least one quiz", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CategoriesPage />
      </MemoryRouter>
    </Provider>
  );

  // czy wyświetla się nagłówek
  expect(screen.getByText(/Wybierz Quiz/i)).toBeInTheDocument();

  // czy wyświetla się przynajmniej jeden quiz
  const quizContainers = screen.getAllByTestId("quiz-container");
  expect(quizContainers.length).toBeGreaterThan(0);
});

test("clicking on a quiz triggers dispatch and navigation", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CategoriesPage />
      </MemoryRouter>
    </Provider>
  );

  const quizzes = screen.getAllByTestId("quiz-container");
  fireEvent.click(quizzes[0]);
});
