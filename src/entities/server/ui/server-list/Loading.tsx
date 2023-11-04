import { SkeletonList } from '@/shared/ui/skeleton'
import { View } from 'react-native'

export function ServersListLoading() {
	return (
		<View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<SkeletonList count={6} height={150} />
		</View>
	)
}
