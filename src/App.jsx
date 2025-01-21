import "./styles/reset.css";
import "./styles/main.scss";

import { TopBar } from "./components/topBar";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { Register } from "./components/register";

function App() {
	return (
		<>
			<TopBar />

			<div className="container">
				<Register />

				<main>
					<ProductList />
					<Cart />
				</main>
			</div>
		</>
	);
}

export default App;
