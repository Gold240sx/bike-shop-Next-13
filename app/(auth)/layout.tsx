import Link from "next/link"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Navbar from "../components/navbar/Navbar"

export default async function AuthLayout({ children }: any) {
  const supabase = createServerComponentClient({ cookies })

  const {
		data: { user },
  } = await supabase.auth.getUser()

  if (user) {
		redirect("/")
  }

  return (
		<main className="bg-zinc-100 w-full h-screen">
			<Navbar user={user} />
			{children}
		</main>
  )
}