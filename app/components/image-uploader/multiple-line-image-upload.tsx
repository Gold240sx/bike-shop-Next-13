"use client"
import React, { useState } from "react"
import ImageUploadSingle from "./single-line-image-upload"
import Image from "next/image"
import SearchFilterDropdownAutoComplete from "../dropdown/SearchFilterDropdownAutoComplete"

const MultipleLineImageUpload = ({ products, manufacturers }: any) => {
	const [imageCount, setImageCount] = useState(1)
	const [selectedProductId, setSelectedProductId] = useState(1)
	const [validImageStatuses, setValidImageStatuses] = useState([false])
	const [validColorStatuses, setValidColorStatuses] = useState([false])
	const angle = ""

	// const chosenProduct = JSON.stringify(products, null, 2)[0].match(id === 1)
	const chosenProduct = products.find((product: any) => product.id === selectedProductId)
	const chosenManufacturer = manufacturers.find((manufacturer: any) => manufacturer.manufacturer === chosenProduct?.manufacturer)

	// array of product titles
	const productTitleArray = products.map((product: any) => {
		const combinedTitle = product.manufacturer + " " + product.title
		return combinedTitle
	})

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

	const handleSelectedProductValue = (value: any) => {
		const selectedProduct = products.find((product: any) => {
			const combinedTitle = product.manufacturer + " " + product.title
			return combinedTitle === value
		})
		if (selectedProduct) {
			setSelectedProductId(selectedProduct.id)
		} else {
			setSelectedProductId(1)
		}
	}

	const addImage = () => {
		setImageCount(imageCount + 1)
		setValidImageStatuses([...validImageStatuses, false])
	}

	const addColor = () => {
		setValidColorStatuses([...validColorStatuses, false])
	}

	// Check if any of the validImageStatuses is false
	const isAddImageButtonDisabled = () => {
		if (validImageStatuses.some((status) => !status) || validColorStatuses.some((status) => !status)) {
			return true
		} else {
			return false
		}
	}

	return (
		<div>
			<div id="product-details" className="bg-zinc-800 rounded-md w-auto- h-fit py-4 px-6 text-white mb-4">
				<div className="flex">
					<img
						alt="selected product image"
						className="w-auto h-16 object-contain aspect-square mr-4 mb-2 p-2 bg-white "
						src={chosenManufacturer?.logo}
					/>
					{chosenManufacturer?.banner_image && (
						<img
							alt="selected product image"
							className="w-auto h-20 mr-4 mb-2 rounded bg-white p-2"
							src={chosenManufacturer?.banner_image}
						/>
					)}
				</div>
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
								data={productTitleArray}
								width="200px"
								ellipsis={true}
								onChange={handleSelectedProductValue}
							/>
						</div>
						<p>{chosenProduct.id}</p>
					</div>
				)}
			</div>
			{Array.from({ length: imageCount }, (_, index) => (
				<ImageUploadSingle
					key={index}
					productColors={chosenProduct?.colorOptions}
					chosenProduct={chosenProduct}
					chosenAngle={angle}
					onValidImageChange={(isValid: boolean) => handleValidImageChange(index, isValid)}
					onValidColorChange={(isValid: boolean) => handleValidColorChange(index, isValid)}
				/>
			))}
			<button
				type="button"
				onClick={addImage}
				className="bg-teal-500 hover:bg-teal-400 disabled:bg-zinc-400 disabled:text-zinc-100 disabled:cursor-not-allowed text-white rounded-lg flex mr-auto mt-2 ml-4"
				disabled={isAddImageButtonDisabled()}>
				Add Image
			</button>
		</div>
	)
}

export default MultipleLineImageUpload
