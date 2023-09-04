"use client"
import BackButton from "@/app/components/buttons/BackButton"
import { editProduct } from "./actions"
import SubmitButton from "@/app/components/buttons/SubmitButton"
import { Delete } from "react-feather"
import DeleteButton from "./DeleteButton"

interface EditFormProps {
	isEditing: boolean
	product: any
}

const EditForm: React.FC<EditFormProps> = ({ product }) => {
	const id = product?.id
	return (
		<form className=" w-full" action={(e) => editProduct(e, id)}>
			<div className="flex justify-between w-fit gap-2 ml-auto">
				<DeleteButton id={id} />
				<BackButton destination="/products/admin" />
			</div>
			<div>
				<input type="text" defaultValue={product?.title} name="title" className="rounded" />
				<input type="text" defaultValue={product?.user_email} name="user_email" className="rounded" />
				<input type="text" defaultValue={product?.body} name="body" className="rounded" />
				<input type="text" defaultValue={product?.priority} name="priority" className="rounded" />
			</div>
			<SubmitButton type="update" object="product" />
		</form>
	)
}

export default EditForm
