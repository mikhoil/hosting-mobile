import { ReactQueryKeys } from '@/shared/lib/react-query'
import { IServer } from '@/shared/types'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ListItem } from './ListItem'
import { ServerEmpty } from './ServerEmpty'

export function ServerList({ servers, isLoading }: { servers?: IServer[]; isLoading?: boolean }) {
	const queryClient = useQueryClient()
	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.userServers] })
	}, [queryClient])
	if (isLoading) return null
	return (
		<FlatList
			refreshing={isLoading}
			onRefresh={() => queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.userServers] })}
			data={servers}
			extraData={servers}
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
