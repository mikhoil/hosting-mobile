import { useStore } from 'effector-react'
import { useEffect, useRef, useState } from 'react'

import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { useRouter } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

export function FilesBreadcrumbs({ path }: { path: string }) {
	const router = useRouter()
	const serverHash = useStore($serverHash)
	const [pathParts, setPathParts] = useState<string[]>([])
	const ref = useRef<FlatList>(null!)

	useEffect(() => {
		const parts = path.split('/').filter((p) => p.length > 0)
		setPathParts(parts)
		ref?.current?.scrollToEnd({ animated: true })
	}, [path])

	const createPathUrl = (pathPartName: string): string => {
		const pathPartIndex = pathParts.indexOf(pathPartName) + 1

		return `${pathParts.slice(0, pathPartIndex).join('/')}`
	}

	return (
		<FlatList
			ListEmptyComponent={null}
			ref={ref}
			horizontal
			data={pathParts}
			contentContainerStyle={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
			renderItem={({ item: pathPart, index }) => (
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<Button
						variant="ghost"
						key={pathPart}
						disabled={index === pathParts.length - 1}
						onPress={() =>
							router.push(
								`/(tabs)/servers/${serverHash}/files${
									path ? '?path=' + createPathUrl(pathPart) : ''
								}`
							)
						}
					>
						<Text style={{ color: '#ffffff' }}>{pathPart}</Text>
					</Button>
					{index < pathParts.length - 1 && (
						<Text style={{ color: '#ffffff', fontSize: 20 }}>/</Text>
					)}
				</View>
			)}
		/>
	)
}
