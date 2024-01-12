import { useCategories } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { Href, Link, useLocalSearchParams } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export function ModCategoryFilter() {
	const searchParams = useLocalSearchParams()
	const serverHash = useStore($serverHash)

	const { data: categories } = useCategories()

	if (!searchParams.classId) return null

	return (
		<View>
			<Text style={{ color: '#ffffff' }}>Категория</Text>
			<FlatList
				data={categories}
				renderItem={({ item: { id: categoryId, classId, name } }) => (
					<Link
						style={{ color: '#ffffff' }}
						key={categoryId}
						href={
							ModUrls.search(serverHash!, { ...searchParams, categoryId, classId }) as Href<string>
						}
					>
						{name}
					</Link>
				)}
			/>
		</View>
	)
}
