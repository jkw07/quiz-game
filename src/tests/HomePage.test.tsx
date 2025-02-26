import { screen, fireEvent } from "@testing-library/react";
import { renderComponent, resetMocks, mockNavigate } from "./testUtils";

// Mocki przed komponentem
import { mockGoToCategoriesPage } from "./mocks/navigationMock";

import { HomePage } from "../components/HomePage";
beforeEach(() => {
  resetMocks();
  mockGoToCategoriesPage.mockClear();
  renderComponent(<HomePage />);
});

test("Button exists and navigates correctly", () => {
  const startButton = screen.getByRole("button", { name: /start/i });
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);

  expect(mockGoToCategoriesPage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToCategoriesPage).toHaveBeenCalledTimes(1);
});
