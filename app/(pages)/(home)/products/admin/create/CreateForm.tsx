import { addProduct } from "../actions"
import SubmitButton from "@/app/components/buttons/SubmitButton"
import BackButton from "@/app/components/buttons/BackButton"

const createForm = () => {

	return (
		<form action={addProduct} className="w-1/2 card">
			<BackButton destination="/products/admin" />
			<label>
				<span>Title:</span>
				<input required type="text" name="title" />
			</label>
			<label>
				<span>Body:</span>
				<textarea required name="body" />
			</label>
			<label>
				<span>Priority:</span>
				<select name="priority">
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
			</label>
			<SubmitButton type="add" object="project" />
		</form>
	)
}

export default createForm
