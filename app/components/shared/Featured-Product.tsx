import CartButton from "../buttons/CartButton"
import "./FeaturedProducts.styles.scss"
import Link from "next/link"
import { formattedPrice } from "../../functions/priceFormatter"
import { isInCart } from "@/app/functions/helpers"
import useCart from "@/app/context/cartContext"

const FeaturedProduct = async ({ product }: any) => {
	const { id, title: name, price, images, stock } = product

	return (
		<div className="flex flex-col justify-between py-2 featured-product w-[70vw] md:w-full lg:max-w-[300px] mx-auto my-3 bg-white dark:bg-zinc-800 dark:text-zinc-400">
			<Link href={`/products/${id}`}>
				<div className="flex items-center justify-center object-fill object-center my-auto featured-image h-[240px] bg-white  p-2">
					<img src={images?.[0]} alt="product" className="max-h-full my-auto" />
				</div>
			</Link>
			<div className="flex flex-col gap-2 pt-3 name-price ">
				<Link href={`/products/${id}`}>
					<h3 className="py-1 pl-1 text-xl font-semibold text-black line-clamp-1 dark:text-white">{name}</h3>
					<p className="pl-1 text-lg font-semibold dark:text-zinc-400">{formattedPrice(price)} </p>
				</Link>
				<CartButton
					product={product}
					action="ADD_TO_CART"
					label="ADD TO CART"
					className="px-3 py-2 text-white bg-black dark:bg-zinc-300 dark:text-black dark:hover:bg-zinc-200 dark:hover:text-zinc-700 hover:bg-zinc-800 active:bg-zinc-600"
				/>
				<div className="flex w-full gap-3">
					<CartButton
						product={product}
						action="DECREASE"
						label="REMOVE ITEM"
						className="w-full h-8 px-3 py-2 text-black bg-white border border-black dark:bg-zinc-300 dark:text-black dark:hover:bg-zinc-200 dark:hover:text-zinc-700 hover:border-teal-500 active:border-2"
					/>
					<CartButton
						product={product}
						action="REMOVE_ITEM"
						label="REMOVE ALL"
						className="w-full h-8 px-3 py-2 text-black bg-white border border-black dark:bg-zinc-300 dark:text-black dark:hover:bg-zinc-200 dark:hover:text-zinc-700 "
					/>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProduct
