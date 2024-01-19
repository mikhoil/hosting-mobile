import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { IServerSendCommandToConsoleRequest } from '@/entities/server/types/requests'

import { ReactQueryKeys } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { getServerConsole, sendCommandToServerConsole } from '../api'
import { serverConsolePollingInterval } from '../config'

export function useFetchServerConsole() {
	const serverHash = useStore($serverHash)

	return useQuery({
		queryKey: [ReactQueryKeys.serverConsole, serverHash],
		queryFn: () => getServerConsole(serverHash!),
		enabled: !!serverHash,
		select: ({ data }) => data.Logs,
		refetchInterval: serverConsolePollingInterval,
	})
}

export function useSendCommandToServerConsoleMutation() {
	const queryClient = useQueryClient()
	const serverHash = useStore($serverHash)

	return useMutation({
		mutationFn: ({ message }: IServerSendCommandToConsoleRequest) =>
			sendCommandToServerConsole(serverHash!, message),
		onSettled: async (data, error) => {
			if (data?.data.success) {
				await queryClient.invalidateQueries({
					queryKey: [ReactQueryKeys.serverConsole, serverHash],
				})
			}
		},
	})
}
