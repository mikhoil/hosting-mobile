import { cn } from '@/shared/lib/utils'
import { Text } from 'react-native'

export function SubHeading({
	children,
	className,
	level = 3,
}: {
	children: React.ReactNode
	className?: string
	level?: 2 | 3 | 4 | 5
}) {
	return (
		<Text
			className={cn(
				'font-normal text-[#09090b] text-opacity-60 mb-3',
				{
					'text-xl': level === 2,
					'text-lg': level === 3,
					'text-md': level === 4,
					'text-sm': level === 5,
				},
				className
			)}
		>
			{children}
		</Text>
	)
}
