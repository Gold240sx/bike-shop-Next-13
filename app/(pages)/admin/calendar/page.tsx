import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Calendar = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: calendar } = await supabase.from("Calendar").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Calendar</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(calendar, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Calendar
