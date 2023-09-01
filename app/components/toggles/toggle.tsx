"use client"
import { useState } from "react"

interface toggleProps {
	toggleValue: string
	setToggleValue: (value: string) => void
	setImagePreview: (value: string) => void
}

const toggle: React.FC<toggleProps> = ({ toggleValue, setToggleValue, setImagePreview }) => {
	return (
		<div className="toggle-container flex bg-zinc-300 w-fit h-fit px-1.5 gap-1 py-1.5 justify-evenly rounded-md text-middle select-none relative">
			<div
				className={` ${
					toggleValue === "URL" ? "left-2" : "right-2"
				} toggle-button-bg text-lg rounded px-2 py-0.25  pointer-events-none duration-700 transition-all bg-white absolute w-12 h-7  z-0`}></div>
			<div
				className={`toggle-button-circle  w-1/2 text-lg rounded  px-2 py-0.25 h-fit  z-10 ${
					toggleValue === "URL" ? " shadow-md shadow-black/10 pl-2.25 cursor-default" : "pl-2.25 cursor-pointer"
				}`}
				onClick={() => {
					setToggleValue("URL")
					setImagePreview("default")
				}}>
				URL
			</div>
			<div
				className={`toggle-button-circle w-1/2 text-lg rounded pl-2 py-0.25 h-fit  z-10${
					toggleValue === "File" ? " shadow-md shadow-black/10 pr-2.5 cursor-default" : "  pr-2.5 cursor-pointer"
				}`}
				onClick={() => setToggleValue("File")}>
				File
			</div>
		</div>
	)
}

export default toggle
