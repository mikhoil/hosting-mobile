import { useServerMainInfo } from '@/entities/server/model'
import { StartServer } from '@/features/startServer'
import { StopServer } from '@/features/stopServer'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import * as Clipboard from 'expo-clipboard'
import { Bookmark, Gamepad2, Globe, MoreHorizontal } from 'lucide-react-native'
import { useCallback } from 'react'
import { Text, View } from 'react-native'

export function ServerHeader() {
	const serverHash = useStore($serverHash)
	const { data: server, isLoading } = useFetchServer(serverHash)
	const { mainInfo } = useServerMainInfo()

	const getServerFullAddress = useCallback(() => {
		const controllerPort = server?.serverPorts.find((port) => port.portKind === 'controller')

		const serverPort = server?.serverPorts.find((port) => port.port !== controllerPort?.port)

		return `${server?.serverIp}:${serverPort?.port}`
	}, [server])

	// const [isCopied, setIsCopied] = useState(false)

	console.log(serverHash)

	if (!server || isLoading) return null

	return (
		<>
			<View
				style={{
					backgroundColor: '#171C17',
					padding: 8,
					borderRadius: 6,
					display: 'flex',
					gap: 8,
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 4,
					}}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<Globe color={'#ffffff'} size={20} />
						<Text
							style={{ color: '#ffffff', fontSize: 14 }}
							onPress={(e) => {
								Clipboard.setStringAsync(getServerFullAddress())
								// setIsCopied(true)
							}}
						>
							{getServerFullAddress()}
						</Text>
					</View>
					<View
						style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 15 }}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								paddingRight: 3,
								gap: 30,
							}}
						>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									columnGap: 3,
								}}
							>
								<View
									style={{
										borderRadius: 100,
										backgroundColor: server?.isOnline ? '#2BE927' : '#7f1d1d',
										width: 12,
										height: 12,
									}}
								/>
								<Text style={{ color: server?.isOnline ? '#2BE927' : '#7f1d1d' }}>
									{server?.isOnline ? 'Онлайн' : 'Офлайн'}
								</Text>
							</View>
							<Text style={{ color: '#ffffff' }}>
								{server.isOnline && mainInfo
									? `${mainInfo?.playersCount} / ${mainInfo?.maxPlayers}`
									: ''}
							</Text>
						</View>
						<MoreHorizontal color={'#ffffff'} />
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<Bookmark color={'#ffffff'} size={20} />
						<Text style={{ color: '#ffffff' }}>
							{mainInfo?.software ?? 'Vanilla'} {mainInfo?.version}
						</Text>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 4,
						}}
					>
						<Gamepad2 color={'#ffffff'} size={20} />
						<Text style={{ color: '#ffffff', textTransform: 'capitalize' }}>
							{mainInfo?.game ?? 'Minecraft'}
						</Text>
					</View>

					{server?.isOnline ? <StopServer /> : <StartServer />}
				</View>
			</View>
		</>
	)
}
