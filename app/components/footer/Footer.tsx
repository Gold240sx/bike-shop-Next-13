import "./Footer.styles.scss"

const Footer = () => {
	const year = new Date().getFullYear()
	return <div className="w-screen h-20 p-8 text-center text-white bg-black footer dark:bg-zinc-800">{year} © Bike Shop</div>
}

export default Footer
