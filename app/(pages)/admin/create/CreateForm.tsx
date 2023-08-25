// typically found in the dashboard/products/create file but here for reusability
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export interface Product {
	id: string
	body: string
	priority: string
	user_email: string
}

export interface SubmitForm {
	product: Product
}

const createForm: React.FC<SubmitForm> = ({ product }) => {
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [priority, setPriority] = useState("low")
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		setIsLoading(true)
		const newProduct = { title, body, priority }

		const res = await fetch("http://localhost:3000/api/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newProduct),
		})

		const json = await res.json()

		if (json.error) {
			console.log(json.error.message)
		} else if (json.data) {
			router.refresh()
			router.push("/admin")
		}
	}

	return (
		<form onSubmit={handleSubmit} className="w-1/2 ">
			<button
				className="bg-white hover:bg-zinc-100 border border-zinc-400 hover:text-zinc-800 hover:border-zinc-800 rounded m-0 ml-auto mb-4"
				onClick={() => router.push("/admin")}>
				Back
			</button>
			<label>
				<span>Title:</span>
				<input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
			</label>
			<label>
				<span>Title:</span>
				<textarea required onChange={(e) => setBody(e.target.value)} value={body} />
			</label>
			<label>
				<span>Priority:</span>
				<select onChange={(e) => setPriority(e.target.value)} value={priority}>
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
			</label>
			<button className="btn-primary" disabled={isLoading}>
				{isLoading && <span className="bg-teal-500 rounded hover:bg-zinc-400 px-3 py-1 text-lg cursor-not-allowed">Adding...</span>}
				{!isLoading && <span className="bg-teal-500 rounded hover:bg-teal-400 px-3 py-1 text-lg">Add Ticket</span>}
			</button>
		</form>
	)
}

export default createForm
