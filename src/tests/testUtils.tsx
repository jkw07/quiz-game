import { vi } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, Store } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import gameReducer from "../redux/gameSlice";
import quizReducer from "../redux/quizSlice";
import type { RootState } from "../redux/store";

// `mockNavigate` globalny
export const mockNavigate = vi.fn();

// Mockowanie `useNavigate`
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate, //Teraz `useNavigate` zwraca `mockNavigate`
  };
});

// Mockowanie `useDispatch`
export const mockDispatch = vi.fn();
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

// Tworzenie `store`
export let store: Store<RootState>;

export const renderComponent = (
  component: React.ReactNode,
  preloadedState?: Parameters<typeof configureStore>[0]["preloadedState"]
) => {
  store = configureStore({
    reducer: {
      quiz: quizReducer,
      game: gameReducer,
    },
    preloadedState, // możliwość przekazania `preloadedState`
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );
};

// Reset mockow przed każdym testem
export const resetMocks = () => {
  mockDispatch.mockClear();
  mockNavigate.mockClear();
};
