import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Settings = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: settings } = await supabase.from("Settings").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Settings</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(settings, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Settings
