"use client"
import React, { createContext, useReducer, ReactNode } from "react"
import cartReducer, { sumItems } from "./cartReducer"

export interface CartItem {
	id: string
	quantity: number
	price: number
	CartQuantity: number
	stock: number
}

export interface CartState {
	itemCount: number | undefined
	cart: CartItem[] // You should define a proper type for cart items
	cartOpen: boolean
	total: number
	cartTotal: number
	cartTax: number
	cartSubTotal: number
	addToCart: (product: any) => void // You should define a proper type for product
	removeFromCart: (product: any) => void
	clearCart: () => void
	toggleCart: () => void
	handleCheckout?: () => void
	handleQuantity?: (product: any, action: any) => void // You should define a proper type for action
	addProduct?: (product: CartItem) => void
	removeProduct?: (product: CartItem) => void
	increase?: (product: CartItem) => void
	decrease?: (product: CartItem) => void
}

export const CartContext = createContext<CartState>({} as CartState)

export const cartFromStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : []

const initialState: CartState = {
	itemCount: sumItems(cartFromStorage).cart.length,
	cart: [...sumItems(cartFromStorage).cart],
	cartOpen: false,
	cartTotal: sumItems(cartFromStorage) ? sumItems(cartFromStorage).total : 0,
	cartTax: 0,
	cartSubTotal: 0,
	addToCart: (product) => {},
	removeFromCart: (product) => {},
	clearCart: () => {},
	toggleCart: () => {},
	handleCheckout: () => {},
	handleQuantity: (product, action) => {},
}

interface CartContextProviderProps {
	children: ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState)

	const addProduct = (product: any) => {
		dispatch({ type: "ADD_ITEM", payload: product })
	}

	const removeProduct = (product: any) => {
		dispatch({ type: "REMOVE_ITEM", payload: product })
	}

	const increase = (product: any) => {
		dispatch({ type: "INCREASE", payload: product })
	}

	const decrease = (product: any) => {
		dispatch({ type: "DECREASE", payload: product })
	}

	const clearCart = () => {
		dispatch({ type: "CLEAR" })
	}

	const contextValues: CartState = {
		...state,
		addProduct,
		removeProduct,
		increase,
		decrease,
		clearCart,
	}

	return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>
}

export default CartContextProvider