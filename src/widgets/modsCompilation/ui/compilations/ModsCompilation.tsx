import { CForgeModClassType } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { View } from 'react-native'
import { popularModsRequest } from '../../config'
import { useFetchFilteredMods } from '../../queries'
import { ModCardsCompilation } from '../ModCardsCompilation'

export function ModsCompilation() {
	const serverHash = useStore($serverHash)

	const { data: mods } = useFetchFilteredMods(popularModsRequest)

	const viewAllLink = ModUrls.search(serverHash!, {
		classId: CForgeModClassType.Mods,
	})

	return (
		<View id="mods-compilation-step">
			<ModCardsCompilation title="Популярные моды" viewAllLink={viewAllLink} mods={mods || []} />
		</View>
	)
}
