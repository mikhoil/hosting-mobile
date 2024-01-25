import { SearchMods } from '@/features/searchMods'
import { useStore } from 'effector-react'
import { ChevronDown, ChevronRight } from 'lucide-react-native'

import { useGroupedCategories } from '@/shared/queries/mod'
import { $serverHash } from '@/shared/store'

import {
	ModpacksCompilation,
	ModsCompilation,
	PluginsCompilation,
	WorldsCompilation,
} from '@/widgets/modsCompilation'

import { ModsCart } from '@/features/modsCart'
import { CForgeModClassType, russianModClasses } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { Button } from '@/shared/ui/button'
import { Popover } from '@/shared/ui/popover'
import { ServerHeader } from '@/widgets/serverHeader'
import { Href, Link } from 'expo-router'
import { FlatList, ScrollView, Text, View } from 'react-native'

export function ServerMods() {
	const serverHash = useStore($serverHash)

	const { data: groupedCategories } = useGroupedCategories()

	return (
		<View style={{ display: 'flex', rowGap: 10, paddingBottom: 180, padding: 10, width: '100%' }}>
			<ServerHeader />
			{/* <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center' }}>Подборки модов</Text> */}
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<ModsCart />
				<Popover
					enableShadow
					edgeMargins={20}
					borderRadius={10}
					color="#4D4D4D"
					customContent={
						<FlatList
							horizontal
							data={groupedCategories}
							contentContainerStyle={{
								display: 'flex',
								flexDirection: 'row',
								columnGap: 10,
								padding: 15,
							}}
							renderItem={({ item: { categories, classId } }) => (
								<FlatList
									ListHeaderComponent={
										<Link
											href={
												ModUrls.search(serverHash!, {
													classId,
												}) as Href<string>
											}
										>
											<View
												style={{
													display: 'flex',
													flexDirection: 'row',
													alignItems: 'center',
													columnGap: 5,
												}}
											>
												<Text style={{ color: '#ffffff', fontSize: 16 }}>
													{russianModClasses.get(CForgeModClassType[classId])}
												</Text>
												<ChevronRight size={16} color="#ffffff" />
											</View>
										</Link>
									}
									data={categories}
									renderItem={({ item: category }) => (
										<Link
											style={{ color: '#ffffff' }}
											href={
												ModUrls.search(serverHash!, {
													classId: category.classId,
													categoryId: category.id,
												}) as Href<string>
											}
										>
											{category.name}
										</Link>
									)}
								/>
							)}
						/>
					}
				>
					<Button
						size="sm"
						variant="ghost"
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							borderRadius: 10,
							borderColor: '#cccccc',
							borderWidth: 0.3,
							columnGap: 5,
						}}
					>
						<Text style={{ color: '#ffffff' }}>Категории</Text>
						<ChevronDown color="#ffffff" size={16} />
					</Button>
				</Popover>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'nowrap',
					gap: 10,
					width: '100%',
				}}
			>
				<SearchMods />
			</View>
			<ScrollView style={{ display: 'flex', rowGap: 15 }}>
				<ModsCompilation />
				<ModpacksCompilation />
				<PluginsCompilation />
				<WorldsCompilation />
			</ScrollView>
		</View>
	)
}
