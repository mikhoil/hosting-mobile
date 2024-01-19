import { removeModFromCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'
import { MinusCircle } from 'lucide-react-native'
import { Text, View } from 'react-native'

export function RemoveModFromCart({ modId }: { modId: number }) {
	const handleRemoveModClick = () => {
		removeModFromCart(modId)
	}

	return (
		<Button variant="destructive" size="sm" onPress={handleRemoveModClick}>
			<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
				<MinusCircle size={16} color={'#ffffff'} />
				<Text style={{ color: '#ffffff', fontWeight: '700' }}>
					Удалить мод из корзины установки
				</Text>
			</View>
		</Button>
	)
}
