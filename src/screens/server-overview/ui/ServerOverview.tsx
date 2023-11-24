import { ActivePlayers } from '@/widgets/activePlayers'
import { CurrentUsage } from '@/widgets/currentUsage'
import { ServerHeader } from '@/widgets/serverHeader'
import { View } from 'react-native'

export function ServerOverview() {
	return (
		<View className="p-3 flex" style={{ rowGap: 12 }}>
			<ServerHeader />
			<ActivePlayers />
			<CurrentUsage />
		</View>
	)
}
