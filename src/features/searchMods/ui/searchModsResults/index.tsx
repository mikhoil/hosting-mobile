import { useStore } from 'effector-react'
import { Href, Link } from 'expo-router'

import { IMod } from '@/shared/api/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { FlatList, Text } from 'react-native'

export function SearchModsResults({
	mods,
	searchTerm,
	showList,
}: {
	mods: IMod[]
	searchTerm: string
	showList: boolean
}) {
	const serverHash = useStore($serverHash)

	return (
		<>
			{showList && (
				<FlatList
					ListEmptyComponent={<Text>По запросу {searchTerm} ничего не найдено</Text>}
					contentContainerStyle={{ padding: 5 }}
					data={mods}
					renderItem={({ item: mod }) => (
						<Link
							href={ModUrls.mod(serverHash!, mod.id) as Href<string>}
							key={mod.id}
							style={{ color: '#cccccc' }}
						>
							{mod.name}
						</Link>
					)}
				/>
			)}
		</>
	)
}
