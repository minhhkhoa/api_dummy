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
  thumbnail: string
}

interface ProductState {
  items: ProductType[];
}

const initialState: ProductState = {
  items: [],
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
    }
  },
});

// Export actions
export const { addProduct, setProducts } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
