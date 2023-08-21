import './globals.css'

export const metadata = {
	title: "Bike Shop",
	description: "An E-Commerce app built with Next.JS 13, vercel, Supabase, and TailwindCSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
