// flowbite components
import { Button, TextInput, Label, Checkbox } from "flowbite-react"

export function FlowbiteCheckbox({ register, name, ...rest }:any) {
	return (
		<div className="flex items-center gap-2 pl-2">
			<Checkbox id={name} {...register(name)} name={name} defaultChecked={false} className="cursor-pointer" />
			<Label htmlFor={name} value={rest.placeholder} className="text-xl font-light capitalize cursor-pointer text-zinc-600">
				{rest.placeholder}
			</Label>
		</div>
	)
}

export function FlowbiteInput({ register, name, ...rest }:any) {
	return (
		<div className={`${rest.className}`}>
			<div className="block mb-2">
				<Label htmlFor={name} value={rest.placeholder} className="text-xl font-light capitalize text-zinc-600" />
			</div>
			<TextInput
				id={name}
				{...register(name)}
				{...rest}
				name={name}
				placeholder={rest.placeholder}
				className="text-lg placeholder:capitalize"
			/>
		</div>
	)
}

export function FlowbiteInlineInput({ register, name, ...rest }:any) {
	return (
		<div className={`grid grid-cols-2 items-center gap-4 ${rest.className}`}>
			<Label htmlFor={name} value={rest.placeholder} className="text-right text-base capitalize text-zinc-600" />
			<TextInput
				id={name}
				{...register(name)}
				{...rest}
				name={name}
				placeholder={rest.placeholder}
				className="text-lg placeholder:capitalize w-auto"
			/>
		</div>
	)
}

export function FlowbiteRadioGroup({  register, name, ...rest }:any) {
	const { options } = rest
	return (
		<div className="flex flex-col gap-2 py-4">
			{options.map((option:any, index:any) => (
				<div className="flex items-center px-2" key={index}>
					<input
						id={`${option}-radio-${index}`}
						value={option.value}
						type="radio"
						{...register(name)}
						name={name}
						className="w-4 h-4 text-[#07B6D4] bg-gray-100 border-gray-300 focus:ring-[#07B6D4] cursor-pointer dark:focus:ring-[#07B6D4] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						htmlFor={`${option}-radio-${index}`}
						className="pl-2 text-lg font-light tracking-wider text-gray-900 dark:text-gray-300 cursor-pointer capitalize">
						{option.label}
					</label>
				</div>
			))}
		</div>
	)
}

export function FlowbiteSubmitButton({ value, name, ...rest }:any) {
	return (
		<Button type="submit" gradientDuoTone="purpleToBlue" outline value={value} name={name} {...rest}>
			Submit
		</Button>
	)
}
