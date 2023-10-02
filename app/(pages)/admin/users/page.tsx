import React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Users = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: admins } = await supabase.from("users").select("*").eq("role", "admin")
	const { data: users } = await supabase.from("users").select("*").eq("role", "user")

	return (
		<main className=" p-8 flex flex-col">
			<h2 className="text-6xl">Users</h2>

			<section id="internal-users" className="flex flex-col">
				<h3 className="text-4xl">Internal Users</h3>
				<div className="w-full flex-wrap flex overflow-ellipsis">
					<pre>{JSON.stringify(admins, null, 2)}</pre>
				</div>
			</section>

			<section id="external-users" className="flex flex-col">
				<h3 className="text-4xl">Customer Accounts</h3>
				<div className="w-full flex-wrap flex overflow-ellipsis">
					<pre>{JSON.stringify(users, null, 2)}</pre>
				</div>
			</section>
		</main>
	)
}

export default Users
