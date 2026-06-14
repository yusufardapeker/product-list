import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../../utils/price";
import { selectFinalPrice } from "../../../store/productSlice";
import orderConfirmedImage from "../../../../public/images/icon-order-confirmed.svg";

function OrderConfirmed({ handleNewOrder }) {
	const { cartProducts } = useSelector((store) => store.products);
	const {
		userData: { city, country },
		isRegistered,
	} = useSelector((store) => store.register);
	const { finalPrice, discountedFinalPrice } = useSelector(selectFinalPrice);
	const dispatch = useDispatch();

	return (
		<div className="order-confirmed">
			<div className="overlay"></div>

			<div className="order-info">
				<div className="order-info-head">
					<img src={orderConfirmedImage} alt="" className="order-confirmed-image" />

					<p className="confirm-text">Order Confirmed</p>
					<p className="enjoy-text">We hope you enjoy your food!</p>
				</div>
				<div className="order-info-body">
					<div className="order-products">
						{cartProducts.map((product) => (
							<div className="product" key={product.id}>
								<img src={product.image.thumbnail} className="product-thumbnail" alt="" />

								<div className="product-info">
									<p className="name">{product.name}</p>

									<div className="quantity-wrapper">
										<p className="quantity">{product.quantity}x</p>
										<p className="base-price">{formatPrice(product.price)}</p>
									</div>
								</div>

								<p className="total-price">{formatPrice(product.price * product.quantity)}</p>
							</div>
						))}

						<div className="final-price-wrapper">
							<p className="title">Order Total</p>
							{isRegistered ? (
								<>
									<div className="discounted-price">
										<p className="old-price">{formatPrice(finalPrice)}</p>
										<p className="final-price discounted">{formatPrice(discountedFinalPrice)}</p>
									</div>
								</>
							) : (
								<p className="final-price">{formatPrice(finalPrice)}</p>
							)}
						</div>

						{isRegistered && (
							<div className="address-info">
								<p className="address-info-text">Your Address:</p>
								<p className="address">{`${city}, ${country}`}</p>
							</div>
						)}
					</div>

					<button className="order-button" onClick={handleNewOrder}>
						Start New Order
					</button>
				</div>
			</div>
		</div>
	);
}

export { OrderConfirmed };
