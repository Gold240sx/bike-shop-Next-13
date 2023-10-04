import "./Footer.styles.scss"

const AdminFooter = () => {
	const year = new Date().getFullYear()
	return (
		<div className="w-auto h-20 p-8 text-center dark:text-white dark:bg-black footer bg-zinc-300 text-black">{year} © Bike Shop</div>
	)
}

export default AdminFooter
