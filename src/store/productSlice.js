import { createSlice } from "@reduxjs/toolkit";

import { data } from "../data";

const initialState = {
	products: data,
	cartProducts: [],
	hideQuantityButtons: false,
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
			state.hideQuantityButtons = true;

			state.cartProducts = state.cartProducts.filter((product) => product.name !== action.payload);

			state.products = state.products.map((product) =>
				product.name === action.payload ? { ...product, quantity: 1 } : product
			);
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

		showQuantityButtons: (state, action) => {
			state.hideQuantityButtons = false;
		},
	},
});

export const {
	decrementQuantity,
	incrementQuantity,
	addProductToCart,
	removeProductToCart,
	showQuantityButtons,
} = productSlice.actions;

export default productSlice.reducer;
