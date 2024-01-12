import { useQuery } from '@tanstack/react-query'

import { ReactQueryKeys } from '@/shared/lib/react-query'

import { getMod, getModDescription } from '../api'

export const useFetchMod = (modId: number | undefined) => {
	return useQuery({
		queryKey: [ReactQueryKeys.mod, modId],
		queryFn: () => getMod(modId),
		select: (response) => response?.data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		enabled: !!modId,
	})
}

export const useFetchModDescription = (modId: number) => {
	return useQuery({
		queryKey: [ReactQueryKeys.modDescription, modId],
		queryFn: () => getModDescription(modId),
		select: ({ data }) => data.data,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	})
}
