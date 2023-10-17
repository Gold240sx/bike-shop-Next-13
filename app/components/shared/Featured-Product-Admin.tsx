import CartButton from "../buttons/CartButton"
import "./FeaturedProducts.styles.scss"
import Link from "next/link"
import { formattedPrice } from "../../functions/priceFormatter"
import { isInCart } from "@/app/functions/helpers"
import LinkButton from "../buttons/LinkButton"

const FeaturedProductAdmin = async ({ product }: any) => {
	const { id, title: name, price, images } = product

	return (
		<div className="flex  flex-col justify-between py-2 featured-product w-[70vw] md:w-full lg:max-w-[300px] mx-auto my-3 bg-white">
			<Link href={`/admin/products/${id}`}>
				<div className="flex items-center justify-center object-contain object-center my-auto featured-image h-[240px] bg-white p-2">
					<img src={images?.[0]} alt="product" className="my-auto max-h-full" />
				</div>
			</Link>
			<div className="flex flex-col  name-price gap-2 pt-3 ">
				<Link href={`/admin/products/${id}`}>
					<h3 className="line-clamp-1 py-1 pl-1 text-xl font-semibold text-black">{name}</h3>
					<p className="font-semibold text-lg pl-1">{formattedPrice(price)} </p>
				</Link>
				<LinkButton
					to={`/admin/products/${id}`}
					label="Go to product"
					className="bg-zinc-800 text-white rounded p-2 hover:bg-zinc-700"
				/>
			</div>
		</div>
	)
}

export default FeaturedProductAdmin
