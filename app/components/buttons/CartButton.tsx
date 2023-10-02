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
	disabled?: boolean
}

const CartButton: React.FC<CartButtonProps> = ({ product, action, className, style, label, disabled }) => {
	const { addProduct, cartItems, removeProduct } = useContext(CartContext)
	const { id } = product
	console.log("product", product)

	return (
		<button
			disabled={disabled}
			className={`${className}`}
			onClick={() => addProduct(id)}
			style={{
				cursor: "pointer",
				textAlign: "center",
				...style,
			}}>
			<p className={`${disabled && "bg-zinc-200 text-zinc-400 cursor-not-allowed h-full p-[12px]"}  text-center w-full`}>{label}</p>
		</button>
	)
}

CartButton.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string.isRequired,
}

export default CartButton
