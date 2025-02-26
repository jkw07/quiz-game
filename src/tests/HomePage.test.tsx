import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

// MOCKI PRZED `HomePage`
import { mockGoToCategoriesPage } from "./mocks/navigationMock";

import { HomePage } from "../components/HomePage";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

beforeEach(() => {
  mockGoToCategoriesPage.mockClear();
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
});

test("Button exists and navigates correctly", () => {
  const startButton = screen.getByRole("button", { name: /start/i });
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);

  expect(mockGoToCategoriesPage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToCategoriesPage).toHaveBeenCalledTimes(1);
});
