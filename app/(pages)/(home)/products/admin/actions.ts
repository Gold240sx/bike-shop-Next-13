"use server"
import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addProduct(formData: FormData) {
	const product = Object.fromEntries(formData)

	const supabase = createServerActionClient({ cookies })

	// get current user session
	const {
		data: { session },
	} = await supabase.auth.getSession()

	// insert the data
	const { error } = await supabase.from("ProductsTest").insert({
		...product,
		user_email: session?.user.email,
	})

	if (error) {
		throw new Error("Could not add the new Product")
	}

	revalidatePath("/products")
	if (!session) {
		redirect("/products")
	} else {
		redirect("/admin")
	}
}

export const back = (destination: string) => {
	redirect(destination)
}

export async function deleteProduct(id: string) {
	const supabase = createServerActionClient({ cookies })

	// delete the data
	const { error } = await supabase.from("ProductsTest").delete().match({ id })

	if (error) {
		throw new Error("Could not delete the Product")
	}

	revalidatePath("/products")
	redirect("/admin")
}