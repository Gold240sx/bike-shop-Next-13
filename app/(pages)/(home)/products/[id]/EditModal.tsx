"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

// icons & UI
import { AiFillEdit } from "react-icons/ai"

import EditForm from "./EditForm"
import DeleteButton from "./DeleteButton"

interface EditModalProps {
	id: number
	product: any
}

export default function EditModal({ id, product }: EditModalProps) {
	const [isEditing, setIsEditing] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleClick = async () => {
		setIsLoading(true)

		const res = await fetch(`http://localhost:3000/api/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: "test",
				body: "test",
				priority: "test",
			}),
		})
		const json: any = await res.json()

		if (!json.error) {
			router.refresh()
		} else {
			setIsLoading(false)
		}
	}

	return (
		<div className={` ${!isEditing ? "" : "bg-zinc-200"} pt-4  rounded-md relative`}>
			<div className={` ${!isEditing && " ml-auto"} mx-8 mt-4 flex items-center justify-between`}>
				{isEditing && <span className="text-2xl w-fit">EDIT PROJECT</span>}
				<div className="flex ml-auto">
					{!isEditing && <DeleteButton id={id} />}
					<button className="btn-primary  text-black text-lg border-black w-fit h-fit rounded " disabled={isLoading}>
						{isLoading && (
							<div className="text-zinc-600 rounded border-1 px-2 flex justify-center align-middle items-center hover:text-black hover:bg-zinc-400">
								<AiFillEdit />
								Updating....
							</div>
						)}
						{!isLoading && !isEditing && (
							<div
								className="text-zinc-600 rounded border-1  px-2 flex justify-center align-middle items-center hover:text-black hover:bg-yellow-300 bg-yellow-400"
								onClick={() => setIsEditing(true)}>
								<AiFillEdit />
								Edit Product
							</div>
						)}
						{!isLoading && isEditing && (
							<div
								className="text-white rounded border-1 bg-sky-500 ml-auto  px-2 flex justify-center align-middle items-center  hover:bg-sky-400"
								onClick={() => {
									handleClick()
									setIsEditing(false)
								}}>
								SAVE
							</div>
						)}
						{!isLoading && isEditing && (
							<div
								className="bg-white hover:bg-zinc-100 px-4 py-[5px] text-zinc-600 border justify-center border-zinc-400 align-middle items-center text-sm hover:text-zinc-800 hover:border-zinc-800 rounded m-0 ml-auto"
								onClick={() => {
									setIsEditing(false)
								}}>
								Back
							</div>
						)}
					</button>
				</div>
			</div>
			<EditForm isEditing={isEditing} product={product} />
		</div>
	)
}
