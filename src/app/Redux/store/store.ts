import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productSlice";

//- tao store luu tru
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Lấy kiểu RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
