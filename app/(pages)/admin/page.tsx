import Link from "next/link"
import Homepage from "../../components/shared/Homepage"

export default function Dashboard() {
	return (
		<main className="min-h-screen items-center justify-center flex relative p-32">
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded absolute right-32 top-16">
				<Link href="/admin">+ New Product</Link>
			</button>
			<h2>Dashboard</h2>
		</main>
	)
}
