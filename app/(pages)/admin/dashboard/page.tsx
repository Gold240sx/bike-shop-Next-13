import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Dashboard = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: dashboard } = await supabase.from("Dashboard").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Dashboard</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(dashboard, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Dashboard
