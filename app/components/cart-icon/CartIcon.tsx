import React, { useContext, useEffect } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../../context/cartContext"
import LInk from "next/link"

const CartIcon = () => {
	const { itemCount } = useContext(CartContext)

	return (
		<>
			{itemCount > 0 ? (
				<LInk href={`/cart`}>
					<div className="flex h-full my-auto mt-1.5 ml-1.5 mr-4 text-3xl align-middle cursor-pointer cart-container hover:text-teal-500 hover:scale-110">
						<FiShoppingCart alt="shopping cart" />
						<span className="absolute p-1 mt-3 ml-5 text-sm text-center text-white scale-75 rounded-full animate-ping bg-teal-500/90 w-7 aspect-square cart-count">
							{itemCount}
						</span>
					</div>
				</LInk>
			) : null}
		</>
	)
}

export default CartIcon
