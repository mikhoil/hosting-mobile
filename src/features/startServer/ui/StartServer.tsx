import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { Text } from 'react-native'

import { useStartServerMutation } from '../model'

export function StartServer() {
	const serverHash = useStore($serverHash)

	const { isLoading, mutate } = useStartServerMutation()

	const handleClick = () => {
		mutate({ gameServerHash: serverHash! })
	}

	return (
		<Button onPress={handleClick} disabled={isLoading} size="sm" variant="primary">
			<Text>Запустить</Text>
		</Button>
	)
}
