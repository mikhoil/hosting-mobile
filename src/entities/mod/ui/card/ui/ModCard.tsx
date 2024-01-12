import { useStore } from 'effector-react'
import { Image } from 'expo-image'
import { Href, Link } from 'expo-router'
import { ArrowDownToLine } from 'lucide-react-native'
import { Badge } from 'react-native-ui-lib'

import { IMod } from '@/shared/api/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'

import { Text, View } from 'react-native'
import { useModCard } from '../hooks'

export function ModCard({ mod }: { mod: IMod }) {
	const serverHash = useStore($serverHash)

	const { formattedDownloadsCount, classTagName } = useModCard(mod)

	return (
		<Link href={ModUrls.mod(serverHash!, mod.id) as Href<string>}>
			<View
				style={{
					display: 'flex',
					backgroundColor: '#171C17',
					padding: 10,
					borderRadius: 10,
					width: 150,
				}}
			>
				<Image
					source={
						mod.logo
							? { uri: mod.logo.thumbnailUrl, headers: { Accept: 'image/*' } }
							: require('/src/app-flat/assets/images/logo-green.png')
					}
					alt={`Логотип мода ${mod.name}`}
					style={{ width: 100, height: 100, borderRadius: 10, alignSelf: 'center' }}
				/>
				<View>
					<Text
						style={{ color: '#ffffff', fontWeight: '600' }}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{mod.name}
					</Text>
					<Text style={{ color: '#ffffff', fontSize: 12 }}>by {mod.authors.at(0)?.name}</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
							<ArrowDownToLine size={12} color="#ffffff" />
							<Text style={{ color: '#ffffff', fontSize: 12 }}>{formattedDownloadsCount}</Text>
						</View>
						<Badge
							label={classTagName}
							backgroundColor="#27272A"
							labelStyle={{ color: '#cccccc', fontSize: 11, fontWeight: '400' }}
						/>
					</View>
				</View>
			</View>
		</Link>
	)
}
