import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], error: null },
  reducers: {
    setProducts: (state, action) => { state.list = action.payload; },
    setError: (state, action) => { state.error = action.payload; }
  }
});

export const { setProducts, setError } = productsSlice.actions;
export default productsSlice.reducer;