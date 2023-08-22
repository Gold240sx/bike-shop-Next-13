"use client"
"dynamic"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LogoutButton() {
	const router = useRouter()

	const handleLogout = async () => {
		const supabase = createClientComponentClient()
		const { error } = await supabase.auth.signOut()

		if (!error) {
			router.push("/signin")
		}
	}

	return (
		<button className="bg-zinc-200 rounded px-2.5 py-1 hover:bg-teal-400/50 cursor-pointer hover:text-white" onClick={handleLogout}>
			Logout
		</button>
	)
}
