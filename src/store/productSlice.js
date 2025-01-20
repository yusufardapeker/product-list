import { createSlice } from "@reduxjs/toolkit";

import { data } from "../data";

const initialState = {
	products: data,
	cartProducts: [],
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const isItemExist = state.cartProducts.some(
				(product) => product.name === action.payload.name
			);

			if (!isItemExist) {
				state.cartProducts.push(action.payload);
			}
		},

		removeProductToCart: (state, action) => {
			state.cartProducts = state.cartProducts.filter((product) => product.name !== action.payload);

			state.products = state.products.map((product) =>
				product.name === action.payload ? { ...product, quantity: 1 } : product
			);
		},

		resetProductsData: (state) => {
			state.cartProducts = [];

			state.products = state.products.map((product) => ({ ...product, quantity: 1 }));
		},

		decrementQuantity: (state, action) => {
			state.products = state.products.map((product) =>
				product.name === action.payload
					? {
							...product,
							quantity: product.quantity === 1 ? 1 : product.quantity - 1,
					  }
					: product
			);

			state.cartProducts = state.cartProducts.map((product) =>
				product.name === action.payload ? { ...product, quantity: product.quantity - 1 } : product
			);
		},

		incrementQuantity: (state, action) => {
			state.products = state.products.map((product) =>
				product.name === action.payload ? { ...product, quantity: product.quantity + 1 } : product
			);

			state.cartProducts = state.cartProducts.map((product) =>
				product.name === action.payload ? { ...product, quantity: product.quantity + 1 } : product
			);
		},
	},
});

export const {
	decrementQuantity,
	incrementQuantity,
	addProductToCart,
	removeProductToCart,
	resetProductsData,
} = productSlice.actions;

export default productSlice.reducer;
