export const formatPrice = (price) => {
	return price.toString().includes(".") ? `$${price}0` : `$${price}.00`;
};
