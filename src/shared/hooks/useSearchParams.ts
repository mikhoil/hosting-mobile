import { useLocalSearchParams } from 'expo-router'
import React from 'react'

// export function createSearchParams(obj?: Object) {
// 	return new URLSearchParams()
// }

export function useSearchParams(defaultInit?: Object) {
	const search = useLocalSearchParams<Record<string, string>>()
	return React.useMemo(() => {
		let result: Record<string, string> = {}

		Object.keys(search).forEach((key) => {
			result[key] = search[key]
		})
		return result
	}, [search])
}
