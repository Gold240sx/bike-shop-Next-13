"use client"
import { useState } from "react"

interface EditFormProps {
	isEditing: boolean
	// onSave: (editedData: any) => void
	product: any
}

const EditForm: React.FC<EditFormProps> = ({ isEditing, product }) => {
	const [editedData, setEditedData] = useState({
		title: "",
		user_email: "",
		body: "",
		priority: "",
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// onSave(editedData)
	}

	if (!isEditing) {
		return null // Return null if not in edit mode
	}

	return (
		<form onSubmit={handleSubmit} className=" w-full">
			<div>
				<input type="text" defaultValue={product?.title} className="rounded" />
				<input type="text" defaultValue={product?.user_email} className="rounded" />
				<input type="text" defaultValue={product?.body} className="rounded" />
				<input type="text" defaultValue={product?.priority} className="rounded" />
			</div>
			<button type="submit">Save Changes</button>
		</form>
	)
}

export default EditForm
