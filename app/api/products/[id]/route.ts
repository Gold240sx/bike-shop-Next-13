import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

export async function DELETE(_: any, { params }: { params: any }) {
	const id = params.id
	const supabase = createRouteHandlerClient({ cookies })

	const { error } = await supabase.from("ProductsTest").delete().eq("id", id)

	return NextResponse.json({ error })
}

export async function PUT(_: any, { params, body, request }: { params: any; body: any; request: any }) {
	const id = params.id
	const cookies = request.headers.get("cookie")
	const supabase = createRouteHandlerClient({ cookies })

	const { error } = await supabase.from("ProductsTest").update(body).eq("id", id)
	return NextResponse.json({ error })
}
