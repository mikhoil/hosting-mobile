import { useLocalSearchParams } from 'expo-router'
import { FilePlus } from 'lucide-react-native'

import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { useState } from 'react'

export function FileCreate() {
	const searchParams = useLocalSearchParams<{ path: string }>()
	const path = searchParams.path ?? ''

	const handleCreateFile = () => {}

	const [visible, setVisible] = useState(false)

	return (
		<>
			<Button variant="ghost" size="icon" onPress={() => setVisible(true)}>
				<FilePlus size={24} color={'#ffffff'} />
			</Button>
			<AlertDialog
				onDismiss={() => setVisible(false)}
				visible={visible}
				title="Создание файла"
				subTitle={`Файл будет создан внутри директории ~/${path}`}
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'red' },
					{
						label: 'Создать',
						onPress: () => {
							handleCreateFile()
							setVisible(false)
						},
						color: 'green',
					},
				]}
			>
				<Input inputMode="text" placeholder="Название файла" placeholderTextColor={'#4D4D4D'} />
			</AlertDialog>
		</>
	)
}
