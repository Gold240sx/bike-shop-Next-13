import React from "react"
import { BiPlusCircle, BiMinusCircle, BiTrashAlt } from "react-icons/bi"
import Image from "next/image"
import "./cart-item.module.scss"

const Cart-Item = (product: any) => {
	const { title, images, price, quantity, id } = product.products

	const pickedImage = () => {
		if (images.length) {
			return images[0]
		} else {
			return "https://via.placeholder.com/150"
		}
	}

	return (
		<div className="flex justify-between p-10 pt-24 bg-white">
			{/* <pre>{JSON.stringify(product.products.images, null, 2)}</pre> */}
			<div>
				<img src={pickedImage()} alt={title} width={100} height={100} />
			</div>
			<div className="flex flex-col">
				<div className="name-price">
					<h4>{title}</h4>
					<p>${price}</p>
				</div>
				<div className="quantity">
					<p>Quantity: {quantity}</p>
				</div>
				<div className="flex btns-container">
					<button>
						{/* <PlusCircleIcon /> */}
						<BiPlusCircle />
					</button>
					{quantity > 1 && (
						<button>
							{/* <MinusCircleIcon /> */}
							<BiMinusCircle />
						</button>
					)}
					{quantity === 1 && (
						<div>
							<button>
								{/* <TrashIcon /> */}
								<BiTrashAlt />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default CartItem
