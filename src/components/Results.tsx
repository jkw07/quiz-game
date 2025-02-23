import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Header } from "./Header";

import "../styles/Results.scss";

export const Results = () => {
  const state = useSelector((state: RootState) => state.quiz);

  const mostFrequentScore = state.selectedAnswers.reduce((acc, num, _, arr) =>
    arr.filter((x) => x === num).length > arr.filter((x) => x === acc).length
      ? num
      : acc
  );

  const result = state.output?.find(
    (item) => item.score === Number(mostFrequentScore)
  );
  console.log(state.selectedAnswers);
  console.log(mostFrequentScore);

  return (
    <>
      <Header text="Wyniki" />
      <div className="result-container">
        {result ? (
          <>
            <h2>{result.result}</h2>
            <p>{result.description}</p>
          </>
        ) : (
          <p className="error-message">Nie znaleziono wyniku</p>
        )}
      </div>
    </>
  );
};
