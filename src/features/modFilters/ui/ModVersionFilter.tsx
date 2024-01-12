import { useGameVersions } from '@/shared/queries/mod'
import { ModUrls } from '@/shared/routes/urls'
import { $serverHash } from '@/shared/store'
import { useStore } from 'effector-react'
import { Href, useLocalSearchParams, useRouter } from 'expo-router'
import { ChevronDown } from 'lucide-react-native'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'

export function ModVersionFilter() {
	const router = useRouter()
	const searchParams = useLocalSearchParams<{ gameVersion: string }>()

	const serverHash = useStore($serverHash)

	const anyGameVersionValue = 'ANY_VERSION'
	const anyGameVersionLabel = 'Любая'

	const gameVersion = searchParams.gameVersion || anyGameVersionValue

	const { data: versions } = useGameVersions()

	if (versions?.length === 0) return null

	const handleSelect = (value: string) => {
		router.push(
			ModUrls.search(serverHash!, {
				...searchParams,
				gameVersion: value === anyGameVersionValue ? null! : value,
			}) as Href<string>
		)
	}

	const [currentVersion, setCurrentVersion] = useState<string>(gameVersion)

	return (
		<View style={{ display: 'flex', alignItems: 'center', rowGap: 10 }}>
			<Text style={{ color: '#ffffff' }}>Версия</Text>
			<SelectList
				search={false}
				data={[
					{ key: anyGameVersionValue, value: anyGameVersionLabel },
					...(versions?.map((version) => ({
						key: version.gameVersionId.toString(),
						value: version.version,
					})) || []),
				]}
				defaultOption={{
					key: currentVersion,
					value:
						versions?.find((v) => v.gameVersionId.toString() === currentVersion)?.version ||
						anyGameVersionLabel,
				}}
				setSelected={setCurrentVersion}
				onSelect={() => handleSelect(currentVersion)}
				save="key"
				arrowicon={<ChevronDown color="#ffffff" />}
				inputStyles={{ color: '#ffffff' }}
				dropdownTextStyles={{ color: '#ffffff' }}
			/>
		</View>
	)
}
