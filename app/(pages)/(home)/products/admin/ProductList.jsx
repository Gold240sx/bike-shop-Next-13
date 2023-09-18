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
		<div className="flex justify-between flex-col w-full">
			{products?.map((product) => (
				<Link href={`/products/${product.id}`}>
					<div key={product.id} className="card my-5 w-full flex flex-col items-start">
						<h3 className="pt-3">{product.title}</h3>
						<p className="overflow-ellipses">{product.body.slice(0, 200)}</p>
						<div className={`pill ${product.priority}`}>{product.priority} priority</div>
					</div>
				</Link>
			))}
			{products?.length === 0 && <p className="text-center">There are no available products, oh no!!</p>}
		</div>
	)
}
