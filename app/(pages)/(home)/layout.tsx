import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { cache } from "react"

// components
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

export default async function HomeLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies })
	const { data }: { data: { session: null | { user: any } } } = await supabase.auth.getSession()
    const user = data?.session?.user

	const { data: userData, error } = await supabase
		.from("users")
		.select("role")
		.eq("id", user?.id)
		.single()

	return (
		<div className=" bg-zinc-100">
			<Navbar user={user} userData={userData} />
			{/* <pre className="">{JSON.stringify(u, null, "")}</pre> */}
			{/* <pre>{JSON.stringify(user.id, null, "")}</pre>
			<pre>{JSON.stringify(userData?.role, null, "")}</pre> */}
			<div className="min-h-screen">{children}p</div>
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
