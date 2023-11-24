import { Home } from '@tamagui/lucide-icons'

import { FileCreate } from '@/features/fileCreate'
import { FolderCreate } from '@/features/folderCreate'

import { Button } from '@/shared/ui/button'
import { Heading } from '@/shared/ui/heading'

import { useServerFiles } from '../hooks'

import { ServerHeader } from '@/widgets/serverHeader'
import { Text, View } from 'react-native'
// import { FileNodesList } from './file-nodes-list'
// import { FilesBreadcrumbs } from './files-breadcrumbs'

export function ServerFiles() {
	const { path, fileContent, fileNodesByPath, functions } = useServerFiles()

	const { handleGoHome } = functions

	return (
		<View>
			<ServerHeader />
			<Heading>Файловый менеджер</Heading>
			<View>
				<View>
					<Button onPress={handleGoHome}>
						<Home size={24} />
					</Button>
					<Text>~ /</Text>
				</View>
				{/* <FilesBreadcrumbs path={path} /> */}
				<View>
					{(!fileContent || fileNodesByPath) && (
						<>
							<FileCreate />
							<FolderCreate />
						</>
					)}
				</View>
			</View>
			{fileContent && !fileNodesByPath && <View>Контент: {fileContent}</View>}
			{/* {fileNodesByPath && <FileNodesList fileNodes={fileNodesByPath} />} */}
		</View>
	)
}
