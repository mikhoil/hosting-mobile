import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getOperators } from '../api'
import { pollingOperatorsInterval } from '../config'

export function useOperators(gameServerHash: string) {
	const { data: operators, isLoading } = useQuery({
		queryKey: [ReactQueryKeys.operators, gameServerHash],
		queryFn: () => getOperators(gameServerHash),
		// select: ({ data }) => data,
		refetchInterval: pollingOperatorsInterval
	})

	return { operators, isLoading }
}
