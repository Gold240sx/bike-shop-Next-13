"use client"
import Link from "next/link"
import Image from "next/image"
import { BiShoppingBag, BiHomeAlt2, BiTable, BiSupport } from "react-icons/bi"
import { GrUserAdmin } from "react-icons/gr"
import { LuLayoutDashboard } from "react-icons/lu"
import { RxDividerVertical } from "react-icons/rx"
import { HiUsers } from "react-icons/hi"
import { TbCrane, TbEdit, TbPackage } from "react-icons/tb"
import BikeShopLogo from "../../assets/Images/bikeShopLogo.png"
import Crank from "../../assets/Images/crank.png"
import CartIcon from "../cart-icon/CartIcon"
import Logo from ".././dojo-logo.png"
import LogoutButton from "../buttons/LogoutButton"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import "./nav-menu.scss"
import { ModeToggle } from "../REUSABLE/SCN-components/ModeToggle"

const Navbar = ({ user, userData }: { user: any; userData: any }) => {
	// refresh component on user change while remaining a server component without using useState
	const key = user ? "user-logged-in" : "user-logged-out"
	const userIsAdmin = userData?.role === "admin"

	return (
		<nav id="nav-menu" className="container z-10 items-center w-full  py-4 px-12 bg-white" key={key}>
			<Link href="/" className="cursor-pointer z-20">
				<div className=" bg-white dark:bg-zinc-900 logo rounded-xl group w-fit h-fit justify-between cursor-pointer">
					<div className="absolute bg-white h-[7.2rem] cursor-pointer rounded  -mt-5 w-[9rem] 75 sm:scale-[85%] sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -rotate-3"></div>
					<Image
						alt="company logo"
						quality={100}
						src={Crank}
						height={160}
						width={125}
						className=" absolute h-auto mt-2 ml-[74px] cursor-pointer w-[5.5rem] p-2  rounded-xl animate-spin"
					/>
					<Image
						alt="company logo"
						quality={100}
						height={190}
						width={155}
						// priority
						src={BikeShopLogo}
						className="absolute h-auto scale-75 sm:scale-[85%] cursor-pointer sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -mt-5 w-[9rem] p-2 -rotate-3 shadow-black shadow-2xl"
					/>
				</div>
			</Link>
			<ul className="flex h-full my-auto text-3xl align-middle ml-auto justify-between gap-6 ">
				<li>
					<Link href="/">
						<BiHomeAlt2 className="hover:scale-110 hover:text-teal-500 " />
					</Link>
				</li>
				<li>
					<Link href="/products">
						<BiShoppingBag className="hover:scale-110 hover:text-teal-500 " />
					</Link>
				</li>
			</ul>
			{userIsAdmin && (
				// SIGNED IN USERS
				<div className="bg-zinc-300 rounded-full px-4 pt-1 pb-0.5 flex gap-2">
					<Link href="/my-orders">
						<TbPackage className="hover:scale-110 text-white hover:text-teal-400 ml-[5px] h-7 w-7" />
					</Link>
					<Link href="/contact">
						<BiSupport className="hover:scale-110 text-white hover:text-teal-400 ml-[5px] h-7 w-7" />
					</Link>
					<div className="bg-white/50 h-6 w-0.5 mt-0.5 inline-block"></div>
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
			{user && !userIsAdmin && <CartIcon />}
			{user && !userIsAdmin && (
				// SIGNED IN USERS
				<div className="bg-zinc-300 rounded-full px-4 pt-1 pb-1 flex gap-2">
					<Link href="/my-orders">
						<TbPackage className="hover:scale-110 text-zinc-700 hover:text-zinc-600 ml-[5px] h-7 w-7" />
					</Link>
					<Link href="/contact">
						<BiSupport className="hover:scale-110 text-zinc-700 hover:text-zinc-600 ml-[5px] h-7 w-7" />
					</Link>
				</div>
			)}
			<ModeToggle />
			<RxDividerVertical className="scale-150 -mr-2 text-zinc-300 dark:text-zinc-700" />
			{user && (
				<>
					<p
						className={`${
							userIsAdmin ? "pr-6 right-[7.5rem]" : "pr-3 right-32"
						} absolute top-[96px] z-[11] bg-black rounded-full pl-3 text-zinc-200`}>
						Hello, <span className="text-yellow-400 ml-2">{user?.email}!</span>
					</p>
					{userIsAdmin && (
						<>
							<p
								className="pr-6 right-[7.5rem]
							absolute top-[74px] z-[10] rounded-2xl rounded-bl-none rounded-r-none bg-zinc-800 border-black border-2 border-b-0 pb-1 pl-5 pt-0 text-zinc-200">
								Admin
							</p>
							<div className="absolute right-[5.75rem] top-[74px] z-[12] bg-zinc-700 border-[3px] border-black   rounded-full aspect-square p-1.5 h-12 w-12 text-bold">
								<GrUserAdmin className="invert  ml-1.5 mt-0.5 h-6 w-6" />
							</div>
						</>
					)}
				</>
			)}
			{user && <LogoutButton />}
			{!user && (
				<div className="ml-6">
					<Link
						href="/signin"
						className="bg-zinc-200 py-2 dark:bg-zinc-700 ease-in-out duration-100 transition-colors dark:text-zinc-300 rounded px-4  hover:bg-teal-400/50 dark:hover:bg-teal-300 dark:hover:text-teal-800 cursor-pointer hover:text-white">
						Sign In
					</Link>
				</div>
			)}
		</nav>
	)
}

export default Navbar
