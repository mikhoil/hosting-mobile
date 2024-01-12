import { IMod } from '@/shared/api/curse-forge'
import { $serverHash } from '@/shared/store'
import { addModToCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { PlusCircle } from 'lucide-react-native'

export function AddModToCart({ mod }: { mod: IMod }) {
	const serverHash = useStore($serverHash)
	const handleAddModClick = () => {
		addModToCart([serverHash!, mod])
	}

	return (
		<Button variant="primary" size="sm" onPress={handleAddModClick}>
			<PlusCircle size={14} color={'#ffffff'} />
		</Button>
	)
}
