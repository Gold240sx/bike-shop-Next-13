import { FiShoppingCart } from "react-icons/fi"
import "./cart-icon.styles.scss"

const CartIcon = () => {
	return (
		<div className="flex h-full my-auto mt-1.5 ml-4 text-3xl align-middle cursor-pointer cart-container">
			<FiShoppingCart alt="shopping cart" className="hover:text-teal-500 hover:scale-110" />
			<span className="absolute p-1 mt-3 ml-5 text-sm text-center text-white scale-75 rounded-full animate-ping bg-teal-500/90 w-7 aspect-square cart-count">
				5
			</span>
		</div>
	)
}

export default CartIcon
