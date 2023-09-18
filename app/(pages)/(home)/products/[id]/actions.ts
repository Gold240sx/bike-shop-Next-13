"use server"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function editProduct(formData: FormData, id: number) {
	const editedProduct = Object.fromEntries(formData)
	const supabase = createServerActionClient({ cookies })

	const {
		data: { session },
	} = await supabase.auth.getSession()

	const { error } = await supabase
		.from("ProductsTest")
		.update({
			...editedProduct,
		})
		.eq("id", id)

	revalidatePath("/products")
	if (session) {
		redirect(`/products/admin`)
	} else {
		redirect("/products")
	}
}
