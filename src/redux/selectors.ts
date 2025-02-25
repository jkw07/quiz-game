
import { QuizState } from '../redux/quizSlice';

export const resultSelector = (
  state: QuizState,
) => {
  if (!state.selectedAnswers || state.selectedAnswers.length === 0) {
    return null;
  }

const mostFrequentScore = () =>
  state.selectedAnswers.reduce((acc, num, _, arr) =>
    arr.filter((x) => x === num).length > arr.filter((x) => x === acc).length
      ? num
      : acc
  );

  const score = mostFrequentScore();

  if (score === undefined) {
    return null;
  }
  return state.output?.find((item) => item.score === Number(score));
};

export const pieChartDataSelector = (
  state: QuizState,
) => {
  const counts = state.selectedAnswers
    .filter((num) => num !== null && num !== undefined)
    .reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

  return state.output?.map((item) => ({
    name: item.result,
    value: counts[item.score],
  }));
};