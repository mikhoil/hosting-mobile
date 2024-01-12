import { sortOptions } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { Href, useLocalSearchParams, useRouter } from 'expo-router'
import { ChevronDown } from 'lucide-react-native'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

export function ModSorting() {
	const router = useRouter()
	const searchParams = useLocalSearchParams<{ sortField: string }>()
	const serverHash = useStore($serverHash)

	const sortField = searchParams.sortField

	const [field, setField] = useState<string>(sortField)
	if (!searchParams.sortField) return null

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				sortField: parseInt(value),
			}) as Href<string>
		)
	}

	return (
		<View style={{ display: 'flex', alignItems: 'center', rowGap: 10 }}>
			<Text style={{ color: '#ffffff' }}>Сортировать по</Text>
			<SelectList
				data={sortOptions.map(({ label, value }) => ({ key: value.toString(), value: label }))}
				defaultOption={{
					value: sortOptions.find((sortOption) => sortOption.value.toString() === field)?.label,
					key: field,
				}}
				onSelect={() => handleSelect(field)}
				setSelected={setField}
				search={false}
				save="key"
				dropdownStyles={{ padding: 0 }}
				boxStyles={{ padding: 0, paddingHorizontal: 20 }}
				inputStyles={{ color: '#ffffff', padding: 0 }}
				dropdownTextStyles={{ color: '#ffffff' }}
				dropdownItemStyles={{ padding: 0, paddingHorizontal: 20 }}
				arrowicon={<ChevronDown color="#ffffff" />}
				maxHeight={100}
			/>
		</View>
	)
}
