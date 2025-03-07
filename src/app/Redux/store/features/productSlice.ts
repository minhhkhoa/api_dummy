import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

export interface inforPage {
  total: number;
  skip: number;
  limit: number;
}

interface ProductState {
  items: ProductType[];
  page: inforPage;
}

const initialState: ProductState = {
  items: [],
  page: {
    total: 0,
    skip: 0,
    limit: 0,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.items.unshift(action.payload);
    },

    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.items = action.payload;
    },

    setInfoPage: (state, action: PayloadAction<inforPage>) => {
      state.page = action.payload
    }
  },
});

// Export actions
export const { addProduct, setProducts, setInfoPage } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
