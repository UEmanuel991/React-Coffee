import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    coffe: [],
    error: null,
    status: "idle"
}
export const coffeSlice = createSlice({
    name: "coffeData",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchCoffeData.pending, (state) => {
                state.coffe = [];
                state.error = null;
                state.status = "idle";
            }).addCase(fetchCoffeData.rejected, (state, action) => {
                state.coffe = [];
                state.error = action.error;
                state.status = "rejected"
            }).addCase(fetchCoffeData.fulfilled, (state,action) => {
                state.coffe= action.payload;
                state.error = null;
                state.status = "succes"
            })
    }
});

export const fetchCoffeData = createAsyncThunk("coffeData/fetch", async () => {
    const response = await axios.get("http://localhost:3110/cafea") 
    console.log(response.data)
    return response.data
})

export default coffeSlice.reducer;
export const coffeActions = coffeSlice.actions;
export const selectCoffeData = state => state.coffe.coffe;
export const selectCoffeStatus = state => state.coffeData.status;
export const selectCoffeError = state => state.coffeData.error;


