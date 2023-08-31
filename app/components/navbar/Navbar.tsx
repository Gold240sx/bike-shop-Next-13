import Link from "next/link"
import Image from "next/image"
import { BiShoppingBag, BiHomeAlt2, BiTable } from "react-icons/bi"
import { LuLayoutDashboard } from "react-icons/lu"
import { RxDividerVertical } from "react-icons/rx"
import BikeShopLogo from "../../assets/Images/bikeShopLogo.png"
import Crank from "../../assets/Images/crank.png"
import CartIcon from "../cart-icon/CartIcon"
import Logo from ".././dojo-logo.png"
import LogoutButton from "../LogoutButton"
import "./nav-menu.scss"

const Navbar = ({ user }: { user: any }) => {
	return (
		<nav id="nav-menu" className="container z-10 items-center nav-menu mx-auto">
			<Link href="/" className="cursor-pointer z-20">
				<div className=" bg-white logo rounded-xl group w-fit h-fit justify-between cursor-pointer">
					<div className="absolute bg-white h-[7.2rem] cursor-pointer rounded  -mt-5 w-[9rem] 75 sm:scale-[85%] sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -rotate-3"></div>
					<Image
						alt="company logo"
						quality={100}
						src={Crank}
						height={60}
						width={25}
						className="absolute h-auto mt-2 ml-[74px] cursor-pointer w-[5.5rem] p-2  rounded-xl animate-spin"
					/>
					<Image
						alt="company logo"
						quality={100}
						height={90}
						width={55}
						// priority
						src={BikeShopLogo}
						className="absolute h-auto scale-75 sm:scale-[85%] cursor-pointer sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -mt-5 w-[9rem] p-2 -rotate-3 shadow-black shadow-2xl"
					/>
				</div>
			</Link>
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
			{user && (
				<div className="bg-zinc-300 rounded-full px-4 pt-1 pb-0.5 flex gap-2">
					<Link href="/products">
						<BiTable className="hover:scale-110 ml-[5px] text-zinc-700 hover:text-black -mt-0.5 h-8 w-8" />
					</Link>

					<Link href="/products/admin">
						<LuLayoutDashboard className="hover:scale-110 text-zinc-700 hover:text-black ml-[5px] h-7 w-7" />
					</Link>
				</div>
			)}
			{!user && <CartIcon />}
			<RxDividerVertical className="scale-150 -mr-2 text-zinc-300" />
			{user && (
				<p className="absolute right-32 top-[86px] z-[11] bg-black rounded-full px-3 text-zinc-200">
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

export default Navbar
