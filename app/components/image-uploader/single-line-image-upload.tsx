"use client"
import { useState } from "react"
import Image from "next/image"
import Toggle from "../toggles/toggle"
import ImageNotFound from "../../assets/Images/image-not-found.jpg"
import SearchFilterDropdownAutoComplete from "../dropdown/SearchFilterDropdownAutoComplete"

import { TiDeleteOutline, TiDelete } from "react-icons/ti"
import { BiSolidSave, BiSave, BiError, BiSolidError } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

const ImageUploadSingle = () => {
	const [toggleValue, setToggleValue] = useState("URL")
	const [imagePreview, setImagePreview] = useState("default")
	const [imageStatus, setImageStatus] = useState("inactive") // inactive, loading, error, saveReady , saved
	const [errorStatus, setErrorStatus] = useState("")

	return (
		<div className="flex-col bg-zinc-200 rounded-lg p-2">
			<div id="image-upload-container" className="min-h-20 min-w-20  h-fit flex text-center ">
				<div className="toggle  h-full w-fit px-4 gap-4 rounded-tl-lg">
					<p className="text-white h-6 text-xl ">Toggle</p>
					<div className="flex flex-col gap-[28px] mt-[22.5px]  h-full">
						<Toggle toggleValue={toggleValue} setToggleValue={setToggleValue} setImagePreview={setImagePreview} />
					</div>
				</div>
				<div className="input  h-full w-fit px-4 gap-4">
					<p className="text-white h-6 text-xl ">Source</p>
					<div className="flex flex-col gap-3 mt-[19px]">
						{toggleValue === "URL" && (
							<input
								name="image-url"
								type="text"
								onChange={(e) => {
									setImagePreview(e.target.value === "" ? "default" : e.target.value)
									setImageStatus("inactive")
								}}
								value={imagePreview === "default" ? "" : imagePreview}
								className="h-8 text-md mx-0.5 rounded-md focus:placeholder:opacity-0"
								placeholder="URL"
							/>
						)}
						{toggleValue === "File" && (
							<div className="flex relative">
								<button
									type="button"
									className="bg-zinc-500 pointer-events-none hover:bg-zinc-400 absolute z-20 -left-1 text-white rounded-lg flex mr-auto my-2 h-7 ml-4">
									Select Image
								</button>
								<div className="border-dashed border-zinc-400 rounded-lg p-0 py-0  border-2 -translate-y-[2px] w-60">
									<input
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
											const file = files[0]
											if (file.size > 5 * 1024 * 1024) {
												// Check file size (5MB limit)
												setErrorStatus("File size exceeds the 5MB limit.")
												return
											}
											if (
												file.type !== "image/jpeg" &&
												file.type !== "image/jpg" &&
												file.type !== "image/png" &&
												file.type !== "image/webp"
											) {
												// Check file type
												setErrorStatus("File type must be JPEG, JPG, WEBP or PNG.")
												return
											}
											setImageStatus("loading")
											if (file.size < 5 * 1024 * 1024) {
												setErrorStatus("")
											}
											setImageStatus("saveReady")
											const reader = new FileReader()
											reader.onloadend = () => {
												setImagePreview(reader.result as string)
											}
											reader.readAsDataURL(file)
										}}
									/>
								</div>

								{imageStatus === "saveReady" && (
									<button
										type="button"
										className="bg-teal-500 hover:bg-teal-400 absolute z-20 right-2 text-white rounded-lg flex mr-auto my-2 h-7 ml-4">
										UPLOAD
									</button>
								)}
							</div>
						)}
					</div>
				</div>
				<div className="right   h-full w-fit px-4 gap-2">
					<p className="text-white h-6 text-xl ">Product Option</p>
					<div className="flex flex-col gap-[12px] mt-[19px] ">
						<SearchFilterDropdownAutoComplete />
					</div>
				</div>
				<div className="preview  h-full w-fit px-4 gap-2">
					<p className="text-white h-6 text-xl ">Preview</p>
					<div className="flex flex-col gap-[1.23px] mt-[9.75px] object-fill w-20 items-center border border-zinc-300 h-[65px] overflow-hidden object-center">
						{imagePreview === "default" ? (
							// default image
							<Image alt="The guitarist in the concert." src={ImageNotFound} width={100} height={100} className="-mt-1.5" />
						) : (
							// uploaded image
							<img alt="Image preview of uploaded image" src={imagePreview} className="align-middle h-full rounded-md" />
						)}
					</div>
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

export default ImageUploadSingle
