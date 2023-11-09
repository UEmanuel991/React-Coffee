import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import coffeReducer from "./productsStore/coffeSlice";
import exchangeReducer from "./exchangeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root", 
  storage,
  whitelist: ["cart", "coffe", "exchange"],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  coffe: coffeReducer,
  cart: cartReducer,
  exchange: exchangeReducer,
}));

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store); 
