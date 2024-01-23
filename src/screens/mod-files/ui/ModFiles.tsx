import * as FileSystem from 'expo-file-system'
import { FlatList, Text, View } from 'react-native'
import { useFetchModFiles } from '../queries'

export function ModFiles({ modId }: { modId: number }) {
	const { data: files } = useFetchModFiles(modId)

	return (
		<FlatList
			contentContainerStyle={{ paddingTop: 55, padding: 10, display: 'flex', rowGap: 10 }}
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
			}) => {
				const downloadResumable = FileSystem.createDownloadResumable(
					downloadUrl,
					FileSystem.documentDirectory + fileName
				)
				return (
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							columnGap: 10,
						}}
					>
						<Text
							onPress={async () =>
								await FileSystem.downloadAsync(downloadUrl, FileSystem.documentDirectory + fileName)
							}
							style={{ color: '#ffffff' }}
						>
							{displayName}
						</Text>
						{/* <Button
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
					))} */}
					</View>
				)
			}}
		/>
	)
}
