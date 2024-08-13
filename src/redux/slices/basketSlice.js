import { createSlice } from "@reduxjs/toolkit";

const getbasketFromStorage = () => {
  const basket = localStorage.getItem("basket");

  if (!basket) return [];

  return JSON.parse(localStorage.getItem("basket"));
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  products: getbasketFromStorage(),
  drawer: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count = findProduct.count + action.payload.count;
      } else {
        state.products.push(action.payload);
        writeFromBasketToStorage(state.products);
      }
    },
    setDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    deleteSingleProduct: (state, action) => {
      const { products } = state;
      const index = products.findIndex(
        (product) => product.id === action.payload
      );

      products.splice(index, 1);
      writeFromBasketToStorage(products);
    },
  },
});

export const { addToBasket, setDrawer, deleteSingleProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
