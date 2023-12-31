"use client"

import { ReactEventHandler, useState } from "react"

interface AuthFormProps {
	handleSubmit: (e: React.FormEvent, email: string, password: string) => void
}

export default function AuthForm({ handleSubmit }: AuthFormProps) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<form onSubmit={(e) => handleSubmit(e, email, password)}>
			<label>
				<span>Email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
			</label>
			<label>
				<span>Password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
			</label>
			<button className="bg-teal-400 rounded-md w-full">Submit</button>
		</form>
	)
}