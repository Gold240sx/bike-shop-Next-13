"use client"
import React, { use, useState, useEffect, Suspense } from "react"
import ImageUploadSingle from "./single-line-image-upload"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import ProductSelector from "./productSelector"
import SubmitButton from "@/app/components/buttons/SubmitButton"

export const getAllProductData = async ({ supabase, selectedProductId }: any) => {
	const { data: products } = await supabase.from("Products").select("*")
	const { data: manufacturers } = await supabase.from("Manufacturers").select("*")
	const colorOptions = products.find((product: any) => product.id === selectedProductId)?.color_options
	let { data: colors } = await supabase.from("product_color_options").select("*").eq("product_id", selectedProductId)
	const prodIds = colors.map((color: any) => color.id)
	const unmodifiedURLS = await Promise.all(
		prodIds.map(async (prodId: any) => {
			const { data: imageURLS } = await supabase
				.from("product_images")
				.select("image_url, color_option_id, id, product_angle, main_image")
				.eq("color_option_id", prodId)
			return (
				imageURLS?.map((image: any) => ({
					color_id: image.color_option_id,
					image_url: image.image_url,
					id: image.id,
					main_image: image.main_image,
					product_angle: image.product_angle,
					product_id: colors.find((colorOption: any) => colorOption.id === prodId)?.product_id,
					color: colors.find((colorOption: any) => colorOption.id === prodId)?.color,
				})) || []
			)
		})
	)
	const imageURLS = unmodifiedURLS.flat().map((item) => ({
		image_url: item.image_url,
		color: item.color,
		image_id: item.id,
		main_image: item.main_image,
		product_angle: item.product_angle,
		color_id: item.color_id,
		product_id: item.product_id,
	}))
	const chosenProduct = products.find((product: any) => product.id === selectedProductId)
	const chosenManufacturer = manufacturers.find((manufacturer: any) => manufacturer.manufacturer === chosenProduct?.manufacturer)

	const productData = {
		products,
		colorOptions,
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
	const [colorOptions, setColorOptions] = useState([])
	const [chosenManufacturer, setChosenManufacturer] = useState({} as any)
	const [mainProductImage, setMainProductImage] = useState("")

	const supabase = createClientComponentClient()
	const angle = ""

	const handleValidImageChange = (index: number, isValid: boolean) => {
		const updatedStatuses = [...validImageStatuses]
		updatedStatuses[index] = isValid
		setValidImageStatuses(updatedStatuses)
	}

	const handleValidColorChange = (index: number, isValid: boolean) => {
		const updatedStatuses = [...validImageStatuses]
		updatedStatuses[index] = isValid
		setValidColorStatuses(updatedStatuses)
	}

	const addImage = async (e: any) => {
		e.preventDefault()
		console.log("addImage")
		setImageCount(imageCount + 1)
	}

	useEffect(() => {
		const fetchData = async () => {
			const { productData } = await getAllProductData({ supabase, selectedProductId })
			// const { chosenProduct, chosenManufacturer, colorOptions, imageURLS } = productData
			const { chosenProduct, chosenManufacturer, imageURLS, colorOptions } = productData
			setColorOptions(colorOptions)
			console.log("colorOptions", colorOptions)
			setImageURLS(imageURLS)
			setChosenProduct(chosenProduct)
			setChosenManufacturer(chosenManufacturer)
			setProductData(productData)
			setImageCount(colorOptions.length)
			setMainProductImage(imageURLS.find((image: any) => image.main_image === true)?.image_url || imageURLS[0].image_url)
			return productData
		}

		fetchData()
		// console.log("productData", fetchData())
	}, [selectedProductId])

	return (
		<div className="">
			{/* <pre>{JSON.stringify(productData, null, "2")}</pre> */}
			{/* <textarea
				name="description"
				id="description"
				cols={30}
				rows={10}
				className="w-full h-20 rounded-md"
				value={productData && JSON.stringify(productData, null, "2")}
			/> */}
			<ProductSelector
				productData={productData}
				selectedProductId={selectedProductId}
				chosenProduct={chosenProduct}
				setSelectedProductId={setSelectedProductId}
				mainProductImage={mainProductImage}
			/>
			<Suspense fallback={<div>Loading...</div>}>
				{imageURLS.map((image: any, index: number) => (
					<div key={index}>
						<ImageUploadSingle
							chosenProduct={chosenProduct}
							colorOptions={colorOptions}
							imageURL={image}
							onValidImageChange={(isValid: boolean) => handleValidImageChange(index, isValid)}
							onValidColorChange={(isValid: boolean) => handleValidColorChange(index, isValid)}
							selectedProductId={selectedProductId}
							image={image}
							// reset={reset}
						/>
					</div>
				))}
				{/* {imageCount - imageURLS.length > 0 && (
					<div>
						<ImageUploadSingle
							chosenProduct={chosenProduct}
							colorOptions={colorOptions}
							onValidImageChange={(isValid: boolean) => handleValidImageChange(imageCount - 1, isValid)}
							onValidColorChange={(isValid: boolean) => handleValidColorChange(imageCount - 1, isValid)}
							image={imageURLS[imageCount - 1]}
							// reset={reset}
						/>
					</div>
				)} */}
			</Suspense>
			<SubmitButton object="Image" type="add" className="ml-0 mr-auto" onClick={addImage} />
		</div>
	)
}

export default MultipleLineImageUpload
