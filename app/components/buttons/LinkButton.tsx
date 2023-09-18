import PropTypes from "prop-types"
import Link from "next/link"

interface LinkButtonProps {
	to: string
	className?: string
	style?: React.CSSProperties
	label: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, className, style, label }) => {
	return (
		<button
			className={`w-fit`}
			style={{
				cursor: "pointer",
				textAlign: "center",
				...style,
			}}>
			<Link href={to}>
				<p className={`text-center ${className}`}>{label}</p>
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
