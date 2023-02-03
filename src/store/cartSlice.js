import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const i = state.indexOf(action.payload);
      console.log("i", state, i);
      return state.filter((item) => item.id !== action.payload);
      //   return state.splice(i, i);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
