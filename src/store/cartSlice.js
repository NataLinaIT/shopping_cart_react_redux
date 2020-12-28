import { createSlice } from "@reduxjs/toolkit";
import goodsArr from "../data/goods.json";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {},
    totalPrice: 0,
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;
      if (state.value[articul] === undefined) state.value[articul] = 0;
      state.value[articul]++;
      goodsArr.map((item) =>
        item.articul === articul
          ? (state.totalPrice += item.cost)
          : state.totalPrice
      );
    },
    minusItem: (state, data) => {
      let articul = data.payload;
      state.value[articul] -= 1;
      goodsArr.map((item) =>
        item.articul === articul
          ? (state.totalPrice -= item.cost)
          : state.totalPrice
      );
    },
    plusItem: (state, data) => {
      let articul = data.payload;
      state.value[articul] += 1;
      goodsArr.map((item) =>
        item.articul === articul
          ? (state.totalPrice += item.cost)
          : state.totalPrice
      );
    },
    deleteItem: (state, data) => {
      let articul = data.payload;
      goodsArr.map((item) =>
        item.articul === articul
          ? (state.totalPrice -= item.cost * state.value[articul])
          : state.totalPrice
      );
      delete state.value[data.payload];
    },
  },
});

export const {
  increment,
  countTotal,
  minusItem,
  plusItem,
  deleteItem,
} = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
