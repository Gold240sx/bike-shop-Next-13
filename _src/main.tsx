import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ProductContextProvider from "./context/productContext.jsx"
import App from "./App.jsx"
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ProductContextProvider>
			<App />
		</ProductContextProvider>
	</BrowserRouter>
)
