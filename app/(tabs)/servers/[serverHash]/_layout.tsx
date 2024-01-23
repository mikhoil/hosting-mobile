import { useFetchServer } from '@/shared/queries/server'
import { ModUrls, ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { useStore } from 'effector-react'
import { Href, useRouter, useSegments } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { ChevronLeft } from 'lucide-react-native'

export default function ServerLayout() {
	const router = useRouter()
	const segments = useSegments()
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)

	return (
		<Drawer
			backBehavior="history"
			screenOptions={{
				unmountOnBlur: true,
				drawerContentStyle: { backgroundColor: '#171C17' },
				drawerContentContainerStyle: { backgroundColor: '#171C17' },
				drawerPosition: 'right',
				drawerLabelStyle: { color: '#ffffff' },
				headerTitleAlign: 'center',
				headerTitleStyle: { color: '#ffffff' },
				headerLeft: () => (
					<Button
						variant="ghost"
						onPress={() => {
							if (segments.length === 3) router.push('/(tabs)/servers/')
							else router.back()
						}}
						style={{ paddingLeft: 10 }}
					>
						<ChevronLeft color={'#ffffff'} />
					</Button>
				),
				headerRight: () => <DrawerToggleButton tintColor="#ffffff" />,
				headerStyle: { backgroundColor: '#171C17' },
				title: server?.gameServerName ?? '...',
				sceneContainerStyle: {
					backgroundColor: '#232923',
				},
				headerShown: !!serverHash,
			}}
		>
			<Drawer.Screen
				name="index"
				options={{
					drawerLabel: 'Основная информация',
				}}
				listeners={{
					drawerItemPress: () =>
						router.push(ServerUrls.server.overview(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="players"
				options={{
					drawerLabel: 'Игроки',
				}}
				listeners={{
					drawerItemPress: () =>
						router.push(ServerUrls.server.players(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="settings"
				options={{
					drawerLabel: 'Настройки',
				}}
				listeners={{
					drawerItemPress: () =>
						router.push(ServerUrls.server.settings(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="mods"
				options={{
					drawerLabel: 'Моды',
				}}
				listeners={{
					drawerItemPress: () => router.push(ModUrls.mods(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="files"
				options={{
					drawerLabel: 'Файлы',
				}}
				listeners={{
					drawerItemPress: () => router.push(ServerUrls.server.files(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="backups"
				options={{
					drawerLabel: 'Бэкапы',
				}}
				listeners={{
					drawerItemPress: () =>
						router.push(ServerUrls.server.backups(serverHash!) as Href<string>),
				}}
			/>
			<Drawer.Screen
				name="console"
				options={{
					drawerLabel: 'Консоль',
				}}
				listeners={{
					drawerItemPress: () =>
						router.push(ServerUrls.server.console(serverHash!) as Href<string>),
				}}
			/>
		</Drawer>
	)
}
