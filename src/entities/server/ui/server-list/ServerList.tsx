import { IServer } from '@/shared/types'
import { FlatList, StyleSheet } from 'react-native'
import { ListItem } from './ListItem'
import { ServerEmpty } from './ServerEmpty'

export function ServerList({ servers, isLoading }: { servers?: IServer[]; isLoading?: boolean }) {
	if (isLoading) return null
	return (
		<FlatList
			data={servers}
			contentContainerStyle={serverList.content}
			renderItem={({ item: server }) => <ListItem server={server} key={server.gameServerHash} />}
			keyExtractor={(item) => item.gameServerHash}
			ListEmptyComponent={<ServerEmpty />}
		/>
	)
}

const serverList = StyleSheet.create({
	content: {
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		padding: 10,
		alignItems: 'stretch',
	},
})
