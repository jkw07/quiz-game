import { screen } from "@testing-library/react";

import { renderComponent, resetMocks } from "./testUtils";
import { Results } from "../components/Results";
import { vi, Mock } from "vitest";
import * as selectors from "../redux/selectors";

//dla framer-motion
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

// Mockowanie `resultSelector`
vi.mock("../redux/selectors", async () => {
  const actual = await vi.importActual<typeof selectors>("../redux/selectors");
  return {
    ...actual, // zachowane oryginalne funkcje
    resultSelector: vi.fn(), // zamockowany selektor
  };
});

import { resultSelector } from "../redux/selectors";

beforeEach(() => {
  resetMocks();
});

test("renders quiz result correctly", () => {
  // symulacja wyniku quizu
  const mockResult = {
    result: "Wynik",
    description: "Opis wyniku",
  };

  (resultSelector as Mock).mockReturnValue(mockResult); // wartość zwracana przez selektor

  renderComponent(<Results />);

  expect(screen.getByText(mockResult.result)).toBeInTheDocument();
  expect(screen.getByText(mockResult.description)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    mockResult.result
  );
});

test("renders error message when result is not found", () => {
  (resultSelector as Mock).mockReturnValue(null); // symulujemy brak wyniku

  renderComponent(<Results />);

  expect(screen.getByText("Nie znaleziono wyniku")).toBeInTheDocument();
});
