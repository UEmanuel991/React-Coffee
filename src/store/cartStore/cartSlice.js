import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  totalPrice: 0,
  totalQuantity: 0,
  inputValue: 1,
  cartCurrency: {
    stateCurrency: "ron",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    currency: (state, action) => {
      state.cartCurrency.stateCurrency = action.payload;
    },
    add: (state, action) => {
      const existingItem = state.productsCart.find(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      if (existingItem) {
        existingItem.cartQuantity += state.inputValue;
        state.inputValue = 0;
      } else if (state.inputValue > 1) {
        let tempProd = { ...action.payload, cartQuantity: state.inputValue };
        state.productsCart.push(tempProd);
        state.inputValue = 0;
      } else {
        let tempProd = { ...action.payload, cartQuantity: 1 };
        state.productsCart.push(tempProd);
      }
      state.totalQuantity = state.productsCart.reduce(
        (total, cartItem) => total + cartItem.cartQuantity,
        0
      );
      state.totalPrice = state.productsCart.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.cartQuantity,
        0
      );
    },
    remove: (state, action) => {
      const indexToRemove = state.productsCart.findIndex(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      if (indexToRemove !== -1) {
        state.productsCart.splice(indexToRemove, 1);
      }
      state.totalQuantity = state.productsCart.reduce(
        (total, cartItem) => total + cartItem.cartQuantity,
        0
      );
      state.totalPrice = state.productsCart.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.cartQuantity,
        0
      );
    },
    increase: (state, action) => {
      const item = state.productsCart.find(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      item.cartQuantity++;
      state.totalQuantity++;
      state.totalPrice = item.totalPrice;
    },
    decrease: (state, action) => {
      const itemIndex = state.productsCart.findIndex(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      if (state.productsCart[itemIndex].cartQuantity > 1) {
        state.productsCart[itemIndex].cartQuantity -= 1;
        state.totalQuantity -= 1;
      } else if (state.productsCart[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.productsCart.filter(
          (item) => item.id !== action.payload.id
        );
        state.productsCart = nextCartItems;
        state.totalQuantity -= 1;
      }
    },
    getCartTotal(state) {
      let { total, quantity } = state.productsCart.reduce(
        (cartTotal, cartItem) => {
          const { pret, cartQuantity } = cartItem;
          const itemTotal = pret * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.totalQuantity = quantity;
      state.totalPrice = total;
    },
  },
});
export const {
  add,
  clearCart,
  decrease,
  increase,
  remove,
  getCartTotal,
  currency,
  setInputValue,
} = cartSlice.actions;
export default cartSlice.reducer;
