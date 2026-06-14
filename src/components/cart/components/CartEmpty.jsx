import cartEmptyImg from "/images/illustration-empty-cart.svg";

function CartEmpty() {
	return (
		<div className="cart-empty">
			<img src={cartEmptyImg} className="cart-empty-img" alt="" />
			<p className="cart-empty-message">Your added items will appear here</p>
		</div>
	);
}

export { CartEmpty };
