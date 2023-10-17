import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Documents = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: documents } = await supabase.from("Documents").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Documents</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(documents, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Documents
