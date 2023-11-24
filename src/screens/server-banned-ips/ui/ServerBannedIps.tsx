import { useStore } from 'effector-react'

import { IpsList } from '@/entities/player/ui'

import { $serverHash } from '@/shared/store'

import { ServerHeader } from '@/widgets/serverHeader'
import { View } from 'react-native'
import { useBannedIps } from '../queries'

export function ServerBannedIps() {
	const serverHash = useStore($serverHash)

	const { bannedIps, isLoading } = useBannedIps(serverHash!)

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 13 }}>
			<ServerHeader />
			<IpsList
				title="Заблокированные IP-адреса"
				isLoading={isLoading}
				ips={bannedIps}
				addDataPlaceholder={'Введите IP или никнейм игрока'}
			/>
		</View>
	)
}
