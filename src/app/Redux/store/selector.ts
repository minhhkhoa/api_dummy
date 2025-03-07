import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ProductType } from "./features/productSlice";

export const searchProduct = (state: RootState) => state.products.search;

export const getAllProducts = (state: RootState) => state.products.items;

export const getInfoPage = (state: RootState) => state.products.page;

export const productsRemainingSelector = createSelector(
  getAllProducts, 
  searchProduct,
  (listProducts, search) => {
    return listProducts.filter((item: ProductType) => item.title.toLowerCase().includes(search.toLowerCase()))
  }

);