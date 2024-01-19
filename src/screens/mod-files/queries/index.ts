import { ReactQueryKeys } from '@/shared/lib/react-query'
import { useQuery } from '@tanstack/react-query'
import { getModFiles } from '../api'

export function useFetchModFiles(modId: number) {
	return useQuery({
		queryKey: [ReactQueryKeys.modFiles, modId],
		queryFn: () => getModFiles(modId),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		select: ({ data }) => data.data,
	})
}
