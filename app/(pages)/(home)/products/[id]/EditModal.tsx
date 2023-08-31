"use client"
import { use, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"

// icons & UI
import { AiFillEdit } from "react-icons/ai"

import EditForm from "./EditForm"
import DeleteButton from "./DeleteButton"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

interface EditModalProps {
	id: number
	product: any
}

export default function EditModal({ id, product }: EditModalProps) {
	const [isEditing, setIsEditing] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const { pending } = useFormStatus()
	const router = useRouter()

	const handleCancel = () => {
		setIsEditing(false)
	}

	return (
		<div className={` ${!isEditing ? "" : "bg-zinc-200"} pt-4  rounded-md relative`}>
			<div className={` ${!isEditing && " ml-auto"} mx-8 mt-4 flex items-center justify-between`}>
				{isEditing && <span className="text-2xl w-fit">EDIT PROJECT</span>}
				<div className="flex ml-auto">
					<button className="btn-primary  text-black text-lg border-black w-fit h-fit rounded " disabled={isLoading}>
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
									setIsEditing(false)
								}}>
								SAVE
							</div>
						)}
					</button>
				</div>
			</div>{" "}
			<EditForm isEditing={isEditing} product={product} />
		</div>
	)
}
