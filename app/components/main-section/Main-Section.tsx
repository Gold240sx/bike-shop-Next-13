// import { withRouter } from "react-router-dom"
// import { Products } from "../../shop/Products"
import Image from "next/image"
import "./Main-Section.styles.scss"
import TreeTrail from "../../assets/Images/trail-trees.jpg"
import Path from "../../assets/Images/path.svg"
import Building from "../../assets/Images/building.jpg"


const MainSection = ({ history }: any) => {
	return (
		<>
			<div
				className=" main-section-container w-full relative h-fit bg-fixed bg-cover overflow-y-scroll flex flex-col"
				style={{
					backgroundImage: "url('https://i.ibb.co/whQkGzy/trail-trees.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "right bottom",
				}}>
				<div className="flex">
					<div className="absolute z-[9] w-full h-full bg-gradient-to-b from-black via-black/40 to-transparent"></div>
					<div className=" ms-m-image p-[15px] mb-8 my-auto mt-24 ml-[15vw] z-50 h-72 w-72  object-cover aspect-square ">
						<Image src={Building} alt="company building" className="rounded-full h-full object-cover z-50 shadow-xl " />
					</div>
					<div className="lg:flex main-section-middle z-10 mt-12 ">
						<div className="flex flex-col gap-4 ms-m-description mt-5 ">
							<h2 className="font-medium text-6xl text-white">Tuned and Tested</h2>
							<p className="line-clamp-[8] w-[500px] text-zinc-400 pl-5">
								All of our products are tested and inpected by us before every shipment. We offer custom builds, rentals,
								and in-store service and support on all our products so you can hit the trails sooner.
							</p>
							<button
								className="px-4  py-1 text-lg ml-5 text-white bg-black hover:bg-zinc-900 hover:ring-2 hover:ring-teal-400 rounded w-fit  hover:shadow-md shadow-black/50"
								onClick={() => history.push("/product/id")}>
								View Services
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainSection
