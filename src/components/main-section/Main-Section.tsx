// import { withRouter } from "react-router-dom"
import { Products } from "../../shop/Products"
import "./Main-Section.styles.scss"

const MainSection = ({ history }: any) => {
	return (
		<div className="mt-16 mb-12 main-section-container">
			<div className="lg:flex main-section-middle">
				<div className=" ms-m-image p-[15px] mb-8">
					<img src={Products.Bikes[0].images[0]} className="min-w-[330px]" />
				</div>
				<div className="flex flex-col gap-4 ms-m-description ">
					<h2 className="font-semibold">{Products.Bikes[0].tagline}</h2>
					<p className="line-clamp-[8]">{Products.Bikes[0].description}</p>
					<button
						className="px-3 py-1 text-lg text-white bg-teal-500 rounded w-fit hover:bg-teal-400 hover:shadow-md shadow-black/50"
						onClick={() => history.push("/product/id")}>
						{Products.Bikes[0].category} Bikes
					</button>
				</div>
			</div>
		</div>
	)
}

export default MainSection
