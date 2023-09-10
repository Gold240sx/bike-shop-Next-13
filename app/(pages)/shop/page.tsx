import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import FeaturedProduct from "../../components/shared/Featured-Product"

export default async function Shop() {
	const supabase = createServerComponentClient({ cookies })

	const { data: products } = await supabase.from("Products").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h2>Shop</h2>

			<div className="featured-collection ">
				<h2 className="featured-section-title">All Products</h2>
				<div className="featured-products">
					{products?.map((product) => <FeaturedProduct product={product} key={product.id} />)}
				</div>
			</div>
		</main>
	)
}
