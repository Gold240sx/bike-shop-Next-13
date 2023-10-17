import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Chat = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: chat } = await supabase.from("Chat").select("*")

	return (
		<main className=" p-8 flex flex-col">
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(chat, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Chat
