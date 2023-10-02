import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const AlertDemo = () => {
  return (
	<AlertDialog>
			<div className="group w-fit">
                <div className="flex font-bold text-red-500 group-hover:text-red-600 w-fit hover:text-lg">
                    <p className="hidden pr-2 group-hover:flex">!!!</p>

                    <AlertDialogTrigger className="">Delete Everything</AlertDialogTrigger>
                    <p className="hidden pl-2 group-hover:flex">!!!</p>
                </div>
                <hr className="hidden w-full -mt-1.5 border-red-500 group-hover:flex" />
            </div>
		<AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDemo