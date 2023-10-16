import PropTypes from "prop-types"
import Link from "next/link"

interface LinkButtonProps {
	to: string
	className?: string
	style?: React.CSSProperties
	label: string
	disabled?: boolean
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, className, style, label, disabled }) => {
	return (
		<button
			className={`w-fit ${className} ${disabled && "cursor-not-allowed"}`}
			style={{
				cursor: "pointer",
				textAlign: "center",
				...style,
			}}>
			<Link href={to}>
				<p className={`${disabled && "bg-zinc-200 text-zinc-400 cursor-not-allowed h-full p-[12px]"}  text-center w-full`}>
					{label}
				</p>
			</Link>
		</button>
	)
}

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string.isRequired,
}

export default LinkButton
