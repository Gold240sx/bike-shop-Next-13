"use client"
import React, { createContext, useReducer } from "react"
import cartReducer from "./cartReducer"

export const CartContext = createContext()

const initialState = {
	itemCount: 0,

	cart: [],
	cartOpen: false,
	cartTotal: 0,
	cartTax: 0,
	cartSubTotal: 0,
	addToCart: (product) => {},
	removeFromCart: (product) => {},
	clearCart: () => {},
	toggleCart: () => {},
	handleCheckout: () => {},
	handleQuantity: (product, action) => {},
}

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState)

	const addProduct = (product) => {
		dispatch({ type: "ADD_ITEM", payload: product })
	}

	const removeProduct = (product) => {
		dispatch({ type: "REMOVE_ITEM", payload: product })
	}

	const contextValues = {
		...state,
		addProduct,
		removeProduct,
	}

	return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>
}

export default CartContextProvider
