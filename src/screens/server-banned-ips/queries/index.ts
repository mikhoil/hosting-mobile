import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getBannedIps } from '../api'
// import { pollingBannedIpsInterval } from '../config'

export function useBannedIps(gameServerHash: string) {
	const { data: bannedIps, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.bannedIps, gameServerHash],
		queryFn: () => getBannedIps(gameServerHash),
		// select: ({ data }) => data,
		// refetchInterval: pollingBannedIpsInterval
	})

	return { bannedIps, isLoading }
}
