import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { useStore } from 'effector-react'
import { useRouter } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useNavigation } from 'expo-router/src/useNavigation'
import { ChevronLeft } from 'lucide-react-native'
import { useEffect } from 'react'

export default function ServerLayout() {
	const router = useRouter()
	const navigation = useNavigation()
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)

	useEffect(() => {
		navigation.addListener('beforeRemove', (e) => {
			e.preventDefault()
			router.push('/(tabs)/servers/')
		})
		return () =>
			navigation.removeListener('beforeRemove', (e) => {
				e.preventDefault()
				router.push('/(tabs)/servers/')
			})
	}, [navigation])

	return (
		<Drawer
			screenOptions={{
				unmountOnBlur: true,
				drawerContentStyle: { backgroundColor: '#171C17' },
				drawerContentContainerStyle: { backgroundColor: '#171C17' },
				drawerPosition: 'right',
				drawerLabelStyle: { color: '#ffffff' },
				headerTitleAlign: 'center',
				headerTitleStyle: { color: '#ffffff' },
				headerLeft: () => (
					<Button variant="ghost" onPress={() => router.back()}>
						<ChevronLeft color={'#ffffff'} />
					</Button>
				),
				headerRight: () => <DrawerToggleButton tintColor="#ffffff" />,
				headerStyle: { backgroundColor: '#171C17' },
				title: server?.gameServerName,
				sceneContainerStyle: {
					backgroundColor: '#232923',
				},
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					drawerLabel: 'Основная информация',
				}}
			/>
			<Drawer.Screen
				name="players"
				options={{
					drawerLabel: 'Игроки',
				}}
			/>
			<Drawer.Screen
				name="settings"
				options={{
					drawerLabel: 'Настройки',
				}}
			/>
			<Drawer.Screen
				name="mods"
				options={{
					drawerLabel: 'Моды',
				}}
			/>
			<Drawer.Screen
				name="files"
				options={{
					drawerLabel: 'Файлы',
				}}
			/>
			<Drawer.Screen
				name="backups"
				options={{
					drawerLabel: 'Бэкапы',
				}}
			/>
			<Drawer.Screen
				name="console"
				options={{
					drawerLabel: 'Консоль',
				}}
			/>
		</Drawer>
	)
}
