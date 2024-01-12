import { AddModToCart } from '@/features/addModToCart'
import { RemoveModFromCart } from '@/features/removeModFromCart'
import { $modsCart, $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { ScrollView } from 'react-native'
import RenderHtml from 'react-native-render-html'
import { useFetchMod, useFetchModDescription } from '../queries'

export function ModDescription({ modId }: { modId: number }) {
	const serverHash = useStore($serverHash)
	const { data: modDescription, isLoading } = useFetchModDescription(modId)
	const { data: mod } = useFetchMod(modId)

	const modsCart = useStore($modsCart)

	const isModInCart = modsCart.get(serverHash!)?.some((m) => m.id === modId)

	if (!modDescription || isLoading) return null

	return (
		<ScrollView scrollEnabled>
			{isModInCart ? <RemoveModFromCart modId={modId} /> : <AddModToCart mod={mod!} />}
			<RenderHtml
				source={{ html: modDescription }}
				baseStyle={{ color: '#ffffff', textDecorationLine: 'none' }}
			/>
		</ScrollView>
	)
}
