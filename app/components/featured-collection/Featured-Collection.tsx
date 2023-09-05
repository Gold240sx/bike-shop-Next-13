import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../shared/Featured-Product"

const FeaturedCollection: React.FC = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: featured } = await supabase.from("Products").select("*").eq("featured_product", true).limit(4)

	return (
		<div className="featured-collection ">
			<h2 className="featured-section-title mx-14 text-3xl mb-3">Featured Collection</h2>
			<div className="featured-products  w-auto gap-2 lg:flex grid md:grid-cols-2 grid-cols-1 flex-col lg:flex-row mx-14">
				{featured?.map((product) => <FeaturedProduct product={product} key={product.id} />)}
			</div>
		</div>
	)
}

export default FeaturedCollection
