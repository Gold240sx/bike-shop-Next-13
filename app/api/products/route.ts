import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

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
		.from("products")
		.insert({
			...product,
			added_by: session?.user.email,
		})
		.select()
		.single()

	return NextResponse.json({ data, error })
}
