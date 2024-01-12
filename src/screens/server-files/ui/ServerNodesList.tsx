import { useStore } from 'effector-react'
import { FileText, Folder, MoreHorizontal } from 'lucide-react-native'

// import { FileNodeDownload } from '@/features/file-node-download'
// import { FileNodeRemove } from '@/features/file-node-remove'

import { $serverHash } from '@/shared/store'
import { IFileNode } from '@/shared/types'
import { SkeletonList } from '@/shared/ui/skeleton'

import { FileNodeDownload } from '@/features/folderNodeDownload'
import { FileNodeRemove } from '@/features/folderNodeRemove'
import { Button } from '@/shared/ui/button'
import { Popover } from '@/shared/ui/popover'
import { router } from 'expo-router'
import { useRef } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Badge } from 'react-native-ui-lib'
import { useServerFiles } from '../hooks'

export function FileNodesList({ fileNodes }: { fileNodes?: IFileNode[] }) {
	const serverHash = useStore($serverHash)

	const { functions } = useServerFiles()
	const { formatBytes } = functions

	const ref = useRef<React.ElementRef<typeof Popover>>(null!)

	if (!fileNodes) {
		return (
			<View>
				<SkeletonList count={12} height={50} />
			</View>
		)
	}

	return (
		<FlatList
			ListEmptyComponent={<Text style={{ color: '#ffffff' }}>Папка пустая</Text>}
			contentContainerStyle={{ display: 'flex', rowGap: 10 }}
			data={fileNodes}
			renderItem={({ item: fileNode }) => (
				<View
					key={fileNode.path}
					style={{
						display: 'flex',
						flexDirection: 'row',
						backgroundColor: '#171C17',
						paddingHorizontal: 5,
						justifyContent: 'space-between',
						borderRadius: 6,
						alignItems: 'center',
					}}
				>
					<Button
						variant="ghost"
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							columnGap: 10,
						}}
						onPress={() => router.push(`/(tabs)/servers/${serverHash}/files?path=${fileNode.path}`)}
					>
						{fileNode.type === 'file' ? (
							<FileText size={24} color={'#ffffff'} />
						) : (
							<Folder size={24} color={'#ffffff'} />
						)}
						<Text style={{ color: '#ffffff' }}>{fileNode.name}</Text>
					</Button>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							columnGap: 10,
							paddingVertical: 4,
							alignItems: 'center',
						}}
					>
						{fileNode.type === 'file' && (
							<Badge
								backgroundColor="#27272A"
								label={formatBytes(fileNode.size)}
								labelStyle={{ color: '#ffffff', fontWeight: '400', fontSize: 13 }}
							/>
						)}
						<Popover
							ref={ref}
							useSideTip
							enableShadow
							color="#4D4D4D"
							style={{ padding: 5 }}
							customContent={
								<View
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										columnGap: 10,
										padding: 10,
									}}
								>
									<FileNodeDownload path={fileNode.path} />
									<FileNodeRemove path={fileNode.path} />
								</View>
							}
						>
							<MoreHorizontal size={24} strokeWidth={1.5} color={'#ffffff'} />
						</Popover>
					</View>
				</View>
			)}
		/>
	)
}
