import { Download } from 'lucide-react-native'
import { GestureResponderEvent, Text, View } from 'react-native'

export function FileNodeDownload({ path }: { path: string }) {
	const handleDownloadNode = (e: GestureResponderEvent) => {
		console.log('download node by path:', path)
	}
	return (
		<View onTouchStart={handleDownloadNode} style={{ display: 'flex', alignItems: 'center' }}>
			<Download size={20} color={'#22C55E'} />
			<Text style={{ color: '#22C55E' }}>Скачать</Text>
		</View>
	)
}
