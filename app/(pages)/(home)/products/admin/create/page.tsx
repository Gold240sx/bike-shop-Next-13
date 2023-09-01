import CreateForm from "./CreateForm"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function CreateProduct() {
	const supabase = createServerComponentClient({ cookies })

	const { data: activeSession } = await supabase.auth.getSession()

	if (!activeSession.session) {
		return redirect("/signin")
	}

	const { data: user } = await supabase.from("user").select("*").match({ id: activeSession.session.user.id }).single()

	if (user?.role !== "admin") {
		return redirect("/")
	}

	return (
		<main className=" pt-28 main">
			<h2 className="text-center">Create a New Product</h2>
			<CreateForm />
		</main>
	)
}
