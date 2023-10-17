import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

import React from 'react'

const HoverCardDemo = () => {
  return (
		<HoverCard>
			<HoverCardTrigger className="underline cursor-default">Hover</HoverCardTrigger>
			<HoverCardContent >
				{/* <div 
                    className="z-50 rounded-md border text-left bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-80" 
                    // style={{`--radix-hover-card-content-transform-origin: var(--radix-popper-transform-origin); --radix-hover-card-content-available-width: var(--radix-popper-available-width); --radix-hover-card-content-available-height: var(--radix-popper-available-height); --radix-hover-card-trigger-width: var(--radix-popper-anchor-width); --radix-hover-card-trigger-height: var(--radix-popper-anchor-height);`}
                > */}
				<div className="flex justify-between w-full space-x-4 text-left">
					<span className="relative flex w-10 h-10 overflow-hidden rounded-full shrink-0">
						<img className="w-full h-full aspect-square" src="https://github.com/vercel.png" />
					</span>
					<div className="w-full space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="w-full text-sm">The React Framework – created and maintained by @vercel.</p>
						<div className="flex items-center pt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								className="w-4 h-4 mr-2 opacity-70">
								<rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
								<line x1="16" x2="16" y1="2" y2="6"></line>
								<line x1="8" x2="8" y1="2" y2="6"></line>
								<line x1="3" x2="21" y1="10" y2="10"></line>
								<path d="M8 14h.01"></path>
								<path d="M12 14h.01"></path>
								<path d="M16 14h.01"></path>
								<path d="M8 18h.01"></path>
								<path d="M12 18h.01"></path>
								<path d="M16 18h.01"></path>
							</svg>
							<span className="text-xs text-muted-foreground"> Joined December 2021</span>
						</div>
					</div>
				</div>
				{/* </div> */}
			</HoverCardContent>
		</HoverCard>
  )
}

export default HoverCardDemo