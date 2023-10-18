import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  totalPrice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.productsCart.push(action.payload);
      state.quantity += 1;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    remove: (state, action) => {
      state.productsCart = state.productsCart.filter(
        (item) => item.id !== action.payload)
    },
    increase: (state, action) => {
      state.productsCart = state.productsCart.map(
        (item) => {
          if(item.id === action.payload) {
            return { ...item, amount: item.amount +1}
          }
          return item;
        }
      )
    }, 
  },
});
export const { add, clearCart, decrease, increase, remove, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
