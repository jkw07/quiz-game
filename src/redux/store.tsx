import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    quiz: quizReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
