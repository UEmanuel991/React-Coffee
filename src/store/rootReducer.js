import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import coffeReducer from "./productsStore/coffeSlice";
// Other reducers...

const rootReducer = combineReducers({
  coffe: coffeReducer,
  cart: cartReducer,
  // Other reducers...
});

export default rootReducer;
