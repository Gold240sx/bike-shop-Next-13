import { Link } from "react-router-dom"
import { BiShoppingBag, BiHomeAlt2 } from "react-icons/bi"
import BikeShopLogo from "../../assets/Images/bikeShopLogo.png"
import CartIcon from "../cart-icon/CartIcon"
import Crank from "../../assets/Images/crank.png"
import "./Header.styles.scss"

const Header = () => {
	return (
		<nav className="container z-10 items-center nav-menu">
			<div className="z-10 bg-white logo rounded-xl group w-fit h-fit">
				<Link to="/">
					<div className="absolute bg-white h-[7.2rem] rounded  -mt-5 w-[9rem] 75 sm:scale-[85%] sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -rotate-3"></div>
					<img src={Crank} className="absolute h-auto mt-2 ml-[74px] w-[6rem] p-2  rounded-xl animate-spin" />
					<img
						src={BikeShopLogo}
						className="absolute h-auto scale-75 sm:scale-[85%] sm:group-hover:scale-90 md:scale-95 md:group-hover:scale-100 lg:group-hover:scale-105 -mt-5 w-[9rem] p-2 -rotate-3 shadow-black shadow-2xl"
					/>
				</Link>
			</div>
			<ul className="flex h-full my-auto text-3xl align-middle ">
				<li>
					<Link to="/">
						<BiHomeAlt2 className="hover:text-teal-500 hover:scale-110" />
					</Link>
				</li>
				<li>
					<Link to="/shop">
						<BiShoppingBag className="hover:text-teal-500 hover:scale-110" />
					</Link>
				</li>
			</ul>
			<CartIcon />
		</nav>
	)
}

export default Header
