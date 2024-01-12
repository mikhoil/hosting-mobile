import { ModSorting } from '@/features/modSorting'
import { View } from 'react-native'
import { ModCategoryFilter } from './ModCategoryFilter'
import { ModClassFilter } from './ModClassFilter'
import { ModSoftwareFilter } from './ModSoftwareFilter'
import { ModVersionFilter } from './ModVersionFilter'

export function ModFilters() {
	return (
		<View>
			<ModClassFilter />
			<ModCategoryFilter />
			<ModSorting />
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<ModSoftwareFilter />
				<ModVersionFilter />
			</View>
		</View>
	)
}
