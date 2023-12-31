import "./FeaturedProducts.styles.scss"
import { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom" // Instead of withRouterimport { ProductContext } from "../../context/productContext"
// import { ProductContext } from "../../context/productContext"

const FeaturedProduct = ({ id, name, images, price }: any) => {
	// const products = useContext(ProductContext)
	const navigate = useNavigate()

	// products.Bikes.find((items) => {
	// 	console.log(items)
	// })
	return (
		<div className="flex flex-col justify-between lg:w-1/5 featured-product max-w-[545px] mx-auto my-3">
			<div
				className="flex items-center justify-center object-contain object-center my-auto featured-image"
				onClick={() => navigate(`/product/${id}`)}>
				<img src={images[0]} alt="product" className="my-auto" />
			</div>
			<div className="flex flex-col mt-auto name-price">
				<h3 className="line-clamp-1">{name}</h3>
				<p>$ {price} </p>
				<button className="button is-black nomad-btn whitespace-nowrap">ADD TO CART</button>
			</div>
		</div>
	)
}

export default FeaturedProduct
