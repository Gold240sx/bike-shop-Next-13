"use client"

import { experimental_useFormStatus as useFormStatus } from "react-dom"

interface SubmitButtonProps {
	type: "add" | "update" | "delete" | "fetch" | "submit" | string
	object: "product" | string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ type, object }) => {
	const { pending } = useFormStatus()
	let buttonText = ""

	switch (type) {
		case "add":
			buttonText = pending ? `Adding ${object}...` : `Add ${object}`
			break
		case "update":
			buttonText = pending ? `Updating ${object}...` : `Update ${object}`
			break
		case "delete":
			buttonText = pending ? `Deleting ${object}...` : `Delete ${object}`
			break
		case "fetch":
			buttonText = pending ? `Fetching ${object}...` : `Fetch ${object}`
			break
		default:
			buttonText = pending ? `${type}ing ${object}...` : `${type} ${object}`
			break
	}

	return (
		<button
			disabled={pending}
			className={`${
				pending
					? "bg-zinc-400 rounded hover:bg-zinc-400 px-3 py-1 text-lg cursor-not-allowed"
					: "bg-teal-500 text-white rounded hover:bg-teal-400 px-3 py-1 text-lg "
			}`}>
			{buttonText}
		</button>
	)
}

export default SubmitButton
