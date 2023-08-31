"use client"
import { useTransition } from "react"

// icons & UI
import { TiDelete } from "react-icons/ti"
import { deleteProduct } from "@/app/(pages)/(home)/products/admin/actions"

export default function DeleteButton({ id }: { id: string }) {
	const [isPending, startTransition] = useTransition()

	return (
		<button
			className="btn-primary text-lg w-fit rounded  bg-red-600 p-0 h-9 border-red-600 border"
			// onClick={() => handleClick()}
			onClick={() => startTransition(() => deleteProduct(id))}
			disabled={isPending}>
			{isPending && (
				<div className=" flex gap-2 items-center  text-red-700 pl-2 pr-4 py-1 cursor-not-allowed  justify-center">
					<TiDelete className="text-2xl" />
					<span className="text-red-800">Deleting....</span>
				</div>
			)}
			{!isPending && (
				<div className=" flex gap-2  items-center  hover:bg-red-500 pl-2 pr-4 py-1  justify-center">
					<TiDelete className="text-2xl" />
					<span className="text-white">Delete Product</span>
				</div>
			)}
		</button>
	)
}
