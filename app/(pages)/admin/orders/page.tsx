import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Orders = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: orders } = await supabase.from("Orders").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Orders</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(orders, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Orders
