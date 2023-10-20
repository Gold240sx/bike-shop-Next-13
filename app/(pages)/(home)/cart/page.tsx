"use client"
import React, { ReactEventHandler, useContext } from "react"
import CartItems from "./cart-item"
// import { ussCart } from "../../context/cartContext"
import useCart from "../../../hooks/useCart"
import { CartContext } from "../../../context/cartContext"
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid"
import { BiPlusCircle, BiMinusCircle, BiCross } from "react-icons/bi"
import StepperMinimal from "../../../components/vanilla/steppers/stepper-minimal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createCheckoutSession } from "@/app/actions/stripe"
import * as config from "@/app/config/config"
// import { useFormatter } from "next-intl"

// const products = [
// 	{
// 		id: 1,
// 		name: "Nomad Tumbler",
// 		href: "#",
// 		price: "$35.00",
// 		color: "White",
// 		inStock: true,
// 		imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
// 		imageAlt: "Insulated bottle with white base and black snap lid.",
// 	},
// 	{
// 		id: 2,
// 		name: "Basic Tee",
// 		href: "#",
// 		price: "$32.00",
// 		color: "Sienna",
// 		inStock: true,
// 		size: "Large",
// 		imageSrc: "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
// 		imageAlt: "Front of men's Basic Tee in sienna.",
// 	},
// 	// More products...
// ]

// line 85 is where the form is at

type StepperProps = {
	name: string
	handleOnChange: any
	min: number
	max: number
	step: number
	start: number
	layout: string
	unit: string
	style: string
	className: string
}

const Cart = () => {
	const { cart } = useCart()
	const { removeProduct, increase, decrease, total, clearCart } = useContext(CartContext)

	// const FormattedTotal = (number: number) => {
	// 	return useFormatter(number, { style: "currency", currency: "USD" })
	// }

	const overStockCount = (product: any) => {
		const overOrder = product?.quantity - product?.stock
		return overOrder
	}

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e): void =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		})

	return (
		<div className="w-full h-full bg-white">
			<div className="h-full px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
					{cart.length <= 0 && (
						<Link href="/products" className="flex px-6 mx-6 ml-auto">
							<Button className="">Continue Shopping</Button>
						</Link>
					)}
				</div>
				{cart.length > 0 && (
					<>
						<Button className="flex px-6 mx-6 mt-4 ml-auto" onClick={clearCart}>
							Clear
						</Button>
						<form
							className="w-full mt-12"
							action={createCheckoutSession}
							// action={() => createCheckoutSession(formData, clearCart)
						>
							{/*  insert input that has a value of the cart total */}
							<input
								className="hidden checkout-style"
								name="customDonation"
								min={config.MIN_AMOUNT}
								max={config.MAX_AMOUNT}
								step={config.AMOUNT_STEP}
								currency={config.CURRENCY}
								onChange={handleInputChange}
								value={total}
							/>
							<div>
								<h2 className="sr-only">Items in your shopping cart</h2>

								<ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
									{cart.map((product, productIdx) => (
										<li key={productIdx} className="flex py-6 select-none sm:py-10">
											<div className="flex-shrink-0">
												<img
													src={product ? product.images[0] : null}
													alt={product.imageAlt}
													className="object-cover object-center w-24 h-24 rounded-lg sm:h-32 sm:w-32"
												/>
											</div>

											<div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
												<div>
													<div className="flex justify-between sm:grid sm:grid-cols-2">
														<div className="pr-6">
															<h3 className="text-sm">
																<a
																	href={product.id}
																	className="font-medium text-gray-700 hover:text-gray-800">
																	{product.manufacturer.manufacturer} {product.title}
																</a>
															</h3>
															<p className="mt-1 text-sm text-gray-500">{product.color}</p>
															{product.size ? (
																<p className="mt-1 text-sm text-gray-500">{product.size}</p>
															) : null}
														</div>

														<div className="flex flex-col gap-1">
															<p className="pr-8 text-sm font-medium text-right text-gray-900 select-none">
																${product.price}
															</p>
															<div
																onClick={() => removeProduct(product)}
																className="flex pr-8 ml-auto text-sm font-medium text-teal-600 cursor-pointer w-fit hover:text-teal-500">
																<span>Remove</span>
															</div>
														</div>
													</div>

													<div className="flex items-center text-black select-none sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
														<div className="flex items-center gap-2">
															<BiPlusCircle
																className="text-teal-500 cursor-pointer hover:text-teal-400 active:text-teal-800 w-7 h-7"
																disabled={product.quantity >= product.stock}
																// onClick={(e: ReactEventHandler) => {
																// 	product.quantity >= product.stock ? null : increase(product)
																// }}
																onClick={() => increase(product)}
															/>
															<div className="border rounded-md cursor-default select-none border-zinc-300">
																<div className="flex items-center justify-center px-2 py-1 text-base font-medium text-zinc-600">
																	{product.quantity}
																</div>
															</div>
															<BiMinusCircle
																className={`${
																	product.quantity <= 1
																		? "text-gray-300 cursor-default"
																		: "text-teal-500 hover:text-teal-400 cursor-pointer active:text-teal-800"
																}  w-7 h-7 `}
																disabled={product.quantity <= 1}
																onClick={(e: ReactEventHandler) => {
																	product.quantity <= 1 ? null : decrease(product)
																}}
															/>
														</div>
													</div>
												</div>

												<p className="flex space-x-2 text-sm text-gray-700 select-none">
													{product.inStock ? (
														<CheckIcon className="flex-shrink-0 text-green-500 w-7 h-7" aria-hidden="true" />
													) : (
														<ClockIcon className="flex-shrink-0 text-gray-300 w-7 h-7" aria-hidden="true" />
													)}
													<div className="">
														<p className="text-lg">
															{product.inStock ? `${product.stock} In stock` : "On backorder"}
														</p>
														<>
															{overStockCount(product) > 0 && (
																<div className="flex flex-col gap-1">
																	<div className="flex gap-1">
																		<p>Stocked Items Ship in:</p>
																		<div className="flex gap-1 font-bold">
																			<p>{product.leadTime}</p>
																			<p className="">{product.leadTimeUnit}</p>
																		</div>
																	</div>
																	<p className="text-red-500">
																		{overStockCount(product)} items will be backordered
																	</p>
																	<div className="flex gap-1">
																		<p>Backorder Ships in:</p>
																		<div className="flex gap-1 font-bold">
																			<p>{product.backorderLeadTime}</p>
																		</div>
																		<p>(estimate)</p>
																	</div>
																</div>
															)}
														</>

														{overStockCount(product) <= 0 && (
															<div className="flex gap-1">
																<p>Ships in:</p>
																<div className="flex gap-1 font-bold">
																	<p>{product.leadTime}</p>
																	<p className="">{`${product.leadTimeUnit}`}</p>
																</div>
															</div>
														)}
													</div>
												</p>
											</div>
										</li>
									))}
								</ul>
							</div>

							{/* Order summary */}
							<div className="mt-10 sm:ml-32 sm:pl-6">
								<div className="px-4 py-6 rounded-lg bg-gray-50 sm:p-6 lg:p-8">
									<h2 className="sr-only">Order summary</h2>

									<div className="flow-root">
										<dl className="-my-4 text-sm divide-y divide-gray-200">
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">Subtotal</dt>
												{/* <dd className="font-medium text-gray-900">${FormattedTotal(total)}</dd> */}
												<dd className="font-medium text-gray-900">${total}</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">Shipping</dt>
												<dd className="font-medium text-gray-900">$5.00</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">Tax</dt>
												<dd className="font-medium text-gray-900">$8.32</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-base font-medium text-gray-900">Order total</dt>
												<dd className="text-base font-medium text-gray-900">PENDING</dd>
											</div>
										</dl>
									</div>
								</div>
								<div className="mt-10">
									<button
										type="submit"
										className="w-full px-4 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-50">
										Checkout
									</button>
								</div>

								<div className="mt-6 text-sm text-center text-gray-500">
									<p>
										or
										<a href="/products" className="pl-2 font-medium text-teal-600 hover:text-teal-500">
											Continue Shopping
											<span aria-hidden="true"> &rarr;</span>
										</a>
									</p>
								</div>
							</div>
						</form>
					</>
				)}
				{cart.length <= 0 && (
					<div className="flex flex-col items-center justify-center w-full h-full">
						<h2>Your cart is empty</h2>
						<p>Looks like you haven't added anything to your cart yet</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
