import { useMutation } from '@tanstack/react-query'
import { useStore } from 'effector-react'

import { ReactQueryKeys, queryClient } from '@/shared/lib/react-query'
import { $serverHash } from '@/shared/store'

import { banPlayer } from '../api'

export function useBanPlayerMutation() {
	const serverHash = useStore($serverHash)

	return useMutation({
		mutationFn: ({ playerNickname }: { playerNickname: string }) =>
			banPlayer(serverHash!, playerNickname),
		onSettled: async (data, error) => {
			if (data?.data.success) {
				await queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.serverMainInfo, serverHash] })
				await queryClient.invalidateQueries({ queryKey: [ReactQueryKeys.bannedPlayers, serverHash] })
			}
		},
	})
}
