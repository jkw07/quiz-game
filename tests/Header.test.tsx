import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest"; // Używamy `vi` zamiast `jest`
import { Header } from "../src/components/Header";
import gameReducer from "../src/redux/gameSlice";
import quizReducer from "../src/redux/quizSlice";
import { goToHomePage, goToCategoriesPage } from "../src/config/navigation";

// Mockujemy funkcje nawigacyjne
vi.mock("../src/config/navigation", () => ({
  goToHomePage: vi.fn(),
  goToCategoriesPage: vi.fn(),
}));

test("Home and Category buttons dispatch reset actions and navigate", () => {
  const store = configureStore({
    reducer: {
      quiz: quizReducer,
      game: gameReducer,
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header text="Test Header" />
      </MemoryRouter>
    </Provider>
  );

  const homeButton = screen.getByTestId("home-button");
  const categoriesButton = screen.getByTestId("categories-button");

  fireEvent.click(homeButton);
  expect(store.getState().quiz.selectedAnswers).toEqual([]);
  expect(store.getState().game.status).toBe("none");
  expect(goToHomePage).toHaveBeenCalled();

  fireEvent.click(categoriesButton);
  expect(store.getState().quiz.selectedAnswers).toEqual([]);
  expect(store.getState().game.status).toBe("none");
  expect(goToCategoriesPage).toHaveBeenCalled();
});
