"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"

// components
import AuthForm from "../AuthForm"

export default function Signup() {
	const router = useRouter()
	const [error, setError] = useState("")

	const handleSubmit = async (e: React.FormEvent, email: string, password: string) => {
		e.preventDefault()
		setError("")

		const supabase = createClientComponentClient()
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/api/auth/callback`,
			},
		})
		if (error) {
			setError(error.message)
		}
		if (!error) {
			router.push("/verify")
		}
	}

	return (
		<main className="w-full items-center flex flex-col  h-full">
			<h2 className="text-center">Sign up</h2>

			<AuthForm handleSubmit={handleSubmit} />

			{error && <div className="error">{error}</div>}
			<span className="text-center">
				Don't have an account?
				<Link href="./signin" className="text-sky-400 ml-4">
					Sign In!
				</Link>
			</span>
		</main>
	)
}