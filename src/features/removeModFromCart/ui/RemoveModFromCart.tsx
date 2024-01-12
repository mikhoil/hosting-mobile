import { $serverHash } from '@/shared/store'
import { removeModFromCart } from '@/shared/store/mod'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { MinusCircle } from 'lucide-react-native'

export function RemoveModFromCart({ modId }: { modId: number }) {
	const serverHash = useStore($serverHash)
	const handleRemoveModClick = () => {
		removeModFromCart([serverHash!, modId])
	}

	return (
		<Button variant="destructive" size="sm" onPress={handleRemoveModClick}>
			<MinusCircle size={14} color={'#ffffff'} />
		</Button>
	)
}
