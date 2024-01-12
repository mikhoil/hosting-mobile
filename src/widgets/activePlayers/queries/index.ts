import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getActivePlayers } from '../api'
import { serverActivePlayersPollingInterval } from '../config'

export function useFetchServerActivePlayers(serverHash: string) {
	return useQuery({
		queryKey: [ReactQueryKeys.serverActivePlayers, serverHash],
		queryFn: () => getActivePlayers(serverHash!),
		enabled: !!serverHash,
		refetchInterval: serverActivePlayersPollingInterval,
	})
}
