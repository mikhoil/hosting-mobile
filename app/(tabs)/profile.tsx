import { useAuth } from '@/entities/auth'
import { Button } from '@/shared/ui/button'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'

export default function ProfileScreen() {
	const { user, logout, authToken } = useAuth()
	return (
		<View>
			<Image source={{ uri: user?.avatarUrl }} />
			<Text>{user?.userName}</Text>
			<Button onPress={() => logout({ authToken: authToken! })}>
				<Text>Выйти</Text>
			</Button>
		</View>
	)
}
