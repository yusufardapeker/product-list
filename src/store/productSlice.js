import { createSelector, createSlice } from "@reduxjs/toolkit";

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
			const targetProduct = state.products.find((product) => product.id === action.payload.id);
			targetProduct.quantity = 1;

			state.cartProducts.push(targetProduct);
		},

		removeProductFromCart: (state, action) => {
			const targetProduct = state.products.find((product) => product.id === action.payload.id);
			if (!targetProduct) return;

			targetProduct.quantity = 0;
			state.cartProducts = state.cartProducts.filter((product) => product.id !== targetProduct.id);
		},

		incrementQuantity: (state, action) => {
			const listProduct = state.products.find((product) => product.id === action.payload.id);
			const cartProduct = state.cartProducts.find((product) => product.id === action.payload.id);

			if (!listProduct || !cartProduct) return;

			listProduct.quantity += 1;
			cartProduct.quantity += 1;
		},

		decrementQuantity: (state, action) => {
			const listProduct = state.products.find((product) => product.id === action.payload.id);
			const cartProduct = state.cartProducts.find((product) => product.id === action.payload.id);

			if (!listProduct || !cartProduct) return;

			if (cartProduct.quantity > 1) {
				listProduct.quantity -= 1;
				cartProduct.quantity -= 1;
			} else {
				listProduct.quantity = 0;
				state.cartProducts = state.cartProducts.filter((product) => product.id !== cartProduct.id);
			}
		},

		resetProductsData: (state) => {
			state.cartProducts = [];

			state.products = state.products.map((product) => ({ ...product, quantity: 0 }));
		},
	},
});

export const {
	addProductToCart,
	incrementQuantity,
	decrementQuantity,
	removeProductFromCart,
	resetProductsData,
} = productSlice.actions;

export default productSlice.reducer;

export const selectFinalPrice = createSelector(
	[(state) => state.products.cartProducts, (state) => state.register.discountRate],

	(cartProducts, discountRate) => {
		const finalPrice = cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
		const discountedFinalPrice = finalPrice * (1 - discountRate);

		return {
			finalPrice,
			discountedFinalPrice,
		};
	},
);
