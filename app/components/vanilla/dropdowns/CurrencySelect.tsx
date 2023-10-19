import React from "react"

const currencies = [
	{
		name: "USD",
		symbol: "$",
	},
	{
		name: "EUR",
		symbol: "€",
	},
	{
		name: "JPY",
		symbol: "¥",
	},
	{
		name: "GBP",
		symbol: "£",
	},
	{
		name: "AUD",
		symbol: "A$",
	},
	{
		name: "CAD",
		symbol: "C$",
	},
	{
		name: "CHF",
		symbol: "CHF",
	},
	{
		name: "CNY",
		symbol: "¥",
	},
	{
		name: "NZD",
		symbol: "$",
	},
	{
		name: "MXN",
		symbol: "$",
	},
]

const CurrencySelect = () => {
	const CurrencyFormat = (currency: any) => {
		switch (currency.name) {
			case "USD":
				return "$"
			case "EUR":
				return "€"
			case "JPY":
				return "¥"
			case "GBP":
				return "£"
			case "AUD":
				return "A$"
			case "CAD":
				return "C$"
			case "CHF":
				return
			case "CNY":
				return "¥"
			case "NZD":
				return "$"
			case "MXN":
				return "$"
			default:
				return
		}
	}

	return (
		<div className="w-20 p-0 -ml-2 ">
			<label htmlFor="currency" className="sr-only">
				Currency
			</label>
			<div className="relative w-fit ">
				<div className="absolute inset-y-0 left-0 flex items-center">
					<select
						id="currency"
						name="currency"
						className="z-50 h-8 py-0 pl-4 pr-4 text-gray-500 bg-transparent border-transparent rounded-md hover:cursor-pointer sm:text-sm">
						{currencies.map((currency) => (
							<option key={currency.name}>
								{/* {CurrencyFormat(currency)} */}
								{currency.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	)
}

export default CurrencySelect
