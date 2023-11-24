import { setServerHash } from '@/shared/store'
import { IServer } from '@/shared/types'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

function ItemWrapper({ server, children }: { server: IServer; children: React.ReactNode }) {
	return (
		<View
			style={styles.itemWrapper}
			className="transition-colors"
			onTouchStart={() => {
				setServerHash(server.gameServerHash)
				router.push(`/(tabs)/servers/${server.gameServerHash}`)
			}}
		>
			{children}
		</View>
	)
}

function ItemContent({ server }: { server: IServer }) {
	return (
		<>
			<View>
				<Text style={styles.serverName}>{server.gameServerName}</Text>
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<View>
					<Text style={styles.serverIp}>{server.serverIp}</Text>
				</View>
				<View>
					<Text style={{ ...styles.serverStatus, color: server.isOnline ? '#16a34a' : '#ef4444' }}>
						{server.isOnline ? 'Онлайн' : 'Офлайн'}
					</Text>
				</View>
			</View>
		</>
	)
}

export function ListItem(props: { server: IServer }) {
	return (
		<ItemWrapper {...props}>
			<ItemContent server={props.server} />
		</ItemWrapper>
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
