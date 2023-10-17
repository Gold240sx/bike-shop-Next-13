"use client"
import React from "react"
import useCart from "../hooks/useCart"

const ContextContainer = () => {
	const { cart } = useCart()
	return (
		<div className="bg-black/50 h-fit max-h-[100px] overflow-scroll text-white fixed w-full pointer-events-none">
			{/* <h1 className="text-2xl">Cart items</h1>
			<pre>{JSON.stringify(cart, null, 2)}</pre> */}
		</div>
	)
}

export default ContextContainer
