import { screen, waitFor } from "@testing-library/react";

import { renderComponent, resetMocks, mockNavigate } from "./testUtils";
import { mockGoToResults } from "./mocks/navigationMock";
import { LoadingScreen } from "../components/LoadingScreen";

beforeEach(() => {
  resetMocks();
  mockGoToResults.mockClear();
});

test("renders loading text", () => {
  renderComponent(<LoadingScreen />);
  expect(screen.getByText("Obliczanie wyników...")).toBeInTheDocument();
});

test("navigates to results after timeout", async () => {
  renderComponent(<LoadingScreen />);

  // Czekamy na 2,5 sekundy i sprawdzamy, czy `goToResults` został wywołany
  await waitFor(
    () => {
      expect(mockGoToResults).toHaveBeenCalledWith(mockNavigate);
    },
    { timeout: 3000 }
  );
});

test("clears timeout when unmounting", () => {
  const { unmount } = renderComponent(<LoadingScreen />);

  unmount(); // Odmontowujemy komponent
  expect(mockGoToResults).not.toHaveBeenCalled(); // Funkcja nie powinna się wywołać
});
