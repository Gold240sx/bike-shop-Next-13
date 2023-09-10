import ImageUploadMultiple2 from "@/app/(pages)/(admin)/edit/(image-uploader)/backup/multiple-line-image-upload2"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const Edit = async () => {
	const supabase = createServerComponentClient({ cookies })
	const { data: products } = await supabase.from("Products").select("*")
	const { data: manufacturers } = await supabase.from("Manufacturers").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h2>Edit</h2>
			<div className="w-full flex-wrap flex overflow-ellipsis">
				<p>https://i.ibb.co/CH8rLhy/Avatar-prop.png</p>
				<h2>Form Image Adder</h2>
				<form className="flex flex-col gap-4">
					<div id="image-upload-container" className="flex flex-col w-fit  bg-zinc-300 rounded-lg p-2">
						<textarea name="description" id="description" cols={30} rows={10} className="w-full h-20 rounded-md"></textarea>
						<ImageUploadMultiple2 products={products} manufacturers={manufacturers} />
					</div>
				</form>
			</div>
		</main>
	)
}

export default Edit
