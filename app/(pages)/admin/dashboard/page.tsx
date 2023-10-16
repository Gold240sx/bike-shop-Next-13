import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: dashboard } = await supabase.from("Dashboard").select("*")

	return (
		<main className="flex flex-col h-full p-8 pb-0">
			<h2 className="text-6xl">Dashboard</h2>
			<div className="flex flex-wrap w-full overflow-ellipsis">
				<pre>{JSON.stringify(dashboard, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Dashboard
