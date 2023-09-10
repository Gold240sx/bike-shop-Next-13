// import { withRouter } from "react-router-dom"
// import { Products } from "../../shop/Products"
import Image from "next/image"
import "./Main-Section.styles.scss"
import TreeTrail from "../../assets/Images/trail-trees.jpg"
import Path from "../../assets/Images/path.svg"
import Building from "../../assets/Images/building.jpg"
import GoogleRating from "../../assets/Icons/GoogleRating.png"
import Link from "next/link"
import LinkButton from "../buttons/LinkButton"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const MainSection = async ({ history, products }: any) => {
	const supabase = createServerComponentClient({ cookies })

	const { data: promotions } = await supabase.from("Promotions").select("*").eq("id", 1).single()
	const { image, header, description, link_label: linkLabel, sub_header: subHeader } = promotions

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
							<h2 className="font-medium text-5xl text-white">Rider owned and opperated</h2>
							<p className="line-clamp-[8] max-w-[50vw]  pr-14 text-base text-balance w-full text-zinc-400 pl-5 text-wrap">
								<span className="text-xl text-white">All of our products </span>are tested and inpected by us before every
								shipment. We offer custom builds, rentals, and in-store service and support on all our products so you can
								hit the trails sooner.
							</p>
							{/* <button
								className="px-4  py-1 text-lg ml-5 text-white bg-black hover:bg-zinc-900 hover:ring-2 hover:ring-teal-400 rounded w-fit  hover:shadow-md shadow-black/50"
								// onClick={() => history.push("/product/id")}
							>
								View Services
							</button> */}
							<LinkButton
								to="/services"
								label="View Services"
								className="px-3 py-1 text-lg text-white rounded w-fit bg-teal-500 hover:bg-teal-400 hover:shadow-md shadow-black/50"
							/>
						</div>
					</div>
				</div>
				<Link href="/">
					<Image
						src={GoogleRating}
						alt="google rating"
						width={128}
						height={40}
						className="cursor-pointer -mt-8 mb-4 mr-8 flex ml-auto w-fit h-fit"
					/>
				</Link>
			</div>

			<section className="mt-16 mb-12 main-section-container items-center flex  h-fit">
				<div className="lg:flex main-section-middle mx-auto h-fit">
					<div className=" ms-m-image p-[15px] mb-8 w-3/4 lg:w-auto mx-auto max-w-[900px] lg:max-w-[500px]">
						<img src={image} className=" h-auto  w-full" alt="promo" />
					</div>
					<div className="flex flex-col gap-4 ms-m-description p-[15px] lg:p-0 w-3/4 lg:w-auto mx-auto max-w-[900px]  lg:max-w-auto ">
						<h2 className="font-semibold text-4xl text-teal-500 ml-2">{header}</h2>
						<h2 className="font-semibold pl-4">{subHeader}</h2>
						<p className="line-clamp-[8] max-w-[60vw] lg:max-w-[30vw] pl-4">{description}</p>
						<LinkButton
							to="/products"
							label={linkLabel}
							className="px-3 py-1 ml-4 text-lg text-white rounded w-fit bg-[#9C5B3C] hover:bg-[#C9825B] hover:shadow-md shadow-black/50"
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default MainSection
