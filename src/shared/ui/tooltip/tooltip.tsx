import * as TooltipPrimitive from '@tamagui/tooltip'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const TooltipProvider = TooltipPrimitive.TooltipSimple /* ? */

const Tooltip = TooltipPrimitive.Tooltip

const TooltipTrigger = Tooltip.Trigger

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof Tooltip.Content>,
	React.ComponentPropsWithoutRef<typeof Tooltip.Content>
>(
	(
		{
			className,
			// sideOffset = 4 /* sideOffset ? */,
			...props
		},
		ref
	) => (
		<Tooltip.Content
			ref={ref}
			// sideOffset={sideOffset}
			className={cn(
				'z-50 overflow-hidden rounded-layout border-2 border-border bg-popover px-3 py-1.5 text-md text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className
			)}
			{...props}
		/>
	)
)
TooltipContent.displayName = Tooltip.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
