import React from "react"
import SearchFilterDropdownAutoComplete from "./dropdown/SearchFilterDropdownAutoComplete"

const ProductSelector = ({ productData, selectedProductId, setSelectedProductId }: any) => {
	const { products, chosenProduct, chosenManufacturer, colorOptions, imageURLS } = productData

	const handleChangeSelectedProductValue = (value: any) => {
		// const selectedProduct = products.find((product: any) => {
		// 	const combinedTitle = product.manufacturer + " " + product.title
		// 	return combinedTitle === value
		// })
		// if (selectedProduct) {
		// 	setSelectedProductId(selectedProduct.id)
		// }
		// changet hse value of the chosen product
	}

	return (
		<div id="product-details" className="bg-zinc-800 rounded-md w-auto- h-fit py-4 px-6 text-white mb-4 relative">
			{/* <div className="flex">
				<img
					alt="selected product image"
					className="w-auto h-12 object-contain aspect-square mr-4 mb-2 p-1 bg-white absolute right-2 top-4"
					src={chosenManufacturer?.logo}
				/>
				{chosenManufacturer?.banner_image && (
					<img
						alt="selected product image"
						className="w-auto h-20 mr-4 mb-2 rounded bg-white p-2 "
						src={chosenManufacturer?.banner_image}
					/>
				)}
			</div> */}
			{chosenProduct && (
				<div className="flex">
					<img
						alt="selected product image"
						className="w-auto h-20 mr-4 object-contain rounded bg-white p-2"
						src={chosenProduct.images[0]}
					/>
					<div className="flex flex-col mr-10">
						<div className="flex">
							<h1 className="text-yellow-400 mr-2">{chosenProduct.manufacturer}</h1>
							<h1>{` ${chosenProduct.title}`}</h1>
						</div>
						<div className="flex">
							<h2 className="mr-1 text-sm text-zinc-500">Department:</h2>
							<h2 className="text-zinc-400 mr-1 text-sm">{chosenProduct.sub_category}</h2>
							<h2 className=" text-sm">{` ${chosenProduct.category}`}</h2>
						</div>
					</div>
					<div className="text-zinc-600 mr-0 ml-auto w-fit  items-end">
						<h1 className="text-zinc-300">Change Product</h1>
						<SearchFilterDropdownAutoComplete
							data={products.map((product: any) => product.title)}
							width="200px"
							ellipsis={true}
							onChange={handleChangeSelectedProductValue}
						/>
					</div>
					<p className="bg-white text-black rounded-full h-6 w-6 mt-14 px-2 aspect-square">{chosenProduct.id}</p>
				</div>
			)}
		</div>
	)
}

export default ProductSelector
