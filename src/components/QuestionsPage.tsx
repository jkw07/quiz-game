import { motion } from "framer-motion";
import { Header } from "./Header";
import { useAnswerClick } from "../hooks/useAnswerClick";
import "../styles/QuestionsPage.scss";

export const QuestionsPage = () => {
  const { state, currentQuestionIndex, currentQuestion, handleAnswerClick } =
    useAnswerClick();

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
