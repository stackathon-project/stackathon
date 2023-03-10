import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UploadScore = createAsyncThunk(
  "Mathgame/addScore",
  async (body) => {
    const { data } = await axios.post("/api/scores", body);
    return data;
  }
);

export const MathGameSlice = createSlice({
  name: "Math Game",
  initialState: {
    scores: [],
  },
  reducers: {},
  extraReducers: (build) =>
    build.addCase(UploadScore.fulfilled, (state, action) => {
      state.scores = action.payload;
    }),
});

export default MathGameSlice.reducer;
