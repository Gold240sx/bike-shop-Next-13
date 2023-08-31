import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

const dynamic = "force-dynamic"

export async function DELETE(_: any, { params }: { params: any }) {
	const id = params.id
	const supabase = createRouteHandlerClient({ cookies })
	const { error } = await supabase.from("ProductsTest").delete().eq("id", id)
	return NextResponse.json({ error })
}
