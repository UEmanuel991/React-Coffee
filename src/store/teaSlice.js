import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tea: "",
  error: null,
  status: "idle",
};
export const teaSlice = createSlice({
  name: "teaData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTeaData.pending, (state) => {
        state.tea = "";
        state.error = null;
        state.status = "idle";
      })
      .addCase(fetchTeaData.rejected, (state, action) => {
        state.tea = "";
        state.error = action.error;
        state.status = "rejected";
      })
      .addCase(fetchTeaData.fulfilled, (state, action) => {
        state.tea = action.payload;
        state.error = null;
        state.status = "succes";
      });
  },
});
export const fetchTeaData = createAsyncThunk("teaData/fetch", async () => {
  const response = await axios.get("http://localhost:3110/ceai");
  //   console.log("slice", response.data[0].espresso);
  // console.log("slice", response.data[1]);
  return response.data;
});

export default teaSlice.reducer;
export const teaActions = teaSlice.actions;
export const selectTeaData = (state) => state.tea.tea;
export const selectTeaStatus = (state) => state.tea.status;
export const selectTeaError = (state) => state.tea.error;
