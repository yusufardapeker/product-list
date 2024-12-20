import "./styles/reset.css";
import "./styles/main.scss";

import { TopBar } from "./components/topBar";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";

function App() {
	return (
		<>
			<TopBar />

			<div className="container">
				<ProductList />
				<Cart />
			</div>
		</>
	);
}

export default App;
