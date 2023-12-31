import './globals.css'
import { Rubik } from "next/font/google"

export const dynamic = "force-dynamic"

const rubik = Rubik({ subsets: ["latin"], preload: true })

export const metadata = {
	title: "Bike Shop",
	description: "An E-Commerce app built with Next.JS 13, vercel, Supabase, and TailwindCSS",
}


export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang="en">
			<body className={rubik.className}>{children}</body>
		</html>
	)
}
