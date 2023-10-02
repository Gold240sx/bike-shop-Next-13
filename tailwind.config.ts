/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/components/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite-react/**/*.js"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				btn: {
					background: "hsl(var(--btn-background))",
					"background-hover": "hsl(var(--btn-background-hover))",
				},
			},
		},
	},
	plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
}
