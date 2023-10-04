import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import CartButton from "../../../../components/buttons/CartButton"
import { formattedPrice } from "../../../../functions/priceFormatter"

// components
// import EditModal from "./EditModal"
import LinkButton from "@/app/components/buttons/LinkButton"
import SearchFilterDropdownAutoComplete from "@/app/(pages)/admin/edit/(image-uploader)/dropdown/SearchFilterDropdownAutoComplete"
import ImageSwitcher from "@/app/components/shared/ImageSwitcher"

export const dynamicParams = true

export async function generateMetadata({ params }: any) {
	const supabase = createServerComponentClient({ cookies })

	const { data: product } = await supabase.from("Products").select("*").eq("id", params.id).single()

	return {
		title: `Dojo Helpdesk | ${product?.manufacturer + " " + product?.title || "Product not Found"}`,
	}
}

async function getProduct(id: string) {
	const supabase = createServerComponentClient({ cookies })

	try {
		// Step 1: Fetch the product by its id
		const { data: product }: { data: any } = await supabase.from("Products").select("*").eq("id", id).limit(1)

		if (!product || product.length === 0) {
			// Product not found, return null or an appropriate response
			return null
		}

		const productData = product[0]

		// Step 2: Fetch the manufacturer for the product
		const manufacturerFromProd = productData.manufacturer
		const { data: companyTitle }: { data: any } = await supabase
			.from("Manufacturers")
			.select("manufacturer, logo")
			.eq("manufacturer", manufacturerFromProd)

		const manufacturer = companyTitle[0] // Assuming there's only one matching manufacturer

		// Step 3: Fetch color options and images for the product
		const { data: colorOptions }: { data: any } = await supabase
			.from("product_color_options")
			.select("id, color")
			.eq("product_id", productData.id)

		const colorIds = colorOptions.map((color: any) => color.id)

		const colorImages = await Promise.all(
			colorIds.map(async (colorId: any) => {
				const { data: images }: { data: any } = await supabase
					.from("product_images")
					.select("image_url, product_angle, main_image")
					.eq("color_option_id", colorId)

				return {
					id: colorId,
					color: colorOptions.find((colorOption: any) => colorOption.id === colorId)?.color,
					images: images.map((image: any) => ({
						image_url: image.image_url,
						main_image: image.main_image,
						product_angle: image.product_angle,
					})),
				}
			})
		)

		// Combine colorImages into a single array (flattened)
		const allImages = colorImages.map((colorImage: any) => colorImage.images).flat()

		// Organize the data as you need it
		const productWithImages = {
			id: productData.id,
			manufacturer,
			description: productData.description,
			title: productData.title,
			price: productData.price,
			images: allImages.map((image: any) => image.image_url),
			colorOptionsDropdown: colorOptions.map((colorOption: any) => colorOption.color).flat(),
			colorOptions: colorImages.map((colorImage: any) => ({
				id: colorImage.id,
				color: colorImage.color,
				images: colorImage.images.length > 0 ? colorImage.images : [],
			})),
		}

		return productWithImages
	} catch (error) {
		console.error("Error fetching product:", error)
		return null // Return null in case of an error
	}
}

export default async function ProductDetails({ params }: any) {
	const product = await getProduct(params.id)

	// check if user is logged in
	// {(data?.session?.user.email !== undefined && data?.session?.user.email) === product?.user_email ? (
	//				<EditModal id={product?.id} product={product} />
	//			) :

	return (
		<main className="mt-10 max-w-[900px] mx-auto flex">
			<nav className="flex flex-col w-full">
				<div className="w-full">
					<div className="card text-black border-1 border-zinc-800 bg-white">
						<div className="flex justify-between mb-4">
							<h2 className=" text-3xl text-zinc-400 pl-2">Customer Product View:</h2>
							<div className="flex gap-2">
								<LinkButton
									to={`/admin/products/`}
									label="Back"
									className="bg-zinc-800 text-white rounded p-2 hover:bg-zinc-700"
								/>
								<button className="bg-zinc-800 text-white rounded p-2 hover:bg-zinc-700">Edit</button>
								<button className="bg-zinc-800 text-white rounded p-2 hover:bg-zinc-700">Delete</button>
							</div>
						</div>
						<div>
							<div className="single-product-container">
								<ImageSwitcher images={product?.images} />
								<div className="product-details pt-8">
									<div className="name-price mb-4 flex flex-col">
										<div className="flex gap-2 mx-4">
											<div className="flex-col mx-4">
												<h4 className="text-yellow-500 text-3xl">{product?.manufacturer.manufacturer}</h4>{" "}
												<h4 className="text-4xl mb-3">{product?.title}</h4>
												<h2 className="text-xl font-medium text-zinc-600">{formattedPrice(product?.price)}</h2>
											</div>
											<div className="object-fit max-w-[150px]  ml-auto mr-4 ">
												<img className="w-auto " src={product?.manufacturer.logo} alt="manufacturer logo" />
											</div>
										</div>
									</div>
									<div className="options flex flex-col gap-2 justify-between mx-8 my-6 border-b border-t border-black/10 py-4">
										<h2>Pick your color:</h2>
										<SearchFilterDropdownAutoComplete
											className="h-8"
											data={product?.colorOptionsDropdown}
											defaultValue={product?.colorOptions[0].color}
										/>
									</div>
									<div className="add-to-cart-btns flex gap-4 mx-8">
										<CartButton
											disabled={true}
											product={product?.id}
											label="ADD TO CART"
											action="ADD_TO_CART"
											className="bg-white text-black py-0 w-60 rounded hover:bg-zinc-50  hover:text-zinc-800"
										/>
										<LinkButton
											disabled={true}
											to="/cart"
											label="PROCEED TO CHECKOUT"
											className="bg-black text-white w-60 rounded hover:bg-zinc-800 hover:text-zinc-200"
										/>
										{/* <button className="text-white bg-black rounded button w-60">PROCEED TO CHECKOUT</button> */}
									</div>
									<div className="product-description mx-4 pt-8">
										<p className="mx-4">{product?.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
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
