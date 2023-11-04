import { Link } from 'expo-router'

import { Text, View } from 'react-native'

export function ServerEmpty() {
	return (
		<View className="text-xl">
			<View>
				<Text>У вас пока нет активных серверов.</Text>
			</View>
			<View>
				Cоздайте свой собственный сервер прямо сейчас, перейдя на страницу{' '}
				<Link href={'/createServer'} className="text-[#16a34a] pb-0.5">
					<Text>создания сервера</Text>
				</Link>
			</View>
		</View>
	)
}
