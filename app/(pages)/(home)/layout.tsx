import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { cache } from "react"

// components
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

export default async function HomeLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies })
	const { data }: { data: { session: null | { user: any } } } = await supabase.auth.getSession()

	return (
		<div className=" bg-zinc-100">
			<Navbar user={data?.session?.user} />
			<div className="min-h-screen">{children}</div>
			<Footer />
		</div>
	)
}

export const createServerClient = cache(() => {
	const cookieStore = cookies()
	return createServerComponentClient({
		cookies: () => cookieStore,
	})
})
