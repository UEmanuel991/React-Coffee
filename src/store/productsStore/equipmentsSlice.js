import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  equipments: "",
  error: null,
  status: "idle",
};
export const equipmentsSlice = createSlice({
  name: "equipmentsData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEquipmentsData.pending, (state) => {
        state.equipments = "";
        state.error = null;
        state.status = "idle";
      })
      .addCase(fetchEquipmentsData.rejected, (state, action) => {
        state.equipments = "";
        state.error = action.error;
        state.status = "rejected";
      })
      .addCase(fetchEquipmentsData.fulfilled, (state, action) => {
        state.equipments = action.payload;
        state.error = null;
        state.status = "succes";
      });
  },
});
export const fetchEquipmentsData = createAsyncThunk(
  "equipmentsData/fetch",
  async () => {
    const response = await axios.get("http://localhost:3110/echipamente");
    return response.data;
  }
);

export default equipmentsSlice.reducer;
export const equipmentsActions = equipmentsSlice.actions;
export const selectEquipmentsData = (state) => state.equipments.equipments;
export const selectEquipmentsStatus = (state) => state.equipments.status;
export const selectEquipmentsError = (state) => state.equipments.error;
