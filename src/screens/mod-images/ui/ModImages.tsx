import { useFetchMod } from '@/screens/mod-description/queries'
import { Image } from 'expo-image'
import { FlatList, Text, View } from 'react-native'

export function ModImages({ modId }: { modId: number }) {
	const { data: mod } = useFetchMod(modId)

	return (
		<FlatList
			data={mod?.screenshots}
			ListEmptyComponent={
				<Text style={{ color: '#ffffff', fontSize: 16 }}>Здесь пока ничего нет 🙁</Text>
			}
			contentContainerStyle={{ paddingTop: 60, display: 'flex', alignItems: 'center', rowGap: 20 }}
			renderItem={({ item: { url: uri, title, description } }) => (
				<View style={{ display: 'flex', alignItems: 'center' }}>
					<Image
						source={{ uri, headers: { Accept: 'image/*' } }}
						style={{ width: 250, height: 250 }}
					/>
					<Text style={{ color: '#ffffff', fontSize: 16 }}>{title}</Text>
					<Text style={{ color: '#ffffff' }}>{description}</Text>
				</View>
			)}
		/>
	)
}
