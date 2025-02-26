import { vi } from "vitest";

// ✅ Tworzymy zamockowane funkcje
export const mockGoToCategoriesPage = vi.fn();
export const mockGoToHomePage = vi.fn();
export const mockGoToQuizPage = vi.fn();

// ✅ Mockujemy moduł `navigation.ts`
vi.mock("../../config/navigation", () => ({
  goToCategoriesPage: mockGoToCategoriesPage,
  goToHomePage: mockGoToHomePage,
  goToQuizPage: mockGoToQuizPage,
}));
