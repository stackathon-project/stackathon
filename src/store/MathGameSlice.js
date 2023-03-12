import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UploadScore = createAsyncThunk(
  "Mathgame/addScore",
  async (body) => {
    const { data } = await axios.post("/api/scores", body);
    return data;
  }
);

export const GetAllScore = createAsyncThunk("Mathgame/getScore", async () => {
  const { data } = await axios.get("/api/scores");
  return data;
});

export const MathGameSlice = createSlice({
  name: "Math Game",
  initialState: {
    scores: [],
    mathScore: [],
  },
  reducers: {},
  extraReducers: (build) =>
    build
      .addCase(UploadScore.fulfilled, (state, action) => {

      })
      .addCase(GetAllScore.fulfilled, (state, action) => {
        state.scores = action.payload;
        state.mathScore = action.payload.filter((item) => item.game === "Math");
        state.mathScore = state.mathScore.sort((a, b) => b.score - a.score);
      }),
});

export const selectAllScores = (state) => {
  return state.MathGame.scores;
};
export const selectMathScores = (state) => {
  return state.MathGame.mathScore;
};

export default MathGameSlice.reducer;
