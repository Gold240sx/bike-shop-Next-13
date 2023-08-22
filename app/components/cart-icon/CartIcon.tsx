import { FiShoppingCart } from "react-icons/fi"

const CartIcon = () => {
	return (
		<div className="flex h-full my-auto mt-1.5 ml-1.5 text-3xl align-middle cursor-pointer cart-container hover:text-teal-500 hover:scale-110">
			<FiShoppingCart alt="shopping cart" />
			<span className="absolute p-1 mt-3 ml-5 text-sm text-center text-white scale-75 rounded-full animate-ping bg-teal-500/90 w-7 aspect-square cart-count">
				5
			</span>
		</div>
	)
}

export default CartIcon
