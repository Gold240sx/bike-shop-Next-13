import { useContext } from "react"
import Layout from "../../shared/Layout"
import FeaturedProduct from "../../shared/Featured-Product"
import { ProductContext } from "../../../context/productContext"
import "./Shop.styles.scss"

const Shop = () => {
	const { Bikes, Clothes, Accessories } = useContext(ProductContext)
	const allProducts = Bikes.concat(Clothes, Accessories)
		.flat()
		.map((product) => <FeaturedProduct {...product} key={product.id} />)

	return (
		<Layout>
			<div className="product-list-container">
				<h2 className="product-list-title">Shop</h2>
				<div className="product-list">{allProducts}</div>
			</div>
		</Layout>
	)
}

export default Shop
