import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    basket: basketSlice,
  },
});
