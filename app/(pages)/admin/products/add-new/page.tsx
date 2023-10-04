"use client"
import Link from "next/link"
// import ImageUploadMultiple from "@/app/(pages)/(admin)/edit/(image-uploader)/multiple-line-image-upload"
import BackButton from "@/app/components/buttons/BackButton"
// import { editProduct } from "../../(home)/products/[id]/actions"
import SubmitButton from "@/app/components/buttons/SubmitButton"
import { addProduct } from "../../../(home)/products/admin/actions"
// import { Delete } from "react-feather"
// import SingleProduct from "@/app/components/shared/Single-Product"
// import NewImageUploadSingle from "../edit/(image-uploader)/new-single-line-image-upload"
import { Dropdown } from "flowbite-react"
import { ReactElement, MouseEventHandler, useState } from "react"

interface DropdownItemProps {
	option: string
	stateName: string
	setState: React.Dispatch<React.SetStateAction<any>> // Replace 'any' with your state type
}

const generateOnClickHandler =
	(
		setState: React.Dispatch<React.SetStateAction<any>>, // Replace 'any' with your state type
		stateName: string,
		formattedOption: string
	): MouseEventHandler =>
	() => {
		setState((prevState: string[]) => ({
			...prevState,
			[stateName]: formattedOption,
		}))
	}

export const DropdownItem = ({ option, stateName, setState }: DropdownItemProps): ReactElement => {
	const formattedOption = option.replace(/\s+/g, "-").toLowerCase()
	const label = option.toUpperCase()
	const onClickHandler = generateOnClickHandler(setState, stateName, formattedOption)

	return (
		<Dropdown.Item value={formattedOption} onClick={onClickHandler}>
			{label}
		</Dropdown.Item>
	)
}

const categoryMap = {
	Bikes: ["Road", "Gravel", "XC", "Trail", "Enduro", "Downhill"],
	Clothes: ["Tops", "Bottoms", "Protective Gear"],
	Accessories: [],
	partsAndTools: ["Parts", "Tools"],
}

const page = () => {
	const [category, setCategory] = useState("Select")
	const [subCategory, setSubCategory] = useState("Select")
	return (
		<main className="min-h-screen items-center justify-center flex flex-col mt-0 py-8 px-10">
			{/* <Link href="/add-new" className=" h-fit ml-auto items-end pr-12 ">
				<div className=" w-fit font-bold  text-base text-right px-3 py-1.5 m-3 bg-teal-400 hover:bg-teal-300 text-white rounded-md">
					Add New
				</div>
			</Link> */}
			<form action={addProduct} className=" w-full card">
				<div id="image-upload-container" className="flex flex-col  bg-zinc-300 rounded-lg p-2">
					<h1 className="text-2xl font-bold pl-2 text-zinc-800 pt-2">Product Editor: Add New Product</h1>
				</div>
				<hr className=" mx-auto my-4" />
				{/*  */}
				<BackButton destination="/admin/products" />
				<label>
					<span>Manufacturer:</span>
					<input required type="text" name="manufacturer" />
				</label>
				<label>
					<span>Product Name:</span>
					<input required type="text" name="title" />
				</label>
				<label>
					<span>Main Image</span>
					<input type="text" name="image" />
				</label>
				<label>
					<span>Tagline:</span>
					<input type="text" required name="tagline" />
				</label>
				<label>
					<span>Description:</span>
					<textarea required name="description" />
				</label>
				<label>
					<span>Price:</span>
					<input type="number" required name="price" />
				</label>
				<label>
					<span>Category:</span>
					<Dropdown label={category}>
						<Dropdown.Item value="bikes" onClick={() => setCategory("Bikes")}>
							Bikes
						</Dropdown.Item>
						<Dropdown.Item value="parts-and-tools" onClick={() => setCategory("Parts and Tools")}>
							Parts and Tools
						</Dropdown.Item>
						<Dropdown.Item value="clothes" onClick={() => setCategory("Clothes")}>
							Clothes
						</Dropdown.Item>
						<Dropdown.Item value="accessories" onClick={() => setCategory("Accessories")}>
							Accessories
						</Dropdown.Item>
					</Dropdown>
				</label>
				<label>
					<span>Sub-Category:</span>
					<Dropdown label={subCategory}>
						{/* <DropdownItem option="Road" state="SubCategory" /> */}
						<DropdownItem option="Road" stateName="SubCategory" setState={setSubCategory} />
						{/* <Dropdown.Item value="road" onClick={() => setSubCategory("Road")}>
							Road
						</Dropdown.Item> */}
						<Dropdown.Item value="gravel" onClick={() => setSubCategory("Gravel")}>
							Gravel
						</Dropdown.Item>
						<Dropdown.Item value="xc" onClick={() => setSubCategory("XC")}>
							XC
						</Dropdown.Item>
						<Dropdown.Item value="trail" onClick={() => setSubCategory("Trail")}>
							Trail
						</Dropdown.Item>
						<Dropdown.Item value="enduro" onClick={() => setSubCategory("Enduro")}>
							Enduro
						</Dropdown.Item>
						<Dropdown.Item value="downhill" onClick={() => setSubCategory("Downhill")}>
							Downhill
						</Dropdown.Item>
						<Dropdown.Item value="tops" onClick={() => setSubCategory("Tops")}>
							Tops
						</Dropdown.Item>
						<Dropdown.Item value="bottoms" onClick={() => setSubCategory("Bottoms")}>
							Bottoms
						</Dropdown.Item>
						<Dropdown.Item value="protective-gear" onClick={() => setSubCategory("Protuctive Gear")}>
							Protective Gear
						</Dropdown.Item>
						<Dropdown.Item value="parts" onClick={() => setSubCategory("Parts")}>
							Parts
						</Dropdown.Item>
						<Dropdown.Item value="tools" onClick={() => setSubCategory("Tools")}>
							Tools
						</Dropdown.Item>
					</Dropdown>
				</label>
				<div>{/* <NewImageUploadSingle /> */}</div>
				<label>
					<span>Color Options</span>
					<p>multi-select coming soon here</p>
					{/* <textarea required name="description" /> */}
				</label>
				<label>
					<span>Size Options (pick all):</span>
					<p>multi-select coming soon here</p>
					{/* <textarea required name="description" /> */}
				</label>
				<label>
					<span>Stock:</span>
					<input type="number" required name="stock" />
				</label>
				<label className="flex items-center">Additional Options</label>
				<div className="flex items-center mr-4 font-2xl">
					<input
						id="inline-checkbox"
						type="checkbox"
						value=""
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label className="ml-2 font-medium text-gray-900 dark:text-zinc-800">Featured Product?</label>
				</div>
				<label>
					<span>Release Date:</span>
					<input type="date" name="releaseDate" />
				</label>
				<SubmitButton type="add" object="project" className="text-center w-fit mx-auto" />
			</form>
		</main>
	)
}

export default page
