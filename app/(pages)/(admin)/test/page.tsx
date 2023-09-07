import ImageUploadSingle from "@/app/components/image-uploader/single-line-image-upload"
import ImageUploadMultiple from "@/app/components/image-uploader/multiple-line-image-upload"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Test() {
	const supabase = createServerComponentClient({ cookies })
	const { data: products } = await supabase.from("Products").select("*")
	const { data: manufacturers } = await supabase.from("Manufacturers").select("*")

	return (
		<main className="min-h-screen items-center justify-center flex flex-col">
			<h1>Tests</h1>
			<p>https://i.ibb.co/CH8rLhy/Avatar-prop.png</p>
			<h2>Form Image Adder</h2>
			<form className="flex flex-col gap-4">
				<div id="image-upload-container" className="flex flex-col w-fit  bg-zinc-300 rounded-lg p-2">
					<textarea name="description" id="description" cols={30} rows={10} className="w-full h-20 rounded-md"></textarea>
					<ImageUploadMultiple products={products} manufacturers={manufacturers} />
				</div>
			</form>
		</main>
	)
}
