import { PlayersList } from '@/entities/player/ui/playersList'
import { $serverHash } from '@/shared/store'
import { ServerHeader } from '@/widgets/serverHeader'
import { useStore } from 'effector-react'
import { View } from 'react-native'
import { useWhitelist } from '../queries'

export function ServerWhitelist() {
	const serverHash = useStore($serverHash)
	const { isLoading, whitelist } = useWhitelist(serverHash!)
	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 13 }}>
			<ServerHeader />
			<PlayersList
				addDataPlaceholder="Введите никнейм игрока"
				title="Белый список"
				isLoading={isLoading}
				players={whitelist}
			/>
		</View>
	)
}
