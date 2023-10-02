"use client"
import Link from "next/link"
import Image from "next/image"
import { BiShoppingBag, BiHomeAlt2, BiTable } from "react-icons/bi"
import { LuLayoutDashboard } from "react-icons/lu"
import { RxDividerVertical } from "react-icons/rx"
import { HiUsers } from "react-icons/hi"
import { TbCrane, TbEdit } from "react-icons/tb"
import BikeShopLogo from "../../assets/Images/bikeShopLogo.png"
import Crank from "../../assets/Images/crank.png"
import CartIcon from "../cart-icon/CartIcon"
import Logo from ".././dojo-logo.png"
import LogoutButton from "../buttons/LogoutButton"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import "./nav-menu.scss"

const AdminNavbar = ({ user, userData }: { user: any; userData: any }) => {
	// refresh component on user change while remaining a server component without using useState
	const key = user ? "user-logged-in" : "user-logged-out"
	const userIsAdmin = userData?.role === "admin"

	return (
		<nav id="nav-menu" className="container z-10 py-4 px-8 items-center  mx-auto bg-white" key={key}>
			<ul className="flex h-full my-auto text-3xl align-middle ml-auto justify-between gap-6">
				<li>
					<Link href="/">
						<BiHomeAlt2 className="hover:scale-110 hover:text-teal-500" />
					</Link>
				</li>
				<li>
					<Link href="/shop">
						<BiShoppingBag className="hover:scale-110 hover:text-teal-500" />
					</Link>
				</li>
			</ul>
			{userIsAdmin && (
				// SIGNED IN USERS
				<div className="bg-zinc-300 rounded-full px-4 pt-1 pb-0.5 flex gap-2">
					<Link href="/admin/test">
						<TbCrane className="hover:scale-110 text-zinc-700 hover:text-black ml-[5px] h-7 w-7" />
					</Link>
					<Link href="/admin/edit">
						<TbEdit className="hover:scale-110 text-zinc-700 hover:text-black ml-[5px] h-7 w-7" />
					</Link>
					<Link href="/admin/users">
						<HiUsers className="hover:scale-110 text-zinc-700 hover:text-black ml-[5px] h-7 w-7" />
					</Link>
					<Link href="/admin/products">
						<BiTable className="hover:scale-110 ml-[5px] text-zinc-700 hover:text-black -mt-0.5 h-8 w-8" />
					</Link>
					<Link href="/admin/dashboard">
						<LuLayoutDashboard className="hover:scale-110 text-zinc-700 hover:text-black ml-[5px] h-7 w-7" />
					</Link>
				</div>
			)}
			{!user && <CartIcon />}
			<RxDividerVertical className="scale-150 -mr-2 text-zinc-300" />
			{user && (
				<p className="absolute right-10 top-[86px] z-[11] bg-black rounded-full px-3 text-zinc-200">
					Hello, <span className="text-yellow-400 ml-2">{user?.email}!</span>
				</p>
			)}
			{user && <LogoutButton />}
			{!user && (
				<div className="ml-6">
					<Link href="/signin" className="bg-zinc-200 rounded px-4 py-1 hover:bg-teal-400/50 cursor-pointer hover:text-white">
						Sign In
					</Link>
				</div>
			)}
		</nav>
	)
}

export default AdminNavbar
