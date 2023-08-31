import Link from "next/link"
import Homepage from "../../../../components/shared/Homepage"
import { Suspense } from "react"
import ProductList from "./ProductList"
import Loading from "./loading"

export default function Dashboard() {
	return (
		<main className="min-h-screen w-screen items-start justify-start flex relative p-32 bg-zinc-200 flex-col">
			<div className="h-1/2 mt-9 flex gap-10 flex-col w-full">
				<div>
					<h2 className="text-left mr-auto text-3xl text-teal-600"> Admin Dashboard</h2>
					<p className="text-left mr-auto">
						<small>Currently available products:</small>
					</p>
				</div>
				<div className="flex items-center justify-center text-center mx-auto w-full ">
					<Suspense fallback={<Loading />}>
						<ProductList />
					</Suspense>
				</div>
			</div>
			<button className="bg-teal-500 mt-24 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded absolute right-32 top-16">
				<Link href="/products/admin/create">New Product</Link>
			</button>
		</main>
	)
}
