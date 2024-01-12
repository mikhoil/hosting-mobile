import { useLocalSearchParams } from 'expo-router'
import { FolderPlus } from 'lucide-react-native'

import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export function FolderCreate() {
	const searchParams = useLocalSearchParams<{ path: string }>()
	const path = searchParams.path ?? ''

	const handleCreateFolder = () => {}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<FolderPlus size={24} color={'#ffffff'} />
			</Button>
			<AlertDialog
				onDismiss={() => setVisible(false)}
				visible={visible}
				title="Создание папки"
				subTitle={`Папка будет создана внутри директории ~/${path}`}
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'red' },
					{
						label: 'Создать',
						onPress: () => {
							handleCreateFolder()
							setVisible(false)
						},
						color: 'green',
					},
				]}
			>
				<Input inputMode="text" placeholder="Название папки" placeholderTextColor={'#4D4D4D'} />
			</AlertDialog>
		</>
	)
}
