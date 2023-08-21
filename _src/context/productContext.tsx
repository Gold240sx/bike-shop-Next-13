import { Products as SHOP_DATA } from "../shop/Products"
import { createContext, useState, ReactNode } from "react"

export type Product = {
	id: number
	name: string
	manufacturer: string
	images: string[]
	category: string
	price: number
	tagline: string
	description: string
	colorOptions: string[]
	sizeOptions: string[]
	color?: string
	size?: string[]
}

type Products = {
	Bikes: [Product[]]
	Clothes: [Product[]]
	Accessories: [Product[]]
}

export const ProductContext = createContext<Products>({
	Bikes: [SHOP_DATA.Bikes],
	Clothes: [SHOP_DATA.Clothes],
	Accessories: [SHOP_DATA.Accessories],
})

const ProductsContextProvider = ({ children }: { children: ReactNode }) => {
	const initialProducts: Products = { Bikes: [SHOP_DATA.Bikes], Clothes: [SHOP_DATA.Clothes], Accessories: [SHOP_DATA.Accessories] }
	const [products, _] = useState<Products>(initialProducts)

	return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
}

export default ProductsContextProvider
