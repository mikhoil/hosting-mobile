import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { useRouter } from 'expo-router'
import { ReactNode } from 'react'
import { Text, View } from 'react-native'

export function PlayersUnit({
	icon,
	title,
	description,
	route,
}: {
	icon: ReactNode
	title: string
	description: string
	route: 'whitelist' | 'operators' | 'banned-players' | 'banned-ips'
}) {
	const serverHash = useStore($serverHash)
	const router = useRouter()
	return (
		<View
			onTouchStart={() => router.push(`/(tabs)/servers/${serverHash}/players/${route}`)}
			style={{
				display: 'flex',
				flexDirection: 'row',
				paddingHorizontal: 10,
				paddingVertical: 12,
				backgroundColor: '#171C17',
				borderRadius: 6,
				columnGap: 8,
				alignItems: 'center',
			}}
		>
			{icon}
			<View style={{ display: 'flex', rowGap: 4 }}>
				<Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 16 }}>{title}</Text>
				<Text
					numberOfLines={3}
					style={{
						color: '#ffffff',
						fontWeight: 'normal',
						fontSize: 11,
						// #todo fix break out text
						width: 275,
					}}
				>
					{description}
				</Text>
			</View>
		</View>
	)
}
