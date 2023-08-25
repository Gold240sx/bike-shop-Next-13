// typically found in the dashboard/products/create file but here for reusability
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface SubmitForm {
	product: { id: string; body: string; priority: string; user_email: string }[]
}

const createForm: React.FC<SubmitForm> = () => {
	const [title, setTitle] = useState("")
	const [body, setBody] = useState("")
	const [priority, setPriority] = useState("low")
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		setIsLoading(true)
		const newProduct = { title, body, priority }

		const res = await fetch("http://localhost:3000/api/tickets", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newProduct),
		})

		const json = await res.json()

		if (json.error) {
			console.log(json.error.message)
		} else if (json.data) {
			router.refresh()
			router.push("/products")
		}
	}

	return (
		<form onSubmit={handleSubmit} className="w-1/2">
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
				{isLoading && <span>Adding...</span>}
				{!isLoading && <span>Add Ticket</span>}
			</button>
		</form>
	)
}

export default createForm
