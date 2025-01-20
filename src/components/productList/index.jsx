import React, { useRef } from "react";
import "./productlist.scss";

import decrementIcon from "../../images/icon-decrement-quantity.svg";
import incrementIcon from "../../images/icon-increment-quantity.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductToCart,
	decrementQuantity,
	incrementQuantity,
	removeProductToCart,
	showQuantityButtons,
} from "../../store/productSlice";

import { formatPrice } from "../../utils/price";

function ProductList() {
	const quantityButtons = useRef([]);
	const products = useSelector((store) => store.products.products);
	const hideQuantityButtons = useSelector((store) => store.products.hideQuantityButtons);
	const dispatch = useDispatch();

	const showQuantityBtn = (e, index, product) => {
		quantityButtons.current[index].classList.add("active");

		dispatch(addProductToCart(product));
	};

	if (hideQuantityButtons) {
		quantityButtons.current.forEach((button) => button.classList.remove("active"));

		dispatch(showQuantityButtons());
	}

	const handleDecrement = (product, index) => {
		if (product.quantity === 1) {
			quantityButtons.current[index].classList.remove("active");
			dispatch(removeProductToCart(product.name));
		}

		dispatch(decrementQuantity(product.name));
	};

	return (
		<div className="product-list">
			<h1>Desserts</h1>

			<div className="products-wrapper">
				{products.map((product, index) => (
					<div className="product" key={index}>
						<img src={product.image.mobile} className="product-img" />

						<button
							type="button"
							className="add-to-cart-btn"
							onClick={(e) => showQuantityBtn(e, index, product)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="20"
								fill="none"
								viewBox="0 0 21 20"
							>
								<g fill="#C73B0F" clipPath="url(#a)">
									<path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
									<path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
								</g>
								<defs>
									<clipPath id="a">
										<path fill="#fff" d="M.333 0h20v20h-20z" />
									</clipPath>
								</defs>
							</svg>
							Add to Cart
						</button>

						<button
							type="button"
							className="order-quantity-btn"
							ref={(el) => (quantityButtons.current[index] = el)}
						>
							<img
								src={decrementIcon}
								alt="decrement icon"
								className="decrement"
								onClick={() => handleDecrement(product, index)}
							/>
							{product.quantity}
							<img
								src={incrementIcon}
								alt="increment icon"
								className="increment"
								onClick={() => dispatch(incrementQuantity(product.name))}
							/>
						</button>

						<div className="product-text-content">
							<p className="category">{product.category}</p>
							<p className="name">{product.name}</p>
							<span className="price">{formatPrice(product.price)}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { ProductList };
