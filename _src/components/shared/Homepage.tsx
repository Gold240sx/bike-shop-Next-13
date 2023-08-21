import Layout from "./Layout"
import MainSection from "../main-section/Main-Section"
import FeaturedCollection from "../featured-collection/Featured-Collection"
import Carousel from "../carousel/Carousel"
import HeroBanner from "../hero-banner/Hero-Banner"

const Homepage = () => {
	return (
		<>
			<Layout>
				<div className="relative w-screen">
					<Carousel autoslide={true} interval={9000} />
					<HeroBanner />
				</div>
				<MainSection />
				<FeaturedCollection />
			</Layout>
		</>
	)
}

export default Homepage
