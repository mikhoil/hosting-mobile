import { useGroupedCategories } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { Href, Link, useLocalSearchParams } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export function ModClassFilter() {
	const searchParams = useLocalSearchParams()
	const serverHash = useStore($serverHash)

	const { data: groupedCategories } = useGroupedCategories()

	return (
		<View>
			<Text style={{ color: '#ffffff' }}>Искать среди</Text>
			<View>
				<Link
					style={{ color: '#ffffff' }}
					href={
						ModUrls.search(serverHash!, {
							...searchParams,
							classId: undefined,
							categoryId: undefined,
						}) as Href<string>
					}
				>
					All
				</Link>
				<FlatList
					data={groupedCategories}
					scrollEnabled
					renderItem={({ item: { classId, className } }) => (
						<Link
							style={{ color: '#ffffff' }}
							key={classId}
							href={
								ModUrls.search(serverHash!, {
									...searchParams,
									classId,
									categoryId: undefined,
								}) as Href<string>
							}
						>
							{className}
						</Link>
					)}
				/>
			</View>
		</View>
	)
}
