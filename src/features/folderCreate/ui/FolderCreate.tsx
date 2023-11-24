import { FolderPlus } from '@tamagui/lucide-icons'
import { useLocalSearchParams } from 'expo-router'

import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export function FolderCreate() {
	const searchParams = useLocalSearchParams<{ path: string }>()
	const path = searchParams.path

	const handleCreateFolder = () => {}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<FolderPlus size={24} />
			</Button>
			<AlertDialog
				onDismiss={() => setVisible(false)}
				visible={visible}
				title="Создание папки"
				subTitle={`Папка будет создана внутри директории ~/${path}`}
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false) },
					{
						label: 'Создать',
						onPress: () => {
							handleCreateFolder()
							setVisible(false)
						},
					},
				]}
			>
				<Input inputMode="text" placeholder="Название папки" />
			</AlertDialog>
		</>
	)
}
