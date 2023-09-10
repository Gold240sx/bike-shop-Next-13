import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"
import { error } from "console"

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
					const { data: companyTitle }: { data: any } = await supabase
						.from("Manufacturers")
						.select("manufacturer, logo")
						.eq("manufacturer", manufacturerFromProd)

					// Merge the manufacturer data (including logo) with the product
					const productWithManufacturer = {
						...product,
						manufacturer: companyTitle[0], // Assuming there's only one matching manufacturer
					}
					// get all the images for the product and arrange them into an array
					const { data: colorOptions }: { data: any } = await supabase
						.from("product_color_options")
						.select("id, color")
						.eq("product_id", product.id)

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

					const allImages = colorImages.map((colorImage: any) => colorImage.images).flat()
					const flatImages = allImages.map((image: any) => image.image_url).flat()

					return {
						id: productWithManufacturer.id,
						manufacturer: productWithManufacturer.manufacturer,
						title: productWithManufacturer.title,
						price: productWithManufacturer.price,
						images: flatImages,
						colorOptions: colorImages.map((colorImage: any) => ({
							id: colorImage.id,
							color: colorImage.color,
							images: colorImage.images.length > 0 ? colorImage.images : [],
						})),
					}
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
				{featuredProducts.map((product: any) => product && <FeaturedProduct key={product.id} product={product} />)}
			</div>
		</div>
	)
}

export default FeaturedCollection
