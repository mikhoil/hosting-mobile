import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { MainHeader } from '@/widgets/header/ui/Header'
import { TabBar } from '@/widgets/tabBar/ui/TabBar'
import { useStore } from 'effector-react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)
	return (
		<Tabs
			sceneContainerStyle={{ backgroundColor: '#232923' }}
			tabBar={TabBar}
			screenOptions={{
				header: MainHeader,
				title: server?.gameServerName,
			}}
		>
			<Tabs.Screen
				name="servers/index"
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
