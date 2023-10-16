import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

import Homepage from "../../components/shared/Homepage"

export default async function Home() {
	const supabase = createServerComponentClient({ cookies })

	const { data: products } = await supabase.from("Products").select("*")

	return (
		<main className="h-full">
			<Homepage products={products} />
		</main>
	)
}
