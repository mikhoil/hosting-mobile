import { TabBar } from '@/widgets/tabBar'
import { Image } from 'expo-image'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			sceneContainerStyle={{ backgroundColor: '#232923' }}
			tabBar={TabBar}
			initialRouteName="servers"
			screenOptions={({ route }) => ({
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
