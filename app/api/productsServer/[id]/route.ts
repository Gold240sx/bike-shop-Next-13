import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE(_: any, { params }: { params: { id: string } }) {
	const id = params.id

	const supabase = createRouteHandlerClient({ cookies })
	const array = await supabase.from("ProductsTest").select("*")
	console.log(array)
	const { error } = await supabase.from("ProductsTest").delete().eq("id", id)

	return NextResponse.json({ error })
}

// this is the update product route.
// export async function PUT(request: Request): Promise<NextResponse> {
// 	const product = await request.json()

// 	// get supabase instance
// 	const supabase = createRouteHandlerClient({ cookies })

// 	// get current user session
// 	const {
// 		data: { session },
// 	} = await supabase.auth.getSession()

// 	// insert the data
// 	const { data, error } = await supabase
// 		.from("products")
// 		.update({
// 			...product,
// 			user_email: session?.user.email,
// 		})
// 		.select()
// 	// .single()

// 	return NextResponse.json({ data, error })
// }