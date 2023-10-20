"use client"
import React, { useEffect } from "react"
import { useContext } from "react"
import { CartContext } from "../../../../context/cartContext"
import Link from "next/link"
import OrderSummary from "@/app/components/REUSABLE/TWUI-components/OrderSummary"

// order  History page: https://tailwindui.com/components/ecommerce/components/order-history
// order detail page : https://tailwindui.com/components/ecommerce/page-examples/order-detail-pages

// this is the one we want to use
// order summary page: https://tailwindui.com/components/ecommerce/components/order-summaries

const ClientCartRefresh = (isValid: any, sessionData: any) => {
	const { clearCart, cart } = useContext(CartContext)
	console.log(cart)
	const products = cart.map((product: any) => ({
		id: product.id,
		name: product.title,
		href: `/products/${product.id}`,
		price: product.price,
		// color: product.color,
		// size: product.size,
		imageSrc: product.images[0], // update this one too...
		imageAlt: product.images[0],
	}))

	console.log(products)
	// console.log(session)

	// useEffect(() => {
	// 	if (isValid) {
	// 		clearCart()
	// 	}
	// }, [])

	return (
		<div>
			<Link href="/" className="cursor-pointer">
				<button>Return to Home</button>
			</Link>
			<OrderSummary products={products} session={sessionData} />
		</div>
	)
}

export default ClientCartRefresh
