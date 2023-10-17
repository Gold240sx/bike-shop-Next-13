"use client"
import React from "react"
import CartContextProvider from "./cartContext"

export function Providers({ children }) {
	return <CartContextProvider> {children} </CartContextProvider>
}
