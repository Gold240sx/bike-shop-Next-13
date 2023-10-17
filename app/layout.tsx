import { Providers } from "./context/providers"
import "./globals.css"
import { Rubik } from "next/font/google"
import { ThemeProvider } from "../components/themeProvider"
import ContextContainer from "./context/ContextContainer"
import CartContextProvider from "./context/cartContext"

export const dynamic = "force-dynamic"

const rubik = Rubik({ subsets: ["latin"], preload: true })

export const metadata = {
	title: "Bike Shop",
	description: "An E-Commerce app built with Next.JS 13, vercel, Supabase, SupabaseAuth and TailwindCSS",
}

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang="en">
			<body className={`${rubik.className} h-screen`}>
				<CartContextProvider>
					{/* <ContextContainer /> */}
					{/* testing comgonent^^ */}
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<Providers>{children}</Providers>
					</ThemeProvider>
				</CartContextProvider>
			</body>
		</html>
	)
}
