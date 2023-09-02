"use client"
import React, { useState, useEffect, useRef } from "react"

const fontSize: string = "16px"

const defaultData = [{ value: "red" }, { value: "blue" }, { value: "green" }]

const cssDevNotes = `
    input:focus, input[type="text"], input:focus-visible, input:focus-within, ::-webkit-input-placeholder {
        outline: none;
        outline: transparent;
         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-focus-ring-color:  rgba(0, 0, 0, 0);
        border: none;
        border: 0;
    }

    .drd-scrollbar {
        scrollbar-width: 0px;
        scrollbar-width: none;
      -ms-overflow-style: none; 
    }

    .drd-scrollbar::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }
`

interface Option {
	value: string
}

interface SearchFilterDropdownAutoCompleteProps {
	data?: Option[]
	lazyLoadThreshold?: number
	placeholder?: string
	width?: string // number of digits expected to be in the answer
	max?: number
	bgFade?: boolean
	type?: any
}

const SearchFilterDropdownAutoComplete: React.FC<SearchFilterDropdownAutoCompleteProps> = ({
	data = defaultData,
	lazyLoadThreshold = 0, // Default threshold is 3 characters
	placeholder = "Type to search",
	width = "9rem",
	max = 55,
	bgFade = false,
	type = "string",
}) => {
	const [value, setValue] = useState<string>("")
	const [prevVal, setPreVal] = useState<string>("")
	const [highlighted, setHighlighted] = useState<string>("")
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1)
	const [isComponentFocused, setIsComponentFocused] = useState<boolean>(false)

	const inputRef = useRef<HTMLInputElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		setSelectedOptionIndex(-1)
	}

	const onSearch = (searchTerm: string) => {
		setValue(searchTerm)
	}

	const onClear = () => {
		setValue("")
		setHighlighted("")
		setSelectedOptionIndex(-1)
	}

	const matchingOptions =
		value.length >= lazyLoadThreshold
			? data.filter((item) => {
					const searchTerm = value.toLowerCase().trim()
					const fullValue = item.value.toLowerCase().trim()

					return (fullValue.startsWith(searchTerm) && searchTerm !== "") || (fullValue && searchTerm === "")
			  })
			: []

	// Scroll to the highlighted option
	const handleScroll = (optionIndex = 22) => {
		if (dropdownRef.current) {
			dropdownRef.current.scrollTop = optionIndex * parseFloat(fontSize.slice(2))
		}
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isComponentFocused) return
			if (e.key === "ArrowUp") {
				e.preventDefault()
				setSelectedOptionIndex((prevIndex) => Math.max(prevIndex - 1, -1))
				// Scroll to the highlighted option
				handleScroll(selectedOptionIndex - 1) // Scroll to the previous option
			} else if (e.key === "ArrowDown") {
				e.preventDefault()
				if (selectedOptionIndex === -1 && inputRef.current) {
					setSelectedOptionIndex(0)
				} else {
					setSelectedOptionIndex((prevIndex) => Math.min(prevIndex + 1, matchingOptions.length - 1))
				}
				// Scroll to the highlighted option
				handleScroll(selectedOptionIndex + 1) // Scroll to the next option
			} else if (e.key === "Enter" && selectedOptionIndex !== -1) {
				const selectedValue = matchingOptions[selectedOptionIndex].value
				onSearch(selectedValue)
				setValue(selectedValue)
				console.log(selectedValue)
				setHighlighted(selectedValue) // Highlight the selected value
				setSelectedOptionIndex(-1)
			}
		}

		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [selectedOptionIndex, matchingOptions])

	useEffect(() => {
		// console.log("Selected item:", selectedOptionIndex !== -1 ? matchingOptions[selectedOptionIndex].value : "None")
		if (selectedOptionIndex !== -1) {
			setHighlighted(matchingOptions[selectedOptionIndex].value)
		}
	}, [selectedOptionIndex, matchingOptions])

	useEffect(() => {
		// Scroll to the highlighted option when it changes
		if (dropdownRef.current && highlighted) {
			const highlightedElement = dropdownRef.current.querySelector(`[aria-label="${highlighted}"]`)
			if (highlightedElement) {
				highlightedElement.scrollIntoView({ block: "nearest" })
			}
		}
	}, [highlighted])

	const noMatchingOptions = value !== "" && !matchingOptions.some((item: any) => item.value === value) && matchingOptions.length === 0

	return (
		<>
			<div
				className={`relative flex group right-[0px] mr-20`}
				onFocus={() => setIsComponentFocused(true)}
				onBlur={() => {
					setIsComponentFocused(false)
					// setSelectedOptionIndex(0)
				}}>
				<div
					className={` bgFade ${
						bgFade && "group-focus-within:opacity-100"
					} duration-700 pointer-events-none ease-in-out transition-opacity opacity-0 fixed top-0 left-0 right-0 bottom-0 w-screen h-screen  z-49 bg-blur`}></div>
				<div className={`group-focus-within:z-[41] search-inner flex w-[${width}]`}>
					<input
						type="text"
						onChange={onChange}
						value={value}
						ref={inputRef}
						placeholder={placeholder}
						style={{ width: width }}
						maxLength={max}
						className="py-1 pl-3 pr-2 rounded-r-none capitalize rounded-l-md focus:border-0 group-focus:visible focus:placeholder:opacity-0 focus:border-transparent focus-visible:border-transparent "
						aria-label="Search input"
					/>
					{/* Make the button not change color on hover and text color grey when the input does not contain any value */}
					{value === "" && (
						<button
							className={`${
								value === "" ? "opacity-100" : "opacity-0"
							} px-3  py-0  h-8 mt-2 text-zinc-700 text-lg   cursor-pointer hover:bg-[#CDCDD1] rounded-r-md -right-[72px] bg-zinc-300`}
							onClick={() => onSearch(value)}
							disabled={value !== ""}>
							Search
						</button>
					)}
					{value !== "" && (
						<button
							className={`${
								value === "" ? "opacity-0" : "opacity-100"
							} px-[20px] py-0  h-8 mt-2 text-zinc-700 text-lg  active:bg-zinc-600 cursor-pointer hover:bg-[#CDCDD1] rounded-r-md -right-[72px] bg-zinc-300`}
							onClick={onClear}
							disabled={value === ""}>
							Clear
						</button>
					)}
				</div>
				<div
					style={{ width: width }}
					className={`absolute group-focus-within:h-fit drd-scrollbar min-w-fit  h-0 group-focus-within:z-40  mt-7 dropdown max-h-[250px] overflow-y-scroll  bg-gray duration-300 transition-all ease-in-out group-focus-within:opacity-100 opacity-0
				 ${
						value === ""
							? "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 "
							: "group-focus-within:pointer-events-auto group-focus-within:first-line:mt-2"
					} ${
						!noMatchingOptions
							? "group-focus-within:shadow-md"
							: `${noMatchingOptions && value.length >= lazyLoadThreshold && `bg-zinc-700 text-white   w-[${width}]`} `
					}
				} bg-zinc-50 odd:first:bg-zinc-50  rounded-b-md group-focus-within:z-39  w-[${width}]`}
					role="listbox"
					ref={dropdownRef}
					aria-label="Options"
					tabIndex={-1}>
					{noMatchingOptions && value.length < 3 && parseFloat(width.trim().slice(0, 3)) > 8 && (
						<div className={`flex flex-wrap px-4 pb-3 text-center pt-7 dropdown-row w-[${width}]`} role="option">
							{<span className="mx-auto text-lg">{lazyLoadThreshold} char Minimum</span>}
						</div>
					)}
					{noMatchingOptions && value.length >= 3 && parseFloat(width.trim().slice(0, 3)) > 8 ? (
						<div
							className={`flex flex-wrap px-4 pb-3 text-center pt-7 dropdown-row w-[${width}] overflow-hidden`}
							role="option">
							{<span className="mx-auto text-lg font-bold">"{value}" </span>} does not have any matching options.
						</div>
					) : (
						matchingOptions.map((item, index) => (
							<div
								className={`px-2 capitalize py-0.5 dropdown-row  cursor-pointer hover:bg-teal-400 first:mt-6 bg-zinc-50 z-0 w-[${width}] last:rounded-b-md ${
									index % 2 === 0 ? "odd:bg-zinc-100 " : "even:bg-white "
								} ${item.value === prevVal && " cursor-default bg-teal-200  odd:bg-teal-200 even:bg-teal-200"}${
									item.value === (value || highlighted) && " cursor-default bg-teal-400 odd:bg-teal-400 even:bg-teal-400"
								}`}
								onClick={(e) => {
									onSearch(item.value)
									setPreVal(item.value)
									// Clear input value
									e.currentTarget.blur() // Remove focus from the element
								}}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										onSearch(item.value)
										setPreVal(item.value)
										// Clear input value
										e.currentTarget.blur() // Remove focus from the element
									}
								}}
								role="option"
								aria-selected={item.value === value}
								aria-label={item.value}
								tabIndex={0}
								key={index}>
								{item.value}
							</div>
						))
					)}
				</div>
			</div>
		</>
	)
}

export default SearchFilterDropdownAutoComplete
