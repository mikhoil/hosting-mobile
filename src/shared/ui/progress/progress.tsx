import * as ProgressPrimitive from '@tamagui/progress'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

type Props = {
	indicatorColor?: string
}

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Progress>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Progress> & Props
>(({ className, indicatorColor = '#16a34a', ...props }, ref) => (
	<ProgressPrimitive.Progress
		ref={ref}
		className={cn('relative h-4 w-full overflow-hidden rounded-full bg-[#f4f4f5]', className)}
		style={{ border: `1px solid ${indicatorColor}` }}
		{...props}
		max={100}
	>
		<ProgressPrimitive.Progress.Indicator
			className="h-full w-full flex-1 transition-all duration-500"
			style={{
				backgroundColor: indicatorColor,
			}}
		/>
	</ProgressPrimitive.Progress>
))
Progress.displayName = ProgressPrimitive.Progress.displayName

export { Progress }
