import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"

async function getProducts() {
	const supabase = createServerComponentClient({ cookies })

	// select all of the products from the table
	const { data, error } = await supabase.from("ProductsTest").select()

	if (error) {
		console.log(error.message)
	}

	return data
}

export default async function ProductList() {
	const products = await getProducts()

	return (
		<>
			{products?.map((product) => (
				<div key={product.id} className="card my-5 w-full">
					<Link href={`/products/${product.id}`}>
						<h3>{product.title}</h3>
						<p>{product.body.slice(0, 200)}...</p>
						<div className={`pill ${product.priority}`}>{product.priority} priority</div>
					</Link>
				</div>
			))}
			{products?.length === 0 && <p className="text-center">There are no available products, oh no!!</p>}
		</>
	)
}
