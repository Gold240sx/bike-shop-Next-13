import React, { useContext, useEffect } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../../context/cartContext"
import LInk from "next/link"
import { sumItems } from "@/app/context/cartReducer"
import { cartFromStorage } from "../../context/cartContext"

const CartIcon = () => {
	const { itemCount } = useContext(CartContext)

	// update the cart length to include not only the number of types of items (localStorage.getItems("cart").length)
	// but also the sum of all the cart items in total (sumItems(JSON.parse(localStorage.getItem("cart")!)).itemCount
	// the tripple check also fixes the error when the cart is empty and the sumItems function tries reducing an empty array.
	const localCartLength = localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart")!).length === 0
			? itemCount
			: sumItems(JSON.parse(localStorage.getItem("cart")!)).itemCount
		: 0

	return (
		<>
			{itemCount > 0 ? (
				<LInk href={`/cart`}>
					<div className="flex h-full my-auto mt-1.5 ml-1.5 mr-4 text-3xl align-middle cursor-pointer cart-container hover:text-teal-500 hover:scale-110">
						<FiShoppingCart alt="shopping cart" />
						<span className="absolute p-1 mt-3 ml-5 text-sm text-center text-white scale-75 rounded-full animate-ping bg-teal-500/90 w-7 aspect-square cart-count">
							{localCartLength}
						</span>
					</div>
				</LInk>
			) : null}
		</>
	)
}

export default CartIcon
