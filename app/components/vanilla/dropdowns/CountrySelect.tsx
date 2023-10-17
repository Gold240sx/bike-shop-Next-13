const CountrySelector = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const [pickedlang, setPickedLang] = useState("English (US)")
	return (
		<>
			<div className="relative w-fit dark:text-white" data-testid="flowbite-tooltip-target" aria-describedby=":r12:">
				<button className="flex items-center -ml-5 -mr-6" onClick={() => setDropdownOpen(!dropdownOpen)}>
					<span className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
						<span className="sr-only">Current language</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900" className="w-6 h-6 rounded-full">
							<path fill="#b22234" d="M0 0h7410v3900H0z"></path>
							<path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path>
							<path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
							<g fill="#fff">
								<g id="d">
									<g id="c">
										<g id="e">
											<g id="b">
												<path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path>
												<use y="420"></use>
												<use y="840"></use>
												<use y="1260"></use>
											</g>
											<use y="1680"></use>
										</g>
										<use x="247" y="210"></use>
									</g>
									<use x="494"></use>
								</g>
								<use x="988"></use>
								<use x="1976"></use>
								<use x="2470"></use>
							</g>
						</svg>
					</span>
				</button>
				{dropdownOpen && (
					<div
						data-testid="flowbite-tooltip"
						onMouseLeave={() =>
							setTimeout(() => {
								setDropdownOpen(false)
							}, 600)
						}
						tabindex="-1"
						className="z-30 text-gray-900 transition-opacity duration-100 bg-white border border-gray-200 divide-y divide-gray-100 shadow w-fit rounded-xl dark:border-none dark:bg-gray-700 dark:text-white"
						id=":r12:"
						role="tooltip"
						style={{ position: "absolute", top: "50px", right: "10px" }}>
						<div className="text-sm text-gray-700 rounded-xl dark:text-gray-200">
							<ul className="">
								<ul className="py-1" role="none">
									<li className="h-full cursor-pointer">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 pointer-events-none hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
											<div className="inline-flex items-center">
												<svg
													className="w-4 h-4 mr-2 rounded-full"
													xmlns="http://www.w3.org/2000/svg"
													id="flag-icon-css-us"
													viewBox="0 0 512 512">
													<g fill-rule="evenodd">
														<g stroke-width="1pt">
															<path
																fill="#bd3d44"
																d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
																transform="scale(3.9385)"></path>
															<path
																fill="#fff"
																d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
																transform="scale(3.9385)"></path>
														</g>
														<path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path>
														<path
															fill="#fff"
															d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
															transform="scale(3.9385)"></path>
													</g>
												</svg>
												<span className="whitespace-nowrap">English (US)</span>
											</div>
										</a>
									</li>
									<li className="h-full cursor-pointer hover:bg-zinc-100">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
											<div className="inline-flex items-center">
												<svg
													className="w-4 h-4 mr-2 rounded-full"
													xmlns="http://www.w3.org/2000/svg"
													id="flag-icon-css-de"
													viewBox="0 0 512 512">
													<path fill="#ffce00" d="M0 341.3h512V512H0z"></path>
													<path d="M0 0h512v170.7H0z"></path>
													<path fill="#d00" d="M0 170.7h512v170.6H0z"></path>
												</svg>
												Deutsch
											</div>
										</a>
									</li>
									<li className="cursor-pointer hover:bg-zinc-100">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
											<div className="inline-flex items-center">
												<svg
													className="w-4 h-4 mr-2 rounded-full"
													xmlns="http://www.w3.org/2000/svg"
													id="flag-icon-css-it"
													viewBox="0 0 512 512">
													<g fill-rule="evenodd" stroke-width="1pt">
														<path fill="#fff" d="M0 0h512v512H0z"></path>
														<path fill="#009246" d="M0 0h170.7v512H0z"></path>
														<path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path>
													</g>
												</svg>
												Italiano
											</div>
										</a>
									</li>
									<li className="cursor-pointer hover:bg-zinc-100">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
											<div className="inline-flex items-center">
												<svg
													className="w-4 h-4 mr-2 rounded-full"
													xmlns="http://www.w3.org/2000/svg"
													// xmlns:xlink="http://www.w3.org/1999/xlink"
													id="flag-icon-css-cn"
													viewBox="0 0 512 512">
													<defs>
														<path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path>
													</defs>
													<path fill="#de2910" d="M0 0h512v512H0z"></path>
													<use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)"></use>
													<use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)"></use>
													<use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)"></use>
													<use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)"></use>
													<use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)"></use>
												</svg>
												<span className="whitespace-nowrap">中文 (繁體)</span>
											</div>
										</a>
									</li>
								</ul>
							</ul>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

// export default CountrySelect

import React, { useState, useMemo } from "react"
import Select from "react-select"
import countryList from "react-select-country-list"

function CountryPicker() {
	const [value, setValue] = useState("")
	const options = useMemo(() => countryList().getData(), [])

	const changeHandler = (value) => {
		setValue(value)
	}

	return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector
