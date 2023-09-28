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
      // state.quantity += 1;
      // state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});
export const { add, clearCart, decrease, increase, remove, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
