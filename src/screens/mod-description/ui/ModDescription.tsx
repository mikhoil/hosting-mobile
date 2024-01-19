import { AddModToCart } from '@/features/addModToCart'
import { RemoveModFromCart } from '@/features/removeModFromCart'
import { $modsCart } from '@/shared/store'
import { useStore } from 'effector-react'
import { Dimensions, ScrollView } from 'react-native'
import RenderHtml from 'react-native-render-html'
import { useFetchMod, useFetchModDescription } from '../queries'

export function ModDescription({ modId }: { modId: number }) {
	const { data: modDescription, isLoading } = useFetchModDescription(modId)
	const { data: mod } = useFetchMod(modId)

	const modsCart = useStore($modsCart)

	const isModInCart = modsCart?.some((m) => m.id === modId)

	if (!modDescription || isLoading) return null

	return (
		<ScrollView scrollEnabled style={{ padding: 10, paddingTop: 55 }}>
			{isModInCart ? <RemoveModFromCart modId={modId} /> : <AddModToCart mod={mod!} />}
			<RenderHtml
				source={{ html: modDescription }}
				baseStyle={{ color: '#ffffff', textDecorationLine: 'none' }}
				contentWidth={Dimensions.get('screen').width}
			/>
		</ScrollView>
	)
}
