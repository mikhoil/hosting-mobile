import { Text, TextProps } from 'react-native'
import { tv, type VariantProps } from 'tailwind-variants'

const badgeVariants = tv({
	base: 'min-w-[16px] px-0.5 h-4 justify-center items-center text-xs',
	variants: {
		variant: {
			default: 'bg-[#16a34a] text-[#fff1f2]',
			secondary: 'bg-[#f4f4f5] text-[#18181b]',
			destructive: 'bg-[#ef4444] text-[#fafafa]',
			outline: 'text-[#09090b]',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export interface BadgeProps extends TextProps, VariantProps<typeof badgeVariants> {
	content: React.ReactNode
}

function Badge({ className, variant, content, children, ...props }: BadgeProps) {
	return (
		<>
			{children}
			<Text className={badgeVariants({ variant, className })} {...props}>
				{content}
			</Text>
		</>
	)
}

export { Badge, badgeVariants }
