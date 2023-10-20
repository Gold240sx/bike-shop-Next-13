"use client"
import React, { useState } from "react"

const ImageSwitcher = ({ images }: { images: string[] }) => {
	const [selectedImage, setSelectedImage] = useState(images[0])

	const handleImageClick = (image: string) => {
		setSelectedImage(image)
	}

	return (
		<div className="flex flex-col items-center single-product-container xl:gap-4 md:col-span-2">
			<div className="p-4 mb-4 bg-white product-image xl:w-5/6 xl:items-center xl:flex xl:justify-center">
				<img src={selectedImage} className="mx-auto" alt="product" />
			</div>
			<div
				id="other-images"
				className="flex gap-2 xl:overflow-y-scroll"
				style={{ maxHeight: "600px" }} // Adjust the max height as needed
			>
				{/* <p className="hidden py-2 text-2xl font-bold text-center n xl:block bg-zinc-300 text-zinc-600">Other Images</p> */}
				{images.length > 1 && (
					<>
						{images.map((image, index) => (
							<>
								<div
									key={index}
									className={`product-image p-2 cursor-pointer bg-white ${
										selectedImage === image ? "border-teal-400" : "border-transparent hover:border-teal-200"
									} border-2`}
									onClick={() => handleImageClick(image)}>
									<img src={image} className="mx-auto" alt="product" />
								</div>
							</>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default ImageSwitcher
