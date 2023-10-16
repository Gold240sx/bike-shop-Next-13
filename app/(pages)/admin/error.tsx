"use client"
import LinkButton from "../../components/buttons/LinkButton"

const error = ({ error, reset }: { error: any; reset: any }) => {
	const userIsAdmin = true

	return (
		<main className="h-full mx-auto main">
			<h2 className="text-4xl">Oh no!</h2>
			<p>{error.message}</p>
			<button onClick={reset} className="mx-auto my-4 text-white bg-teal-500 rounded hover:bg-teal-400">
				Maybe try again?
			</button>
			<LinkButton to="/" label="Go Home" className="px-3 py-1 text-white bg-teal-500 rounded" />
			{userIsAdmin && (
				<>
					<h2>If you believe this might be an error click here to go to the admin section and refresh the browser cache</h2>
					<LinkButton to="/admin/dashboard" label="Go to Admin" className="px-3 py-1 text-white bg-teal-500 rounded" />
				</>
			)}
		</main>
	)
}

export default error
