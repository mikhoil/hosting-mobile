import { IMod } from '@/shared/api/curse-forge'
import { modClassesMap } from '@/shared/config/mods'
import { formatModDate, formatModDownloadsCount } from '@/shared/utils/format'

export function useModCard(mod: IMod) {
	const formattedDownloadsCount = formatModDownloadsCount(mod.downloadCount)
	const formattedUpdateDate = formatModDate(mod.dateModified)
	const classTagName = modClassesMap.get(mod.classId)

	// const handleCardClick = (event: GestureResponderEvent) => {
	// 	if (
	// 		event.nativeEvent.target === 'BUTTON' ||
	// 		event.nativeEvent.target === 'path' ||
	// 		event.nativeEvent.target === 'svg' ||
	// 		event.nativeEvent.target === 'circle'
	// 	) {
	// 		event.preventDefault()
	// 		return
	// 	}
	// }

	return {
		formattedDownloadsCount,
		formattedUpdateDate,
		classTagName,
		functions: {
			// handleCardClick,
		},
	}
}
