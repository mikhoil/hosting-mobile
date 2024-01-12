import { ChevronRight } from '@tamagui/lucide-icons'
import { Href, Link } from 'expo-router'

import { ModCard } from '@/entities/mod/ui/card'

import { IMod } from '@/shared/api/curse-forge'

import { FlatList, Text, View } from 'react-native'
import { ModCardsCompilationLoading } from './Loading'

export function ModCardsCompilation({
	mods,
	title,
	viewAllLink,
}: {
	mods: IMod[]
	title: string
	viewAllLink: string
}) {
	if (mods.length === 0) return <ModCardsCompilationLoading />

	return (
		<View style={{ marginBottom: 15 }}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					marginBottom: 10,
				}}
			>
				<Text style={{ color: '#ffffff', fontSize: 18 }}>{title}</Text>
				<Link href={viewAllLink as Href<string>}>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: '#ffffff' }}>Смотреть все</Text>
						<ChevronRight style={{ alignSelf: 'flex-end' }} size={14} color="#ffffff" />
					</View>
				</Link>
			</View>
			<FlatList
				contentContainerStyle={{ display: 'flex', columnGap: 10 }}
				horizontal
				scrollEnabled
				showsVerticalScrollIndicator
				data={mods}
				renderItem={({ item: mod }) => <ModCard key={mod.id} mod={mod} />}
			/>
		</View>
	)
}
