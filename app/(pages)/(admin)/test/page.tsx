import SearchFilterDropdownAutoComplete from "@/app/components/dropdown/SearchFilterDropdownAutoComplete"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"
import Toggle from "../../../components/toggles/toggle"
import ImageNotFound from "../../../assets/images/image-not-found.jpg"

import { TiDeleteOutline, TiDelete } from "react-icons/ti"
import { BiSolidSave, BiSave } from "react-icons/bi"
import { FiMoreHorizontal } from "react-icons/fi"

export default async function Test() {
	const supabase = createServerComponentClient({ cookies })
	const { data: products } = await supabase.from("Products").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h1>Tests</h1>
			{/* <div className="w-full flex-wrap flex overflow-ellipsis">
				<pre>{JSON.stringify(products, null, 2)}</pre>
			</div> */}
			<h2>Form Image Adder</h2>
			{/* <form className="">
				<div className="flex">
					<div className="flex flex-col">
						<label htmlFor="image">Image(s)</label>
						<div className="Images">
							<input name="image" type="text" />
							<button type="button">Add Image</button>
						</div>
					</div>
					<div className="Image-Preview justify-end bg-red-300">
						<div className="flex flex-col mt-auto">
							<Image
								alt="The guitarist in the concert."
								src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
								width={25}
								height={25}
							/>
						</div>
					</div>
				</div>
			</form> */}
			<form className="flex flex-col gap-4">
				<div id="image-upload-container" className="flex flex-col w-fit  bg-zinc-300 rounded-lg p-2">
					<textarea name="description" id="description" cols={30} rows={10} className="w-full h-20 rounded-md"></textarea>
					<div id="image-upload-container" className="min-h-20 min-w-20  bg-zinc-200 h-fit flex text-center rounded-lg p-2">
						<div className="toggle  h-full w-fit px-4 gap-4 rounded-tl-lg">
							<p className="text-white h-6 text-xl ">Toggle</p>
							<div className="flex flex-col gap-[28px] mt-[22.5px]  h-full">
								<Toggle />
							</div>
						</div>
						<div className="input  h-full w-fit px-4 gap-4">
							<p className="text-white h-6 text-xl ">Source</p>
							<div className="flex flex-col gap-3 mt-[19px]  ">
								{/* <input name="image" type="text" className="h-8 text-md rounded-md" placeholder="URL" /> */}
								<div className="border-dashed border-zinc-400 rounded-lg p-0 py-0  border-2 -translate-y-[2px] w-60">
									<input name="file" type="file" className=" text-md rounded-md my-1 cursor-pointer" placeholder="File" />
								</div>
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
							<div className="flex flex-col gap-[1.23px] mt-[10px] w-20 items-center border border-zinc-300 h-[65px] overflow-hidden object-center">
								<Image
									alt="Image preview of uploaded image"
									src={ImageNotFound}
									className="rounded-xl align-middle -mt-1.5"
									// layout="fill"
									// objectFit="contain"
									height={100}
									width={100}
								/>
							</div>
						</div>
						<div className="remove  h-full w-10  flex flex-col items-center rounded-tr-lg">
							<p className="text-white h-6 text-xl bg-lime-600"></p>
							{/* delete */}
							<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
								<TiDeleteOutline className="text-red-400 h-10 text-4xl flex  text-center group-hover:opacity-0 absolute cursor-pointer" />
								<TiDelete className="text-red-500 h-10 text-4xl flex  text-center group-hover:opacity-100 opacity-0 cursor-pointer scale-105" />
							</div>
							{/* save */}
							<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
								<BiSolidSave className="text-sky-400 h-10 text-3xl flex  text-center group-hover:opacity-100 opacity-0 cursor-pointer scale-105" />
								<BiSave className="text-sky-300 h-10 text-3xl flex  text-center group-hover:opacity-0 absolute cursor-pointer" />
							</div>
							{/* loading */}
							<div className="flex group flex-col gap-[28px] mt-[24px] items-center">
								<FiMoreHorizontal className="text-zinc-500 h-10 text-3xl flex  text-center absolute animate-pulse" />
							</div>
						</div>
					</div>
					{/* <div className="flex flex-col gap-4 bg-blue-200 w-auto items-start h-fit"> */}
					<button type="button" className="bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex mr-auto mt-2 ml-4">
						Add Image
					</button>
					{/* </div> */}
				</div>
			</form>
		</main>
	)
}
