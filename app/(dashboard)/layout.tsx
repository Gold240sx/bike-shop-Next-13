import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"

// components
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

export default async function DashboardLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies })
	const { data }: { data: { session: null | { user: any } } } = await supabase.auth.getSession()

	// if (!data.session) {
	// 	redirect("/login")
	// }

	return (
		<>
			<Navbar user={data?.session?.user} />
			<div className="">{children}</div>
			<Footer />
		</>
	)
}

export const createServerClient = cache(() => {
	const cookieStore = cookies()
	return createServerComponentClient({
		cookies: () => cookieStore,
	})
})
