import { useAuth } from '@/entities/auth'
import { Button } from '@/shared/ui/button'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'

export default function ProfileScreen() {
	const { user, logout, authToken } = useAuth()
	console.log(authToken)

	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-evenly',
				paddingTop: 10,
			}}
		>
			<Image
				source={
					user?.avatarUrl === ''
						? require('src/app-flat/assets/images/head1.webp')
						: {
								uri: user?.avatarUrl,
								headers: { Accept: 'image/*' },
						  }
				}
				style={{ width: 40, height: 40 }}
			/>
			<Text style={{ color: '#ffffff', fontSize: 20 }}>{user?.userName}</Text>
			<Button variant="destructive" size="sm" onPress={() => logout({ authToken: authToken! })}>
				<Text style={{ color: '#ffffff', fontWeight: '700' }}>Выйти</Text>
			</Button>
		</View>
	)
}
