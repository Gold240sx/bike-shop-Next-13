import CreateForm from "./CreateForm"

export default async function CreateProduct() {
	return (
		<main className="bg-zinc-100 pt-28">
			<h2 className="text-center">Create a New Product</h2>
			<CreateForm />
		</main>
	)
}
