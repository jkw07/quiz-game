import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Header } from "./Header";

import "../styles/Results.scss";
import { resultSelector } from "../redux/selectors";
import { HalfPieChart } from "./HalfPieChart";

export const Results = () => {
  const result = useSelector((state: RootState) => resultSelector(state.quiz));

  return (
    <>
      <Header text="Wyniki" />
      <div className="result-container">
        {result ? (
          <>
            <h2>{result.result}</h2>
            <p>{result.description}</p>
            <HalfPieChart />
          </>
        ) : (
          <p className="error-message">Nie znaleziono wyniku</p>
        )}
      </div>
    </>
  );
};
