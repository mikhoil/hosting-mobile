import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getWhitelist } from '../api'
// import { pollingWhitelistInterval } from '../config'

export function useWhitelist(gameServerHash: string) {
	const { data: whitelist, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.whiteList, gameServerHash],
		queryFn: () => getWhitelist(gameServerHash),
		// select: ({ data }) => data,
		// refetchInterval: pollingWhitelistInterval 
	})

	return { whitelist, isLoading }
}
