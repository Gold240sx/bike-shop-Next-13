import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import CartButton from "../../../../components/buttons/CartButton"
import { formattedPrice } from "../../../../functions/priceFormatter"

// components
import EditModal from "./EditModal"
import LinkButton from "@/app/components/buttons/LinkButton"
import SearchFilterDropdownAutoComplete from "@/app/components/dropdown/SearchFilterDropdownAutoComplete"

export const dynamicParams = true

export async function generateMetadata({ params }: any) {
	const supabase = createServerComponentClient({ cookies })

	const { data: product } = await supabase.from("ProductsTest").select().eq("id", params.id).single()

	return {
		title: `Dojo Helpdesk | ${product?.title || "Product not Found"}`,
	}
}

async function getProduct(id: string) {
	const supabase = createServerComponentClient({ cookies })

	const { data, error } = await supabase.from("Products").select().eq("id", id).single()

	return data
}

export default async function ProductDetails({ params }: any) {
	const product = await getProduct(params.id)

	const supabase = createServerComponentClient({ cookies })
	const { data } = await supabase.auth.getSession()
	const { data: manufacturer } = await supabase.from("Manufacturers").select().eq("id", product.id).single()

	return (
		<main className="mt-32 mx-16">
			<nav className="flex flex-col w-full">
				<div className="w-full">
					{(data?.session?.user.email !== undefined && data?.session?.user.email) === product?.user_email ? (
						<EditModal id={product?.id} product={product} />
					) : (
						<div className="card text-black border-1 border-zinc-800 bg-white">
							<h2 className=" text-3xl text-zinc-400 pl-2">Product Details</h2>
							<div>
								<div className="single-product-container">
									<div className="product-image mb-4 p-4 bg-white">
										<img src={product.images} className="" alt="product" />
									</div>
									<div className="product-details">
										<div className="name-price mb-4 flex flex-col">
											<div className="flex gap-2 mx-4">
												<div className="flex-col mx-4">
													<h4 className="text-yellow-500 text-3xl">{product?.manufacturer}</h4>{" "}
													<h4 className="text-4xl mb-3">{product?.title}</h4>
													<h2 className="text-xl font-medium text-zinc-600">{formattedPrice(product.price)}</h2>
												</div>
												<img className="w-24 h-24 ml-auto mr-4" src={manufacturer?.logo} alt="manufacturer logo" />
											</div>
										</div>
										<div className="options flex flex-row justify-between mx-8 my-6">
											<SearchFilterDropdownAutoComplete />
										</div>

										<div className="add-to-cart-btns flex flex-col mx-8">
											<CartButton
												product={product}
												label="ADD TO CART"
												action="ADD_TO_CART"
												className="bg-white text-black py-0 w-60 rounded hover:bg-zinc-50 h-12 hover:text-zinc-800"
											/>
											<LinkButton
												to="/cart"
												label="PROCEED TO CHECKOUT"
												className="bg-black text-white h-10 w-60 rounded p-[10px]  hover:bg-zinc-800 hover:text-zinc-200"
											/>
											{/* <button className="text-white bg-black rounded button w-60">PROCEED TO CHECKOUT</button> */}
										</div>
										<div className="product-description mx-4">
											<p className="mx-4">{product.description}</p>
										</div>
									</div>
								</div>
								{/*  */}
							</div>
						</div>
					)}
				</div>
			</nav>
		</main>
	)
}

{
	/*
import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom" // Instead of withRouter
import { ProductContext } from "../../context/productContext"
import { Products } from "../../shop/Products"
import { Product } from "../../context/productContext"
import Layout from "./Layout"
import "./Single-Product.styles.scss"

const SingleProduct = () => {
	// const products = useContext(ProductContext)
	const [product, setProduct] = useState<Product | null>(null)
	const { id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const allProducts = [...Products.Bikes, ...Products.Clothes, ...Products.Accessories]
		const selectedProduct = allProducts.find((item) => Number(item.id) === Number(id))

		// if product doesn't exist redirect user back to the Shop page.
		if (!selectedProduct) {
			// return navigate("/shop")
		}

		const product = selectedProduct ? selectedProduct : null

		setProduct(product)
	}, [id, product, navigate, Products])

	// Loading while we check for product. (future spinner)
	if (!product) {
		return null
	}

	const { images, name, price, description } = product

	return (
		<Layout>
			<div className="single-product-container">
				<div className="product-image">
					<img src={images[0]} className="" alt="product" />
				</div>
				<div className="product-details">
					<div className="name-price">
						<h3 className="">{name}</h3>
						<p className="">{price}</p>
					</div>
					<div className="add-to-cart-btns">
						<button className="text-black rounded button">ADD TO CART</button>
						<button className="text-white bg-black rounded button">PROCEED TO CHECKOUT</button>
					</div>
					<div className="product-description">
						<p className="">{description}</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default SingleProduct

*/
}