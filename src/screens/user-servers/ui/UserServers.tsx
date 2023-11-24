import { ServerList } from '@/entities/server/ui/server-list/ServerList'
import { useFetchUserServers } from '@/shared/queries/server'
import { View } from 'react-native'

export function UserServers() {
	const { data: userServers, isLoading } = useFetchUserServers()
	return (
		<View>
			<ServerList
				isLoading={isLoading}
				servers={userServers}
			/>
		</View>
	)
}
