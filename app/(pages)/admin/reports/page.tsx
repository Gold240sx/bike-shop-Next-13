import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Reports = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: reports } = await supabase.from("Reports").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Reports</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(reports, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Reports
