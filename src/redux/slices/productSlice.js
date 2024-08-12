import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.in/api";

export const getAllProducts = createAsyncThunk("gelAllProducts", async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data.products;
});

export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data.product;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    // -----
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedProduct = action.payload;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
