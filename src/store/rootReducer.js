import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import coffeReducer from "./productsStore/coffeSlice";
import exchangeReducer from "./exchangeSlice";

const rootReducer = combineReducers({
  coffe: coffeReducer,
  cart: cartReducer,
  exchange: exchangeReducer,
  // Other reducers...
});

export default rootReducer;
