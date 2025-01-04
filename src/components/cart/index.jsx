import React from "react";
import "./cart.scss";

import { useSelector } from "react-redux";
import { CartEmpty } from "./components/CartEmpty";
import { CartFilled } from "./components/CartFilled";

function Cart() {
	const cartProducts = useSelector((store) => store.products.cartProducts);

	const totalQuantity = cartProducts.reduce((acc, product) => acc + product.quantity, 0);

	return (
		<div className="cart">
			<h2>{`Your Cart (${totalQuantity})`} </h2>

			<div className="cart-content">
				{cartProducts.length === 0 ? <CartEmpty /> : <CartFilled />}
			</div>
		</div>
	);
}

export { Cart };
