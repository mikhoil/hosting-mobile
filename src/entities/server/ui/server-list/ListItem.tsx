import { setServerHash } from '@/shared/store'
import { IServer } from '@/shared/types'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export function ListItem({ server }: { server: IServer }) {
	return (
		<View
			style={styles.itemWrapper}
			// className="transition-colors"
			onTouchStart={() => {
				setServerHash(server.gameServerHash)
				router.push(`/(tabs)/servers/${server.gameServerHash}`)
			}}
		>
			<Text style={styles.serverName}>{server.gameServerName}</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Text style={styles.serverIp}>{server.serverIp}</Text>
				<Text style={{ ...styles.serverStatus, color: server.isOnline ? '#16a34a' : '#ef4444' }}>
					{server.isOnline ? 'Онлайн' : 'Офлайн'}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	itemWrapper: {
		backgroundColor: '#171C17',
		padding: 16,
		borderWidth: 2,
		borderColor: 'transparent',
		shadowColor: '#ffffff',
		borderRadius: 10,
	},
	serverName: {
		color: '#ffffff',
		fontSize: 24,
		lineHeight: 32,
	},
	serverIp: {
		color: '#ffffff',
		fontSize: 20,
		lineHeight: 28,
	},
	serverStatus: {
		fontSize: 24,
		lineHeight: 32,
	},
})
