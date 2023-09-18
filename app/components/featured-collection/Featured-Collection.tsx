import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"
import { error } from "console"
import { getFeaturedProductsFormatted } from "../../context/productContext"

const FeaturedCollection: React.FC = async () => {
	const { featuredProducts, allManufacturers } = await getFeaturedProductsFormatted()

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
