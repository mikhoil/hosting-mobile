import { Link } from 'expo-router'

import { Text, View } from 'react-native'

export function ServerEmpty() {
	return (
		<View style={{ paddingHorizontal: 10 }}>
			<Text style={{ fontSize: 18, color: '#cccccc' }}>У вас пока нет активных серверов.</Text>
			<Text style={{ fontSize: 18, color: '#cccccc' }}>
				Cоздайте свой собственный сервер прямо сейчас, перейдя на страницу
			</Text>
			<Link href={'/createServer'} style={{ fontSize: 18, paddingBottom: 2, color: '#16a34a' }}>
				создания сервера
			</Link>
		</View>
	)
}
