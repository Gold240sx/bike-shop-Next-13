import CreateForm from "./CreateForm"


export default async function CreateProduct() {
	const product = {
		id: "your_id_here",
		body: "your_body_here",
		priority: "your_priority_here",
		user_email: "your_user_email_here",
	}
	return (
		<main className="bg-zinc-100 pt-28">
			<h2 className="text-center">Create a New Product</h2>
			<CreateForm product={product} />
		</main>
	)
}
