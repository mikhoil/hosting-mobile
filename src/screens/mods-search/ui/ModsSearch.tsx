import { SearchMods } from '@/features/searchMods'

import { useSearchMods } from '../queries'

import { ModCard } from '@/entities/mod/ui/card'
import { ModFilters } from '@/features/modFilters'
import { SkeletonList } from '@/shared/ui/skeleton'
import { ServerHeader } from '@/widgets/serverHeader'
import { FlatList, View } from 'react-native'
import { ModsSearchNotFound } from './NotFound'

export function ModsSearch() {
	const { data: mods, isLoading } = useSearchMods()

	return (
		<View style={{ display: 'flex', rowGap: 10, paddingBottom: 170, padding: 10 }}>
			<ServerHeader />
			<SearchMods hideList />
			<View>
				<ModFilters />
				<View>
					<View>
						{isLoading && <SkeletonList count={24} height={280} />}
						<FlatList
							ListEmptyComponent={<ModsSearchNotFound />}
							numColumns={2}
							columnWrapperStyle={{ display: 'flex', columnGap: 20 }}
							contentContainerStyle={{
								display: 'flex',
								alignItems: 'center',
								rowGap: 20,
								marginTop: 15,
								paddingBottom: 700,
							}}
							data={mods}
							renderItem={({ item: mod }) => <ModCard key={mod.id} mod={mod} />}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}
