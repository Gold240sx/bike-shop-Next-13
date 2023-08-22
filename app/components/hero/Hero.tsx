import "./Hero.styles.scss"

const Hero = () => {
	return (
		<section className="hero is-large is-info hero-image">
			<div className="hero-body">
				<div className="flex flex-col gap-10 hero-components ">
					<p className="text-4xl font-semibold text-center title">Conquer New Heights: Ride with Power, Soar with Freedom!</p>
					<div className="shop-now-btn">
						<button className="px-4 py-2 text-xl text-black rounded bg-white/90 hover:bg-teal-300" id="shop-now">
							Shop Now
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
