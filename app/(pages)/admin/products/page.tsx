import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"
import FeaturedProductAdmin from "@/app/components/shared/Featured-Product-Admin"

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
					.select("image_url")
					.eq("color_option_id", colorId)

				return {
					id: colorId,
					color: colorOptions.find((colorOption: any) => colorOption.id === colorId)?.color,
					images: images.map((image: any) => image.image_url),
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
			images: allImages, // Include the images property here
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

async function getProductWithImages(id: string) {
	const product = await getProduct(id) // Use the getProduct function to fetch product data with images
	return product
}

export default async function Products() {
	const supabase = createServerComponentClient({ cookies })

	// Fetch all products
	const { data: products } = await supabase.from("Products").select("*")

	if (!products || products.length === 0) {
		return null
	}

	const productsWithImages = await Promise.all(
		products.map(async (product) => {
			const productWithImages = await getProductWithImages(product.id)

			// Flatten the images for each color option
			const colorOptionsWithFlattenedImages = productWithImages!.colorOptions.map((colorOption) => ({
				...colorOption,
				images: colorOption.images.flatMap((image: any) => image.image_url),
			}))

			// Combine the flattened images back into the product
			const updatedProduct = {
				...productWithImages,
				colorOptions: colorOptionsWithFlattenedImages,
			}

			return updatedProduct
		})
	)

	return (
		<main className="min-h-screen  flex flex-col px-8 py-10">
			<div className="flex flex-row justify-between py-6">
				<h2 className="text-6xl">Products</h2>
				<Link href="/admin/products/add-new" className=" h-fit ">
					<div className=" w-fit font-bold  text-base text-right px-3 py-1.5 m-3 bg-teal-400 hover:bg-teal-300 text-white rounded-md">
						+ New Product
					</div>
				</Link>
			</div>
			<div className="whole-admin-collection">
				<h2 className="whole-admin-section-title">All Products</h2>
				<div className="whole-admin-products grid lg:grid-cols-4 md:grid-cols-2 gap-2 p-2">
					{productsWithImages?.map((product) => <FeaturedProductAdmin product={product} key={product.id} />)}
				</div>
			</div>
		</main>
	)
}
