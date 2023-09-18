"use client"
import React from "react"
import PropTypes from "prop-types"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

interface CartButtonProps {
	className?: string
	style?: React.CSSProperties
	label: string
	product: any
	action: string
}

const CartButton: React.FC<CartButtonProps> = ({ product, action, className, style, label }) => {
	const { addProduct, cartItems, removeProduct } = useContext(CartContext)
	const { id } = product
	console.log("product", product)

	return (
		<button
			className={`${className}`}
			onClick={() => addProduct(id)}
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
