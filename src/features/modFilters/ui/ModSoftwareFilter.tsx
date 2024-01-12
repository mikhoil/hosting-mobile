import { useStore } from 'effector-react'
import { Href, useLocalSearchParams, useRouter } from 'expo-router'
import { ChevronDown } from 'lucide-react-native'
import { SelectList } from 'react-native-dropdown-select-list'

import { CForgeSoftwareType, modLoaders } from '@/shared/config/curse-forge'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useState } from 'react'
import { Text, View } from 'react-native'

export function ModSoftwareFilter() {
	const router = useRouter()
	const searchParams = useLocalSearchParams<{ modLoaderType: string }>()

	const serverHash = useStore($serverHash)

	const modloaderAnyValue = String(CForgeSoftwareType.Any)

	const modLoaderType = searchParams.modLoaderType || modloaderAnyValue

	const [modLoader, setModLoader] = useState<string>(modLoaderType)

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				modLoaderType: value !== modloaderAnyValue ? value : null!,
			}) as Href<string>
		)
	}

	return (
		<View style={{ display: 'flex', alignItems: 'center', rowGap: 10 }}>
			<Text style={{ color: '#ffffff' }}>Ядро</Text>
			<SelectList
				data={modLoaders.map((ml) => ({ key: ml.value.toString(), value: ml.label }))}
				defaultOption={{
					value: modLoaders.find((ml) => ml.value.toString() === modLoader)?.label,
					key: modLoader,
				}}
				onSelect={() => handleSelect(modLoader)}
				setSelected={setModLoader}
				search={false}
				save="key"
				inputStyles={{ color: '#ffffff' }}
				dropdownTextStyles={{ color: '#ffffff' }}
				arrowicon={<ChevronDown color="#ffffff" />}
				maxHeight={100}
			/>
		</View>
	)
}
