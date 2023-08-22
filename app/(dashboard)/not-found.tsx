import Link from "next/link"
import Image from "next/image"
import notFound from "../assets/Images/404.png"

export default function NotFound() {
	return (
		<div className="w-full flex items-center justify-evenly lg:flex-row flex-col">
			<Link
				href="/"
				className=" absolute top-4 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1">
					<polyline points="15 18 9 12 15 6" />
				</svg>{" "}
				Back
			</Link>
			<div className="animate-in flex gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground lg:flex-row flex-col">
				<Image src={notFound} alt="404" width="500" height="500" className="flex m-auto mt-auto h-fit" />
				<div className="flex flex-col items-center justify-center m-auto text-left  gap-4">
					<h2 className="text-3xl mr-auto">There was a problem.</h2>
					<p className="ml-2">We could not find the page you were looking for.</p>
					<p className="dark:text-gray-400 mr-4">
						Go back to the{" "}
						<Link href="/" className="dark:text-sky-400 hover:dark:text-sky-200">
							Dashboard
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
