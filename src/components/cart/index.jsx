import React from "react";
import "./cart.scss";

import cartEmptyIcon from "../../images/illustration-empty-cart.svg";

function Cart() {
	return (
		<div className="cart">
			<h2>Your Cart (0)</h2>

			<div className="cart-content">
				<div className="cart-empty">
					<img src={cartEmptyIcon} className="cart-empty-img" />
					<p className="cart-empty-message">Your added items will appear here</p>
				</div>
			</div>
		</div>
	);
}

export { Cart };
