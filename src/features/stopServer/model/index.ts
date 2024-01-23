import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { stopServer } from '../api'

export function useStopServerMutation() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: stopServer,
		onMutate: () => {
			queryClient.cancelQueries({
				queryKey: [ReactQueryKeys.serverMainInfo],
				fetchStatus: 'idle',
			})
		},
		onSettled: async (response, error) => {
			if (response?.success) {
				await queryClient.invalidateQueries([ReactQueryKeys.server])
				await queryClient.invalidateQueries([ReactQueryKeys.userServers])
			}
		},
	})
}
