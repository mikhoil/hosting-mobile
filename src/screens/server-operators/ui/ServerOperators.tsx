import { useStore } from 'effector-react'

import { PlayersList } from '@/entities/player/ui/playersList'

import { $serverHash } from '@/shared/store'

import { ServerHeader } from '@/widgets/serverHeader'
import { View } from 'react-native'
import { useOperators } from '../queries'

export function ServerOperators() {
	const serverHash = useStore($serverHash)

	const { operators, isLoading } = useOperators(serverHash!)

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 13 }}>
			<ServerHeader />
			<PlayersList
				title="Операторы"
				isLoading={isLoading}
				players={operators?.content}
				addDataPlaceholder={'Введите никнейм игрока'}
			/>
		</View>
	)
}
