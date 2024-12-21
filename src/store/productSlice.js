import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	test: 0,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
