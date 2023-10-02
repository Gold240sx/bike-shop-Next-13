"use client"
import { useForm } from "react-hook-form"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { FlowbiteInlineInput, FlowbiteInput } from "../../components/FB-components/FlowbiteComponents"

export const defaultValues = {
    name: "Pedro Duarte",
    userName: "@peduarte",
}

const ReChartsBarChartDemo = () => {
	const { handleSubmit, register } = useForm({ defaultValues })

	const onSubmit = (data: any) => {
		toast({
			// className: "w-fit",
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 pr-4 overflow-scroll rounded-md bg-slate-950 p-4 text-left">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Sheet to the Right &gt;&gt; </Button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px]">
				<form onSubmit={handleSubmit(onSubmit)}>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<FlowbiteInlineInput defaultValue="" name="name" placeholder="name" type="text" register={register} />
						<FlowbiteInlineInput defaultValue="" name="userName" placeholder="Username" type="text" register={register} />
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type="submit" onClick={(data: any) => handleSubmit(data)}>
								Save changes
							</Button>
						</SheetClose>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	)
}

export default ReChartsBarChartDemo
