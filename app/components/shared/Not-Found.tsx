// import Layout from "./Layout"
import NF from "../../assets/Images/404.png"

const NotFound = () => {
	const style: any = {
		fontWeight: "bold",
		textAlign: "center",
		marginTop: "136px",
		position: "absolute",
		marginInline: "auto",
		display: "flex",
		width: "fit",
		height: "fit",
		bacckgroundColor: "green",
	}

	return (
		// <Layout>
		<>
			<div className="absolute flex items-center justify-center w-screen mt-12 text-[3vw] font-semibold text-center text-violet-600">
				<p style={style}>Unfortunately we can't find the page.</p>
			</div>
			<div className="object-contain p-20">{/* <img src={NF} alt="404 Not Found" className="" /> */}</div>
		</>
		// </Layout>
	)
}

export default NotFound
