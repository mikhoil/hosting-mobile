import * as CheckboxPrimitive from '@tamagui/checkbox'
import { Check } from '@tamagui/lucide-icons'
import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Checkbox>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Checkbox>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Checkbox
		ref={ref}
		className={cn('h-4 w-4 shrink-0 border-[#16a34a] ring-offset-[#ffffff]', className)}
		{...props}
	>
		<CheckboxPrimitive.Checkbox.Indicator className={'items-center justify-center text-current'}>
			<Check className="h-4 w-4" />
		</CheckboxPrimitive.Checkbox.Indicator>
	</CheckboxPrimitive.Checkbox>
))
Checkbox.displayName = CheckboxPrimitive.Checkbox.displayName

export { Checkbox }
