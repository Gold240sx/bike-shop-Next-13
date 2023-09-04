import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"

const FeaturedCollection: React.FC = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: featured } = await supabase.from("Products").select("*").eq("featured_product", true).limit(4)

	// console.log("featured", featured)
	return (
		<div className="featured-collection ">
			<h2 className="featured-section-title">Featured Collection</h2>
			<div className="featured-products">{featured?.map((product) => <FeaturedProduct product={product} key={product.id} />)}</div>
		</div>
	)
}

export default FeaturedCollection
