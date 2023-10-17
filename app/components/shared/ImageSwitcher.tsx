"use client"
import React, { useState } from "react"

const ImageSwitcher = ({ images }: { images: string[] }) => {
	const [selectedImage, setSelectedImage] = useState(images[0])

	const handleImageClick = (image: string) => {
		setSelectedImage(image)
	}

	return (
		<div className="single-product-container xl:flex xl:flex-row xl:gap-4">
			<div className="product-image mb-4 p-4 bg-white xl:w-5/6 xl:items-center xl:flex xl:justify-center">
				<img src={selectedImage} className="mx-auto" alt="product" />
			</div>
			<div
				id="other-images"
				className="flex xl:flex-col gap-2 xl:overflow-y-scroll xl:w-1/6"
				style={{ maxHeight: "600px" }} // Adjust the max height as needed
			>
				<p className="text-center xl:block text-2xl font-bold hidden bg-zinc-300 text-zinc-600 py-2">Other Images</p>
				{images.map((image, index) => (
					<>
						<div
							key={index}
							className={`product-image p-2 cursor-pointer bg-white ${
								selectedImage === image ? "border-teal-400" : "border-transparent hover:border-teal-200"
							}  border-2`}
							onClick={() => handleImageClick(image)}>
							<img src={image} className="mx-auto" alt="product" />
						</div>
					</>
				))}
			</div>
		</div>
	)
}

export default ImageSwitcher
