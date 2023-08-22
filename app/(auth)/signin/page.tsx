"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"

// components
import AuthForm from "../AuthForm"

export default function Login() {
	const router = useRouter()
	const [error, setError] = useState("")

	const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
		e.preventDefault()
		setError("")

		const supabase = createClientComponentClient()

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})
		if (error) {
			setError(error.message)
		}
		if (!error) {
			router.push("/")
		}
	}
	;[]
	return (
		<main className="w-full flex flex-col h-full justify-center pb-28">
			<h2 className="text-center">Sign In</h2>

			<AuthForm handleSubmit={handleSubmit} />

			{error && <div className="error">{error}</div>}
			<span className="text-center">
				Don't have an account?
				<Link href="./signup" className="text-sky-400 ml-4">
					Sign Up!
				</Link>
			</span>
		</main>
	)
}
