export const sumItems = (cartItems) => {
	return {
		itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
		total: cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
	}
}

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			// first time it's added to the cart.
			if (!state.items.find((item) => item.id === action.payload.id)) {
				state.cartItems.push({
					...action.payload,
					quantity: 1,
				})
			}
			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			}
		case "REMOVE_ITEM":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.item.id),
			}
		default:
			return state
	}
}

export default cartReducer
