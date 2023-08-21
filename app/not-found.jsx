import Link from "next/link"
import Image from "next/image"
import notFound from "./assets/Images/404.png"

export default function NotFound() {
	return (
		<div className="w-full flex items-center justify-evenly lg:flex-row flex-col">
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
