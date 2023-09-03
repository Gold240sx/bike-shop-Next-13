import SearchFilterDropdownAutoComplete from "@/app/components/dropdown/SearchFilterDropdownAutoComplete"
import ImageUploadSingle from "@/app/components/image-uploader/single-line-image-upload"
import ImageUploadMultiple from "@/app/components/image-uploader/multiple-line-image-upload"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Test() {
	const supabase = createServerComponentClient({ cookies })
	const { data: products } = await supabase.from("Products").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h1>Tests</h1>
			<p>https://i.ibb.co/CH8rLhy/Avatar-prop.png</p>
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
					{/*  */}
					<ImageUploadMultiple products={products} />
					{/*  */}
					{/* <div className="flex flex-col gap-4 bg-blue-200 w-auto items-start h-fit"> */}
					{/* </div> */}
				</div>
			</form>
		</main>
	)
}
