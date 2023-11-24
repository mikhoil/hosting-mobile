import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui'

import { $serverHash } from '@/shared/store'

import { ServerHeader } from '@/widgets/serverHeader'
import { View } from 'react-native'
import { useBannedPlayers } from '../queries'

export function ServerBannedPlayers() {
	const serverHash = useStore($serverHash)

	const { bannedPlayers, isLoading } = useBannedPlayers(serverHash!)

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 13 }}>
			<ServerHeader />
			<PlayersList
				title="Заблокированные игроки"
				isLoading={isLoading}
				players={bannedPlayers}
				addDataPlaceholder={'Введите никнейм игрока'}
			/>
		</View>
	)
}
