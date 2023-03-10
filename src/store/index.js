import { configureStore } from "@reduxjs/toolkit";
import MathGameSlice from "./MathGameSlice";

const store = configureStore({
  reducer: {
    MathGame: MathGameSlice,
  },
});

export default store;
