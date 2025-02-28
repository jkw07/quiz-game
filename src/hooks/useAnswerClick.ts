import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import { recordAnswer } from "../redux/quizSlice";
import { endGame } from "../redux/gameSlice";
import { useGameActions } from "./useGameActions";


export function useAnswerClick() {
    const dispatch = useDispatch();
    const {handleGoToLoadingScreen} = useGameActions();
    const state = useSelector((state: RootState) => state.quiz);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const currentQuestion = state.questions[currentQuestionIndex];

    const handleAnswerClick = (points: number) => {
        dispatch(recordAnswer({ questionIndex: currentQuestionIndex, points }));

        if (currentQuestionIndex < state.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
        dispatch(endGame());
        handleGoToLoadingScreen();
        }
    };
    return {state, currentQuestionIndex, currentQuestion, handleAnswerClick}
}