import "./productlist.css";

import decrementIcon from "/images/icon-decrement-quantity.svg";
import incrementIcon from "/images/icon-increment-quantity.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, decrementQuantity, incrementQuantity } from "../../store/productSlice";

import { formatPrice } from "../../utils/price";
import clsx from "clsx";

function ProductList() {
	const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	const handleAddProductToCart = (product) => {
		dispatch(addProductToCart(product));
	};

	const handleIncrement = (product) => {
		dispatch(incrementQuantity(product));
	};

	const handleDecrement = (product) => {
		dispatch(decrementQuantity(product));
	};

	return (
		<div className="product-list">
			<h1>Desserts</h1>

			<div className="products-wrapper">
				{products.map((product) => (
					<div className="list-product" key={product.id}>
						<div className={clsx("product-img-buttons-wrapper", { active: product?.quantity > 0 })}>
							<picture>
								<source media="(min-width: 1200px)" srcSet={product.image.desktop} />
								<img src={product.image.mobile} className="product-img" />
							</picture>

							<button
								type="button"
								className="add-to-cart-button"
								onClick={() => handleAddProductToCart(product)}
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

							<div className="product-quantity-btn-wrapper">
								<button
									className="decrement-btn"
									onClick={() => handleDecrement(product)}
									aria-label="Decrement quantity."
								>
									<img src={decrementIcon} alt="" />
								</button>
								<p className="product-quantity">{product.quantity}</p>
								<button
									className="increment-btn"
									onClick={() => handleIncrement(product)}
									aria-label="Increment quantity."
								>
									<img src={incrementIcon} alt="" />
								</button>
							</div>
						</div>

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
