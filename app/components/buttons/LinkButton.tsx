// ./app/components/buttons/LinkButton.tsx
import { useRouter } from "next/router"
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
		<Link
			href={to}
			className={`${className}`}
			style={{
				cursor: "pointer",
				...style,
			}}>
			{label}
		</Link>
	)
}

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string.isRequired,
}

export default LinkButton
