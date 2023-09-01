import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Shop() {
	const supabase = createServerComponentClient({ cookies })

	const { data: post } = await supabase.from("post").select("*")
    const { data: products } = await supabase.from("Products").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h2>Shop</h2>
			<pre>{JSON.stringify(post, null, 2)}</pre>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</div>
		</main>
	)
}
