import { IMod } from '@/shared/api/curse-forge'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { attach, createEffect, createEvent, createStore, merge, split } from 'effector'

export const addModToCart = createEvent<[string, IMod]>()
export const removeModFromCart = createEvent<[string, number]>()
export const clearModsCart = createEvent<string>()

export const $modsCart = createStore<Map<string, IMod[]>>(new Map<string, IMod[]>())
	.on(addModToCart, (state, [serverHash, mod]) =>
		state.set(serverHash, [...(state.get(serverHash) ?? []), mod])
	)
	.on(removeModFromCart, (state, [serverHash, modId]) =>
		state.set(
			serverHash,
			state.get(serverHash)!.filter((m) => m.id !== modId)
		)
	)
	.on(clearModsCart, (state, serverHash) => state.set(serverHash, []))

// const getModsFromStorageFx = createEffect<string, [string, IMod[]]>(async (serverHash: string) => {
// 	try {
// 		const value = await AsyncStorage.getItem(serverHash)
// 		return [serverHash, value !== null ? (JSON.parse(value) as IMod[]) : []]
// 	} catch (e) {
// 		console.log(e)
// 		return [serverHash, []]
// 	}
// })

const updateModsInStorageFx = attach({
	source: $modsCart,
	async effect(cart, [serverHash, payload]: [string, IMod | number]) {
		try {
			const mods = cart.get(serverHash) || []
			await AsyncStorage.setItem(
				serverHash,
				JSON.stringify(
					typeof payload === 'number' ? mods.filter((m) => m.id !== payload) : [...mods, payload]
				)
			)
		} catch (e) {
			console.log(e)
		}
	},
})

const clearModsInStorageFx = createEffect(async (serverHash: string) => {
	try {
		await AsyncStorage.setItem(serverHash, JSON.stringify([]))
	} catch (e) {
		console.log(e)
	}
})

split({
	source: merge([addModToCart, removeModFromCart, clearModsCart]),
	match: {
		clear: (payload) => !Array.isArray(payload),
		remove: (payload) => typeof payload[1] === 'number',
	},
	cases: {
		clear: clearModsInStorageFx,
		remove: updateModsInStorageFx,
		__: updateModsInStorageFx,
	},
})
