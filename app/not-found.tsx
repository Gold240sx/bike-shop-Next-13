import Link from "next/link"
import Image from "next/image"
import notFoundImg from "./assets/Images/404.png"

export default function NotFound() {
	return (
		<div className="flex flex-col items-center w-full h-full text-black justify-evenly lg:flex-row bg-zinc-600">
			<Link
				href="/"
				className="absolute flex items-center px-4 py-2 text-sm no-underline rounded-md left-3 top-3 text-foreground bg-btn-background hover:bg-btn-background-hover group">
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
					className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1">
					<polyline points="15 18 9 12 15 6" />
				</svg>{" "}
				Back
			</Link>
			<p>404 not found</p>
			<div className="flex flex-col max-w-4xl px-3 py-16 opacity-0 animate-in gap-14 lg:py-24 text-foreground lg:flex-row">
				<Image src={notFoundImg} alt="404" width={200} height={180} className="flex" />
			</div>
		</div>
	)
}

// <div className="flex flex-col max-w-4xl px-3 py-16 opacity-0 animate-in gap-14 lg:py-24 text-foreground lg:flex-row">
{
	/* <Image src={notFound} alt="404" width="500" height="500" className="flex m-auto mt-auto h-fit" /> */
}
{
	/* <div className="flex flex-col items-center justify-center gap-4 m-auto text-left">
					<h2 className="mr-auto text-3xl">There was a problem.</h2>
					<p className="ml-2">We could not find the page you were looking for.</p>
					<p className="mr-4 dark:text-gray-400">
						Go back to the{" "}
						<Link href="/" className="dark:text-sky-400 hover:dark:text-sky-200">
							Dashboard
						</Link>
					</p>
				</div>
			</div>
		</div> */
}
