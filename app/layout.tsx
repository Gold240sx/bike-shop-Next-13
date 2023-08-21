import './globals.css'
import Navbar from "./components/Navbar"

export const metadata = {
	title: "Bike Shop",
	description: "An E-Commerce app built with Next.JS 13, vercel, Supabase, and TailwindCSS",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark:text-white">
			<body className="min-h-screen bg-background">
				<Navbar />
				<main
					className=" flex flex-col items-center min-h-screen pt-16 content-center 
                ">
					{children}
				</main>
			</body>
		</html>
	)
}
