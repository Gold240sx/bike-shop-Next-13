import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"
import { error } from "console"


// async function getFeaturedProductData() {
// 	const supabase = createServerComponentClient({ cookies })

// 	try {
// 		// Step 1: Fetch featured products
// 		const { data: featuredProducts }: { data: any } = await supabase.from("Products").select("*").eq("featured_product", true).limit(4)

// 		// Step 2: Fetch manufacturers for these products and map to get logos
// 		const addedManufacturerLogoToFeatured = await Promise.all(
// 			featuredProducts.map(async (product: any) => {
// 				const manufacturerFromProd = product.manufacturer

// 				try {
// 					const { data: manufacturer }: { data: any } = await supabase
// 						.from("Manufacturers")
// 						.select("manufacturer, logo")
// 						.eq("manufacturer", manufacturerFromProd)

// 					// Merge the manufacturer data (including logo) with the product
// 					const productWithManufacturer = {
// 						...product,
// 						manufacturer: manufacturer[0], // Assuming there's only one matching manufacturer
// 					}

// 					return productWithManufacturer
// 				} catch (error) {
// 					console.error("Error fetching manufacturer:", error)
// 					return product // Return the product as-is if there's an error
// 				}
// 			})
// 		)

// 		// Step 3: Fetch all manufacturers (optional)
// 		const { data: allManufacturers }: { data: any } = await supabase.from("Manufacturers").select("manufacturer, logo")

// 		return {
// 			featuredProducts: addedManufacturerLogoToFeatured,
// 			allManufacturers: allManufacturers,
// 		}
// 	} catch (error) {
// 		console.error("Error fetching featured products:", error)
// 		return {
// 			featuredProducts: [], // Return an empty array in case of an error
// 			allManufacturers: [],
// 		}
// 	}
// }

async function getFeaturedProductData() {
	const supabase = createServerComponentClient({ cookies })

	try {
		// Step 1: Fetch featured products
		const { data: featuredProducts }: { data: any } = await supabase.from("Products").select("*").eq("featured_product", true).limit(4)

		// Step 2: Fetch manufacturers for these products and map to get logos
		const addedManufacturerLogoToFeatured = await Promise.all(
			featuredProducts.map(async (product: any) => {
				const manufacturerFromProd = product.manufacturer

				try {
					const { data: manufacturer }: { data: any } = await supabase
						.from("Manufacturers")
						.select("manufacturer, logo")
						.eq("manufacturer", manufacturerFromProd)

					// Merge the manufacturer data (including logo) with the product
					const productWithManufacturer = {
						...product,
						manufacturer: manufacturer[0], // Assuming there's only one matching manufacturer
					}
					// get all the images for the product and arrange them into an array
					const { data: colorOptions }: { data: any } = await supabase
						.from("product_color_options")
						.select("id")
						.eq("product_id", product.id)
					// const colorId = colorOptions.map((color: any) => color.id)
					const colorIds = colorOptions.map((color: any) => color.id)
					const colorImages = await Promise.all(
						colorIds.map(async (colorId: any) => {
							const { data: images }: { data: any } = await supabase
								.from("product_images")
								.select("image_url")
								.eq("color_option_id", colorId)

							return images.map((image: any) => image.image_url)
						})
					)
					const allImages = colorImages.reduce((accumulator: string[], colorItem: any) => {
						return accumulator.concat(colorItem.images)
					}, [])

					const completeProducts = {
						...productWithManufacturer,
						colorOptions: colorOptions,
						colorId: colorIds[0],
						allImages: allImages,
						ImagesByColor: colorImages,
					}

					return completeProducts
				} catch (error) {
					console.error("Error fetching manufacturer:", error)
					return product // Return the product as-is if there's an error
				}
			})
		)

		// Step 3: Fetch all manufacturers (optional)
		const { data: allManufacturers }: { data: any } = await supabase.from("Manufacturers").select("manufacturer, logo")

		return {
			featuredProducts: addedManufacturerLogoToFeatured,
			allManufacturers: allManufacturers,
		}
	} catch (error) {
		console.error("Error fetching featured products:", error)
		return {
			featuredProducts: [], // Return an empty array in case of an error
			allManufacturers: [],
		}
	}
}

const FeaturedCollection: React.FC = async () => {
	const { featuredProducts, allManufacturers } = await getFeaturedProductData()

	return (
		<div className="featured-collection ">
			<h2 className="featured-section-title mx-14 text-3xl mb-3">Featured Collection</h2>
			<div className="featured-products  w-auto gap-2 lg:flex grid md:grid-cols-2 grid-cols-1 flex-col lg:flex-row mx-14">
				{/* {featuredProducts.map((product: any) => (
					// <FeaturedProduct
					// 	key={product.id}
					// 	product={product}
					// 	// Pass the appropriate imageURLS here
					// />
					
				))} */}
				<pre>{JSON.stringify(featuredProducts, null, 2)}</pre>
			</div>
		</div>
	)
}

export default FeaturedCollection
