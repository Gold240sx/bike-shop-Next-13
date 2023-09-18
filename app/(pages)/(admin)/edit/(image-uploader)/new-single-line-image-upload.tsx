"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Toggle from "../../../../components/toggles/toggle"
import ImageNotFound from "../../../../assets/images/image-not-found.jpg"
import SearchFilterDropdownAutoComplete from "./dropdown/SearchFilterDropdownAutoComplete"

import { TiDeleteOutline, TiDelete } from "react-icons/ti"
import { BiSolidSave, BiSave, BiError, BiSolidError } from "react-icons/bi"
import { MdClear } from "react-icons/md"
import { FiMoreHorizontal } from "react-icons/fi"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const NewImageUploadSingle = ({
	onValidImageChange,
	onValidColorChange,
	productColors,
	chosenProduct,
	selectedProductId,
	image,
	// chosenAngle, // reset,
	reset,
	colorOptions,
}: {
	onValidImageChange: any
	onValidColorChange: any
	image?: any
	productColors?: any[]
	chosenProduct: any
	colorOptions?: any[]
	selectedproductId: any
	// chosenAngle: any
	reset?: any
}) => {
	const [toggleValue, setToggleValue] = useState("URL")
	const [imagePreview, setImagePreview] = useState("default")
	const [imageStatus, setImageStatus] = useState("inactive") // inactive, loading, error, saveReady , saved, color
	const [errorStatus, setErrorStatus] = useState("")
	const [validImage, setValidImage] = useState(false)
	const [angle, setAngle] = useState(image.product_angle)
	const [colorValue, setColorValue] = useState(image.color)
	const [validColor, setValidColor] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	// find the images corresponding angle that matches the photo url
	// const anglePick = colorPick?.images.find((image: any) => image.product_angle === angle)
	// Access and display additional attributes

	const isValidWebsite =
		/^(https?:\/\/(www\.)?[^\s]+|www\.[^\s]+||http:\/\/|https:\/\/|http:\/|http:|https:\/|https:|https|http|htt|ht|h|w|ww|www|www.)$/i
	const isValidDomain = /\.(com|org|co|net|gov|edu|in|mil|int|eu|coop|aero|museum|name|pro|biz|info|jobs|mobi|travel|arpa)/i
	const isValidImage = /\.(jpg|jpeg|png|webp)$/i

	const handleSelectedColorValue = (value: any) => {
		setColorValue(value)
		if (value !== "") {
			setValidColor(true)
		} else {
			setValidColor(false)
			if (!parent) {
				// reset(value)
				// setImagePreview("default")
			}
		}
	}

	const handleSelectedAngleValue = (value: any) => {
		setAngle(value)
	}

	const handleUploadImageToURL = () => {
		// upload image to url
		let url = ""
		// const supabase = createClientComponentClient({ cookies })
		// const { data, error } = await supabase.storage.from("YOUR_STORAGE_BUCKET_NAME").upload(`public/${file.name}`, file)

		// if (error) {
		// 	console.error("Error uploading file:", error.message)
		// } else {
		// 	// Get the public URL of the uploaded file
		// 	const fileUrl = `${supabaseUrl}/storage/v1/object/public/${file.name}`
		// 	console.log("File URL:", fileUrl)
		// 	// You can now use fileUrl to display or access the uploaded file.
		// }

		return url
	}

	// useEffect(() => {
	// 	console.log("colorOptions", colorOptions)
	// 	if (imageURL) {
	// 		console.log("imageURL", imageURL)
	// 		// setImagePreview(imageURL)
	// 		setImageStatus("saved")
	// 		// setProductOption(ProductOption)
	// 	}
	// }, [imageURL])

	return (
		<div className="flex-col flex bg-zinc-200 rounded-lg p-2 h-fit ove overflow-y-visible my-2">
			<p>{imageStatus}</p>
			<div id="image-upload-container" className="min-h-20 min-w-20  h-fit flex  lg:flex-row text-center ">
				<div className="toggle  h-full w-fit px-4 gap-4 rounded-tl-lg">
					<p className="text-white h-6 text-xl ">Toggle</p>
					<div className="flex flex-col gap-[28px] mt-[22.5px]  h-full">
						<Toggle
							toggleValue={toggleValue}
							setToggleValue={setToggleValue}
							setImagePreview={setImagePreview}
							setImageStatus={setImageStatus}
							setErrorStatus={setErrorStatus}
						/>
					</div>
				</div>
				<div className="input  h-full w-fit px-4 gap-4">
					<p className="text-white h-6 text-xl ">Source</p>
					<div className="flex flex-col gap-3 mt-[19px]">
						<div className="flex">
							{toggleValue === "URL" && (
								<input
									name="image-url"
									type="text"
									onChange={(e) => {
										setImagePreview(e.target.value.trim() === "" ? "default" : e.target.value.trim())
										setErrorStatus(
											toggleValue !== "URL" || e.target.value.trim() !== ""
												? isValidWebsite.test(e.target.value.trim())
													? isValidDomain.test(e.target.value.trim())
														? isValidImage.test(e.target.value.trim())
															? ""
															: "Image URL must end with .jpg, .jpeg, .png or .webp"
														: ""
													: "Image URL must start with www, http:// or https://."
												: ""
										)
										setImageStatus("inactive")
										setValidImage(
											toggleValue !== "URL" || e.target.value.trim() !== ""
												? isValidWebsite.test(e.target.value.trim())
													? isValidDomain.test(e.target.value.trim())
														? isValidImage.test(e.target.value.trim())
															? true
															: false
														: false
													: false
												: false
										)
									}}
									ref={inputRef}
									value={imagePreview === "default" ? "" : imagePreview}
									className={`${imagePreview === "" ? "w-[238px]" : "w-[202px]"}
                                    h-8 text-md mx-0.5 rounded-md focus:placeholder:opacity-0 mr-1`}
									placeholder="URL"
								/>
							)}
							{toggleValue === "URL" && (
								<button
									className="disabled:opacity-0 disabled:w-0  my-auto flex h-8 m-0 p-0"
									disabled={imagePreview === "" || imagePreview === "default"}
									onClick={(e) => {
										e.preventDefault()
										setImagePreview("")
										setErrorStatus("")
									}}>
									<MdClear className=" text-2xl -translate-y-[3px]" />
								</button>
							)}
						</div>
						{toggleValue === "File" && (
							<div
								className="flex relative group w-[213px] -mt-3"
								onClick={() => {
									setErrorStatus("")
									setImageStatus("inactive")
									setImagePreview("default")
								}}>
								<button
									type="button"
									className="bg-zinc-500 pointer-events-none px-2 group-hover:bg-zinc-400 absolute z-20 -left-1 text-white rounded-lg flex mr-auto my-2 mt-[9px] h-7 ml-4">
									Select Image
								</button>
								<div className="border-dashed w-full border-zinc-400 rounded-lg p-0 py-0  border-2 -translate-y-[2px]">
									<input
										// ref={inputRef}
										name="file"
										type="file"
										className=" text-md rounded-md my-1 cursor-pointer placeholder:opacity-0"
										placeholder="File"
										onClick={(e) => {
											setImagePreview("default")
										}}
										onChange={(e) => {
											const files = e.target.files
											if (!files) return
											setImageStatus("loading")
											const file = files[0]
											if (
												file.type !== "image/jpeg" &&
												file.type !== "image/jpg" &&
												file.type !== "image/png" &&
												file.type !== "image/webp"
											) {
												// Check file type
												setImageStatus("error")
												setErrorStatus("File type must be JPEG, JPG, WEBP or PNG.")
												return
											}
											if (file.size > 5 * 1024 * 1024) {
												// Check file size (5MB limit)
												setImageStatus("error")
												setErrorStatus("File size exceeds the 5MB limit.")
												return
											}
											if (file.size < 5 * 1024 * 1024) {
												setImageStatus("error")
												setErrorStatus("")
											}
											const reader = new FileReader()
											reader.onloadend = () => {
												setImagePreview(reader.result as string)
											}
											reader.readAsDataURL(file)
											setImageStatus("saveReady")
										}}
									/>
								</div>

								{imageStatus === "saveReady" && (
									<button
										type="button"
										disabled={errorStatus !== ""}
										onClick={handleUploadImageToURL}
										className={` ${
											errorStatus !== ""
												? "bg-zinc-300 text-zinc-100"
												: "bg-teal-500 hover:bg-teal-400 cursor-pointer"
										}  absolute z-20 right-2 text-white rounded-lg flex mr-auto my-2 h-7 ml-4`}>
										UPLOAD
									</button>
								)}
							</div>
						)}
					</div>
				</div>
				<div className="right   h-full w-fit px-4 ">
					<p className="text-white h-6 text-xl ">Color Selection</p>
					<div className="flex flex-col ">
						<div className="flex">
							{colorValue && (
								<SearchFilterDropdownAutoComplete
									data={colorOptions}
									onChange={handleSelectedColorValue}
									// value={colorValue}
									// reset={reset}
									// parent={false}
								/>
							)}
							{!colorValue && (
								<SearchFilterDropdownAutoComplete
									data={colorOptions}
									onChange={handleSelectedColorValue}
									// value={colorValue}
									// reset={reset}
									// parent={false}
								/>
							)}
						</div>
					</div>
				</div>
				<div className="preview  h-full w-fit px-4 gap-2">
					<p className="text-white h-6 text-xl ">Preview</p>
					<div className="flex flex-col gap-[1.23px] mt-[9.75px] object-fill w-20 items-center border border-zinc-300 h-[65px] overflow-hidden object-center">
						{/* {image && (
							<img alt="Image preview of uploaded image" src={imagePreview} className="align-middle h-full rounded-md" />
						)} */}
						{(!image && imagePreview === "default") || (!image && !validImage) ? (
							// default image
							<Image alt="image not found" src={ImageNotFound} width={100} height={100} className="-mt-1.5" />
						) : (
							// uploaded image
							<img alt="Image preview of uploaded image" src={imagePreview} className="align-middle h-full rounded-md" />
						)}
					</div>
				</div>
				<div className="flex flex-col mt-8">
					{!colorValue && (
						<SearchFilterDropdownAutoComplete
							data={["front", "back", "side", "frame", "quarter", "close-up"]}
							onChange={handleSelectedAngleValue}
							// reset={reset}
							// parent={false}
						/>
					)}
					{colorValue && (
						<SearchFilterDropdownAutoComplete
							data={["front", "back", "side", "frame", "quarter", "close-up"]}
							onChange={handleSelectedAngleValue}
							// reset={reset}
							// parent={false}
						/>
					)}
				</div>
				<div className="remove  h-full w-10  flex flex-col items-center rounded-tr-lg">
					<p className="text-white h-6 text-xl bg-lime-600"></p>
					{imageStatus === "inactive" && <div className="flex group flex-col gap-[28px] mt-[22px] items-center"></div>}
					{/* delete */}
					{imageStatus === "saved" && (
						<div className="flex group flex-col gap-[28px] mt-[22px] items-center">
							<TiDeleteOutline className="text-red-400 h-10 text-4xl flex  text-center group-hover:opacity-0 absolute cursor-pointer" />
							<TiDelete className="text-red-500 h-10 text-4xl flex  text-center group-hover:opacity-100 opacity-0 cursor-pointer scale-105" />
						</div>
					)}
					{/* save */}
					{imageStatus === "saveReady" && (
						<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
							<BiSolidSave className="text-sky-400 h-10 text-3xl flex  text-center group-hover:opacity-100 opacity-0 cursor-pointer scale-105" />
							<BiSave className="text-sky-300 h-10 text-3xl flex  text-center group-hover:opacity-0 absolute cursor-pointer" />
						</div>
					)}
					{/* error */}
					{imageStatus === "error" && (
						<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
							<BiSolidError className="text-yellow-400 h-10 text-3xl flex  text-center group-hover:opacity-100 opacity-0 cursor-pointer scale-105" />
							<BiError className="text-yellow-500 h-10 text-3xl flex  text-center group-hover:opacity-0 absolute cursor-pointer" />
						</div>
					)}
					{/* loading */}
					{imageStatus === "loading" && (
						<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
							<FiMoreHorizontal className="text-zinc-500 h-10 text-3xl flex  text-center absolute animate-pulse" />
						</div>
					)}
				</div>
			</div>
			{/* error messages */}
			{errorStatus !== "" && (
				<div className="flex h-7 ml-6 mb-4 gap-2">
					<BiSolidError className="text-yellow-400  text-xl flex  text-center " />
					{/* <p className=" text-red-500">COULD NOT UPLOAD IMAGE... PLEASE RETRY</p>
                <p className=" text-red-500">IMAGE SIZE TOO LARGE... PLEASE RETRY</p>
                <p className=" text-red-500">INVALID IMAGE URL... PLEASE RETRY</p>
                <p className=" text-red-500">Could not retrieve product options... click here to add</p> */}
					<p className=" text-red-500">{errorStatus}</p>
				</div>
			)}
		</div>
	)
}

export default NewImageUploadSingle
