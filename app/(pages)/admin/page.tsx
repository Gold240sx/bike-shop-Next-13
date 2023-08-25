import Link from "next/link"
import Homepage from "../../components/shared/Homepage"
import { Suspense } from "react"
import ProductList from "./ProductList"
import Loading from "./loading"

export default function Dashboard() {
	return (
		<main className="min-h-screen items-center justify-center flex relative p-32 bg-zinc-200 flex-col">
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded absolute right-32 top-16">
				<Link href="/admin/create">+ New Product</Link>
			</button>
			<h2 className="text-left mr-auto">Dashboard</h2>
			<p className="text-left mr-auto">
				<small>Currently available products:</small>
			</p>
			<Suspense fallback={<Loading />}>
				<ProductList />
			</Suspense>
		</main>
	)
}
