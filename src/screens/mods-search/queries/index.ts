import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'

import { searchModsBaseRequest } from '@/shared/config/mods'
import { ReactQueryKeys } from '@/shared/lib/react-query'

import { searchMods } from '../api'

export const useSearchMods = () => {
	const searchParams = useLocalSearchParams()
	// const paramsObj = Object.fromEntries(searchParams)

	return useQuery({
		queryKey: [ReactQueryKeys.searchMods, JSON.stringify(searchParams)],
		queryFn: () => searchMods({ ...searchModsBaseRequest, ...searchParams }),
		select: ({ data }) => data.data,
	})
}
