"use client"

const error = ({ error, reset }: { error: any; reset: any }) => {
	return (
		<main className="mx-auto main">
			<h2 className="text-4xl">Oh no!</h2>
			<p>{error.message}</p>
			<button onClick={reset} className="mx-auto my-4 bg-teal-500 hover:bg-teal-400 rounded text-white">
				Maybe try again?
			</button>
		</main>
	)
}

export default error
