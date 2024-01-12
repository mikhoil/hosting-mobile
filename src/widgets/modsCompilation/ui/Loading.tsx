import { Skeleton, SkeletonList } from '@/shared/ui/skeleton'
import { View } from 'react-native'
import { popularRequestPageSize } from '../config'

export function ModCardsCompilationLoading() {
	return (
		<View>
			<View>
				<Skeleton className="w-[220px] h-[36px]" />
				<Skeleton className="w-[150px] h-[36px]" />
			</View>
			<SkeletonList count={popularRequestPageSize} height={278} />
		</View>
	)
}
