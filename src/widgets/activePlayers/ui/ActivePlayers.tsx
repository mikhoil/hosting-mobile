import { useServerMainInfo } from '@/entities/server/model'
import { BanPlayer } from '@/features/banPlayer'
import { KickPlayer } from '@/features/kickPlayer'
import { useFetchServer } from '@/shared/queries/server'
import { ServerUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { Image } from 'expo-image'
import { Href, Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export function ActivePlayers() {
	const serverHash = useStore($serverHash)
	const { data: server } = useFetchServer(serverHash)
	const { onlinePlayers, isLoading, mainInfo } = useServerMainInfo()

	const maxListLength = 3

	if (isLoading || !mainInfo || !server?.isOnline) return null

	return (
		<View className="bg-[#171C17] rounded-[10px] p-[6px] pt-[2px] flex">
			<View
				style={{
					borderBottomWidth: 1,
					borderBottomColor: '#525258',
					padding: 4,
					marginBottom: 8,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 16 }}>Активные игроки</Text>
				<Link
					style={{ color: '#ffffff' }}
					href={ServerUrls.server.players(serverHash!) as Href<string>}
				>
					управлять
				</Link>
			</View>
			<FlatList
				data={onlinePlayers?.slice(0, maxListLength)}
				contentContainerStyle={{ rowGap: 8 }}
				ListEmptyComponent={
					<View>
						<Text className="text-[#ffffff]">Здесь пока нет игроков</Text>
					</View>
				}
				renderItem={({ item: player }) => (
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
							<Image
								source={require('/src/app-flat/assets/images/head1.webp')}
								style={{ width: 32, height: 32 }}
							/>
							<Text className="text-[#ffffff]">{player}</Text>
						</View>
						<View className="flex flex-row gap-x-2">
							<KickPlayer playerNickname={player} />
							<BanPlayer playerNickname={player} />
						</View>
					</View>
				)}
			/>
		</View>
	)
}
