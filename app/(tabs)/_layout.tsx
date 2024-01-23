import { useAuth } from '@/entities/auth'
import { TabBar } from '@/widgets/tabBar'
import { Image } from 'expo-image'
import { Redirect, Tabs } from 'expo-router'
import { Text } from 'react-native'

export default function TabLayout() {
	const { authToken, isTokenLoading } = useAuth()

	if (isTokenLoading) return <Text>Loading...</Text>
	if (!authToken) return <Redirect href={'/signIn'} />

	return (
		<Tabs
			backBehavior="history"
			sceneContainerStyle={{ backgroundColor: '#232923' }}
			tabBar={TabBar}
			initialRouteName="servers"
			screenOptions={({ route }) => ({
				unmountOnBlur: true,
				headerStyle: { backgroundColor: '#171C17' },
				headerLeftContainerStyle: { marginRight: -32, padding: 16 },
				headerTitleStyle: { color: '#ffffff' },
				headerTitleAlign: 'center',
				headerLeft: () => (
					<Image
						style={{ width: 32, height: 35 }}
						source={require('/src/app-flat/assets/images/logo-green.png')}
					/>
				),
				headerShown: !Object.hasOwn(route.params || {}, 'serverHash'),
			})}
		>
			<Tabs.Screen
				name="servers"
				options={{
					title: 'Мои сервера',
				}}
			/>
			<Tabs.Screen
				name="createServer"
				options={{
					title: 'Создать сервер',
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Профиль',
				}}
			/>
		</Tabs>
	)
}
