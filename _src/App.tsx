import {
	Routes, // instead of "Switch"
	Route,
} from "react-router-dom"
import Homepage from "./components/shared/Homepage"
import Shop from "./components/pages/shop/Shop"
import SingleProduct from "./components/shared/Single-Product"
import NotFound from "./components/shared/Not-Found"

function App() {
	return (
		<>
			<div className="">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/product/:id" element={<SingleProduct />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	)
}

export default App
