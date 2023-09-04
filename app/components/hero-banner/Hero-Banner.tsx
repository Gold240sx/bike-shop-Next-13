import Image from "next/image"
import "./Hero-Banner.styles.scss"
import HoverSpinner from "../../assets/Icons/hoverGif.gif"
import CannondaleLogo from "../../assets/Images/sponsers/CannondaleLogo.png"
import JGuillemLogo from "../../assets/Images/sponsers/JGuillemLogo.jpg"
import NorcoLogo from "../../assets/Images/sponsers/NorcoLogo.png"
import onyxLogo from "../../assets/Images/sponsers/onyxLogo.png"
import ScottLogo from "../../assets/Images/sponsers/ScottLogo.png"
import TrekLogo from "../../assets/Images/sponsers/TrekLogo.png"
import WTBLogo from "../../assets/Images/sponsers/wtbLogo.png"
import LinkButton from "../buttons/LinkButton"
// import SramLogo from "../../assets/Images/sponsers/SramLogo.png"
// import FoxLogo from "../../assets/Images/sponsers/FoxLogo.png"
// import RockShoxLogo from "../../assets/Images/sponsers/RockShoxLogo.png"
// import MaxxisLogo from "../../assets/Images/sponsers/MaxxisLogo.png"
// import ShimanoLogo from "../../assets/Images/sponsers/ShimanoLogo.png"
// improt TrickStuffLogo from "../../assets/Images/sponsers/TrickStuffLogo.png"
// import EvilLogo from "../../assets/Images/sponsers/EvilLogo.png"
// import PivotLogo from "../../assets/Images/sponsers/PivotLogo.png"
// import SantaCruzLogo from "../../assets/Images/sponsers/SantaCruzLogo.png"
// import YetiLogo from "../../assets/Images/sponsers/YetiLogo.png"

interface Sponsor {
	photo: string
	alt: string
	invert?: boolean
	grayScale?: boolean
}

const sponsors = [
	// { photo: "https://i.ibb.co/7XQG0ZS/fox-logo.png", alt: "fox logo" },
	{ alt: "cannondale logo", photo: CannondaleLogo, invert: true },
	{ alt: "JGuillemLogo", photo: JGuillemLogo },
	{ alt: "NorcoLogo", photo: NorcoLogo, invert: true },
	{ alt: "ScottLogo", photo: ScottLogo, invert: true },
	// { alt: "TrekLogo", photo: TrekLogo, grayScale: true },
	{ alt: "WTBLogo", photo: WTBLogo },
	// { alt: "SramLogo", photo: SramLogo },
	// { alt: "FoxLogo", photo: FoxLogo },
	// { alt: "RockShoxLogo", photo: RockShoxLogo },
	// { alt: "MaxxisLogo", photo: MaxxisLogo },
	// { alt: "ShimanoLogo", photo: ShimanoLogo },
	// { alt: "TrickStuffLogo", photo: TrickStuffLogo },
	// { alt: "EvilLogo", photo: EvilLogo },
	// { alt: "PivotLogo", photo: PivotLogo },
	// { alt: "SantaCruzLogo", photo: SantaCruzLogo },
	// { alt: "YetiLogo", photo: YetiLogo },
]
const HeroBanner = () => {
	return (
		<div className="flex flex-col h-fit px-8 py-2 bg-black pt-10 gap-2 overflow-visible">
			<div className="flex mx-auto text-base  max-w-[800px] items-center justify-between w-full text-yellow-500 align-middle">
				<p>Check out our brand new Selection of Bikes!</p>
				<LinkButton
					to="/products"
					label="Bikes and Accessories"
					className="px-3 py-1 text-base bg-teal-600 rounded hover:bg-teal-500 text-black"
				/>
			</div>
			<div className=" flex flex-row justify-evenly w-full overflow-visible h-fit p-4 px-10 items-center bg-black">
				{sponsors.map((sponsor: any) => (
					<div key={sponsor.alt} className="group relative overflow-visible justify-center flex align-middle items-center ">
						<Image
							src={HoverSpinner}
							alt="Hover Spinner"
							className="group-hover:opacity-50 opacity-0  transition-opacity duration-300 ease-in-out absolute h-16 w-auto object-cover"
						/>
						<Image
							src={sponsor.photo}
							alt={sponsor.alt}
							className={`${sponsor.invert && "invert"} ${
								sponsor.grayScale && "grayscale"
							} rounded group-hover:shadow-lg shadow-black cursor-pointer m-auto opacity-80 group-hover:opacity-100 flex max-h-[30px] max-w-[50px] overflow-visible w-auto  object-fit relative`}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default HeroBanner
