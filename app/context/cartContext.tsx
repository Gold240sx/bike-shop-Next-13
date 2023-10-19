"use client"
import React, { createContext, useReducer, ReactNode } from "react"
import cartReducer, { sumItems } from "./cartReducer"

interface CartState {
	itemCount: number | undefined
	cart: any[] // You should define a proper type for cart items
	cartOpen: boolean
	cartTotal: number
	cartTax: number
	cartSubTotal: number
	addToCart: (product: any) => void // You should define a proper type for product
	removeFromCart: (product: any) => void
	clearCart: () => void
	toggleCart: () => void
	handleCheckout: () => void
	handleQuantity: (product: any, action: any) => void // You should define a proper type for action
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


	// ...sumItems(cartFromStorage),
	// itemCount: 0,
	// cartTotal: 0,
	// cart: [
	// 	cartFromStorage,
	// 	{
	// 		id: 6,
	// 		manufacturer: {
	// 			manufacturer: "Blackburn",
	// 			logo: "https://i.ibb.co/NpbLzJ7/images-3.png",
	// 		},
	// 		description: "A sturdy pump designed to keep your tires rolling.",
	// 		title: "Chamber Tubeless Floor Pump",
	// 		price: 199.95,
	// 		stock: 6,
	// 		images: ["https://i.ibb.co/WBZcgxB/Pump.png"],
	// 		colorOptionsDropdown: ["Black", "Silver"],
	// 		colorOptions: [
	// 			{
	// 				id: 13,
	// 				color: "Black",
	// 				images: [null],
	// 			},
	// 			{
	// 				id: 14,
	// 				color: "Silver",
	// 				images: [],
	// 			},
	// 		],
	// 		quantity: 1,
	// 	},
	// 	{
	// 		id: 3,
	// 		manufacturer: {
	// 			manufacturer: "Fox Racing",
	// 			logo: "https://i.ibb.co/Z6532SV/android-chrome-512x512.png\n",
	// 		},
	// 		description:
	// 			"When you're bashing through that gnarly overgrown trail, the Flexair Jersey is right there with you \n                bringing some legendary Fox energy to your trail exploration. It's got that sought-after Flexair \n                breathability to keep you cool, TruDri® sweat-wicking ability, and construction details that'll ensure \n                total mobility to dodge on a dime. Should you mistime your dodge, the abrasion-resistant sleeves and\n                 panels on the shoulder will guard your limbs against those errant trail flings.",
	// 		title: "Flexair Lunar Jersey Black",
	// 		price: 64.99,
	// 		stock: 51,
	// 		images: [
	// 			"https://i.ibb.co/njZY2Wd/jersey-back.jpg",
	// 			"https://i.ibb.co/jWWVgsd/jersey-quarter.jpg",
	// 			"https://i.ibb.co/HrWdbkB/jersey-front.jpg",
	// 		],
	// 		colorOptionsDropdown: ["Blue", "Green", "Black, Green, Yellow"],
	// 		colorOptions: [
	// 			{
	// 				id: 7,
	// 				color: "Blue",
	// 				images: [],
	// 			},
	// 			{
	// 				id: 8,
	// 				color: "Green",
	// 				images: [],
	// 			},
	// 			{
	// 				id: 6,
	// 				color: "Black, Green, Yellow",
	// 				images: [null, null, null],
	// 			},
	// 		],
	// 		quantity: 1,
	// 	},
	// ],
