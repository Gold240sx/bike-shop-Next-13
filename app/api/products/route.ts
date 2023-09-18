import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export const dynamic = "force-dynamic"

// this is the post a new product route.
export async function POST(request: Request): Promise<NextResponse> {
	const product = await request.json()

	// get supabase instance
	const supabase = createRouteHandlerClient({ cookies })

	// get current user session
	const {
		data: { session },
	} = await supabase.auth.getSession()

	// insert the data
	const { data, error } = await supabase
		.from("ProductsTest")
		.insert({
			...product,
			user_email: session?.user.email,
		})
		.select()
		.single()

	return NextResponse.json({ data, error })
}
