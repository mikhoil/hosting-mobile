import { useStore } from 'effector-react'
import { Href, useLocalSearchParams, useRouter } from 'expo-router'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Text, View } from 'react-native'

export function ModsSearchNotFound() {
	const router = useRouter()
	const searchParams = useLocalSearchParams<{ searchFilter: string }>()
	const serverHash = useStore($serverHash)

	const searchFilter = searchParams.searchFilter

	const handleClearFilters = () => {
		router.replace(ModUrls.search(serverHash!, { ...searchModsBaseRequest }) as Href<string>)
	}

	return (
		<View>
			<Text>
				По запросу <Text>&quot;{searchFilter}&quot;</Text> не найдено результатов
			</Text>
			<Text>Проверьте написание или очистите фильтры</Text>
			{/* #TODO: перенести searchTerm в modsSearch в effector store, переписать хуки на новую реализацию, тогда очистка фильтров полноценно заработает.*/}
			{/* <Button variant="outline" onClick={handleClearFilters} className="text-lg border-2 py-2 px-4">
				Очистить фильтры
			</Button> */}
		</View>
	)
}
