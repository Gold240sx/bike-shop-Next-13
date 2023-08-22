import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE(_: any, { params }: { params: { id: string } }) {
	const id = params.id

	const supabase = createRouteHandlerClient({ cookies })

	const { error } = await supabase.from("products").delete().eq("id", id)

	return NextResponse.json({ error })
}