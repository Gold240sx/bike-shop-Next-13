// import Layout from "./Layout"
import MainSection from "../main-section/Main-Section"
import FeaturedCollection from "../featured-collection/Featured-Collection"
import Carousel from "../carousel/Carousel"
import HeroBanner from "../hero-banner/Hero-Banner"

const Homepage = (products: any) => {
	return (
		<>
			<div className="dark:bg-[#0A0A0C]">
				<div className="relative w-screen ">
					<Carousel autoslide={true} interval={9000} />
					<HeroBanner />
				</div>
				<MainSection products={products} />
				<FeaturedCollection />
			</div>
		</>
	)
}

export default Homepage
