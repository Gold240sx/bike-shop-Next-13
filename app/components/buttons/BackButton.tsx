"use client"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

import { back } from "../../(pages)/(home)/products/admin/actions"

interface BackButtonProps {
	label?: string
	destination: string
	className?: string
}

const BackButton: React.FC<BackButtonProps> = ({ label, destination, className }) => {
	const { pending } = useFormStatus()

	return (
		<button
			disabled={pending}
			onClick={() => back(destination)}
			className={`${className} ${
				pending ? "bg-zinc-400 cursor-not-allowed" : ""
			} bg-white hover:bg-zinc-100 border border-zinc-400 hover:text-zinc-800 hover:border-zinc-800 rounded m-0 ml-auto mb-4`}>
			{!label ? "Back" : label}
		</button>
	)
}

export default BackButton
