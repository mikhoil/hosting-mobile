// import { useId } from 'react'

// import { cn } from '@/shared/lib/utils'
// import { View, ViewProps } from 'react-native'

// type SkeletonListProps = {
// 	count: number
// 	height: number
// }

// function Skeleton({ className, ...props }: ViewProps) {
// 	return <View className={cn('animate-pulse rounded-layout bg-card', className)} {...props} />
// }

// function SkeletonList({ className, count, height, ...props }: ViewProps & SkeletonListProps) {
// 	const arr = new Array(count).fill(1)
// 	const id = useId()

// 	return (
// 		<>
// 			{arr.map((_, idx) => (
// 				<Skeleton
// 					key={`${id}-skeleton-list-item-${idx}`}
// 					className={cn(className, `h-[${height}px]`)}
// 					// style={{ height: `${height}px` }}
// 					{...props}
// 				/>
// 			))}
// 		</>
// 	)
// }

// export { Skeleton, SkeletonList }
