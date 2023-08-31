"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

// icons & UI
import { TiDelete } from "react-icons/ti"

export default function DeleteButton({ id }: { id: number }) {
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleClick = async () => {
		setIsLoading(true)

		const res = await fetch(`http://localhost:3000/api/products/${id}/delete`, {
			method: "DELETE",
		})
		const json: any = await res.json()

		if (json.error) {
			setIsLoading(false)
		}
		if (!json.error) {
			router.refresh()
			router.push("/admin")
		}
	}

	return (
		<button
			className="btn-primary text-lg w-fit rounded  bg-red-600 p-0 h-9 border-red-600 border"
			onClick={() => handleClick()}
			disabled={isLoading}>
			{isLoading && (
				<div className=" flex gap-2 items-center  text-red-700 pl-2 pr-4 py-1 cursor-not-allowed  justify-center">
					<TiDelete className="text-2xl" />
					<span className="text-red-800">Deleting....</span>
				</div>
			)}
			{!isLoading && (
				<div className=" flex gap-2  items-center  hover:bg-red-500 pl-2 pr-4 py-1  justify-center">
					<TiDelete className="text-2xl" />
					<span className="text-white">Delete Product</span>
				</div>
			)}
		</button>
	)
}
