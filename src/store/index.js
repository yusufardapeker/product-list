import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import registerReducer from "./registerSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		register: registerReducer,
	},
});
