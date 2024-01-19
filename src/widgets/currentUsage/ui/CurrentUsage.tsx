import { Progress } from '@/shared/ui/progress'
// import { Skeleton } from '@/shared/ui/skeleton'
import { FlatList, Text, View } from 'react-native'
import { useFetchServerCurrentUsage } from '../queries'

export function CurrentUsage() {
	const { data: currentUsage, isLoading } = useFetchServerCurrentUsage()

	if (isLoading) return <></>

	if (!currentUsage) return null

	return (
		<View
			style={{
				display: 'flex',
				paddingHorizontal: 6,
				paddingBottom: 6,
				paddingTop: 2,
				rowGap: 10,
				backgroundColor: '#171C17',
				borderRadius: 10,
			}}
		>
			<View style={{ borderBottomWidth: 1, borderBottomColor: '#525258', padding: 4 }}>
				<Text style={{ fontSize: 16, fontWeight: '500', color: '#ffffff' }}>
					Использование ресурсов
				</Text>
			</View>
			<FlatList
				data={currentUsage}
				contentContainerStyle={{ display: 'flex', rowGap: 10 }}
				renderItem={({ item }) => (
					<View style={{ display: 'flex', rowGap: 6 }}>
						<View
							style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
						>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									columnGap: 4,
								}}
							>
								<View
									style={{ borderRadius: 10, width: 10, height: 10, backgroundColor: item.color }}
								/>
								<Text style={{ color: '#ffffff' }}>{item.label}</Text>
							</View>
							<View>
								<Text style={{ color: '#ffffff' }}>
									{item.isPercent
										? `${item.value} %`
										: `${item.value} / ${item.maxValue} ${item.valueUnit}`}
								</Text>
							</View>
						</View>
						<Progress value={item.value} maxValue={item.maxValue} progressColor={item.color} />
					</View>
				)}
			/>
		</View>
	)
}
