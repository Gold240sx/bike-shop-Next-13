import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

// components
import DeleteIcon from "./DeleteIcon"

export const dynamicParams = true

export async function generateMetadata({ params }: any) {
	const supabase = createServerComponentClient({ cookies })

	const { data: product } = await supabase.from("ProductsTest").select().eq("id", params.id).single()

	return {
		title: `Dojo Helpdesk | ${product?.title || "Product not Found"}`,
	}
}

async function getProduct(id: string) {
	const supabase = createServerComponentClient({ cookies })

	const { data } = await supabase.from("ProductsTest").select().eq("id", id).single()

	if (!data) {
	}

	return data
}

export default async function ProductDetails({ params }: any) {
	const product = await getProduct(params.id)

	const supabase = createServerComponentClient({ cookies })
	const { data } = await supabase.auth.getSession()

	return (
		<main className="mt-32 mx-16">
			<nav>
				<h2>Product Details</h2>
				<div className="ml-auto">{data?.session?.user.email === product?.user_email && <DeleteIcon id={product?.id} />}</div>
			</nav>
			<div className="card text-black border-1 border-zinc-800 bg-white">
				<h3>{product?.title}</h3>
				<small>Created by {product?.user_email}</small>
				<p>{product?.body}</p>
				<div className={`pill ${product?.priority}`}>{product?.priority} priority</div>
			</div>
		</main>
	)
}
