import { useContext } from "react"
// import { ProductContext } from "../../context/productContext"
import FeaturedProduct from "../shared/Featured-Product"

const FeaturedCollection: React.FC = () => {
	// const { Bikes, Clothes, Accessories } = useContext(ProductContext)
	// const productItems = Bikes.concat(Clothes, Accessories)
	// 	.flat()
	// 	.filter((_, i) => i < 4)
	// 	.map((product) => <FeaturedProduct {...product} key={product.id} />)

	return (
		<div className="featured-collection ">
			<h2 className="featured-section-title">Featured Collection</h2>
			{/* <div className="products">{productItems}</div> */}
		</div>
	)
}

export default FeaturedCollection
