import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"

const getProduct = async () => {
	const supabase = createServerComponentClient({ cookies })
	const { data: featured } = await supabase.from("Products").select("*").eq("featured_product", true).limit(4)
	const featuredProdIds = featured?.map((product: any) => product.id)

	const unmodifiedURLS = await Promise.all(
		featuredProdIds!.map(async (featuredProdId: any) => {
			const { data: imageURLS } = await supabase
				.from("product_images")
				.select("image_url, color_option_id, id, product_angle, main_image")
				.eq("color_option_id", featuredProdId)
			return (
				imageURLS?.map((image: any) => ({
					color_id: image.color_option_id,
					image_url: image.image_url,
					id: image.id,
					main_image: image.main_image,
					product_angle: image.product_angle,
					// product_id: colors.find((colorOption: any) => colorOption.id === featuredProdId)?.product_id,
					// color: colors.find((colorOption: any) => colorOption.id === featuredProdId)?.color,
				})) || []
			)
		})
	)

	const imageURLS = unmodifiedURLS.flat().map((item) => ({
		image_url: item.image_url,
		// color: item.color,
		image_id: item.id,
		main_image: item.main_image,
		product_angle: item.product_angle,
		color_id: item.color_id,
		// product_id: item.product_id,
	}))
	return { imageURLS, featured }
}

const FeaturedCollection: React.FC = async () => {
	const supabase = createServerComponentClient({ cookies })

	// const { id, title: name, price, images } = product

	const featured = await getProduct()
	console.log(featured)
	// const { id, title: name, price, images } = featured

	return (
		<div className="featured-collection ">
			<h2 className="featured-section-title mx-14 text-3xl mb-3">Featured Collection</h2>
			<div className="featured-products  w-auto gap-2 lg:flex grid md:grid-cols-2 grid-cols-1 flex-col lg:flex-row mx-14">
				{/* {featured?.map((product) => <FeaturedProduct product={product} key={product.id} imageURLS={imageURLS} />)} */}
				{featured?.map((product: any) => <FeaturedProduct product={product} key={product.id} />)}
			</div>
		</div>
	)
}

export default FeaturedCollection
