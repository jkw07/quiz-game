import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../src/components/HomePage";

test("renders the quiz home page", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(screen.getByRole("button", { name: /start/i })).toBeInTheDocument();
});
