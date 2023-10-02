import ImageUploadMultiple from "@/app/(pages)/admin/edit/(image-uploader)/multiple-line-image-upload"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"

export default async function Edit() {
	return (
		<main className="min-h-screen items-center justify-center flex flex-col mt-0 pt-8">
			{/* <Link href="/add-new" className=" h-fit ml-auto items-end pr-12 ">
				<div className=" w-fit font-bold  text-base text-right px-3 py-1.5 m-3 bg-teal-400 hover:bg-teal-300 text-white rounded-md">
					Add New
				</div>
			</Link> */}

			{/* Multiple line image uploader */}
			{/* <form className="flex flex-col gap-4">
				<div id="image-upload-container" className="flex flex-col w-[90vw]  bg-zinc-300 rounded-lg p-2">
					<h1 className="text-2xl font-bold pl-2 text-zinc-800 pt-2">Product Editor: Images</h1>
					<p className="pl-2 pb-2">https://i.ibb.co/CH8rLhy/Avatar-prop.png</p>
					<ImageUploadMultiple />
				</div>
			</form> */}
		</main>
	)
}
