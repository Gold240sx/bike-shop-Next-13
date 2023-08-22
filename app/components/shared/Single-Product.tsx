import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom" // Instead of withRouter
// import { ProductContext } from "../../context/productContext"
// import { Products } from "../../shop/Products"
// import { Product } from "../../context/productContext"
// import Layout from "./Layout"
import "./Single-Product.styles.scss"

const SingleProduct = () => {
	// const products = useContext(ProductContext)
	// const [product, setProduct] = useState<Product | null>(null)
	const { id } = useParams()
	const navigate = useNavigate()

	// useEffect(() => {
	// const allProducts = [...Products.Bikes, ...Products.Clothes, ...Products.Accessories]
	// const selectedProduct = allProducts.find((item) => Number(item.id) === Number(id))

	// if product doesn't exist redirect user back to the Shop page.

	// if (!selectedProduct) {

	// return navigate("/shop")
	// }

	// 	const product = selectedProduct ? selectedProduct : null

	// 	setProduct(product)
	// }, [id, product, navigate, Products])

	// Loading while we check for product. (future spinner)
	// if (!product) {
	// 	return null
	// }

	// const { images, name, price, description } = product

	return (
		// <Layout>
		<>
			<div className="single-product-container">
				<div className="product-image">{/* <img src={images[0]} className="" alt="product" /> */}</div>
				<div className="product-details">
					<div className="name-price">
						{/* <h3 className="">{name}</h3>
						<p className="">{price}</p> */}
					</div>
					<div className="add-to-cart-btns">
						<button className="text-black rounded button">ADD TO CART</button>
						<button className="text-white bg-black rounded button">PROCEED TO CHECKOUT</button>
					</div>
					<div className="product-description">{/* <p className="">{description}</p> */}</div>
				</div>
			</div>
		</>
		// {/* </Layout> */}
	)
}

export default SingleProduct
