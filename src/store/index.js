import { configureStore } from "@reduxjs/toolkit";
import { coffeSlice } from "./coffeSlice";
import { teaSlice } from "./teaSlice";
import { equipmentsSlice } from "./equipmentsSlice";

const store = configureStore({
  reducer: {
    coffe: coffeSlice.reducer,
    tea: teaSlice.reducer,
    equipments: equipmentsSlice.reducer,
  },
});
export default store;
