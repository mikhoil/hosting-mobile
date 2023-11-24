import { FilePlus } from '@tamagui/lucide-icons'
import { useLocalSearchParams } from 'expo-router'

import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export function FileCreate() {
	const searchParams = useLocalSearchParams<{ path: string }>()
	const path = searchParams.path

	const handleCreateFile = () => {}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<FilePlus size={24} />
			</Button>
			<AlertDialog
				onDismiss={() => setVisible(false)}
				visible={visible}
				title="Создание файла"
				subTitle={`Файл будет создан внутри директории ~/${path}`}
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false) },
					{
						label: 'Создать',
						onPress: () => {
							handleCreateFile()
							setVisible(false)
						},
					},
				]}
			>
				<Input inputMode="text" placeholder="Название файла" />
			</AlertDialog>
		</>
	)
}
