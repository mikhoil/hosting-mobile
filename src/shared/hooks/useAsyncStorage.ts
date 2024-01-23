import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect } from 'react'
import { UseStateHook, useAsyncState } from './useAsyncState'

async function setStorageItemAsync(key: string, value: string | null) {
	try {
		if (value === null) {
			await AsyncStorage.removeItem(key)
		} else {
			await AsyncStorage.setItem(key, value)
		}
	} catch (error) {
		console.log('error', error)
	}
}

export function useStorageState<T>(key: string): UseStateHook<T> {
	// Public
	const [state, setState] = useAsyncState<T>()

	// Get
	useEffect(() => {
		AsyncStorage.getItem(key).then((value) => {
			setState(
				value === null ? null : value[0] === '{' ? (JSON.parse(value) as T) : value as T
			)
		})
	}, [key])

	// Set
	const setValue = useCallback(
		async (value: T | null) => {
			setState(value)
			await setStorageItemAsync(
				key,
				typeof value === 'string' ? value : value === null ? null : JSON.stringify(value)
			)
		},
		[key]
	)

	return [state, setValue]
}
