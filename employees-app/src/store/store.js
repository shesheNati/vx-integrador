import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./slices/employees";
import { assetsSlice } from "./slices/assets";

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    assets: assetsSlice.reducer,
  },
});
