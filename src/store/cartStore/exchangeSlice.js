import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    echangeBase: 1,
    eurBase : "eur",
    ronBase: "ron",
    usdBase: "usd",
}

const exchangeSlice = createSlice({
    name: "exchange",
    initialState,
    reducers: {
        eurCurrency: (state, actions) => {
            if(state.eurBase){
                state.exchangeBase += state.totalPrice / 4.9;
            }
         
        }
    }
})

export const { eurCurrency } = exchangeSlice.actions;

export default exchangeSlice.reducer;