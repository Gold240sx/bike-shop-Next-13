import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"

// components
import Navbar from "@/app/components/Navbar"

export default async function DashboardLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies })
	const { data } = await supabase.auth.getSession()

	if (!data.session) {
		redirect("/login")
	}

	return (
		<>
			<Navbar user={data.session.user} />
			{children}
		</>
	)
}

export const createServerClient = cache(() => {
	const cookieStore = cookies()
	return createServerComponentClient({
		cookies: () => cookieStore,
	})
})
