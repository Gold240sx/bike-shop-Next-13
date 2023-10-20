"use client"
import React, { useEffect } from "react"
import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"
import Link from "next/link"

const ClientCartRefresh = (isValid: any) => {
	const { clearCart } = useContext(CartContext)

	useEffect(() => {
		if (isValid) {
			clearCart()
		}
	}, [])

	return (
		<div>
			<Link href="/" className="cursor-pointer">
				<button>Return to Home</button>
			</Link>
		</div>
	)
}

export default ClientCartRefresh
