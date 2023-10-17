"use client"
import React, { useContext } from "react"
import CartItems from "./cart-item"
// import { ussCart } from "../../context/cartContext"
import useCart from "../../../hooks/useCart"
import { CartContext } from "../../../context/cartContext"
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid"

const Cart = () => {
	// const context = useContext(contextValue)
	const { cart } = useCart()
	const context = useContext(CartContext)

	return (
		<div>
			{cart.map((product) => (
				<CartItems products={product} />
			))}
		</div>
	)
}

export default Cart
