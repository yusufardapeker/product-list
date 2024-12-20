import "./styles/reset.css";
import "./styles/main.scss";

import { TopBar } from "./components/topBar";
import { ProductList } from "./components/productList";

function App() {
	return (
		<>
			<TopBar />

			<div className="container">
				<ProductList />
			</div>
		</>
	);
}

export default App;
