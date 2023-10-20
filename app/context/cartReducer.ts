import { CartItem, CartState } from "./cartContext"

const storeCartItems = (cartItems: CartItem[]) => {
	const cart = cartItems.length > 0 ? [...cartItems] : []
	localStorage.setItem("cart", JSON.stringify([...cart]))
}

export const sumItems = (cartItems: CartItem[]): CartState => {
	const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0)
	const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0)
	// update the storeCartItems(cartItems) but including the new and adjusted itemCount as the quantity
	storeCartItems(cartItems)
	// storeCartItems(
	// 	cartItems.map((item) => {
	// 		return {
	// 			...item,
	// 			CartQuantity: itemCount,
	// 			quantity: item.quantity,
	// 		}
	// 	})
	// )

	return {
		cart: cartItems,
		itemCount,
		total,
	}
}

type CartAction =
	| { type: "ADD_ITEM"; payload: CartItem }
	| { type: "REMOVE_ITEM"; payload: CartItem }
	| { type: "INCREASE"; payload: CartItem }
	| { type: "DECREASE"; payload: CartItem }
	| { type: "CLEAR" }

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case "ADD_ITEM":
			const isExistingItitemBoolean = state.cart.find((item) => item.id === action.payload.id) ? true : false

			if (!isExistingItitemBoolean) {
				state.cart.push({
					...action.payload,
					quantity: 1,
				})
			}
			if (isExistingItitemBoolean) {
				state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item))
			}
			console.log("state.cart", state.cart)
			return {
				...state,
				...sumItems(state.cart),
			}
		case "REMOVE_ITEM":
			console.log("REMOVE_ITEM", action)
			return {
				...state,
				// cart: state.cart.filter((item) => item.id !== action.payload.id),
				...sumItems(state.cart.filter((item) => item.id !== action.payload.id)), // Recalculate on removal
			}
		case "INCREASE":
			console.log("INCREASE", action)
			return {
				...state,
				// cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)),
				...sumItems(state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item))),
			}
		case "DECREASE":
			console.log("DECREASE", action)
			return {
				...state,
				// cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)),
				...sumItems(
					state.cart
						.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item))
						.filter((item) => item.quantity > 0)
				),
			}
		case "CLEAR":
			localStorage.removeItem("cart")
			// storeCartItems([...state.cart])
			return {
				cart: [],
				itemCount: 0,
				total: 0,
			}

		default:
			return state
	}
}

export default cartReducer
