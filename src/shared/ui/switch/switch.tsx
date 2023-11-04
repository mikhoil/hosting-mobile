import { cn } from '@/shared/lib/utils'
import * as SwitchPrimitives from '@tamagui/switch'
import * as React from 'react'

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Switch>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Switch>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Switch
		className={cn(
			'flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(142.1,76.2%,36.3%)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#16a34a] data-[state=unchecked]:bg-[#e4e4e7]',
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Switch.Thumb
			className={
				'pointer-events-none block h-5 w-5 rounded-full bg-[#16a249] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
			}
		/>
	</SwitchPrimitives.Switch>
))
Switch.displayName = SwitchPrimitives.Switch.displayName

export { Switch }
