"use client"
import React, { useEffect, useState } from "react"
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
	const { addProduct, cart, removeProduct, increase, decrease } = useContext(CartContext)
	const [isMore, setIsMore] = useState(false)
	const { id } = product

	//  if the product is already in the cart, change the label to "ADD MORE"
	const isInCart = cart.find((item: any) => item.id === id) ? true : false

	const direct = isInCart ? "INCREASE" : action

	const specAction = (product: any, direct: string) => {
		if (action === "REMOVE_ITEM") {
			return removeProduct(product, action)
		}
		if (action === "DECREASE") {
			return decrease(product, action)
		}
		switch (direct) {
			case "ADD_TO_CART":
				return addProduct(product, action)
			case "INCREASE":
				return increase(product, action)
			default:
				return
		}
	}

	return (
		<>
			{/* show only the appropriate buttons */}
			{isInCart || (direct !== "REMOVE_ITEM" && action !== "DECREASE") ? (
				<button
					disabled={disabled}
					className={`${className}`}
					onClick={() => !disabled && specAction(product, direct)}
					style={{
						cursor: "pointer",
						textAlign: "center",
						...style,
					}}>
					<p className={`${disabled && "bg-zinc-200 text-zinc-400 cursor-not-allowed h-full p-[12px]"}  text-center w-full`}>
						{isInCart && label === "ADD TO CART" ? "ADD MORE" : label}
					</p>
				</button>
			) : null}
		</>
	)
}

CartButton.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	label: PropTypes.string.isRequired,
}

export default CartButton
