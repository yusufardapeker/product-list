import React from "react";

import cartEmptyIcon from "../../../images/illustration-empty-cart.svg";

function CartEmpty() {
	return (
		<div className="cart-empty">
			<img src={cartEmptyIcon} className="cart-empty-img" />
			<p className="cart-empty-message">Your added items will appear here</p>
		</div>
	);
}

export { CartEmpty };
