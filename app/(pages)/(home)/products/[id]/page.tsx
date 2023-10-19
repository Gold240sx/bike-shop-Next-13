import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import CartButton from "../../../../components/buttons/CartButton"
import { formattedPrice } from "../../../../functions/priceFormatter"
import ImageSwitcher from "../../../../components/shared/ImageSwitcher"

// components
import EditModal from "./EditModal"
import LinkButton from "@/app/components/buttons/LinkButton"
import SearchFilterDropdownAutoComplete from "@/app/(pages)/admin/_edit/(image-uploader)/dropdown/SearchFilterDropdownAutoComplete"
import Breadcrumb from "@/app/components/REUSABLE/TWUI-components/Breadcrumbs"

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

	const pages = [
		{ name: "Products", href: "/products", current: false },
		{ name: product?.title, href: `/products/${product?.id}`, current: true },
	]

	return (
		<main className="mx-5 mt-32 md:mx-16">
			<nav className="flex flex-col w-full md:flex-row">
				<div className="w-full">
					<Breadcrumb pages={pages} />
					<div className="text-black bg-white card border-1 border-zinc-800">
						<h2 className="pb-10 pl-2 text-3xl text-zinc-400">Product Details</h2>
						<div>
							<div className="flex flex-col single-product-container md:grid md:grid-cols-5">
								{/* <div className="p-4 mb-4 bg-white product-image">
									<img src={product?.images[0]} className="mx-auto" alt="product" />
								</div> */}
								<ImageSwitcher images={product?.images} className="md:col-span-2 md:grid" />
								<div className="pt-10 product-details md:col-span-3">
									<div className="flex flex-col mb-4 name-price">
										<div className="flex gap-2 mx-4">
											<div className="flex-col mx-4">
												<h4 className="text-3xl text-yellow-500">{product?.manufacturer.manufacturer}</h4>{" "}
												<h4 className="mb-3 text-4xl">{product?.title}</h4>
												<h2 className="text-xl font-medium text-zinc-600">{formattedPrice(product?.price)}</h2>
											</div>
											<img
												className="h-24 ml-auto max-w-[100px] pr-4"
												style={{ height: "min(100px, auto)", width: "min(70px, auto)" }}
												src={product?.manufacturer.logo}
												alt="manufacturer logo"
											/>
										</div>
									</div>
									<div className="flex flex-col justify-between gap-2 py-4 mx-8 my-6 border-t border-b options border-black/10">
										<h2>Pick your color:</h2>
										<SearchFilterDropdownAutoComplete
											className="h-8"
											data={product?.colorOptionsDropdown}
											defaultValue={product?.colorOptions[0].color}
										/>
									</div>

									<div className="flex flex-col mx-8 add-to-cart-btns">
										<CartButton
											product={product?.id}
											label="ADD TO CART"
											action="ADD_TO_CART"
											className="h-12 py-0 text-black bg-white rounded w-60 hover:bg-zinc-50 hover:text-zinc-800"
										/>
										<LinkButton
											to="/cart"
											label="PROCEED TO CHECKOUT"
											className="bg-black text-white h-10 w-60 rounded p-[10px]  hover:bg-zinc-800 hover:text-zinc-200"
										/>
										{/* <button className="text-white bg-black rounded button w-60">PROCEED TO CHECKOUT</button> */}
									</div>
									<div className="mx-4 product-description">
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