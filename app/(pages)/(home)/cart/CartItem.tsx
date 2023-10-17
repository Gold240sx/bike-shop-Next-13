import React from "react"
import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid"
import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"

const CartItem = (products: any) => {
	const { title, images, price, quantity, id, stock } = products
	const { addProduct, cart, removeProduct, increase, decrease } = useContext(CartContext)

	const specAction = (product: any, direct: string) => {
		switch (action) {
			case "REMOVE_ITEM":
				return removeProduct(product, action)
			case "DECREASE":
				return decrease(product, action)
			default:
				null
		}
		switch (direct) {
			case "ADD_TO_CART":
				return addProduct(product, action)
			case "INCREASE":
				return increase(product, action)
			default:
				return
		}
	}

	const pickedImage = () => {
		if (images.length) {
			return images
			// return images[0]
		} else {
			return "https://via.placeholder.com/150"
		}
	}

	return (
		<>
			{/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
			{products.map((product: any) => (
				<li key={product.id} className="flex py-6 sm:py-10">
					<div className="flex-shrink-0">
						<img
							src={pickedImage()}
							alt={product.imageAlt}
							className="object-cover object-center w-24 h-24 rounded-lg sm:h-32 sm:w-32"
						/>
					</div>

					<div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
						<div>
							<div className="flex justify-between sm:grid sm:grid-cols-2">
								<div className="pr-6">
									<h3 className="text-sm">
										<a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
											{product.manufacturer.manufacturer} {product.title}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.color}</p>
									{product.size ? <p className="mt-1 text-sm text-gray-500">{product.size}</p> : null}
								</div>

								<p className="text-sm font-medium text-right text-gray-900">{product.price}</p>
							</div>

							<div className="flex items-center mt-4 sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
								<label htmlFor={`quantity-${productIdx}`} className="sr-only">
									Quantity, {product.name}
								</label>
								<select
									id={`quantity-${productIdx}`}
									onChange={(e) => console.log(e.target.value)}
									name={`quantity-${productIdx}`}
									className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8</option>
								</select>

								<button
									type="button"
									className="ml-4 text-sm font-medium text-teal-600 hover:text-teal-500 sm:ml-0 sm:mt-3">
									<span>Remove</span>
								</button>
							</div>
						</div>

						<p className="flex mt-4 space-x-2 text-sm text-gray-700">
							{product.inStock ? (
								<CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
							) : (
								<ClockIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
							)}

							<span>{product.inStock ? "In stock" : `Ships in ${product.leadTime}`}</span>
						</p>
					</div>
				</li>
			))}
		</>
	)
}

export default CartItem

{
}
