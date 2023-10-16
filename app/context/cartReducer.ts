interface CartItem {
	id: string
	quantity: number
	price: number
	// Add other properties as needed
}

interface CartState {
	cart: CartItem[]
	// Add other properties as needed
}

export const sumItems = (cartItems: CartItem[]): CartState => {
	const itemCount = cartItems.reduce((total, product) => total + product.quantity, 0)
	const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0)

	return {
		cart: cartItems,
		itemCount,
		total,
		// Add other properties as needed
	}
}

type CartAction =
	| { type: "ADD_ITEM"; payload: CartItem }
	| { type: "REMOVE_ITEM"; payload: CartItem }
	| { type: "INCREASE"; payload: CartItem }
	| { type: "DECREASE"; payload: CartItem }

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
			// console.log("state.cart", state.cart)
			// console.log("cartTotal", sumItems(state.cart))
			return {
				...state,
				cart: [...state.cart],
				...sumItems(state.cart),
			}
		case "REMOVE_ITEM":
			// console.log("REMOVE_ITEM", action)
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
				...sumItems(state.cart.filter((item) => item.id !== action.payload.id)), // Recalculate on removal
				// Add other state updates as needed
			}
		case "INCREASE":
			// console.log("INCREASE", action)
			return {
				...state,
				cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)),
				...sumItems(state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item))),
			}
		case "DECREASE":
			// console.log("DECREASE", action)
			return {
				...state,
				cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item)),
				// ...sumItems(state.cart.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item))),
				...sumItems(
					state.cart
						.map((item) => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item))
						.filter((item) => item.quantity > 0)
				),
			}
		default:
			return state
	}
}

export default cartReducer
