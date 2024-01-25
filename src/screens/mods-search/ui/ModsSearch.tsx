import { SearchMods } from '@/features/searchMods'

import { ModCard } from '@/entities/mod/ui/card'
import { CForgeModClassType, russianModClasses } from '@/shared/config/curse-forge'
import { useCategories } from '@/shared/queries/mod'
import { ServerHeader } from '@/widgets/serverHeader'
import { useLocalSearchParams } from 'expo-router'
import { FlatList, Text, View } from 'react-native'
import { useSearchMods } from '../queries'
import { ModsSearchNotFound } from './NotFound'

export function ModsSearch() {
	const { data: mods, isLoading } = useSearchMods()
	const params = useLocalSearchParams<{ categoryId: string; classId: string }>()
	const { data: categories } = useCategories()

	return (
		<View
			style={{
				display: 'flex',
				rowGap: 10,
				paddingBottom: 270,
				padding: 10,
			}}
		>
			<ServerHeader />
			<SearchMods hideList />
			<View style={{ paddingHorizontal: 5 }}>
				{isLoading && <></>}
				{!isLoading && (
					<FlatList
						ListEmptyComponent={<ModsSearchNotFound />}
						ListHeaderComponent={
							<Text style={{ color: '#fff', fontSize: 18 }}>
								{params.classId
									? russianModClasses.get(CForgeModClassType[+params.classId])
									: 'Результаты поиска'}{' '}
								{params.categoryId
									? `(${categories?.find((c) => c.id === +params.categoryId)?.name})`
									: ''}
							</Text>
						}
						ListHeaderComponentStyle={{}}
						numColumns={2}
						columnWrapperStyle={{ display: 'flex', columnGap: 20 }}
						contentContainerStyle={{
							display: 'flex',
							rowGap: 20,
							paddingBottom: 20,
						}}
						data={mods}
						renderItem={({ item: mod }) => <ModCard key={mod.id} mod={mod} />}
					/>
				)}
			</View>
		</View>
	)
}
