import { IPlayerListItem } from '@/shared/api/common'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Image } from 'expo-image'
import { Trash2 } from 'lucide-react-native'
import { FlatList, Text, View } from 'react-native'

export function PlayersList({
	players,
	isLoading,
	title,
	addDataPlaceholder,
}: {
	players?: IPlayerListItem[]
	isLoading: boolean
	title: string
	addDataPlaceholder: string
}) {
	if (isLoading) return null
	return (
		<>
			<View style={{ display: 'flex', rowGap: 10 }}>
				<Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '500' }}>{title}</Text>
				<FlatList
					contentContainerStyle={{ display: 'flex', rowGap: 10 }}
					data={players}
					renderItem={({ item: player }) => (
						<View
							key={player.id}
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								backgroundColor: '#171C17',
								paddingLeft: 10,
								paddingVertical: 4,
								borderRadius: 6,
							}}
						>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									columnGap: 10,
								}}
							>
								<Image
									source={require('/src/app-flat/assets/images/head1.webp')}
									alt={`Аватар ${player.value}`}
									style={{ width: 32, height: 32 }}
								/>
								<Text style={{ color: '#ffffff' }}>{player.value}</Text>
							</View>
							<Button variant="ghost" size="icon">
								<Trash2 size={28} color={'#7F1D1D'} />
							</Button>
						</View>
					)}
					ListEmptyComponent={
						<Text style={{ color: '#cccccc' }}>
							В данной категории пока нет добавленных игроков
						</Text>
					}
				/>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: '#171C17',
						borderRadius: 6,
						paddingHorizontal: 10,
						paddingVertical: 5,
						alignItems: 'center',
					}}
				>
					<Input placeholderTextColor={'#807D7D'} placeholder={addDataPlaceholder} />
					<Button variant="primary" size="sm">
						<Text>Добавить</Text>
					</Button>
				</View>
			</View>
		</>
	)
}
