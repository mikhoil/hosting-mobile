// import { Check } from 'lucide-react-native'
import React from 'react'
import { Checkbox } from 'react-native-ui-lib'

// import { cn } from '@/shared/lib/utils'

// const Checkbox = React.forwardRef<
// 	React.ElementRef<typeof CheckboxPrimitive.Checkbox>,
// 	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Checkbox>
// >(({ className, ...props }, ref) => (
// 	<CheckboxPrimitive.Checkbox
// 		ref={ref}
// 		className={cn('h-4 w-4 shrink-0 border-[#16a34a] ring-offset-[#ffffff]', className)}
// 		{...props}
// 	>
// 		<CheckboxPrimitive.Checkbox.Indicator className={'items-center justify-center text-current'}>
// 			<Check className="h-4 w-4" />
// 		</CheckboxPrimitive.Checkbox.Indicator>
// 	</CheckboxPrimitive.Checkbox>
// ))
// Checkbox.displayName = CheckboxPrimitive.Checkbox.displayName

const CheckBox = React.forwardRef<
	React.ElementRef<typeof Checkbox>,
	React.ComponentPropsWithoutRef<typeof Checkbox>
>(({ className, ...props }, ref) => <Checkbox selectedIcon={2} {...props} ref={ref} />)

export { CheckBox }
