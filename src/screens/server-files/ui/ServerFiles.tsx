import { FileCreate } from '@/features/fileCreate'
import { FolderCreate } from '@/features/folderCreate'
import { UploadFile } from '@/features/uploadFile'
import { Home } from 'lucide-react-native'

import { Button } from '@/shared/ui/button'

import { useServerFiles } from '../hooks'

import { ServerHeader } from '@/widgets/serverHeader'
import { ScrollView, Text, View } from 'react-native'
import { FilesBreadcrumbs } from './ServerBreadCrumbs'
import { FileNodesList } from './ServerNodesList'

export function ServerFiles() {
	const { path, fileContent, fileNodesByPath, functions } = useServerFiles()

	const { handleGoHome } = functions

	return (
		<View style={{ display: 'flex', padding: 12, rowGap: 10, paddingBottom: 100 }}>
			<ServerHeader />
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '500' }}>Файловый менеджер</Text>
				<UploadFile />
			</View>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: '#171C17',
					paddingHorizontal: 10,
					paddingVertical: 4,
					borderRadius: 6,
					justifyContent: 'space-between',
				}}
			>
				<View style={{ display: 'flex', flexDirection: 'row', columnGap: 8, alignItems: 'center' }}>
					<Button
						onPress={handleGoHome}
						size="icon"
						style={{ backgroundColor: '#27272A', borderRadius: 6 }}
					>
						<Home size={20} color={'#ffffff'} />
					</Button>
					<Text style={{ fontSize: 20, color: '#ffffff' }}>~ /</Text>
				</View>
				<FilesBreadcrumbs path={path} />
				{(!fileContent?.content || fileNodesByPath) && (
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							columnGap: 8,
							alignItems: 'center',
						}}
					>
						<FileCreate />
						<FolderCreate />
					</View>
				)}
			</View>
			<ScrollView>
				{fileContent?.content && !fileNodesByPath && (
					<Text style={{ color: '#ffffff' }}>{fileContent.content}</Text>
				)}
			</ScrollView>
			{fileNodesByPath && <FileNodesList fileNodes={fileNodesByPath} />}
		</View>
	)
}
