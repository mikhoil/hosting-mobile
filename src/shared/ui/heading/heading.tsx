import { Text } from 'react-native'
import { cn } from '../../lib/utils'

export function Heading({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<Text className={cn('text-[#09090b] font-semibold text-lg mb-3', className)}>{children}</Text>
	)
}
