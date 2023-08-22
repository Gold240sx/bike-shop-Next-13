"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import "./Carousel.styles.scss"
import Hero1 from "../../assets/Images/hero1.jpg"
import Hero2 from "../../assets/Images/repairs.jpg"
import Hero3 from "../../assets/Images/trail.jpg"
import Mountain from "../../assets/Images/Mountain.png"
import Image from "next/image"

const slides = [
	{
		image: Hero1,
		content: (
			<div className="z-50 flex flex-col gap-4 pointer-events-auto">
				<h2 className="text-4xl font-semibold text-center title">Conquer New Heights: Ride with Power, Soar with Freedom!</h2>
				<button
					className="px-4 py-2 mx-auto text-base text-black rounded md:text-xl w-fit bg-white/90 hover:bg-teal-300"
					onClick={() => console.log("button 1 clicked")}>
					Shop now
				</button>
			</div>
		),
	},
	{
		image: Hero2,
		content: (
			<>
				<h2 className="text-4xl font-bold">Annual Bike Maintenence Sale!!!</h2>
				<p className="text-lg">Sep 5th-30th - 50% OFF!!!</p>
				<button className="px-4 py-2 mt-4 text-black bg-white rounded-md cursor-pointer hover:bg-teal-300">Get Fixed!</button>
			</>
		),
	},
	{
		image: Hero3,
		content: (
			<>
				<h2 className="text-4xl font-bold">E-bike Demo</h2>
				<p className="text-lg">Come ride with us!! Nov 11-12</p>
				<button className="px-4 py-2 mt-4 text-white bg-teal-500 rounded-md cursor-pointer hover:bg-teal-300">More Info</button>
			</>
		),
	},
]

function Carrousel({ autoslide, interval = 3000 }: { autoslide: boolean; interval: number }) {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [autoSlide, setAutoSlide] = useState(autoslide)
	const [isPlaying] = useState(true)

	const prev = () => {
		setCurrentSlide((currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1))
	}

	const next = () => {
		setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1))
	}

	useEffect(() => {
		if (autoSlide) {
			const intervalId = setInterval(() => {
				setCurrentSlide((currentSlide) => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1))
			}, interval)
			return () => clearInterval(intervalId)
		}
	}, [currentSlide, setAutoSlide, autoSlide, interval])

	return (
		<div className="relative  w-screen h-[400px] md:h-[600px] lg:h-[750px] max-h-screen overflow-hidden">
			<div className="absolute z-[9] w-full h-full  bg-black/20"></div>
			{slides.map((slide, index) => (
				<div key={index}>
					<div
						className="absolute z-[1] top-0 flex items-center justify-center w-full h-full transition-opacity duration-1000"
						style={{
							opacity: currentSlide % slides.length === index ? 1 : 0,
						}}>
						{/* Slide Image */}
						{slide.image.toString().endsWith(".mp4") || slide.image.toString().endsWith(".gif") ? (
							<video
								src={slide.image.toString()}
								className="z-40 flex mx-auto my-auto align-middle h-fit w-fit"
								autoPlay={isPlaying}
								muted
								loop
							/>
						) : (
							<>
								<Image
									src={slide.image.toString().startsWith("http") ? slide.image : slide.image}
									alt="slide"
									className={`hero-image  z-30 my-auto h-full w-full align-middle`}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									width={1200}
									height={800}
								/>
							</>
						)}
					</div>
					{/* Slide Content */}
					{currentSlide % slides.length === index && (
						<div className="absolute z-40 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
							{slide.content}
						</div>
					)}
				</div>
			))}
			{/* Indicator Section */}
			<div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-center">
				{slides.map((_, index) => (
					<div
						key={index}
						className={`mx-1 h-2 w-2 rounded-full bg-white transition-all duration-300 ${
							currentSlide % slides.length === index ? "bg-zinc-300 p-1.5" : "opacity-50"
						}`}></div>
				))}
			</div>
			<Image
				src={Mountain}
				alt="mountain bottom hero banner"
				width={1400}
				height={60}
				className="absolute bottom-0 z-20 w-screen h-8 md:h-10 lg:h-12"
			/>
			<div className="absolute inset-0 z-10 flex items-center justify-between p-4">
				<button
					onClick={prev}
					className="p-1 rounded-full shadow h-fit w-fit bg-zinc-200/20 hover:bg-white/10 dark:bg-zinc-800/20 dark:hover:bg-zinc-800/40">
					<ChevronLeft size={40} className="-translate-x-0.5 dark:text-zinc-400" />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow h-fit w-fit bg-zinc-200/20 hover:bg-white/10 dark:bg-zinc-800/20 dark:hover:bg-zinc-800/40">
					<ChevronRight size={40} className="translate-x-0.5 dark:text-zinc-400" />
				</button>
			</div>
		</div>
	)
}

export default Carrousel
