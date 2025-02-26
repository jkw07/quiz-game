import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { renderComponent, resetMocks, mockNavigate } from "./testUtils";

import { mockGoToQuestionsPage } from "./mocks/navigationMock";
import { QuizPage } from "../components/QuizPage";

// przykładowy stan quizu
const mockQuizState = {
  title: "Testowy Quiz",
  subtitle: "Testowy podtytuł",
  image: "/test-image.jpg",
  output: [],
  questions: [],
  selectedAnswers: [],
};

beforeEach(() => {
  resetMocks();
  mockGoToQuestionsPage.mockClear();
  renderComponent(<QuizPage />, { quiz: mockQuizState }); // ✅ Przekazujemy `preloadedState`
});

test("renders quiz title and subtitle", () => {
  expect(screen.getByText(mockQuizState.title)).toBeInTheDocument();
  expect(screen.getByText(mockQuizState.subtitle)).toBeInTheDocument();
});

test("renders quiz image", () => {
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", mockQuizState.image);
});

test("clicking on the button navigates to questions page", () => {
  const startButton = screen.getByRole("button", { name: /zaczynamy!/i });
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);

  expect(mockGoToQuestionsPage).toHaveBeenCalledWith(mockNavigate);
  expect(mockGoToQuestionsPage).toHaveBeenCalledTimes(1);
});
