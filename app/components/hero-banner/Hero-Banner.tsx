//
const HeroBanner = () => {
	return (
		<div className="flex h-16 px-8 py-2 bg-black">
			<div className="flex mx-auto max-w-[800px] items-center justify-between w-full text-white align-middle">
				<p>Check out our brand new Selection of Bikes!</p>
				<button className="px-3 py-2 bg-teal-600 rounded hover:bg-teal-500">Check them out!!</button>
			</div>
		</div>
	)
}

export default HeroBanner
