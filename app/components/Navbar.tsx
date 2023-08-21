import React, { useEffect } from "react"
import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import LogoutButton from "./LogoutButton"
import { usePathname } from "next/navigation"
import { NextResponse } from "next/server"
import { headers } from "next/headers"

export function middleware(request: Request) {
	// Store current request url in a custom header, which you can read later
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set("x-url", request.url)

	return NextResponse.next({
		request: {
			// Apply new request headers
			headers: requestHeaders,
		},
	})
}

const Navbar = async () => {
	const supabase = createServerComponentClient({ cookies })

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return (
		<nav className="w-full absolute flex justify-center border-b border-b-foreground/10 h-16 bg-zinc-600">
			<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
				<div />
				<div>
					{user ? (
						<div className="flex items-center gap-4">
							Hey, {user.email}!
							<LogoutButton />
						</div>
					) : (
						<div className="flex gap-4">
							<Link
								href="/shop"
								className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
								Shop
							</Link>
							<Link
								href="/login"
								className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
								Login
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
