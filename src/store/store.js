import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartStore/cartSlice";
import coffeReducer from "./productsStore/coffeSlice";
import exchangeReducer from "./cartStore/exchangeSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "coffe", "exchange"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    coffe: coffeReducer,
    cart: cartReducer,
    exchange: exchangeReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor = persistStore(store);
