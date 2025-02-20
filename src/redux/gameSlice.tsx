import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    status: "none",
  },
  reducers: {
    startGame: (state) => {
      state.status = "playing";
    },
    endGame: (state) => {
      state.status = "finished";
    },
    resetGame: (state) => {
      state.status = "none";
    },
  },
});

export const { startGame, endGame, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
