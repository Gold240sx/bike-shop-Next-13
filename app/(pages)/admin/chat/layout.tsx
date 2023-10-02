import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// components
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import TailwindUISidebarLayout from "../../../components/REUSABLE/TWUI-components/TailwindUISidebarLayout"
import AdminNavbar from "@/app/components/navbar/AdminNavbar"
import AdminFooter from "@/app/components/footer/AdminFooter"

export default async function ChatLayout({ children }: { children: any }) {
	const supabase = createServerComponentClient({ cookies })
	const { data }: { data: { session: null | { user: any } } } = await supabase.auth.getSession()

	if (!data.session) {
		redirect("/signin")
	}

	const { data: user } = await supabase.from("users").select("*").match({ id: data.session.user.id }).single()

	const { data: userData, error } = await supabase
		.from("users")
		.select("role")
		.eq("id", user?.id)
		.single()

	if (user?.role !== "admin") {
		return redirect("/")
	}

	return (
		<>
			<div className="">
				<h1 className="text-6xl p-3">Chat</h1>
				{children}
			</div>
		</>
	)
}
