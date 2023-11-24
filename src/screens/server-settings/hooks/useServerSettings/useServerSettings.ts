import { useStore } from 'effector-react'
// import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// import { CallBackProps } from 'react-joyride'

// import { useJoyrideGuide } from '@/shared/lib/react-joyride/hooks'
import { useFetchServer } from '@/shared/queries/server'
import { $serverHash } from '@/shared/store'

import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { useFetchServerSettings } from '../../queries'

export function useServerSettings() {
	// const router = useRouter()

	const serverHash = useStore($serverHash)

	// const { functions } = useJoyrideGuide()

	// const { handleFinishGuide } = functions

	const { data: server, isLoading } = useFetchServer(serverHash)

	const { data: settings } = useFetchServerSettings(server?.gameServerHash)

	// const saveServerSettingsMutation = useSaveServerSettingsMutation()

	const [localSettings, setLocalSettings] = useState(settings)

	const [isSettingsChanged, setIsSettingsChanged] = useState(false)

	// const joyrideCallback = ({ status }: CallBackProps) => {
	// 	if (status === 'finished') {
	// 		router.push(ServerUrls.server.overview(server?.gameServerHash!))

	// 		handleFinishGuide()
	// 	}
	// }

	const handleSaveSettings = () => {
		//#TODO: переделать под бэк
		if (isSettingsChanged) {
			// saveServerSettingsMutation.mutateAsync(localSettings!)
			setLocalSettings(settings!)
		}
	}

	const handleSwitchChange = (checked: boolean, propertyName: string) => {
		let updatedLocalSettings = localSettings?.map((property) => {
			if (property.name === propertyName) {
				return { ...property, value: checked ? 'true' : 'false' }
			}
			return property
		})

		setLocalSettings(updatedLocalSettings)
	}

	const handleTextChange = (
		event: NativeSyntheticEvent<TextInputChangeEventData>,
		propertyName: string
	) => {
		let updatedLocalSettings = localSettings?.map((property) => {
			if (property.name == propertyName) {
				return {
					...property,
					value: String(event.target),
				}
			}
			return property
		})

		setLocalSettings(updatedLocalSettings)
	}

	const handleNumberChange = (
		event: NativeSyntheticEvent<TextInputChangeEventData>,
		propertyName: string
	) => {
		let updatedLocalSettings = localSettings?.map((property) => {
			if (property.name == propertyName) {
				return {
					...property,
					value: String(event.target) || '0',
				}
			}
			return property
		})

		setLocalSettings(updatedLocalSettings)
	}

	useEffect(() => {
		if (settings) {
			setLocalSettings(settings)
		}
	}, [settings])

	useEffect(() => {
		if (JSON.stringify(localSettings) !== JSON.stringify(settings)) {
			setIsSettingsChanged(true)
		} else {
			setIsSettingsChanged(false)
		}
	}, [localSettings])

	return {
		localSettings,
		isSettingsChanged,
		// joyrideCallback,
		functions: {
			handleSwitchChange,
			handleTextChange,
			handleNumberChange,
			handleSaveSettings,
		},
	}
}
