import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recordAnswer } from "../redux/quizSlice";
import { Header } from "./Header";
import type { RootState } from "../redux/store";
import { goToLoadingScreen } from "../config/navigation";
import { endGame } from "../redux/gameSlice";
import { motion } from "framer-motion";
import "../styles/QuestionsPage.scss";

export const QuestionsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion =
    state.questions && state.questions[currentQuestionIndex];
  const handleAnswerClick = (points: number) => {
    dispatch(recordAnswer({ questionIndex: currentQuestionIndex, points }));

    if (state.questions && currentQuestionIndex < state.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      dispatch(endGame());
      goToLoadingScreen(navigate);
    }
  };
  return (
    <>
      <Header text={state.title || ""} />
      <motion.div
        className="question-container"
        key={currentQuestionIndex}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {currentQuestion && <h2>{currentQuestion.question}</h2>}
        <div className="answers-container">
          {currentQuestion?.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer.points)}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};
