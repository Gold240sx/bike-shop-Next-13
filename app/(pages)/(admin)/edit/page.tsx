import ImageUploadMultiple from "@/app/(pages)/(admin)/edit/(image-uploader)/multiple-line-image-upload"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function Test() {
	const supabase = createServerComponentClient({ cookies })

	return (
		<main className="min-h-screen items-center justify-center flex flex-col mt-24">
			<h1>Edit</h1>
			<p>https://i.ibb.co/CH8rLhy/Avatar-prop.png</p>
			<h2>Form Image Adder</h2>
			<form className="flex flex-col gap-4">
				<div id="image-upload-container" className="flex flex-col w-fit  bg-zinc-300 rounded-lg p-2">
					<textarea name="description" id="description" cols={30} rows={10} className="w-full h-20 rounded-md"></textarea>
					<ImageUploadMultiple />
				</div>
			</form>
		</main>
	)
}
