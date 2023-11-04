import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

const buttonVariants = tv({
	base: 'items-center justify-center text-md font-medium ring-offset-[#ffffff]',
	variants: {
		variant: {
			default: 'bg-[#f4f4f5] text-[#18181b]',
			primary: 'bg-[#16a34a] text-[#fff1f2]',
			destructive: 'bg-[#ef4444] text-[#fafafa]',
			outline: 'border-[#e4e4e7] bg-transparent',
			secondary: 'bg-[#f4f4f5] text-[#18181b]',
			ghost: 'bg-transparent',
			link: 'text-[#16a34a] underline-offset-4',
		},
		size: {
			default: 'h-10 px-2 py-2',
			sm: 'h-8 px-2',
			lg: 'h-12 px-4',
			icon: 'h-auto w-auto px-2 py-1',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

type ButtonProps = TouchableOpacityProps & VariantProps<typeof buttonVariants>

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<TouchableOpacity
				className={buttonVariants({ variant, size, className })}
				ref={ref}
				style={{ borderRadius: 10 }}
				{...props}
			/>
		)
	}
)

Button.displayName = 'Button'

export { Button, buttonVariants }
