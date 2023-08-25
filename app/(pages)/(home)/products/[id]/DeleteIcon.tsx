"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

// icons & UI
import { TiDelete } from "react-icons/ti"

export default function DeleteIcon({ id }: { id: number }) {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleClick = async () => {
		setIsLoading(true)

		const res = await fetch(`http://localhost:3000/api/products/${id}`, {
			method: "DELETE",
		})
		const json: any = await res.json()

		if (json.error) {
			// console.log(error)
			setIsLoading(false)
		}
		if (!json.error) {
			router.refresh()
			router.push("/products")
		}
	}

	return (
		<button
			className="btn-primary text-black text-lg border-black w-fit h-fit rounded "
			onClick={() => handleClick()}
			disabled={isLoading}>
			{isLoading && (
				<div className="text-black   rounded border-1 px-2 flex justify-center align-middle items-center hover:text-white hover:bg-red-600">
					<TiDelete />
					Deleting....
				</div>
			)}
			{!isLoading && (
				<div className="text-black rounded border-1  px-2 flex justify-center align-middle items-center hover:text-white hover:bg-red-600">
					<TiDelete />
					Delete Ticket
				</div>
			)}
		</button>
	)
}
