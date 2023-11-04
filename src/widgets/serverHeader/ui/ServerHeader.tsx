import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { Bookmark, Globe, MoreHorizontal } from '@tamagui/lucide-icons'
import { useStore } from 'effector-react'
import { Text, View } from 'react-native'

export function ServerHeader() {
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)
	return (
		<View
			style={{
				marginTop: 16,
				marginHorizontal: 12,
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
					<Text style={{ color: '#ffffff', fontSize: 14 }}>{server?.serverIp}</Text>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							paddingRight: 3,
							gap: 4,
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
						<Text style={{ color: '#ffffff' }}>4 / 8</Text>
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
					<Text style={{ color: '#ffffff' }}>Vanila 1.20</Text>
				</View>
				<Button variant={server?.isOnline ? 'destructive' : 'primary'} size="icon">
					<Text style={{ color: '#ffffff' }}>{server?.isOnline ? 'Остановить' : 'Запустить'}</Text>
				</Button>
			</View>
		</View>
	)
}
