import React from "react"
import PropTypes from "prop-types"

interface CartButtonProps {
	className?: string
	style?: React.CSSProperties
	label: string
	product: number
	action: string
}

const CartButton: React.FC<CartButtonProps> = ({ product, action, className, style, label }) => {
	return (
		<button
			className={`${className}`}
			style={{
				cursor: "pointer",
				textAlign: "center",
				...style,
			}}>
			<p className="text-center w-full">{label}</p>
		</button>
	)
}

CartButton.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string.isRequired,
}

export default CartButton
