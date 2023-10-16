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
	const { id } = product

	//  if the product is already in the cart, change the label to "ADD MORE"
	const isInCart = cart.find((item: any) => item.id === id) ? true : false
	// const itemCount = cart.reduce((acc: any, item: any) => acc + item.quantity, 0)
	// get the number of items that match this product id
	const itemCount = cart.reduce((acc: any, item: any) => {
		if (item.id === id) {
			return acc + item.quantity
		}
		return acc
	}, 0)

	const direct = isInCart ? "INCREASE" : action

	const specAction = (product: any, direct: string) => {
		switch (action) {
			case "REMOVE_ITEM":
				return removeProduct(product, action)
			case "DECREASE":
				return decrease(product, action)
			default:
				null
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
						{itemCount > 0 && label === "ADD TO CART" ? ` (${itemCount})` : null}
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
