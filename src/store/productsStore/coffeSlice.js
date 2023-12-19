import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coffe: [],
  error: null,
  status: "idle",
  filteredCoffes: [],
  search: "",
};
export const fetchCoffeData = createAsyncThunk("coffeData/fetch", async () => {
  const response = await axios.get("http://localhost:3110/cafea");
  return response.data;
});

export const coffeSlice = createSlice({
  name: "coffeData",
  initialState,
  reducers: {
    searchByName: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filteredCoffes = state.coffe?.map((category) => {
        console.log(category)
        return {
          ...category,
          products: category[0]?.espresso[0]?.filter((product) =>
          
            product.nume.toLowerCase().includes(searchTerm)
          ),
        };
      });
      console.log(filteredCoffes);
      return {
        ...state,
        filteredCoffes:
          action.payload.length > 0 ? filteredCoffes : [...state.coffe],
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoffeData.pending, (state) => {
        state.coffe = [];
        state.error = null;
        state.status = "idle";
      })
      .addCase(fetchCoffeData.rejected, (state, action) => {
        state.coffe = [];
        state.error = action.error;
        state.status = "rejected";
      })
      .addCase(fetchCoffeData.fulfilled, (state, action) => {
        state.coffe = action.payload;
        state.error = null;
        state.status = "succes";
      });
  },
});

export const { searchByName } = coffeSlice.actions;
export default coffeSlice.reducer;
export const selectCoffeData = (state) => state.coffe.coffe;
export const selectCoffeStatus = (state) => state.coffe.status;
export const selectCoffeError = (state) => state.coffe.error;
