interface Product {
	id: number
	name: string
	price: number
	images: string[]
	description: string
	category: string
}

interface CartItem {
	id: number
	name: string
	price: number
	images: string[]
	description: string
	category: string
	quantity: number
}

export const isInCart = (cart: CartItem[], product: Product) => {
	return cart.some((item) => item.id === product.id)
}
