import { IMod } from '@/shared/api/curse-forge'
import { addModToCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'
import { PlusCircle } from 'lucide-react-native'
import { Text, View } from 'react-native'

export function AddModToCart({ mod }: { mod: IMod }) {
	const handleAddModClick = () => {
		addModToCart(mod)
	}

	return (
		<Button variant="primary" size="sm" onPress={handleAddModClick}>
			<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
				<PlusCircle size={16} color={'#000'} />
				<Text style={{ fontWeight: '700' }}>Добавить мод в корзину установки</Text>
			</View>
		</Button>
	)
}
