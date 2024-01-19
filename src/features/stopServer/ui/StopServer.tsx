import { $serverHash } from '@/shared/store'
import { Button } from '@/shared/ui/button'
import { useStore } from 'effector-react'
import { Text } from 'react-native'

import { useStopServerMutation } from '../model'

export function StopServer() {
	const serverHash = useStore($serverHash)

	const { isLoading, mutateAsync } = useStopServerMutation()

	const handleClick = () => {
		mutateAsync({ gameServerHash: serverHash! })
	}

	return (
		<Button onPress={handleClick} disabled={isLoading} size="sm" variant="destructive">
			<Text>Остановить</Text>
		</Button>
	)
}
