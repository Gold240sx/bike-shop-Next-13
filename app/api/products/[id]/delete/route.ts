import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createRouteHandlerClient, createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { send } from "micro"
import { NextApiResponse } from "next"
import { NextApiRequest } from "next"

const dynamic = "force-dynamic"

export async function DELETE(_: any, { params }: { params: any }) {
	const id = params.id
	const supabase = createRouteHandlerClient({ cookies })

	const { error } = await supabase.from("ProductsTest").delete().eq("id", id)

	return NextResponse.json({ error })
}
