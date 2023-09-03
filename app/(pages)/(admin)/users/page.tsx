import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Users = async () => {
	const supabase = createServerComponentClient({ cookies })

	const { data: products } = await supabase.from("users").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h2>Users</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</div>
		</main>
	)
}

export default Users
