import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const WarehouseChat = async () => {
	const supabase = createServerComponentClient({ cookies })

	// const { data: chat } = await supabase.from("Chats").select("*").eq("department", "warehouse")

	return (
		<main className=" p-8 pt-0 flex flex-col">
			<h2 className="text-3xl text-yellow-400">Warehouse</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">{/* <pre>{JSON.stringify(chat, null, 2)}</pre> */}</div>
		</main>
	)
}

export default WarehouseChat
