import { vi } from "vitest";

// tworzenie funkcji
export const mockGoToCategoriesPage = vi.fn();
export const mockGoToHomePage = vi.fn();
export const mockGoToQuizPage = vi.fn();
export const mockGoToQuestionsPage = vi.fn();
export const mockGoToResults = vi.fn();

// zmockowany moduł `navigation.ts`
vi.mock("../../config/navigation", () => ({
  goToCategoriesPage: mockGoToCategoriesPage,
  goToHomePage: mockGoToHomePage,
  goToQuizPage: mockGoToQuizPage,
  goToQuestionsPage: mockGoToQuestionsPage,
  goToResults: mockGoToResults,
}));
