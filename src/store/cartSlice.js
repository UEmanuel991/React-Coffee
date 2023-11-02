import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  totalPrice: 0, //pretul produselor
  totalQuantity: 0, //numarul de produse
  cartCurrency: {
    stateCurrency: "ron",
    options: ["ron", "eur", "usd"],
  },
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    currency: (state, action) => {
      state.cartCurrency.stateCurrency = action.payload;
    
      if (state.cartCurrency.stateCurrency === "eur") {
        state.totalPrice = state.totalPrice / 4.9;
      } else if (state.cartCurrency.stateCurrency === "ron") {
        state.totalPrice = state.totalPrice / 1
      } else if (state.cartCurrency.stateCurrency === "usd") {
        state.totalPrice = state.totalPrice / 4.5;
      }
    },
    getCartTotal(state, action) {
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
    add: (state, action) => {
      const existingIndex = state.productsCart.findIndex(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      if (existingIndex >= 0) {
        state.productsCart[existingIndex] = {
          ...state.productsCart[existingIndex],
          cartQuantity: state.productsCart[existingIndex].cartQuantity++,
        };
      } else {
        //product este action.payload
        let tempProd = { ...action.payload, cartQuantity: +1 };
        state.productsCart.push(tempProd);
        state.totalQuantity++;
        state.totalPrice += action.payload.price * action.payload.cartQuantity;
      }
    },
    remove: (state, action) => {
      const nextCartItems = state.productsCart.filter(
        (item) =>
          item.id !== action.payload.id && item.nume === action.payload.nume
      );
      state.productsCart = nextCartItems;
    },
    increase: (state, action) => {
      // Find the product and increase its quantity.
      const item = state.productsCart.find(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      item.cartQuantity++;
      state.totalPrice = item.totalPrice;
    },
    decrease: (state, action) => {
      const itemIndex = state.productsCart.findIndex(
        (item) =>
          item.id === action.payload.id && item.nume === action.payload.nume
      );
      if (state.productsCart[itemIndex].cartQuantity > 1) {
        state.productsCart[itemIndex].cartQuantity -= 1;
      } else if (state.productsCart[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.productsCart.filter(
          (item) => item.id !== action.payload.id
        );
        state.productsCart = nextCartItems;
      }
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
} = cartSlice.actions; //action creators
export default cartSlice.reducer;
