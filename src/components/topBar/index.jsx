import { useSelector } from "react-redux";
import "./topbar.css";

function TopBar() {
	const discountRate = useSelector((state) => state.register.discountRate);

	return (
		<div className="top-bar">
			<p className="text-content">Please Register to Get {discountRate * 100}% Discount!</p>
		</div>
	);
}

export { TopBar };
