import { Button } from '@/shared/ui/button'
import * as FileSystem from 'expo-file-system'
import { Download } from 'lucide-react-native'
import { FlatList, Text, View } from 'react-native'
import { useFetchModFiles } from '../queries'

export function ModFiles({ modId }: { modId: number }) {
	const { data: files } = useFetchModFiles(modId)

	return (
		<FlatList
			contentContainerStyle={{ paddingTop: 55, padding: 10 }}
			data={files}
			renderItem={({
				item: {
					displayName,
					downloadUrl,
					fileName,
					downloadCount,
					fileDate,
					fileLength,
					gameVersions,
				},
			}) => (
				<View
					style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 10 }}
				>
					<Text style={{ color: '#ffffff' }}>{displayName}</Text>
					<Button
						variant="ghost"
						onPress={() => {
							FileSystem.downloadAsync(downloadUrl, FileSystem.documentDirectory + fileName)
						}}
					>
						<Download color="#ffffff" />
					</Button>
					<Text style={{ color: '#ffffff' }}>{downloadCount}</Text>
					{gameVersions.map((v) => (
						<Text style={{ color: '#ffffff' }} key={v}>
							{v}
						</Text>
					))}
				</View>
			)}
		/>
	)
}
