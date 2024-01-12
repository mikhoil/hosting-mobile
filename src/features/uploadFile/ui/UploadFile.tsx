import { AlertDialog } from '@/shared/ui/alert-dialog'
import { Button } from '@/shared/ui/button'
import * as DocumentPicker from 'expo-document-picker'
import { Upload } from 'lucide-react-native'
import { useState } from 'react'
import { FlatList, Text } from 'react-native'

export function UploadFile() {
	const [visible, setVisible] = useState(false)
	const [files, setFiles] = useState<string[]>([])
	const [res, setRes] = useState<DocumentPicker.DocumentPickerResult>()
	const handleUpload = async () => {
		const res = await DocumentPicker.getDocumentAsync({ multiple: true })
		setRes(res)
		setFiles(res.assets?.map((file) => file.name)!)
	}

	return (
		<>
			<Button
				size="icon"
				variant="primary"
				style={{
					display: 'flex',
					flexDirection: 'row',
					columnGap: 4,
					borderRadius: 10,
				}}
				onPress={() => {
					handleUpload()
					setVisible(!!files?.length)
				}}
			>
				<Upload size={18} />
				<Text style={{ fontWeight: '500', fontSize: 16 }}>Загрузить</Text>
			</Button>
			<AlertDialog
				actions={[
					{ label: 'Отмена', onPress: () => setVisible(false), color: 'red' },
					{
						label: 'Загрузить',
						onPress: () => {
							console.log(res?.assets)
							setVisible(false)
						},
						color: 'green',
					},
				]}
				title="Загрузка файлов"
				visible={visible}
				onDismiss={() => setVisible(false)}
			>
				<FlatList
					data={files}
					renderItem={({ item }) => <Text style={{ color: '#ffffff' }}>{item}</Text>}
				/>
			</AlertDialog>
		</>
	)
}
