// for use with Next.js
// import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const NextImageAspectRatio = ({width}:any) => {
  return (
		<div className={` w-[${width}]`}>
			<AspectRatio ratio={16 / 9}>
				{/* <Image src="..." alt="Image" className="object-cover rounded-md" /> */}
			</AspectRatio>
		</div>
  )
}

export default NextImageAspectRatio