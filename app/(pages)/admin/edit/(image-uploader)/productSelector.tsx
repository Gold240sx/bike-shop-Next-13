"use client"
import LinkButton from "@/app/components/buttons/LinkButton"
import SearchFilterDropdownAutoComplete from "./dropdown/SearchFilterDropdownAutoComplete"

const ProductSelector = ({ productData, chosenProduct, selectedProductId, setSelectedProductId, mainProductImage }: any) => {
	const { products, chosenManufacturer, imageURLS } = productData
	const productList = products?.map((product: any) => `${product.manufacturer} ${product.title}`)

	const handleChangeSelectedProductValue = (value: any) => {
		const selectedProduct = products.find((product: any) => {
			const combinedTitle = product.manufacturer + " " + product.title
			return combinedTitle === value
		})
		if (selectedProduct) {
			// console.log("item found")
			setSelectedProductId(selectedProduct.id)
		} else {
			setSelectedProductId(1)
		}
		//change the value of the chosen product
	}

	return (
		<div id="product-details" className="bg-zinc-800 rounded-md w-full h-fit py-4 px-6 text-white mb-4 relative">
			{chosenProduct && (
				<div className="flex flex-col md:flex-row">
					<img
						alt="selected product image"
						className="w-[90px] h-20 mr-4 object-contain rounded bg-white p-2"
						src={mainProductImage}
					/>
					<div className="flex flex-col mr-10">
						<div className="flex">
							<h1 className="text-yellow-400 mr-2">{chosenProduct.manufacturer}</h1>
							<h1>{chosenProduct.title}</h1>
						</div>
						<div className="flex">
							<h2 className="mr-1 text-sm text-zinc-500">Department:</h2>
							<h2 className="text-zinc-400 mr-1 text-sm">{chosenProduct.sub_category}</h2>
							<h2 className=" text-sm">{chosenProduct.category}</h2>
						</div>
						<LinkButton
							to={`/products/${[chosenProduct.id]}`}
							className="px-3 py-[3px] bg-white text-base mt-1.5  text-black rounded"
							label="View Product"
						/>
					</div>
					<div className="text-zinc-600 mr-0 ml-auto w-fit  items-end">
						{/* <pre>{JSON.stringify(chosenProduct, null, "2")}</pre> */}
						<h1 className="text-zinc-300">Change Product</h1>
						<SearchFilterDropdownAutoComplete
							data={productList}
							width="200px"
							ellipsis={true}
							onChange={handleChangeSelectedProductValue}
						/>
					</div>
					<p className="bg-white/80 text-black rounded-full h-6 w-6 px-2 absolute right-2 bottom-2.5 aspect-square">
						{chosenProduct.id}
					</p>
				</div>
			)}
		</div>
	)
}

export default ProductSelector
