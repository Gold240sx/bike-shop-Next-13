"use client"
import React, { use, useState, useEffect, Suspense } from "react"
import ImageUploadSingle from "./single-line-image-upload"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import ProductSelector from "./productSelector"

const getAllProductData = async ({ supabase, selectedProductId }: any) => {
	const { data: products } = await supabase.from("Products").select("*")
	const { data: manufacturers } = await supabase.from("Manufacturers").select("*")
	let { data: colorOptions } = await supabase.from("product_color_options").select("*").eq("product_id", selectedProductId)
	const prodIds = colorOptions.map((colorOption: any) => colorOption.id)
	const unmodifiedURLS = await Promise.all(
		prodIds.map(async (prodId: any) => {
			const { data: imageURLS } = await supabase
				.from("product_images")
				.select("image_url, color_option_id, id, product_angle")
				.eq("color_option_id", prodId)
			return (
				imageURLS?.map((image: any) => ({
					color_id: image.color_option_id,
					image_url: image.image_url,
					id: image.id,
					product_angle: image.product_angle,
					product_id: colorOptions.find((colorOption: any) => colorOption.id === prodId)?.product_id,
					color: colorOptions.find((colorOption: any) => colorOption.id === prodId)?.color,
				})) || []
			)
		})
	)
	const imageURLS = unmodifiedURLS.flat().map((item) => ({
		image_url: item.image_url,
		color: item.color,
		image_id: item.id,
		product_angle: item.product_angle,
		color_id: item.color_id,
		product_id: item.product_id,
	}))
	// const imageURLS = [
	// 	...new Set(
	// 		unmodifiedURLS.flat().map((item) => {
	// 			item.image_url, item.color, item.color_id
	// 		})
	// 	),
	// ]
	const chosenProduct = products.find((product: any) => product.id === selectedProductId)
	const chosenManufacturer = manufacturers.find((manufacturer: any) => manufacturer.manufacturer === chosenProduct?.manufacturer)

	const productData = {
		products,
		chosenProduct,
		chosenManufacturer,
		imageURLS,
	}

	return { productData }
}

const MultipleLineImageUpload = () => {
	const [imageCount, setImageCount] = useState(0)
	const [selectedProductId, setSelectedProductId] = useState(1)
	const [validImageStatuses, setValidImageStatuses] = useState([false])
	const [validColorStatuses, setValidColorStatuses] = useState([false])
	const [productData, setProductData] = useState({} as any)
	const [imageURLS, setImageURLS] = useState([false])
	const [chosenProduct, setChosenProduct] = useState({} as any)
	const [colorOptions, setColorOptions] = useState([false])
	const [chosenManufacturer, setChosenManufacturer] = useState({} as any)

	const supabase = createClientComponentClient()
	const angle = ""

	useEffect(() => {
		const fetchData = async () => {
			const { productData } = await getAllProductData({ supabase, selectedProductId })
			// const { chosenProduct, chosenManufacturer, colorOptions, imageURLS } = productData
			const { products, chosenProduct, chosenManufacturer, colorOptions, imageURLS } = productData
			setColorOptions(colorOptions)
			setImageURLS(imageURLS)
			setChosenProduct(chosenProduct)
			setChosenManufacturer(chosenManufacturer)
			return productData
		}

		const result = fetchData()

		setProductData(result)

		console.log("productData", result)
	}, [selectedProductId])

	return (
		<div className="max-w-[80vw] ">
			<ProductSelector productData={productData} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
			<Suspense fallback={<div>Loading...</div>}>
				{imageURLS.map((imageURL: any, index: number) => (
					<ImageUploadSingle
						key={index}
						productColors={chosenProduct?.colorOptions}
						chosenProduct={chosenProduct}
						chosenAngle={angle}
						imageURL={imageURL}
						colorOptions={colorOptions}

						// onValidImageChange={(isValid: boolean) => handleValidImageChange(index, isValid)}
						// onValidColorChange={(isValid: boolean) => handleValidColorChange(index, isValid)}
						// reset={reset}
					/>
				))}
			</Suspense>
			<button
				type="button"
				// onClick={addImage}
				className="bg-teal-500 hover:bg-teal-400 disabled:bg-zinc-400 disabled:text-zinc-100 disabled:cursor-not-allowed text-white rounded-lg flex mr-auto mt-2 ml-4"
				// disabled={isAddImageButtonDisabled()}
			>
				Add Image
			</button>
		</div>
	)
}

export default MultipleLineImageUpload
