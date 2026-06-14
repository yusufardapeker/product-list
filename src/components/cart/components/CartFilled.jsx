import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import removeIcon from "/images/icon-remove-item.svg";
import { removeProductFromCart, resetProductsData, selectFinalPrice } from "../../../store/productSlice";
import { OrderConfirmed } from "./OrderConfirmed";
import { formatPrice } from "../../../utils/price";

function CartFilled() {
	const { cartProducts } = useSelector((state) => state.products);
	const isRegistered = useSelector((state) => state.register.isRegistered);
	const dispatch = useDispatch();
	const [showOrderModal, setShowOrderModal] = useState(false);

	const { finalPrice, discountedFinalPrice } = useSelector(selectFinalPrice);

	const openOrderModal = () => {
		setShowOrderModal(true);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleNewOrder = () => {
		setShowOrderModal(false);
		dispatch(resetProductsData());
	};

	return (
		<>
			<div className="cart-filled">
				<div className="cart-products">
					{cartProducts.map((product) => (
						<div className="cart-product" key={product.id}>
							<div className="product-info">
								<p className="product-name">{product.name}</p>

								<div className="product-pricing">
									<p className="quantity">{product.quantity}x</p>
									<p className="base-price">{formatPrice(product.price)}</p>
									<p className="total-product-price">{formatPrice(product.price * product.quantity)}</p>
								</div>
							</div>

							<button
								className="remove-product-button"
								onClick={() => dispatch(removeProductFromCart(product))}
								aria-label="Remove product from cart."
							>
								<img src={removeIcon} alt="" />
							</button>
						</div>
					))}
				</div>

				<div className="cart-order-info">
					<div className="final-price-wrapper">
						<p className="title">Order Total</p>

						{isRegistered ? (
							<div className="discounted-price">
								<p className="old-price">{formatPrice(finalPrice)}</p>
								<p className="final-price discounted">{formatPrice(discountedFinalPrice)}</p>
							</div>
						) : (
							<p className="final-price">{formatPrice(finalPrice)}</p>
						)}
					</div>

					<div className="delivery-info">
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
							<path
								fill="#1EA575"
								d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
							/>
							<path
								fill="#1EA575"
								d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
							/>
						</svg>

						<p className="text-content">
							This is a <span className="highlighted-text">carbon-neutral</span> delivery
						</p>
					</div>

					<button className="order-button" onClick={openOrderModal}>
						Confirm Order
					</button>
				</div>
			</div>

			{showOrderModal && <OrderConfirmed handleNewOrder={handleNewOrder} />}
		</>
	);
}

export { CartFilled };
